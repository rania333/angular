import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCardDir]'
})
export class ProductCardDirDirective {

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.borderRadius = '0px';
    this.elemRef.nativeElement.style.boxShadow = '0px 0px gray';

  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.borderRadius = '30px';
    this.elemRef.nativeElement.style.boxShadow = '5px 2px gray';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.borderRadius = '0px';
    this.elemRef.nativeElement.style.boxShadow = '0px 0px gray';

  }
}
