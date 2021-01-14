import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, map} from 'rxjs/operators';


const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};

const base_url = 'http://localhost:10022/wp-json/wp/v2/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
id: any;
//HTTP CLIENT é responsavel por fazer a ligação da nossa aplicação com a api rest sempre teremos que importar

//private base_url = 'https://reqres.in/api/users';
//private base_url = 'http://localhost:10022/wp-json/wp/v2/';
  constructor(private http:HttpClient) { }
  //condicao para varificar se o numero de paginacao vier zerado ele acrescenta 1
  // a api em questão permite paginação
 // getPosts(pagina: number) {
    //if (pagina <=0){
      //pagina = 1;
    //}
//usamos a crase pois ela pérmite chamar variaveis dentro de string
    //return this.http.get(`${this.base_url}?page=${pagina}`);
  //}

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
  getAPIData(): Observable<any> {
    return this.http.get(base_url, httpHeaders).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    );
  }

  private dataExtract(res: Response){
    const body = res;
    return body || {};
  }

}
