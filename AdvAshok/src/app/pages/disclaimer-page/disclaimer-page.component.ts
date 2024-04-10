import { Component, Inject} from '@angular/core';
import { CommonModule,DOCUMENT  } from '@angular/common';



@Component({
  selector: 'app-disclaimer-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer-page.component.html',
  styleUrl: './disclaimer-page.component.scss'
})
export class DisclaimerPageComponent{
responseAgreed:boolean=false;
visitedBefore:boolean;
constructor(@Inject(DOCUMENT) private document: Document){
  if (typeof window !== 'undefined') {
  const localStorage = document.defaultView?.localStorage;
  const visitedBefore = localStorage.getItem('visitedBefore');
  this.visitedBefore = visitedBefore !== null ? JSON.parse(visitedBefore) : false;
  }
}

handleAgree(): void {
  //this.router.navigate(['/home']);
  this.responseAgreed=true;
  localStorage.setItem('visitedBefore','true');
}
}
