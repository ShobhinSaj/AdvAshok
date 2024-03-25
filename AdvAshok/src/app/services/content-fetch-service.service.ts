import { Injectable } from '@angular/core';

import { NewsItem } from '../../data/updatesInterface';

@Injectable({
  providedIn: 'root'
})
export class ContentFetchService {
  private url:string;
  data:NewsItem[]=[];
  constructor() { }
  public fetchNews=async(): Promise<NewsItem[]>=>{
    try{
      // this.url='https://newsapi.org/v2/Everything?' +
      // //'country=us&' +
      // 'q=india AND (law OR legal OR court)&' +
      // 'searchIn=title&' +
      // 'from=2024-03-11&' +
      // 'domains=ndtv.com,indianexpress.com,thehindu.com,news18.com,firstpost.com,dnaindia.com,india.com,theweek.com,nationalheraldindia.com,deccanchronicle.com,blitzindiamedia.com,timesofindia.indiatimes.com,indiatoday.in,aljazeera.com,yahoo.com,biztoc.com,cbsnews.com,abc.net.au/news,rt.com/india,digitimes.com,nbcnews.com/news/world,hrw.org/news,startribune.com,channelnewsasia.com,bbc.co.uk,&' +
      // 'language=en&' +
      // 'pageSize=20&' +
      // 'sortBy=relevancy&' +
      // 'apiKey=0a5806a7e8ae4febac5617d4f28cccc3';
      
      // this.url='https://newsdata.io/api/1/news?' +
      // 'apikey=pub_40350a84db60c5e9eb625f21d9b6f9047fd1e&' +
      // 'q=law OR legal OR "supreme court" OR "high court"&' +
      // 'language=en&' +
      // 'country=in&' +
      // 'size=10&';
          //'from_date=2024-03-11&' +
           //'to_date=2024-03-19';
      // const req=new Request(this.url);
      // let sliderData=await fetch(req);
      // let response=await sliderData.json();
      // console.log(response);
      // this.data=response.results;
      this.data=[{
        article_id: 'afb50398c5b1578a760eb61b02966d7e',
        title: "Russia includes 'LGBT movement' in list of extremist and terrorist organisation",
        link: 'https://timesofindia.indiatimes.com/world/europe/russia-includes-lgbt-movement-in-list-of-extremist-and-terrorist-organisation/articleshow/108726613.cms',
        keywords: null,
        creator: [ 'TOI World Desk' ],
        video_url: null,
        description: "Russia officially labels the 'LGBT movement' as an extremist and terrorist group, causing concern among the gay and transgender community. The decision aligns with the Supreme Court's ruling, listing LGBT activists as extremists, sparking fears of arrests and legal consequences. The updated list by Rosfinmonitoring includes 14,000 individuals and organisations, targeting international LGBT movements.",
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:21:52',
        image_url: 'https://static.toiimg.com/photo/msid-108726781,imgsize-1441267.cms',
        source_id: 'toi',
        source_url: 'https://timesofindia.indiatimes.com',
        source_icon: 'https://i.bytvi.com/domain_icons/toi.png',
        source_priority: 391,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        
        sentiment_stats: {positive:1,neutral:2,negative:3}
       
      },
      {
        article_id: '018a226f7d9a0491ed8dd0d6fd454b92',
        title: 'Why Islamic State targeted Russia and attacked Moscow concert hall',
        link: 'https://www.indiatoday.in/world/story/why-islamic-state-khorasan-attacked-moscow-concert-hall-russia-2518538-2024-03-23?utm_source=rss',
        keywords: null,
        creator: null,
        video_url: null,
        description: 'Why Islamic State targeted Russia and attacked Moscow concert hall',
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:21:39',
        image_url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/moscow-russia-terror-attack-234256281-16x9_0.jpg?VersionId=0ysBLd2ku1en0H.zPtGN7JxX2la6PDzk',
        source_id: 'indiatoday',
        source_url: 'https://www.indiatoday.in',
        source_icon: 'https://i.bytvi.com/domain_icons/indiatoday.png',
        source_priority: 2885,
        country: [ 'india' ],
        category: [ 'world' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        
        sentiment_stats: {positive:1,neutral:2,negative:3}
       
      },
      {
        article_id: '6db60cf56ca4c1e1e3127315e3f89c87',
        title: 'ED Raids Premises of BRS Leader K Kavitha’s Close Relatives in Connection With Delhi Excise Policy Case',
        link: 'https://www.latestly.com/india/news/ed-raids-premises-of-brs-leader-k-kavithas-close-relatives-in-connection-with-delhi-excise-policy-case-5840211.html',
        keywords: null,
        creator: null,
        video_url: null,
        description: 'The ED officials on Saturday conducted searches at the premises of close relatives of Bharat Rashtra Samithi (BRS) leader, K Kavitha in a money laundering case related to the alleged Delhi excise policy scam.',
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:20:02',
        image_url: 'https://st1.latestly.com/wp-content/uploads/2024/03/35-35-380x214.jpg',
        source_id: 'latestly',
        source_url: 'https://www.latestly.com',
        source_icon: 'https://i.bytvi.com/domain_icons/latestly.png',
        source_priority: 5523,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        
        sentiment_stats: {positive:1,neutral:2,negative:3}
        
      },
      {
        article_id: '5b2c48c6643cc5b15ac9cf36f56c65cd',
        title: '‘How Bizzare & Shameful’: Netizens react to Girls Performing Obscene act inside Metro',
        link: 'https://newsroompost.com/india/how-bizzare-shameful-netizens-react-to-girls-performing-obscene-act-inside-metro/5311157.html',
        keywords: [ 'india', 'delhi metro', 'metro viral video' ],
        creator: [ 'Newsroom Staff' ],
        video_url: null,
        description: 'Talking about the services of the Delhi Metro on Holi, the metro services will be functional from 2.30pm in the afternoon as announced by DMRC. The post ‘How Bizzare & Shameful’: Netizens react to Girls Performing Obscene act inside Metro appeared first on NewsroomPost.',
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:19:08',
        image_url: 'https://s.w.org/images/core/emoji/14.0.0/72x72/1f609.png',
        source_id: 'newsroompost',
        source_url: 'https://newsroompost.com',
        source_icon: 'https://i.bytvi.com/domain_icons/newsroompost.jpg',
        source_priority: 57039,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        sentiment_stats: {positive:1,neutral:2,negative:3}
      },
      {
        article_id: '930367b8ec02e4740d81672cb96cfeee',
        title: 'Punjab: Death toll in Sangrur spurious liquor case rises to 20; SIT formed',
        link: 'https://www.news9live.com/india/punjab-death-toll-in-sangrur-spurious-liquor-case-rises-to-20-sit-formed-2475690',
        keywords: [ 'india' ],
        creator: [ 'Press Trust Of India' ],
        video_url: null,
        description: 'The officials said that the casualties have been reported from Gujran, Tibbi Ravidaspura and Dhandoli Khurd villages in Dirba and Sunam blocks.',    content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:19:00',
        image_url: 'https://images.news9live.com/wp-content/uploads/2024/03/Punjab-liquor-tragedy.png',
        source_id: 'news9live',
        source_url: 'https://www.news9live.com',
        source_icon: 'https://i.bytvi.com/domain_icons/news9live.png',
        source_priority: 193096,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        sentiment_stats: {positive:1,neutral:2,negative:3}
      },
      {
        article_id: '5174e8aea7116bf9a5fa5b11a0887cfe',
        title: 'Opinion | Dear United Nations, What About Hinduphobia?',
        link: 'https://www.news18.com/opinion/opinion-dear-united-nations-what-about-hinduphobia-8826020.html',
        keywords: [ 'opinion' ],
        creator: null,
        video_url: null,
        description: 'As Hindus continue to face systematic discrimination, the glaring disparity in global attention begs a stark question: where is the UN’s commitment to upholding rights of all religious minorities? In the quest for justice and equality, let us not succumb to the trap of selective outrage',
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:18:35',
        image_url: 'https://images.news18.com/ibnlive/uploads/2024/02/ghcbroixqaariwv-1-2024-02-ad13858df6aca29fc414a73efb4df484-3x2.jpg',
        source_id: 'news18',
        source_url: 'https://www.news18.com',
        source_icon: 'https://i.bytvi.com/domain_icons/news18.png',
        source_priority: 6644,
        country: [ 'india' ],
        category: [ 'politics' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        sentiment_stats: {positive:1,neutral:2,negative:3}
      },
      {
        article_id: '3831ce38fee214b698076761b3fbd88e',
        title: 'Supreme Court Allows Visually-Impaired Candidates for Civil Judge Class-II Exam in Madhya Pradesh',
        link: 'https://www.freepressjournal.in/education/supreme-court-allows-visually-impaired-candidates-for-civil-judge-class-ii-exam-in-madhya-pradesh',
        keywords: [ 'education', 'topnews' ],
        creator: null,
        video_url: null,
        description: null,
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:17:58',
        image_url: 'https://media.assettype.com/freepressjournal/2022-02/f2dbd33f-ac58-4c75-ba7f-d5bccf49a432/Supreme_Court_1.jpeg',
        source_id: 'freepressjournal',
        source_url: 'https://www.freepressjournal.in',
        source_icon: 'https://i.bytvi.com/domain_icons/freepressjournal.png',
        source_priority: 83130,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        sentiment_stats: {positive:1,neutral:2,negative:3}
      },
      {
        article_id: '5501cd0b60650b6138f31449ccb84ea3',
        title: "After Arvind Kejriwal, ED Names K Kavitha as 'Kingpin' of Liquor Policy Scam; Will Remain in Custody for 3 More Days",
        link: 'https://www.news18.com/india/ed-brs-mlc-k-kavitha-five-days-extended-remark-court-bail-plea-liquor-scam-case-8826047.html',
        keywords: [ 'india' ],
        creator: null,
        video_url: null,
        description: 'While leaving the court, Kavitha questioned the timing of the political arrests and said that "the ECI should intervene and protect the democracy of the country"',
        content: 'ONLY AVAILABLE IN PAID PLANS',
        pubDate: '2024-03-23 07:16:36',
        image_url: 'https://images.news18.com/ibnlive/uploads/2024/03/k-kavitha-2024-03-abf73f6d81a705b6efcdc6101c5623aa-3x2.jpg',
        source_id: 'news18',
        source_url: 'https://www.news18.com',
        source_icon: 'https://i.bytvi.com/domain_icons/news18.png',
        source_priority: 6644,
        country: [ 'india' ],
        category: [ 'top' ],
        language: 'english',
        ai_tag: 'ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS',
        sentiment_stats: {positive:1,neutral:2,negative:3}
      }]
      return this.data;
     }
     catch(error){
      console.log("Unable to fetch data"+error);
      return [];
      // return [{title:"Oops! We'll be back with updates.."}];
     }
}
}
  
