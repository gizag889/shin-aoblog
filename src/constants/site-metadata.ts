interface SiteMetadata {
    // SITE_URL: string;
    SITE_NAME: string;
    SITE_DESC: string;
    SOCIAL_MEDIA: {
      twitter: string;
      github: string;
    };
    OG_IMAGE: {
      twitter: string;
    }
  }
   
  // const SITE_URLS = {
  //   development: "http://localhost:3000",
  //   production: "http://wp521558.wpx.jp", // 本番環境のURLを指定
  //   test: "http://localhost:3000",
  // };
   
  // const siteUrl = SITE_URLS[process.env.NODE_ENV];
   
  export const siteMetadata: SiteMetadata = {
    // SITE_URL: siteUrl,
    SITE_NAME: "青柳のブログ",
    SITE_DESC:"web制作の備忘録や読書記録を載せてるブログです。",
    SOCIAL_MEDIA: {
      twitter: "https://x.com/aoblog8890",
      github: "https://github.com/gizag889",
    },
    OG_IMAGE: {
      twitter: "記事のサムネ：markdownで編集できるやつ"
    }
    
  };