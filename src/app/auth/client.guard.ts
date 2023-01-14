import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(
    private login:LoginService, 
    private router:Router,
    @Inject(PLATFORM_ID) private platformId: any
    ){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (isPlatformBrowser(this.platformId)) {
        if (this.login.isLoggedIn() && this.login.getUserRole()=='NORMAL') {
          return true;
        }
        else if(this.login.isLoggedIn() && this.login.getUserRole()=='ADMIN'){
          return true;
        }
        this.router.navigate(['login'])
      }

    return false;
  }
}
