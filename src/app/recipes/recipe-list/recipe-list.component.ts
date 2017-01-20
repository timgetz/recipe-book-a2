import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg',[]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--46004_11.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
