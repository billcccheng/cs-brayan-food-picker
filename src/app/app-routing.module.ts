import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent }        from './food.component';
import { FoodDetailComponent }  from './food-detail.component';
import { HomeComponent }        from './home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent },
  //{ path: 'detail/:id', component: FoodDetailComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'foods',     component: FoodComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


