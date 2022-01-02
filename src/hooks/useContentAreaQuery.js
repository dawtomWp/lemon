import { useStaticQuery, graphql } from "gatsby"

export const useContentAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment contentImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 920, placeholder: TRACED_SVG)
        }
      }
    }
    query ContentAreaQuery {
      wpPage(databaseId: { eq: 13 }) {
        acfHomepage {
          content1Text
          content2Text
          content3Text
          content4Text
          content1Desc
          content2Desc
          content3Desc
          content4Desc
          content1Link
          content2Link
          content3Link
          content4Link
          contentImage1 {
            ...contentImage
          }
          contentImage2 {
            ...contentImage
          }
          contentImage3 {
            ...contentImage
          }
          contentImage4 {
            ...contentImage
          }
        }
      }
    }
  `)
  return data
}
