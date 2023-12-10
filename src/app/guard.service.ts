import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(this.authService.isAuth())
    if (!this.authService.isAuth()) {
      this.router.navigate(['/pastries']);
      return false;
    }
    else{
      //this.router.navigate(['/dashboard']);
    return true;
      
    }
  }

}
