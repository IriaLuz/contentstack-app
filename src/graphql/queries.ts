export const PAGE_QUERY = `
  query Page {
    all_page {
      items {
        slug
        title
        referenceConnection {
          edges {
            node {
              ... on Herobanner {
                title
                description
                system {
                content_type_uid
              }
                imageConnection {
                  edges {
                    node {
                      url
                      title
                    }
                  }
                }
                link {
                  href
                  title
                }
              }
              ... on Carousel {
                title
                system {
                content_type_uid
              }
                slides {
                  caption
                  slideimageConnection {
                    edges {
                      node {
                        url
                        title
                      }
                    }
                  }
                  slidelink {
                    href
                    title
                  }
                }
              }
              ... on Accordion {
                title
                system {
                content_type_uid
              }
                group {
                  answer 
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

