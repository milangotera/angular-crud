/**
 * 
 * @fileoverview ShowComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    employee: any = {
        name: null,
        age: null,
        date: null,
        position: null,
    };

    error: any = {
        name: null,
        age: null,
        date: null,
        position: null,
    };

    id: number = 1;

    message: string = '';

    constructor(
        public api: ApiService,
    ) { }

    ngOnInit(): void {
        this.getEmployee();
    }

    getEmployee() {
        this.api.getEmployee(this.id).subscribe( (success: any) => {
            this.employee = success.employee;
        }, (danger: any) => {
            this.message = danger.error.message;
        });
    }

}
