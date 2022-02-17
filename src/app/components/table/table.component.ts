/**
 * 
 * @fileoverview TableComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() employees: Employee[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.employees);
  }

}
