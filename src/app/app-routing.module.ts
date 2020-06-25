import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  //colon indicates id is a placeholder for a hero id
  { path: 'heroes', component: HeroesComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    //configures with routes, uses forRoot bc it's configured at app root level
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
