/**
 * 
 * @fileoverview AppComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Milan Gotera',
      position: 'Papá',
      age: 34,
      date: '31-10-1989'
    },
    {
      id: 2,
      name: 'Thiago Gotera',
      position: 'Hijo',
      age: 2,
      date: '09-05-2019'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}