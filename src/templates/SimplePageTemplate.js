import React from "react"
import styled from "styled-components"
import PageTemplate from "./PageTemplate"
import { Sidebar } from "../components/organisms/Sidebar"
import { graphql } from "gatsby"
import { PageHero } from "../components/molecules/PageHero"
import { Breadcrumb } from "../components/molecules/Breadcrumb"

const SimplePageTemplate = ({ data }) => {
  console.log(data, "sprawdzanie cases")

  let heroAvailable

  const parentUrl = {
    title: "Cases",
    uri: "/cases",
  }

  if (data.wpPage.featuredImage === null) {
    heroAvailable = null
  } else {
    heroAvailable =
      data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  }
  return (
    <>
      {heroAvailable && (
        <PageHero img={heroAvailable} imgTitle={data.wpPage.title} />
      )}
      <Breadcrumb currentPage={data.wpPage.title} parent={parentUrl} />
      <PageTemplate>
        <Wrapper>
          <div
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={{ __html: data.wpPage.content }}
          />
        </Wrapper>
      </PageTemplate>
    </>
  )
}

export default SimplePageTemplate

const Wrapper = styled.div``

export const data = graphql`
  query ($id: Int!) {
    wpPage(databaseId: { eq: $id }) {
      id
      slug
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
