import { Component,OnInit } from '@angular/core';

import { Pastry } from '../pastry';
import { PastryService } from '../pastry.service';


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

  constructor(private service:PastryService){

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
}
