import { Component } from '@angular/core';
import { SliderComponentComponent } from '../../components/slider-component/slider-component.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SliderComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss','../../../styles.scss']
})
export class HomePageComponent {
  disclaimerAcknowledged: boolean = false;
  constructor(private router: Router){}
  OpenContact(){
    this.router.navigate(['/contact']);
  }
  OpenServices(){
    this.router.navigate(['/services']);
  }
}

