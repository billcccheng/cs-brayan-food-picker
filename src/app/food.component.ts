import { Component, OnInit } from '@angular/core';
import { FOODS } from './mock-foods'; 

@Component({
    selector: 'my-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
    foods = FOODS;
    constructor() { }

    ngOnInit() { }
}



