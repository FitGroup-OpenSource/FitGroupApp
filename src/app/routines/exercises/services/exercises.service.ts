import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IExercise} from "../model/IExercise";
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root',
})
export class ExercisesServices {
	//IExercise EndPoint
	basePath = 'https://my-json-server.typicode.com/FitGroup-OpenSource/fitgroupdb/exercises';

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

	getAll(): Observable<IExercise[]> {
		return this.http
			.get<IExercise[]>(this.basePath, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));

	}
	getAllById(id:any): Observable<IExercise[]> {
		return this.http
			.get<IExercise[]>(`${this.basePath}?id=${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError))
	}

	//Delete IExercise
	delete(id: any) {
		return this.http
			.delete(`${this.basePath}/${id}`, this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}

	//Update IExercise
	update(id: any, item: any): Observable<IExercise> {
		return this.http
			.put<IExercise>(
				`${this.basePath}/${id}`,
				JSON.stringify(item),
				this.httpOptions
			)
			.pipe(retry(2), catchError(this.handleError));
	}

	//create IExercise
	create(item: any): Observable<IExercise> {
		return this.http
			.post<IExercise>(this.basePath, JSON.stringify(item), this.httpOptions)
			.pipe(retry(2), catchError(this.handleError));
	}
}
