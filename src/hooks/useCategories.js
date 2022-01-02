import { useStaticQuery, graphql } from "gatsby"

export const useCategories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allWpCategory {
        edges {
          node {
            id
            name
            link
            posts {
              nodes {
                id
                title
              }
            }
          }
        }
      }
    }
  `)
  return data
}
