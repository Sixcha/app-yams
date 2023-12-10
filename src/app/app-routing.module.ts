import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from './guard.service';
import { PastriesComponent } from './pastries/pastries.component';

const routes: Routes = [
  
    {
        path: 'pastries',
        component: PastriesComponent
    },
    {
        path: '',
        redirectTo: '/pastries',
        pathMatch: 'full'
    },
    { 
      path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [GuardService] 
    },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
