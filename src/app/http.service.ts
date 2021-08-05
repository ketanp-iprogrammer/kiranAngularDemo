import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  public getDataFromServer() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
  }

  public login(objParams){
    return this.http.post('https://reqres.in/api/login',objParams)
  }

}
