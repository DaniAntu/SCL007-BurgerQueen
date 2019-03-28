import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WaiterComponent } from './waiter/waiter.component';
import { ChefComponent } from './chef/chef.component';
import { OrderComponent } from './order/order.component';
import { ComandaComponent } from './comanda/comanda.component';
import { FooterComponent } from './footer/footer.component';
import { StatusComponent } from './status/status.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WaiterComponent,
    ChefComponent,
    OrderComponent,
    ComandaComponent,
    FooterComponent,
    StatusComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class PizzaPartyAppModule {}
