import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './business/menu/menu.component';
import { DivisaComponent } from './business/divisa/divisa.component';
import { DivisaService } from './services/divisa.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DivisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DivisaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
