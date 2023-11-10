import { Injectable } from '@angular/core';
import { Pastry } from './pastry';
import { PASTRIES, INGREDIENTS_LISTS } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})
export class PastryService {

  constructor() { }

  getPastries(){
    return PASTRIES.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }

  getPastry(id:string):Pastry{
    return PASTRIES.find(i => i.id === id)!
  }

  getPastryIngredientsList(id:string){
    return INGREDIENTS_LISTS.find(i => i.id === id)!.list
  }

  getSearchedPastry(searchedName: string){
    return PASTRIES.filter(i => i.name.toLowerCase().includes(searchedName.toLowerCase()))
  }

  // count(){
  //   const key = "name"
  //   let test = PASTRIES.map(i => [i[key], i]).values()
  //   console.log(test)
  // }
}
