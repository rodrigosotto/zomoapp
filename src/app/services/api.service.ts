import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';


const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};

// tslint:disable-next-line: variable-name
const base_url = 'http://localhost:10022/wp-json/wp/v2/posts';
// tslint:disable-next-line: variable-name
const essences_url = 'http://localhost:10022/wp-json/wp/v2/essencias';
// tslint:disable-next-line: variable-name
const categories_url = 'http://localhost:10022/wp-json/wp/v2/categoria_das_essencias';
// tslint:disable-next-line: variable-name
const single_category = 'http://localhost:10022/wp-json/wp/v2/essencias?categoria_das_essencias';
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
id: any;
category: any;
categoryID: any;

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

  //ESSENCES API DATA
  getAPIDataEssences(): Observable<any> {
    return this.http.get(essences_url, httpHeaders).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    );
  }

  getAPIDataEssencesByID(id): Observable<any> {
    return this.http.get(essences_url + '/' + id, httpHeaders).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    );
  }
  //CATEGORIES API DATA
        getAPIDataAllCategories(): Observable<any> {
          return this.http.get(categories_url, httpHeaders).pipe(
            map(this.dataExtract),
            catchError(this.errorHandle)
          );
        }

        getAPIDataAllCategoriesByID(id): Observable<any> {
          return this.http.get(categories_url + '/' + id, httpHeaders).pipe(
            map(this.dataExtract),
            catchError(this.errorHandle)
          );
        }

        //SINGLE DATA CATEGORY
        getAPIDataSingleCategories(): Observable<any> {
          return this.http.get(single_category, httpHeaders).pipe(
            map(this.dataExtract),
            catchError(this.errorHandle)
          );
        }
        getAPIDataSingleCategoryById(categoryID): Observable<any> {
          return this.http.get(single_category + '=' + categoryID, httpHeaders).pipe(
            map(this.dataExtract),
            catchError(this.errorHandle)
          );
        }

}
