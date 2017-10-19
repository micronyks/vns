import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //as soon as excecution comes here we have to open a popup
    
      return true;
    
  }

  
}
