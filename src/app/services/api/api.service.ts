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
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })
    }

    getEmployees(): Observable<Employee> {
        return this.http.get<Employee>(this.apiURL + '/employees')
            .pipe(
                retry(1),
                catchError(this.handleError)
        )
    }

    createdEmployee(employee: any): Observable<Employee> {
        return this.http.post<Employee>(this.apiURL + '/employees', employee)
            .pipe(
                retry(1),
                catchError(this.handleError)
        )
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(this.apiURL + '/employees/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
        )
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(this.apiURL + '/employees/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
        )
    }

    handleError(error: any) {
        return throwError({ error: error.error, status: error.status });
    }

}
