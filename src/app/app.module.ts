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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';

import { ApiService } from './services/api/api.service';

import { NgbdSortableHeader } from './directives/sortable.directive';

import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    NgbdSortableHeader,
    EditComponent,
    NewComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
