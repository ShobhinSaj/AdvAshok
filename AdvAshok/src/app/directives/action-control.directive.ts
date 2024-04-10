import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appActionControl]',
  standalone: true
})
export class ActionControlDirective {
 
  constructor(private el: ElementRef) { }
  @HostListener('click', ['$event.target'])
  onClick(targetElement) {
    const navLinks = this.el.nativeElement.parentElement.querySelectorAll('#primary-navigation li a');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    targetElement.parentElement.classList.add('active');
  }
}
