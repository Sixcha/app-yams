import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input('appBorderCard') borderColor: string

  constructor(private el: ElementRef) {
    this.setBorder("#f5f5f5")
  }

  setBorder(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }

  @HostListener('click') onClick() {
    this.setBorder(this.borderColor)
  }
}
