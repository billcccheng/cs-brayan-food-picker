import { Injectable } from '@angular/core';

import { Food } from './food';
import { FOODS } from './mock-foods';

@Injectable()
export class FoodService {
    getFoods(): Promise<Food[]> {
        return Promise.resolve(FOODS);
    }
    getFood(id: number): Promise<Food> {
        return this.getFoods()
                   .then(foods => foods.find(food => food.id === id));
    }
}

