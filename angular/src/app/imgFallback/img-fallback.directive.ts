import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[imgFallback]'
})
export class ImgFallbackDirective {
  @HostListener('error') setPlaceholder () {
    this.el.nativeElement.src = '/assets/img/placeholder-image.png';
  }

  constructor(private el: ElementRef) {}

}
