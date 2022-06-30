import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IFood} from "../model/IFood";
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root',
})
export class FoodsService {
	//IFood EndPoint
	basePath = 'http://localhost:8080/api/nutritional-plan';

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

	getAll() {
		return this.http
			.get(this.basePath);

	}
	getAllById(id:any): Observable<IFood[]> {
		return this.http
			.get<IFood[]>(`${this.basePath}?id=${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError))
	}

	//Delete IFood
	delete(id: any) {
		return this.http
			.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}

	//Update IFood
	update(id: any, item: any): Observable<IFood> {
		return this.http
			.put<IFood>(
				`${this.basePath}/${id}`,
				JSON.stringify(item),
				this.httpOptions
			)
			.pipe(retry(2), catchError(this.handleError));
	}

	//create IFood
	create(item: any): Observable<IFood> {
		return this.http
			.post<IFood>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}
}
