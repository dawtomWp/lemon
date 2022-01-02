import { useStaticQuery, graphql } from "gatsby"

export const useFaqQuery = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      wpPage(databaseId: { eq: 141 }) {
        faq {
          faq1
          faq1Description
          faq2
          faq2Description
          faq3
          faq3Description
          faq4
          faq4Description
          faq5
          faq5Description
          faq6
          faq6Description
          fieldGroupName
        }
      }
    }
  `)
  return data
}
