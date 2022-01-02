import React, { useState } from "react"
import styled from "styled-components"
import PageTemplate from "./PageTemplate"
import { Sidebar } from "../components/organisms/Sidebar"
import { graphql } from "gatsby"
import { Post } from "../components/molecules/Post"
import { LinkButton } from "../components/atoms/Button"
import { PageBanner } from "../components/molecules/PageBanner"

const BlogCategoryTemplate = ({data}) => {
  const [showMore, setMorePosts] = useState(10)

  const parentUrl = {
    title: "Blog",
    uri: "/blog",
  }

  const handleShowMore = () => {
    if (showMore < data.allWpPost.edges.length) {
      setMorePosts(prevState => prevState + 3)
    }
  }

  return (
    <PageTemplate>
      <PageBanner title="Blog" desc="Odkryj nowinki ze świata IT"/>
      <Sidebar />
      <Wrapper>
        {data.allWpPost.edges.slice(0, showMore).map(post => (
          <Post
            key={post.node.id}
            title={post.node.title}
            excerpt={post.node.excerpt}
            uri={`/blog${post.node.uri}`}
            img={post.node.featuredImage.node.sourceUrl}
          />
          
        ))}
        
      </Wrapper>
      <StyledLinkButton onClick={handleShowMore} children="Pokaż starsze" />
    </PageTemplate>
  )
}

export default BlogCategoryTemplate

const Wrapper = styled.div`
  display: grid;
  max-width:1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const StyledLinkButton = styled(LinkButton)`
  margin: 0 auto;
`


export const data = graphql`
  query ($cat: String!) {
    allWpPost(
      sort: { fields: date, order: DESC }
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $cat } } } } }
    ) {
      edges {
        node {
          title
          id
          excerpt
          categories {
            nodes {
              id
              name
            }
          }
          uri
          featuredImage {
            node {
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
`