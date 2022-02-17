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
import { ApiService } from './services/api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    employees: Employee[];

    constructor(
        private api: ApiService
    ) { }

    ngOnInit(): void {
        this.loadEmployees();
    }

    loadEmployees() {
        return this.api.getEmployees().subscribe((response: any) => {
            this.employees = response.employees;
        });
    }

}