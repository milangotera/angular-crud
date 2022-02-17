/**
 * 
 * @fileoverview AppModule
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';

import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
