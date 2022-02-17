/**
 * 
 * @fileoverview EditComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    id: number = 0;

    employee: any = {
        id: null,
        name: null,
        age: null,
        date: null,
        position: null,
    };

    error: any = {
        id: null,
        name: null,
        age: null,
        date: null,
        position: null,
    };

    message: string = '';

    constructor(
        public api: ApiService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getEmployee();
        });
    }

    getEmployee() {
        this.api.getEmployee(this.id).subscribe( (success: any) => {
            this.employee = success.employee;
        }, (danger: any) => {
            //this.message = danger.error.message;
            this.router.navigate(['/']);
        });
    }

    updateEmployee() {
        this.error = {
            name: null,
            age: null,
            date: null,
            position: null,
        };
        this.message = '';
        this.api.updateEmployee(this.employee).subscribe( (success: any) => {
            this.router.navigate(['/']);
        }, (danger: any) => {
            this.error = danger.error.errors;
            this.message = danger.error.message;
        });
    }

}
