import { Injectable } from '@angular/core';
import { Router, CanActivateChild, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}
  canActivateChild(): true | UrlTree {
    if (!this.auth.isAuthenticated) {
      return this.router.parseUrl('login');
    }
    return true;
  }
}
