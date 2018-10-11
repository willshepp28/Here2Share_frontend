import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/api/v1";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



// Signup User
signupUser(user){
  return this.http.post<any>(this.url + "/signup", user);
}


// login User
loginUser(user){
  return this.http.post<any>(this.url + "/login", user)
}

// logout User
logoutUser(){}


// returns true if user is logged in
loggedIn(){
  return !!localStorage.getItem('token');
}


}
