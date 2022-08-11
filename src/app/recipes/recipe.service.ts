import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tteokbokki',
            'Korean dish',
            'https://chefatulya.com/wp-content/uploads/2021/07/tteokbokki_1-copy.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Burger',
            'Whopper',
            'https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}