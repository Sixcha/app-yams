import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastryDetailsComponent } from './pastry-details/pastry-details.component';
import { SearchComponent } from './search/search.component';
import { BorderCardDirective } from './border-card.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from './guard.service';
import { AppRoutingModule } from './app-routing.module';
import { PaginateComponent } from './paginate/paginate.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastryDetailsComponent,
    SearchComponent,
    BorderCardDirective,
    DashboardComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
