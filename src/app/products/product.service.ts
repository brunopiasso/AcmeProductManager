import { IProduct } from './product';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json'; //fake url to the json object. Just change it to an url.

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
           tap(data => console.log('All: ' + JSON.stringify(data))),
           catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct[]> {

  }

  private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging in to the console
    let errorMessage = '';

    if(err.error instanceof ErrorEvent) {
      // A client-side or network occured. Handle it accordingly
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
