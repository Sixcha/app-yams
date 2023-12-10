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
  finalPastries: Pastry[]

  
  loggedIn:boolean=false
  email:string
  password:string

  itemsPerPage = 2;
  current = 1;
  totalItems: number;

  constructor(private service:PastryService, private auth:AuthService, private router: Router){

  }

  ngOnInit(): void {
      this.pastries=this.service.getPastries()
    this.setFinalPastries()

  }

  onSelect(pastry:Pastry){
    this.selectedPastry= pastry.id
  }

  setPastries(text:string){
    this.pastries=this.service.getSearchedPastry(text)
    this.setFinalPastries()
  }

  setFinalPastries(){
    this.totalItems = this.pastries.length;
    const start = (this.current - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.finalPastries = this.pastries.slice(start, end);
  }

  onPageChange(page: number) {
    console.log(page)
    this.current = page;
    this.setFinalPastries()
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
