import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { LoginDto } from '../models/login';
import { PickARestroUtil } from '../models/PickARestroUtil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private appService: AppService, private router: Router) {}
  loginDto: any;

  ngOnInit(): void {
    this.loginDto = new LoginDto();
  }



  
  login() {
    console.log(this.loginDto.name);
    console.log(this.loginDto.username);
    console.log(this.loginDto.password);
    if(PickARestroUtil.isNullOrUndefined(this.loginDto.name) ||
    PickARestroUtil.isNullOrUndefined(this.loginDto.username) ||
    PickARestroUtil.isNullOrUndefined(this.loginDto.password)) {
      alert("Please enter all fields");
    } else {
      this.appService.userLogin(this.loginDto).subscribe(
        (data) => {
          console.log("data:: ", data);
          let status = data.status;
          console.log("status:: ", status);
          if(status === "failure") {
            alert(data.message);
            AppService.loggedInUser = null;
          } else {
            if(!PickARestroUtil.isNullOrUndefined(data.body.username)) {
              this.router.navigate(['./home', {username : data.body.username}]);
            }
          }
        }
      )
    }
  }
}
