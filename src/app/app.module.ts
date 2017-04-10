import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }        from './app.component';
import { FoodComponent }       from './food.component';
import { FoodDetailComponent } from './food-detail.component';
import { FoodService }         from './food.service';
import { AppRoutingModule }    from './app-routing.module';
import { HomeComponent }       from './home.component';
import { NgbModule }           from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
      AppComponent,
      FoodComponent,
      FoodDetailComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
