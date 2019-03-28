import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WaiterComponent } from './waiter/waiter.component';
import { ChefComponent } from './chef/chef.component';
import { OrderComponent } from './order/order.component';
import { ComandaComponent } from './comanda/comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WaiterComponent,
    ChefComponent,
    OrderComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
