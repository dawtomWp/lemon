// import React from "react";
// import styled from 'styled-components';
// import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import PageTemplate from "./PageTemplate"


// const archiveTemplate = () => {

//  return (
 
//   <PageTemplate>
//     <Wrapper>
//       <ContentWrapper>
        
//       </ContentWrapper>
//     </Wrapper>
//   </PageTemplate>
//    )
// }
// export default archiveTemplate


// const Wrapper = styled.div``
// const ContentWrapper = styled.div``

// export const pageQuery = graphql`
//   query($catId: String!, $skip: Int!, $limit: Int!) {
//     allWpPost(
//       filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
//       skip: $skip
//       limit: $limit
//     ) {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           uri
//           slug
//           date(formatString: "DD MM YYYY")
//         }
//       }
//     }
//   }
// `
