import { Component, HostListener, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public screenWidth: any;  
  public screenHeight: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit() {  
    if (isPlatformBrowser(this.platformId)) {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;  
    }
  }  
  
@HostListener('window:resize', ['$event'])  
onResize(event) {  
  if (isPlatformBrowser(this.platformId)) {
  this.screenWidth = window.innerWidth;  
  this.screenHeight = window.innerHeight;  
  }
}  
}
