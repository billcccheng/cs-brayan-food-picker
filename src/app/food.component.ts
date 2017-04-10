import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


import { FoodService } from './food.service';
import { FOODS }       from './mock-foods'; 
import { Food }        from './food';

@Component({
    selector: 'my-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
    foods: Food[];
    selectedFood: Food;

    constructor(
        private foodService: FoodService,
        private router: Router
    ) {};

    ngOnInit(): void {
        this.getFoods();
    }

    onSelect(food: Food): void {
        this.selectedFood = food;
        let googleMap = this.getGoogleMap(this.selectedFood.address);
        this.selectedFood.address = googleMap;
    }
    
    getGoogleMap(address: string): string {
        let googleQuery = "http://maps.google.com/?q=";
        googleQuery = googleQuery + address;
        return googleQuery;
    }

    getFoods(): void {
        this.foodService.getFoods().then(foods => this.foods = foods);
    }

    gotoDetail(): void {
        //console.log(this.selectedFood.id);
        this.router.navigate(['/detail', this.selectedFood.id]);
    }
    
    selectRandomFood(): void {
        let id = this.getRandom();
        this.selectedFood = FOODS[id-1];
        //this.router.navigate(['/detail', id]);
    }

    getRandom(): number {
        let min = 1;
        let max = Math.floor(this.foods.length);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}



