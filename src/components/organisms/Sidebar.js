import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useCategories } from "../../hooks/useCategories"
import { usePosts } from "../../hooks/usePosts"
import { Paragraph } from "../atoms/Paragraph"

export const Sidebar = () => {
  const data = useCategories()
  const newestPost = usePosts()

  const showCategories = data.allWpCategory.edges.map(category => (
    <LinkWrapper>
      <Link
        key={category.node.id}
        to={
          category.node.link === "/category/wszystkie/"
            ? "/blog"
            : `/blog${category.node.link}`
        }
      >
        {category.node.name}
      </Link>
    </LinkWrapper>
  ))
  const showNewestPosts = newestPost.allWpPost.edges.slice(0, 3).map(post => (
    <LinkWrapper>
      <Link key={post.node.id} to={`/blog${post.node.uri}`}>
        {post.node.title}
      </Link>
    </LinkWrapper>
  ))

  return (
    <Wrapper>
      <StyledCategoryWrapper>
        <Paragraph contentText>Kategorie</Paragraph>
        <InnerWrapper>{showCategories}</InnerWrapper>
        <Paragraph contentText>Najnowsze</Paragraph>
        <InnerWrapperAlt>{showNewestPosts}</InnerWrapperAlt>
      </StyledCategoryWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 25px;
  max-width: 1200px;
  text-align: center;
  @media(min-width:768px) {
    margin:0 auto;
  }
`
const StyledCategoryWrapper = styled.div`

`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(min-width:768px) {
    flex-direction: row;
    flex-wrap:wrap;
  }
  & >div > a {
    color:#fff;
  }
  & > div:first-child {
    background: linear-gradient(
        321.82deg,
        #21f2ff,
        #4181ff 59.22%,
        #4475ff 98.02%
      ),
      #7196ff;
  }
  & > div:nth-child(2) {
    background: linear-gradient(142.53deg, #00a295, #26f45c 98.75%), #3dcda7;
  }
  & > div:nth-child(3) {
    background: linear-gradient(141.85deg, #7e7bff, #ff73fa);
  }
  & > div:nth-child(4) {
    background: linear-gradient(141.48deg, #f837ee 1.35%, #ffcd4b);
  }

`
const LinkWrapper = styled.div`
  background-color: #fff;
  width: 200px;
  padding: 10px 12px;
  margin: 5px 5px;
  transition: .5s all;
  &:hover {
    box-shadow:0px 6px 12px 1px #a4a4a5;
  }

`
const InnerWrapperAlt = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & >div > a {
    color:#000;
  }
`
