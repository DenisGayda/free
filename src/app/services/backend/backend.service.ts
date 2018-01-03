import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BackendService {
  constructor(protected http: HttpClient) {
  }

  public get<T>(url: string, options?: any): Observable<T> {
    const source = this.http.get<T>(url, options);

    return this.requestHandler<T>(source);
  }

  public post<T>(url: string, options?: any): Observable<T> {
    const source = this.http.post<T>(url, options.body, options);

    return this.requestHandler<T>(source);
  }

  public patch<T>(url: string, options?: any): Observable<T> {
    const source = this.http.patch<T>(url, options.body, options);

    return this.requestHandler<T>(source);
  }

  public put<T>(url: string, options?: any): Observable<T> {
    const source = this.http.put<T>(url, options.body, options);

    return this.requestHandler<T>(source);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    const source = this.http.delete<T>(url, options);

    return this.requestHandler<T>(source);
  }

  private requestHandler<T>(source: Observable<HttpEvent<T>>): Observable<T> {
    return source.catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);

    return Observable.throw(errorMessage);
  }
}
