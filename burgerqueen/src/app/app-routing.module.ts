import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WaiterComponent } from './waiter/waiter.component';
import { ChefComponent } from './chef/chef.component';
import { StatusComponent } from './status/status.component';
import { ComandaComponent } from './comanda/comanda.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'status', component: StatusComponent },
  { path: 'comanda', component: ComandaComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'lunch', component: LunchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
