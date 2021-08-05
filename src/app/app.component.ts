import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private dataservice : DataService){
    this.dataservice.saveData = "hey I am from service";
  
    //  stroing data in service

    let arr = [1,2,3,4,5]
    this.dataservice.storeMessage(arr);
    // stroing data in behaviour subject here

  }

  // @ViewChild(HeaderComponent,{static : true}) child

  ngAfterViewInit(){
    // console.log("child value is",this.child.childValue);
    
  }

  title = 'mutthuAngular';

  parentVal = "hey I am from parent"

}
