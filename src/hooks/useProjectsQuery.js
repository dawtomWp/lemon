import { useStaticQuery, graphql } from "gatsby"

export const useProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allWpProject {
        edges {
          node {
            id
            acfProjects {
              fieldGroupName
              projectDesc
              projectLink
              projectLongDesc
              projectName
              projectStack
              projectImage {
                id
                sourceUrl
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 640, placeholder: TRACED_SVG)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
