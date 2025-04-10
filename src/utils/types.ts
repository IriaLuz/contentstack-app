export interface ImageNode {
    url: string;
    title: string;
  }
  
  export interface HeroBanner {
    title: string;
    description: string;
    imageConnection: { edges: { node: ImageNode }[] };
    link: { href: string; title: string };
  }
  
  export interface Carousel {
    title: string;
    slides: {
      caption: string;
      slideimageConnection: { edges: { node: ImageNode }[] };
      slidelink: { href: string; title: string };
    }[];
  }
  
  export interface Accordion {
    title: string;
    group: { title: string; answer: string }[];
  }
  
  export interface PageContent {
    all_page: {
      items: {
        slug: string;
        title: string;
        referenceConnection: {
          edges: {
            node: HeroBanner | Carousel | Accordion;
          }[];
        };
      }[];
    };
  }
  