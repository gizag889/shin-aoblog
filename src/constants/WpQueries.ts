export class WpQueries { // 今後増える可能性を考えてこの命名に
    static list = `query PostListQuery {
        posts {
          edges {
            node {
              categories {
                edges {
                  node {
                    name
                    slug
                  }
                }
              }
              date
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              id
              slug
              title
            }
          }
        }
      }`
}