import { Recipe } from "./domain/recipe.js";
import { RecipeBook } from "./domain/recipe_book.js";

const myRecipeBook = new RecipeBook();

const recipeForm = document.getElementById("recipe-form");
const btnAdd = document.getElementById("btn-add");
const inpName = document.getElementById("inp-name");
const inpIngredients = document.getElementById("inp-ingredients");
const selDifficulty = document.getElementById("sel-difficulty");
const inpTotalByDifficulty = document.getElementById("inp-total-by-difficulty");
const addErrorContainer = document.getElementById("add-error-container");
const addErrorMsg = document.getElementById("add-error-msg");

// Se normaliza una dificultad a claves sin tildes para agrupar y mostrar
function normalizeDifficulty(difficulty) {
  if (!difficulty || typeof difficulty !== "string") return "";
  return difficulty
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, ""); // "fácil" -> "facil"
}

// Manejo del evento para agregar receta (similar al ejemplo de referencia)
recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const name = inpName.value?.trim();
    const ingredients = (inpIngredients.value || "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    const difficulty = selDifficulty.value;

    // Crear instancia de dominio y agregar al recetario
    const newRecipe = new Recipe(name, ingredients, difficulty);
    myRecipeBook.addRecipe(newRecipe);

    // Limpiar y actualizar UI
    clearInputs();
    addErrorContainer.classList.add("d-none");
    updateRecipeLists();
    updateTotalByDifficulty();
  } catch (error) {
    // Mostrar errores de validación provenientes del dominio (por ejemplo setDifficulty)
    addErrorContainer.classList.remove("d-none");
    addErrorMsg.innerText = String(error);
  }
});

function clearInputs() {
  inpName.value = "";
  inpIngredients.value = "";
  selDifficulty.value = "";
}

function updateTotalByDifficulty() {
  try {
    const counts = myRecipeBook.countByDifficulty();
    // Aceptar claves con y sin tilde, por si los alumnos normalizan diferente
    const totalFacil = counts.facil ?? counts["fácil"] ?? 0;
    const totalMedia = counts.media ?? 0;
    const totalDificil = counts.dificil ?? counts["difícil"] ?? 0;
    inpTotalByDifficulty.value = `Fácil: ${totalFacil}, Media: ${totalMedia}, Difícil: ${totalDificil}`;
  } catch (_) {
    // Si la función aún no está implementada (lanza TODO), dejar vacío
    inpTotalByDifficulty.value = "";
  }
}

function updateRecipeLists() {
  // Limpiar contenedores
  const containers = [
    { empty: "empty-facil-list", wrap: "facil-list-container", list: "facil-list" },
    { empty: "empty-media-list", wrap: "media-list-container", list: "media-list" },
    { empty: "empty-dificil-list", wrap: "dificil-list-container", list: "dificil-list" },
  ];
  containers.forEach(({ empty, wrap, list }) => {
    document.getElementById(empty).classList.remove("d-none");
    document.getElementById(wrap).classList.add("d-none");
    const listEl = document.getElementById(list);
    while (listEl.firstChild) listEl.removeChild(listEl.firstChild);
  });

  const recipes = myRecipeBook.getAll();
  recipes.forEach((recipe) => {
    const normalized = normalizeDifficulty(safeGetDifficulty(recipe));
    const card = createRecipeCard(recipe);
    switch (normalized) {
      case "facil":
        showAndAppend("empty-facil-list", "facil-list-container", "facil-list", card);
        break;
      case "media":
        showAndAppend("empty-media-list", "media-list-container", "media-list", card);
        break;
      case "dificil":
        showAndAppend("empty-dificil-list", "dificil-list-container", "dificil-list", card);
        break;
      default:
        // Si la dificultad aún no está disponible, no renderizamos
        break;
    }
  });
}

function showAndAppend(emptyId, wrapId, listId, node) {
  const empty = document.getElementById(emptyId);
  const wrap = document.getElementById(wrapId);
  const list = document.getElementById(listId);
  empty.classList.add("d-none");
  wrap.classList.remove("d-none");
  list.appendChild(node);
}

// Extra: si getDifficulty() todavía no está implementado (lanza error), devolver cadena vacía
function safeGetDifficulty(recipe) {
  try {
    return recipe.getDifficulty();
  } catch (_) {
    return "";
  }
}

function createRecipeCard(recipe) {
  const cardCol = document.createElement("div");
  cardCol.className = "col";

  const card = document.createElement("div");
  card.className = "card recipe-card h-100";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = recipe.getName();

  const ing = document.createElement("p");
  ing.className = "card-text";
  const ingredients = recipe.getIngredients?.() || [];
  ing.innerText = `Ingredientes: ${ingredients.join(", ")}`;

  const diff = document.createElement("span");
  const d = normalizeDifficulty(safeGetDifficulty(recipe));
  diff.className = `recipe-difficulty ${d}`;
  diff.innerText = d ? `Dificultad: ${d === "facil" ? "fácil" : d === "media" ? "media" : d === "dificil" ? "difícil" : d}` : "";

  cardBody.appendChild(title);
  cardBody.appendChild(ing);
  cardBody.appendChild(diff);
  card.appendChild(cardBody);
  cardCol.appendChild(card);
  return cardCol;
}

// Estado inicial
updateTotalByDifficulty();
updateRecipeLists();
