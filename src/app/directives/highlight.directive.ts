import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';


  constructor() { }
  @HostListener('mouseenter') onmouseenter() {
    this.backgroundColor = 'lightgrey';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = 'transparent';
  }
}
