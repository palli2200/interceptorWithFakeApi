import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    // Your logic here
    return true; // or false, based on your implementation
  }
}
