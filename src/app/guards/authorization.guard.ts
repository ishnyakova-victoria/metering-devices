import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthorizationService } from '../providers/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._authorizationService.isLoggedIn) {
      this._router.navigate(['/authorization']);

      return false;
    }

    return true;
  }
  
}
