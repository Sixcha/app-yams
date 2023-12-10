import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {
  @Input() current: number = 1;
  @Input() itemsPerPage: number = 2;
  @Input() totalItems: number = 0; 
  @Output() pageChanged = new EventEmitter<number>();

  get total(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.total }, (_, index) => index + 1);
  }

  changePage(item: number) {
    if (item >= 1 && item <= this.total) {
      this.pageChanged.emit(item);
    }
  }
}