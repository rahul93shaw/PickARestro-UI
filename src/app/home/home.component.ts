import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { SessionDto } from '../models/SessionDto';
import { PickARestroUtil } from '../models/PickARestroUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: any;
  sessionDto: any;
  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.sessionDto = new SessionDto();
      this.sessionDto.host = params['username'];
      console.log(this.username); // Print the parameter to the console. 
  });
   }

  ngOnInit() {
    /*this.route.params
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.username = params['username'];
        console.log(this.username); // price
      }
    );
    this.sessionDto = new SessionDto();
    if(PickARestroUtil.isNullOrUndefined(this.username)) {
      this.sessionDto.host = this.route.snapshot.paramMap.get("username");
    }*/
  }

  createSession(){
    if(PickARestroUtil.isNullOrUndefined(this.sessionDto.sessionType)) {
      alert("Please enter session type");
    } else {
      this.appService.createSession(this.sessionDto).subscribe(
        (data) => {
          console.log("data:: ", data);
          let status = data.status;
          console.log("status:: ", status);
          if(status === "failure") {
            alert(data.message);
            //AppService.loggedInUser = null;
          } else {
            alert("Session is created")
          }
        }
      )
    }
  }

}
