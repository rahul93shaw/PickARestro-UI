import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  static isLoggedIn: boolean = false;
  static loggedInUser: any = null;
  
  baseUrl: string = "http://localhost:8080/pickarestro";

  constructor(private http: HttpClient) { }
  
  userLogin(loginDto: any) {
    return this.http.post<any>(this.baseUrl + "/login/", loginDto);
  }
  createSession(sessionDto: any) {
    return this.http.post<any>(this.baseUrl + "/main/createSession", sessionDto);
  }
  retrieveActiveSessions(username: any) {
    return this.http.get<any>(this.baseUrl + "/main/activeSessionByUser?username="+username);
  }
}
