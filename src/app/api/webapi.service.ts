import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private http: HttpClient) { }
  urlmain:string  = 'http://staging2.hpgamechanger.in/api/abc/';
  httpHeader1 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
   ,'Access-Control-Allow-origin':'true'
    })
  };

  Registration(data): Observable<any> {
    debugger;
    console.log(data);
    return this.http.post(this.urlmain+'Registration',data, this.httpHeader1)
      .pipe(
        catchError(this.handleError('Registration'))
      );
  }
  test(firstname,lastname): Observable<any> {
    return this.http.get(this.urlmain+'xyz2/'+firstname+'/'+lastname, this.httpHeader1)
      .pipe(
        catchError(this.handleError('Registration'))
      );
  }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`); 
        return of(result as T); 
      }; 
  
}

}
