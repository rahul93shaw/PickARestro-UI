import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {}
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = AppService.isLoggedIn;
  }
  ngAfterViewInit(): void {
    this.isLoggedIn = AppService.isLoggedIn;
  }
  title = 'PickARestro-UI';
}
