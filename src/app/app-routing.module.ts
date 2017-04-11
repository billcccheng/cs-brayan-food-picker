import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent }        from './food/food.component';
import { FoodDetailComponent }  from './food-detail/food-detail.component';
import { HomeComponent }        from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: 'dashboard',    component: DashboardComponent },
    //{ path: 'detail/:id', component: FoodDetailComponent },
    { path: 'home',   component: HomeComponent },
    { path: 'foods',  component: FoodComponent },
    { path: '**',     component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}


