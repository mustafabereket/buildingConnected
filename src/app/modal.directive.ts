import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
  modal = false;
  @HostBinding('style.display') display = 'none';
  @HostListener('click') openModal() {
    this.display = 'none !important';
  }
  constructor() { }

}
