import { Injectable } from '@angular/core';
import { users } from './users';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Auth: boolean;
  private user: string

  constructor(private router: Router){}

  auth(email: string, password: string): boolean {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email===email){
        if (users[i].password===password) {
          this.Auth = true;
          this.user=email
          //this.router.navigate(['/dashboard']);
          return this.Auth;
        }
        else{
          console.log("Wrong Password!")
          return false
        }
      }
      else{
        console.log("Unidentified Email")
        return false
      }
    }
    
    return false
  }

  logout(): void {
    this.Auth = false;
  }

  isAuth(): boolean {
    console.log(this.Auth)
    return this.Auth;
  }
}