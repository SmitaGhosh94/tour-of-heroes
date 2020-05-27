import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    //configures with routes, uses forRoot bc it's configured at app root level
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
