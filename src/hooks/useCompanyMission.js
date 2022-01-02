import { useStaticQuery, graphql } from "gatsby"

export const useCompanyMission = () => {
  const data = useStaticQuery(graphql`
    query MissionQuery {
      ourMission: wpPage(databaseId: { eq: 13 }) {
        id
        title
        acfMission {
          mission
          missionDesc
        }
      }
    }
  `)
  return data
}
