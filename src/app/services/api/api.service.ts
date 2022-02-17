/**
 * 
 * @fileoverview ApiService
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../models/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    apiURL = 'http://localhost:8000';

    constructor(
        private http: HttpClient
    ) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getEmployees(): Observable<Employee> {
        return this.http.get<Employee>(this.apiURL + '/employees')
            .pipe(
                retry(1),
                catchError(this.handleError)
        )
    }

    handleError(error: any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
