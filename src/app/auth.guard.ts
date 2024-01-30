import { CanActivateFn } from '@angular/router';
import {inject } from '@angular/core';
import { SellerService } from './services/seller.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("manager")) {
    return true;
  }
  return inject(SellerService).isManagerLoggedIn;
}