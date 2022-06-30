import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //IUser EndPoint
  basePath = 'https://fit-fitgroup.herokuapp.com/api/v1/users/auth';

  //Http
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  loginUser(request: any) {
    return this.http.post(`${this.basePath}/sign-in`,request);
  }
  registerUser(request: any) {
    return this.http.post(`${this.basePath}/sign-up`,request);
  }


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

  //create IRoutine
  create(item: any): Observable<IUser> {
    return this.http
      .post<IUser>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.basePath,this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  getByEmail(email:string): Observable<IUser[]>{
    return this.http
      .get<IUser[]>(`${this.basePath}?email=${email}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

}
