import { Component, OnInit }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { Router }                 from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FoodService } from '../food.service';
import { FOODS }       from '../mock-foods'; 
import { Food }        from '../food';

@Component({
    selector: 'my-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
    foods: Food[];
    selectedFood: Food;
    private foodParams: any;
    private foodType: any;

    constructor(
        private foodService: FoodService,
        private router: Router,
        private location: Location,
        private route: ActivatedRoute
    ) {};

    ngOnInit(): void {
        this.foodType = [];
        this.route.params.subscribe(params => {
            this.foodParams = params;
        });
        Object.keys(this.foodParams).forEach(i => {
            this.foodType.push(this.foodParams[i])
        });
        this.getFoods();
    }

    getGoogleMap(): void {
        let googleQuery = "http://maps.google.com/?q=";
        googleQuery = googleQuery + this.selectedFood.address;
        this.selectedFood.address = googleQuery;
    }

    getFoods(): void {
        this.foodService.getFoods().then(foods => {
            if(this.foodType.length != 0){
                this.foods = foods.filter(obj => this.foodType.indexOf(obj.type) > -1);
            }else{
                console.log(foods);
                this.foods = foods;
            }
        });
    }

    getRandomFood(): Food{
        let min = 0;
        let max = Math.floor(this.foods.length) - 1;
        let index = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.foods[index];
    }

    goBack(): void {
        this.location.back();
    }

    gotoDetail(): void {
        //this.router.navigate(['/detail', this.selectedFood.id]);
    }
    
    onSelect(food: Food): void {
        this.selectedFood = food;
        this.getGoogleMap();
    }

    selectRandomFood(): void {
        //let id = this.getRandomFood();
        this.selectedFood = this.getRandomFood();
        this.getGoogleMap();
    }
}


