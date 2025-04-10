export interface SystemField {
    content_type_uid: string;
  }
  
  export interface ImageNode {
    url: string;
    title: string;
  }
  
  export interface HeroBannerType {
    title: string;
    description: string;
    imageConnection: { edges: { node: ImageNode }[] };
    link: { href: string; title: string };
    system: SystemField;
  }
  
  export interface CarouselType {
    title: string;
    slides: {
      caption: string;
      slideimageConnection: { edges: { node: ImageNode }[] };
      slidelink: { href: string; title: string };
    }[];
    system: SystemField;
  }
  
  export interface AccordionType {
    title: string;
    group: { title: string; answer: string }[];
    system: SystemField;
  }
  
  export interface PageContent {
    all_page: {
      items: {
        slug: string;
        title: string;
        referenceConnection: {
          edges: {
            node: HeroBannerType | CarouselType | AccordionType;
          }[];
        };
      }[];
    };
  }
  
  