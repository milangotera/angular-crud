/**
 * 
 * @fileoverview NewComponent
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

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

    message: string = '';

    constructor(
        public api: ApiService,
        private router: Router
    ) { }

  ngOnInit(): void {
  }

    createdEmployee() {
        this.error = {
            name: null,
            age: null,
            date: null,
            position: null,
        };
        this.message = '';
        this.api.createdEmployee(this.employee).subscribe( (success: any) => {
            this.router.navigate(['/']);
        }, (danger: any) => {
            this.error = danger.error.errors;
            this.message = danger.error.message;
        });
    }

}
