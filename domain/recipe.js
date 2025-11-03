export class Recipe {
  constructor(name, ingredients = []) {
    this.name = name;
    this.ingredients = ingredients;
  }

  getName() {
    return this.name;
  }

  getIngredients() {
    return this.ingredients;
  }

  toString() {
    return `${this.name} - Ingredientes: ${this.ingredients.join(", ")}`;
  }
}
