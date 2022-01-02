import React from "react"
import styled from "styled-components"
import { usePosts } from "../../hooks/usePosts"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { Post } from "../molecules/Post"
import { BiggerSvg } from "../atoms/BiggerSvg"
import { LinkButton } from "../atoms/Button"
import lemonFruit3 from "../../assets/images/lemonFruit3.png"
import { Icon } from "../atoms/Icon"

export const LatestPost = () => {
  const data = usePosts()
  console.log(data.allWpPost.edges)
  return (
    <Wrapper>
      <Icon
        custom
        src={lemonFruit3}
        width="8.5vw"
        top="85%"
        left="87%"
      />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4C57CF"
          d="M48.3,-74.3C60.9,-67.1,68.1,-50.8,68.9,-35.4C69.7,-20.1,64.1,-5.8,60.1,7.2C56,20.3,53.5,32.2,47.7,44.3C41.8,56.3,32.8,68.6,21.5,70.8C10.2,73,-3.3,65.2,-16,59.3C-28.6,53.3,-40.3,49.2,-45.8,40.8C-51.3,32.4,-50.6,19.8,-50.2,8.5C-49.8,-2.8,-49.7,-12.7,-48.7,-25.4C-47.8,-38.1,-46.1,-53.6,-37.8,-62.7C-29.6,-71.8,-14.8,-74.5,1.6,-76.9C17.9,-79.4,35.8,-81.4,48.3,-74.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <article>
        <Paragraph decorativeText children="Co nowego" />
        <Heading secondVersion children="Najnowsze posty" />
        <Paragraph smallText>
          Odwiedź naszego bloga, aby dowiedzieć się więcej o używanych przez nas
          technologiach
        </Paragraph>
      </article>

      {data &&<InnerWrapper>
        <StyledPost>
          {data.allWpPost.edges.slice(0, 1).map(post => (
            <Post
              key={post.node.id}
              title={post.node.title}
              excerpt={post.node.excerpt}
              uri={`/blog${post.node.uri}`}
              img={post.node.featuredImage.node.sourceUrl}
            />
          ))}
        </StyledPost>
        <div>
          {data.allWpPost.edges.slice(1, 3).map(post => (
            <Post
              key={post.node.id}
              title={post.node.title}
              excerpt={post.node.excerpt}
              uri={`/blog${post.node.uri}`}
              img={post.node.featuredImage.node.sourceUrl}
            />
          ))}
        </div>
      </InnerWrapper>}
      <BiggerSvg fill="hsla(217, 13%, 73%, .1)" top="2%" left="75%" desktop />
      <LinkButton secondBtn children="Zobacz więcej" to="/blog" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  overflow: hidden;
  grid-column-gap: 50px;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.elemColor.primary};
  & > img {
    z-index:0;
  }
  & > svg {
    width: 900px;
    position: absolute;
    left: -200px;
  }

  & > article {
    max-width: 1152px;
    margin: 0 auto;
    z-index: 1;
    text-align: left;
    width: 100%;
    & > p {
      color: #fff;
    }
  }
  & > div {
    margin:0 auto;
    max-width: 1152px;
  //  transform: translateX(30%)
  }

  & > a {
    justify-self: center;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    padding: 15px 30px 45px;
  }
`
const InnerWrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (orientation: landscape) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const StyledPost = styled.div`

  & > a {
    @media (min-width: 768px) {
      min-height: 485px;
    }
    @media (orientation: landscape) and (max-width: 768px) {
      min-height: 485px;
    }
  }
`
