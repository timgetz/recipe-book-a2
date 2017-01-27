import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  private   recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg',[
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--46004_11.jpg',[])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
