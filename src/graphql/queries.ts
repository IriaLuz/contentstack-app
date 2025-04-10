
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
  }
`;
