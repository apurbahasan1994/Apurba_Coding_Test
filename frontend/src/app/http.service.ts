import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  GetWelcomeMessage():Observable<any>
  {
    return this.http.get<any>('http://localhost:3000/codingtest');
  }
  PostUserInput(payload:any):Observable<any>
  {
    return this.http.put<any>('http://localhost:3000/insertdata',payload);
  }
}
