import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "navigation" }) {
        menuItems {
          nodes {
            label
            path
            parentId
            id
            childItems {
              nodes {
                label
                path
                id
              }
            }
          }
        }
      }
    }
  `)
  return data
}
