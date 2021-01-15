import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';


const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};

const base_url = 'http://localhost:10022/wp-json/wp/v2/posts';
//const url_essencias = 'http://localhost:10022/wp-json/wp/v2/essencias';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
id: any;
  constructor(private http:HttpClient) { }

  private errorHandle(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('Error Message: ', error.message);
    } else {
      console.error(
        `Error Status: ${error.status}` + `Body: ${error.error}`
      );
    }
    return throwError('Check code and server response from end point');
  }

  private dataExtract(res: Response){
    const body = res;
    return body || {};
  }
  getAPIData(): Observable<any> {
    return this.http.get(base_url, httpHeaders).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    );
  }

  getAPIDataByID(id): Observable<any> {
    return this.http.get(base_url + '/' + id, httpHeaders).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    );
  }

}
