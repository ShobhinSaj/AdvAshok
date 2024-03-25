import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
 

  constructor(){
    
  }
  
  
  
  public mobileMenu(){
    this.isVisible = !this.isVisible;
  } 

}
