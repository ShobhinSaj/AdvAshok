import { CommonModule, ViewportScroller,DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActionControlDirective } from './directives/action-control.directive';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule,ActionControlDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'AdvAshok';
  isVisible:boolean= false; 
  showScrollToTop = false;
  constructor(private scroll: ViewportScroller){}
  
 
  @HostListener('window:scroll')
    onScroll(): void {
        // Detect scrolling
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        this.showScrollToTop = scrollY > 0; // Show when scrolled down
    }
  public mobileMenu(){
    this.isVisible = !this.isVisible;
  } 
  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }
  // disclaimerCntrl(){
  //   if (localStorage.getItem('visitedBefore')) {
  //     // First visit: Show the disclaimer
  //     localStorage.setItem('visitedBefore', 'true');
  //     this.showDisclaimer = true;
  //   }
  // }
}
