export  interface NewsItem {
        article_id:string | null;
        title: string;
        link: string;
        keywords:string[];
        creator: string | null | string[];
        video_url:string | null;
        description: string | null;
        content: string | null;
        pubDate: string;
        image_url: string | null;
        source_id: string | null;
        source_url: string | null;
        source_icon: string | null;
        source_priority: string | null |number;
        country:string[];
        category:string[];
        language: string | null;
        ai_tag:string[] | string;
        sentiment_stats: {
          positive: number;
          neutral: number;
          negative: number;
      };
      
        
        
        
      }
  