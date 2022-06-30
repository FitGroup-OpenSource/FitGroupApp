import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {IRoutine} from "../pages/model/IRoutine";
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root',
})
export class RoutinesServices {
	//IRoutine EndPoint
	basePath = 'https://fit-fitgroup.herokuapp.com/api/routines';

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

	getAll(): Observable<IRoutine> {
		return this.http
			.get<IRoutine>(this.basePath, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));

	}
	getAllById(): Observable<IRoutine> {
		return this.http
			.get<IRoutine>(this.basePath, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError))
	}

	//Delete IRoutine
	delete(id: any) {
		return this.http
			.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}

	//Update IRoutine
	update(id: any, item: any): Observable<IRoutine> {
		return this.http
			.put<IRoutine>(
				`${this.basePath}/${id}`,
				JSON.stringify(item),
				this.httpOptions
			)
			.pipe(retry(2), catchError(this.handleError));
	}

	//create IRoutine
	create(item: any): Observable<IRoutine> {
		return this.http
			.post<IRoutine>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}
}
