/**
 * 
 * @fileoverview TableComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee/employee.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    providers: [EmployeeService, DecimalPipe]
})
export class TableComponent implements OnInit {

    @Input() employees: Employee[] = [];

    employees$: Observable<Employee[]>;
    total$: Observable<number>;

    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

    constructor(
        public service: EmployeeService
    ) {
        this.service._reload();
        this.total$ = service.total$;
        this.employees$ = service.employees$;
    }

    ngOnInit(): void {
    }

    onSort({column, direction}: SortEvent) {
        
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        this.service.sortColumn    = column;
        this.service.sortDirection = direction;
    }

}
