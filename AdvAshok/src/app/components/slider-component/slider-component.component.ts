import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContentFetchService } from '../../services/content-fetch-service.service';
import { NewsItem } from '../../../data/updatesInterface';



@Component({
  selector: 'app-slider-component',
  standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './slider-component.component.html',
  styleUrl: './slider-component.component.scss'
})
export class SliderComponentComponent {
  @Input() sliderType: string; //To ensure slider component is reusable
  newsData:NewsItem[]=[];
  serviceList:string[]=[];
  constructor(private contentService: ContentFetchService){}
  ngOnInit(){
          this.contentService.fetchNews()
          .then((data: any[]) => { // Specify the type as any[]
            // Handle the fetched news data
            this.newsData = data;
            console.log('News data received:', this.newsData);
          })
          .catch(error => {
            console.error('Error fetching news data:', error);
            // Handle the error (e.g., show an error message to the user)
          });
          this.serviceList=[
            "Legal Consultation Services",
            "Accounting Services",
            "Taxation Services",
            
            "Shop Licensing",
            "Factory Licensing",
            "Marriage Certificate Assistance",
            "Passport Application Services",
            "Comprehensive Consulting Services"
          ]
          // this.newsData=[
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Indian government has officially notified the rules related to the Citizenship Amendment Act (CAA) ahead of the Lok Sabha elections.",
          //     "publishedAt": "2024-03-11",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "Modi Government Officially Notifies Citizenship Amendment Act Rules Ahead of Lok Sabha Polls",
          //     "url": "https://example.com/article1",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "A Kerala Member of Legislative Assembly (MLA) has approached the Supreme Court seeking intervention to address human-wildlife conflict in the state.",
          //     "publishedAt": "2024-03-12",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "Kerala MLA Seeks Supreme Court Intervention to Tackle Human-Wildlife Conflict",
          //     "url": "https://example.com/article2",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Supreme Court has ruled that there will be no board exams for students in Classes 5, 8, and 9 in Karnataka, overturning a previous High Court order.",
          //     "publishedAt": "2024-03-12",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "No Board Exam for Classes 5, 8, and 9 in Karnataka: Supreme Court Sets Aside HC Order",
          //     "url": "https://example.com/article3",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Delhi High Court has taken serious note of the conduct of the resolution professional handling the bankruptcy proceedings of Go First airline. Contempt proceedings have been initiated against the professional.",
          //     "publishedAt": "2024-03-12",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "Delhi High Court Issues Contempt Notice to Bankrupt Go First Airline's Resolution Professional",
          //     "url": "https://example.com/article4",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Bombay High Court has declined to stay the formation of Fact Check Units under the IT Amendment Rules 2023.",
          //     "publishedAt": "2024-03-12",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "‘No Irreversible Situation’: Bombay HC Refuses to Stay Formation of Fact Check Units under IT Amendment Rules 2023",
          //     "url": "https://example.com/article5",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Karnataka High Court has dismissed a plea seeking to quash rape and POCSO (Protection of Children from Sexual Offences) charges against the head pontiff of a mutt in Chitradurga.",
          //     "publishedAt": "2024-03-12",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "Karnataka HC Rejects Plea to Quash Rape and POCSO Charges Against Chitradurga Mutt Head Pontiff",
          //     "url": "https://example.com/article6",
          //     "urlToImage": null
          //   },
          //   {
          //     "author": null,
          //     "content": null,
          //     "description": "The Delhi High Court has commented on the issue of stray dogs becoming territorial and the risks associated with stray feeding.",
          //     "publishedAt": "2024-03-06",
          //     "source": {
          //       "id": null,
          //       "name": "News Source"
          //     },
          //     "title": "Stray Dogs Becoming Territorial: Delhi HC on Stray Feeding in Case of 18-Month-Old Child Killed by Strays",
          //     "url": "https://example.com/article7",
          //     "urlToImage": null
          //   }]
        }
        slideConfig={
          "slidesToShow":1,
          "slidesToScroll":1,
          "autoplay":true,
          "autoplaySpeed":2000,
          "pauseOnHover":true,
          "infinite":true,
          "responsive":[
            // {
            //   "breakpoint":992,
            //   "settings":{
            //     "arrows":true,
            //     "infinite":true,
            //     "slidesToShow":1,
            //     "slidesToScroll":1
            //   }
            // }
          ]
        };
        addSlide(item:string) {
          this.serviceList.push(item)
        }
        
        removeSlide() {
          this.serviceList.length = this.serviceList.length - 1;
        }
        
        slickInit(e) {
          
        }
        
        breakpoint(e) {
          
        }
        
        afterChange(e) {
         
        }
        
        beforeChange(e) {
          
        }
}
