import { useStaticQuery, graphql } from "gatsby"

export const useBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      wpPage(databaseId: { eq: 13 }) {
        id
        acfBanner {
          buttontext1
          imagetext1
          imagedesc1
          image1 {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  return data
}

