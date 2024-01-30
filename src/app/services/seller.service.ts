import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, manager, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isManagerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  url:string = "http://localhost:8080/manager";
  
  managerSignUp(data:signUp) {
    console.warn(data);
    return this.http.post(this.url + "/signup", data, {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        console.warn("hello");
        this.isManagerLoggedIn.next(true);
        localStorage.setItem("manager",JSON.stringify(result.body));
        this.router.navigate(['manager-home']);
      }
    });
  }
  reloadManager(){
    if(localStorage.getItem("manager")){
      this.isManagerLoggedIn.next(true);
      this.router.navigate(['manager-home']);
    }
  }

  managerLogin(data:login){
    console.warn(data);
    return this.http.post(this.url +"/login", data, {observe:'response'}).subscribe((result)=>{
      if(result && result.status==200){
        this.isManagerLoggedIn.next(true);
        localStorage.setItem("manager",JSON.stringify(result.body));
        this.router.navigate([`manager-home/${data.teamName}`]);
        this.isLoginError.next(false);
      } else {
        console.warn('login failed');
        this.isLoginError.next(true);
      }
    })

  }
  getManager(){
    return this.http.get<manager[]>(this.url);
  }
  getManagerById(id: string) {
    return this.http.get<manager>(this.url +`/${id}`);
  }
}
