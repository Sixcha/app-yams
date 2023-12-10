import { Component,OnInit } from '@angular/core';

import { Pastry } from '../pastry';
import { PastryService } from '../pastry.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.css']
})
export class PastriesComponent implements OnInit {

  
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastry[]
  selectedPastry:string
  searchedPastries: Pastry[]

  
  loggedIn:boolean=false
  email:string
  password:string

  constructor(private service:PastryService, private auth:AuthService, private router: Router){

  }

  ngOnInit(): void {
      this.pastries=this.service.getPastries()
  }

  onSelect(pastry:Pastry){
    this.selectedPastry= pastry.id
  }

  setPastries(text:string){
    this.pastries=this.service.getSearchedPastry(text)
  }

  logIn(email:string, password:string){
    this.loggedIn=this.auth.auth(email,password)
    if (this.loggedIn) {
      this.router.navigate(['/dashboard']);
  }
}

  logOut(){
    this.auth.logout()
    this.loggedIn=false
  }
}
