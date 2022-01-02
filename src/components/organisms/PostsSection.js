import React from "react"
import styled from "styled-components"
import { usePosts } from "../../hooks/usePosts"

import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { Post } from "../molecules/Post"

export const PostsSection = () => {
  const data = usePosts()
  console.log(data.allWpPost.edges)

  return (
    <Wrapper>
      <InnerWrapper>
        {data.allWpPost.edges.map(post => (
          <Post
            key={post.node.id}
            title={post.node.title}
            excerpt={post.node.excerpt}
            uri={`/blog${post.node.uri}`}
            image={
              post.node.featuredImage.node.localFile.childImageSharp
                .gatsbyImageData
            }
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
