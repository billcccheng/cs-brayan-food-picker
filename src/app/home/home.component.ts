import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { FOODS }       from '../mock-foods'; 
import { Food }        from '../food';

@Component({
    selector: 'home',
    templateUrl:'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    foods: Food[];
    options: any;
    constructor(
        private router: Router,
        private foodService: FoodService,
    ) {}

    ngOnInit(): void {
        this.foodService.getFoods().then(foods => {
            this.foods = foods;
            this.getOptions();
        });
    }

    getOptions() {
        this.options = [];
        let foodType = [];

        this.foods.forEach(food => {
            if(foodType.indexOf(food.type) == -1 && food.type){
                foodType.push(food.type);
                let name = this.capitalizeFirstLetter(food.type);
                this.options.push({name:name, value:food.type, checked:false});
                this.options.sort(this.compare);
            }
        });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    onSelect() {
        this.router.navigate(['/foods', this.getSelectedOptions()]);
    }

    onSelectAll() {
      this.router.navigate(['/foods', this.options.map(opt => opt.value)]);
    }

    getSelectedOptions(): string[] { // right now: ['1','3']
        return this.options
                  .filter(opt => opt.checked)
                  .map(opt => opt.value);
    }
}


