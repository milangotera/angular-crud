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
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    id: number = 1;

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

}
