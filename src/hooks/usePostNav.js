import { useStaticQuery, graphql } from "gatsby"

export const usePostNav = () => {
  const data = useStaticQuery(graphql`
    query PostNavQuery {
      allWpPost {
        edges {
          node {
            title
          }
          next {
            id
            uri
            title
            slug
          }
          previous {
            id
            uri
            title
            link
          }
        }
      }
    }
  `)
  return data
}
