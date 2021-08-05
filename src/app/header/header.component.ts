import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataservice : DataService){
   console.log("service vaue is",this.dataservice.saveData);

   this.dataservice.getMessage.subscribe(data => {
     console.log("beavhiour suevjct val is",data);
     
   })
   

  }
  title = 'mutthuAngular';

  @Input() childData;

  childValue = "Hey I am in header";

  isActive : boolean = true;

  showArr = ["Muthu","Ketan","Raj"];

  jsonArr = [
    {
      id : 1,
      name : "sunil"
    },
    {
      id : 2,
      name : "sunil"
    },
    {
      id : 3,
      name : "snil"
    }
  ]

  hideBtn(){
      this.isActive = false;

  }

}
