import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'ion-content'
})
export class FullscreenContentDirective {
  constructor(el: ElementRef) {
    el.nativeElement.fullscreen = true;
  }
}
