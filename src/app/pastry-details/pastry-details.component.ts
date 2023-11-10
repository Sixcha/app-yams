import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pastry } from '../pastry';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { PastryService } from '../pastry.service';


@Component({
  selector: 'app-pastry-details',
  templateUrl: './pastry-details.component.html',
  styleUrls: ['./pastry-details.component.css'],
  providers:  [ PastryService ]
})
export class PastryDetailsComponent implements OnChanges, OnInit {
  @Input() pastryId: string;
  ingredients:string[]
  pastry: Pastry

  constructor(private service: PastryService){
  }

  ngOnInit() {

}

  ngOnChanges(){
    // for (let i = 0; i < INGREDIENTS_LISTS.length; i++) {
    //   if(INGREDIENTS_LISTS[i].id===this.pastry.id){
    //     this.ingredients=INGREDIENTS_LISTS[i].list
    //     return
    //   }
    // }
    this.pastry = this.service.getPastry(this.pastryId)
    this.ingredients = this.service.getPastryIngredientsList(this.pastryId)
  }
}
