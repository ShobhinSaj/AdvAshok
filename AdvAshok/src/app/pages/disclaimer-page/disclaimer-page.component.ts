import { Component} from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-disclaimer-page',
  standalone: true,
  imports: [],
  templateUrl: './disclaimer-page.component.html',
  styleUrl: './disclaimer-page.component.scss'
})
export class DisclaimerPageComponent {

constructor(private router: Router){}
handleAgree(): void {
  this.router.navigate(['/home']);
}
handleDisagree(): void {
  console.log("DisAgree clicked");
  window.location.href = 'https://www.google.com';
}
}
