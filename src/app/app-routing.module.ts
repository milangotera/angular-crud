/**
 * 
 * @fileoverview AppRoutingModule
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'nuevo', component: NewComponent },
  { path: 'editar/:id', component: EditComponent },
  { path: 'mostrar/:id', component: ShowComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
