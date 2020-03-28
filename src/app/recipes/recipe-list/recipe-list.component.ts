import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simple test recipe', 'https://www.dinneratthezoo.com/wp-content/uploads/2015/08/grilled-chicken-breast-5.jpg.webp'),
    new Recipe('Test Recipe', 'This is simple test recipe', 'https://www.dinneratthezoo.com/wp-content/uploads/2015/08/grilled-chicken-breast-5.jpg.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
