import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl:'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(
        private router: Router,
    ) {}

    ngOnInit(): void {
        //this.route.params
            //.switchMap((params: Params) => this.heroService.getHero(+params['id']))
            //.subscribe(hero => this.hero = hero);
    }

    onSelect() {
        console.log(this.getSelectedOptions()); 
        this.router.navigate(['/foods', this.getSelectedOptions()]);
    }

    private options = [
        {name:'Chinese', value:'Chinese', checked:false},
        {name:'Korean', value:'Korean', checked:false},
        {name:'Japanese', value:'Japanese', checked:false},
        {name:'Vietnamese', value:'Vietnamese', checked:false},
        {name:'Italian', value:'Italian', checked:false},
        {name:'Fast Food', value:'Fast Food', checked:false},
    ]

    getSelectedOptions(): string[] { // right now: ['1','3']
        return this.options
                  .filter(opt => opt.checked)
                  .map(opt => opt.value)
    }
}


