import { useStaticQuery, graphql } from "gatsby"

export const useAddressQuery = () => {
  const data = useStaticQuery(graphql`
    query AddressQuery {
      addressQuery: wpPage(databaseId: { eq: 141 }) {
        id
        title
        acfAddress {
          companyCity
          companyEmail
          companyName
          companyPhone1
          companyPhone2
          companyStreet
        }
      }
    }
  `)
  return data
}
