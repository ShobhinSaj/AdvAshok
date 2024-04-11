import { Component} from '@angular/core';
import { CommonModule} from '@angular/common';
import { SliderComponentComponent } from '../../components/slider-component/slider-component.component'
import { Router } from '@angular/router';
import { DisclaimerPageComponent } from '../disclaimer-page/disclaimer-page.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SliderComponentComponent,DisclaimerPageComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss','../../../styles.scss']
})
export class HomePageComponent{
  constructor(private router: Router){}
 
 
  OpenContact(){
    // this.router.navigate(['/contact #contact_info']);
    this.router.navigate(['/contact', { fragment: 'contact_info' }]);
  }
  OpenServices(){
    this.router.navigate(['/services']);
  }
}

