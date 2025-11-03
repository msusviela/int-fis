export class Recipe {
  constructor(name, ingredients = [], difficulty = "fácil") {
    this.name = name;
    this.ingredients = ingredients;
  }

  getName() {
    return this.name;
  }

  getIngredients() {
    return this.ingredients;
  }

  getDifficulty() {
    // TODO: implementar getDifficulty()
    throw new Error("TODO: implementar getDifficulty()");
  }

  setDifficulty(value) {
    // TODO: validar que value sea "fácil", "media" o "difícil" y asignar
    // Sugerencia: normalizar tildes/mayúsculas si desea permitir variantes
    throw new Error("TODO: implementar setDifficulty(value)");
  }

  toString() {
    // TODO: incluir la dificultad en el string, por ejemplo:
    // "Nombre (dificultad) - Ingredientes: x, y, z"
    throw new Error("TODO: implementar toString()");
  }
}
