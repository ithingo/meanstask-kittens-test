import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Kitten } from '../models/kitten';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint: string = 'http://localhost:4000/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private errorHandler(error: any, caught?: Observable<{}>): any {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) { errorMsg = error.error.message; } // client-side error
    else { errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`; } // server-side error
    console.error(errorMsg);
    return new Error(errorMsg);
  }

  constructor(
    private http: HttpClient,
  ) { }

  public getAllKittens(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  public getKitten(id: String): Observable<any> {
    const url = `${this.endpoint}/get-kitten/${id}`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(
        map((res: Response) => res || {}),
        catchError(this.errorHandler)
      );
  }

  public addKitten(data: Kitten): Observable<any> {
    const url = `${this.endpoint}/add-kitten/`;
    return this.http
      .post(url, data, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  public updateKitten(id: String, data: Kitten): Observable<any> {
    const url = `${this.endpoint}/update-kitten/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  public removeKitten(id: String): Observable<any> {
    const url = `${this.endpoint}/delete-kitten/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.errorHandler));
  }
}
