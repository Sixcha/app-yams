import { Component,Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Pastry } from '../pastry';
import { PastryService } from '../pastry.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:PastryService){}

  @Output() searchString = new EventEmitter<string>();
  text:string =""
  results:Pastry[] =[]

  onSubmit(form:NgForm){
    console.log(form.value.word)
    this.results = this.service.getSearchedPastry(form.value.word)
  }
  onChange(text:string){
    this.searchString.emit(text)
  }
}
