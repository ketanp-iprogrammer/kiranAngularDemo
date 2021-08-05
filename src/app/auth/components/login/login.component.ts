import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpservice: HttpService) { }

  ngOnInit(): void {
  }


  navigate() {

    let obj = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    this.httpservice.login(obj).subscribe(data => {
      if(data){
        let tokenVal = data['token'];
        localStorage.setItem('token',tokenVal)
      }

    })

    // this.httpservice.getDataFromServer().subscribe(response => {
    //   console.log("server data is",response);

    // })

    this.router.navigate(['dashboard', 6])
  }

}
