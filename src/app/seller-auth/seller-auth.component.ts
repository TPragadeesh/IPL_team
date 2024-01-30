import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerService } from '../services/seller.service';
import { login, signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  
  showLogin:boolean = true;
  authError:string = "";

  constructor(private seller:SellerService){}
  
  ngOnInit():void {
    this.seller.reloadManager();
  }
  
  submitSignUpForm(item: signUp):void{
    console.warn(item);
    this.seller.managerSignUp(item);
  }
  submitLoginForm(item:login):void{
    console.warn(item);
    this.seller.managerLogin(item);
    this.seller.isLoginError.subscribe((isError) =>{
      if(isError){
        this.authError = "Team Name or password is incorrect";
      }
    })
  }

  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }

}
