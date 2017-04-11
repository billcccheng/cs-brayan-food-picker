import { Component, Input, OnInit }       from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Food } from '../food';
import { FoodService } from '../food.service';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'my-food-detail',
    templateUrl: 'food-detail.component.html'
    //styleUrls: ['./hero-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
    @Input() food: Food;
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.foodService.getFood(+params['id']))
            .subscribe(food => this.food = food);
    }

    goBack(): void {
        this.location.back();
    }

    constructor(
        private foodService: FoodService,
        private route: ActivatedRoute,
        private location: Location
    ){}
}

