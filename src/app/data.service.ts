import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public saveData;

  private user = new BehaviorSubject<string>('john');
  getMessage = this.user.asObservable();
  
  storeMessage(newUser:any){
    this.user.next(newUser); 
  }

 

}
