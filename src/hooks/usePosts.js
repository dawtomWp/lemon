import { useStaticQuery,graphql } from "gatsby";

export const usePosts = () => {
    const data = useStaticQuery(graphql`
    query LatestPost {
        allWpPost(sort: {fields: date, order: DESC}) {
          edges {
            node {
              title
              id
              excerpt
              categories {
                 nodes {
                    id
                    name
                 }
              }
              uri
              featuredImage {
                node {
                  sourceUrl
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width:640, placeholder: TRACED_SVG)
                    }
                  }
                }
              }
            }
          }
        }
        allWpCategory {
            edges {
               node {
                   id
                   name
               }
            }
        }
      }
      
    `)
    return data;
}