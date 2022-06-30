import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { INutricionalPlan} from "../model/INutricionalPlan";
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root',
})
export class NutritionalPlansService {
	//INutricionalPlan EndPoint
	basePath = 'https://my-json-server.typicode.com/FitGroup-OpenSource/fitgroupdb/nutricional_plan';

	//Http
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	constructor(private http: HttpClient) {}

	//Error
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.log(`An error occurred: ${error.error.message}`);
		} else {
			console.error(
				`Backend returned code ${error.status}, body was: ${error.error}`
			);
		}
		return throwError(
			() => new Error('Something happened with request, please try again later')
		);
	}

	getAll(): Observable<INutricionalPlan[]> {
		return this.http
			.get<INutricionalPlan[]>(this.basePath, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));

	}
	getAllById(id:any): Observable<INutricionalPlan[]> {
		return this.http
			.get<INutricionalPlan[]>(`${this.basePath}?id=${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError))
	}

	//Delete INutricionalPlan
	delete(id: any) {
		return this.http
			.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}

	//Update INutricionalPlan
	update(id: any, item: any): Observable<INutricionalPlan> {
		return this.http
			.put<INutricionalPlan>(
				`${this.basePath}/${id}`,
				JSON.stringify(item),
				this.httpOptions
			)
			.pipe(retry(2), catchError(this.handleError));
	}

	//create INutricionalPlan
	create(item: any): Observable<INutricionalPlan> {
		return this.http
			.post<INutricionalPlan>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}
}
