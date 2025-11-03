import { Recipe } from "./recipe.js";

export class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (!(recipe instanceof Recipe)) {
      throw new Error("Debe ser una instancia de Recipe");
    }
    this.recipes.push(recipe);
  }

  getAll() {
    return this.recipes;
  }

  countByDifficulty() {
    // TODO: implementar la función que cuente recetas por dificultad
    // Debe retornar un objeto con claves por dificultad y valores numéricos
    // Ejemplo: { facil: 3, media: 2, dificil: 1 }
    throw new Error("TODO: implementar countByDifficulty()");
  }
}
