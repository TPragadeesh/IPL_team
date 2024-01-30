import { Injectable } from '@angular/core';
import { signUp } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:8080/users";
  constructor(private http:HttpClient) { }

  userSignUp(user:signUp){

    console.warn(user);
    this.http.post(this.url, user, {observe: 'response'}).subscribe((result) => {
      console.warn(result);
      if(result){

      }
    });

  }
}
