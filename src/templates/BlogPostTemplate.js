import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Image } from "../components/atoms/Image"
import PageTemplate from "./PageTemplate"
import { Sidebar } from "../components/organisms/Sidebar"
import { usePostNav } from "../hooks/usePostNav"
import { PageBanner } from "../components/molecules/PageBanner"
import { LinkButton } from "../components/atoms/Button"

const BlogPostTemplate = ({ data }) => {
  const [nextPostLink, setNextPostLink] = useState()
  const [previousPostLink, setPreviousPostLink] = useState()
  const postNav = usePostNav()

  const currentPost = postNav.allWpPost.edges


  useEffect(() => {
    for (let i = 0; i < currentPost.length; i++) {
      if (
        currentPost[i].next &&
        currentPost[i].node.title === data.wpPost.title
      ) {
        setNextPostLink(currentPost[i].next)
      }
      if (
        currentPost[i].previous &&
        currentPost[i].node.title === data.wpPost.title
      ) {
        setPreviousPostLink(currentPost[i].previous)
      }
    }
  }, [])
  return (
    <PageTemplate>
      <PageBanner
        title={data.wpPost.title}
        desc={`Dodano przez: ${data.wpPost.author.node.name} dnia ${data.wpPost.date.slice(0,10)}`}
      />
      <Wrapper>
        <LinkButton to="/blog">Powrót</LinkButton>
        <Image
          image={
            data.wpPost.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
        />

        <div
          style={{ marginTop: 20 }}
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
        />
        <ButtonsWrapper>
          {previousPostLink && (
            <LinkButton to={`/blog${previousPostLink.uri}`}>
              Poprzedni
            </LinkButton>
          )}
          {nextPostLink && (
            <StyledLink to={`/blog${nextPostLink.uri}`}>Następny</StyledLink>
          )}
        </ButtonsWrapper>
      </Wrapper>
      <Sidebar />
    </PageTemplate>
  )
}
export default BlogPostTemplate

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 50px auto;
  }

  & > a {
    margin-bottom: 30px;
  }
`
const InnerWrapper = styled.div``

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.medium};
  height: 42px;
  padding: 7px 15px;
  border: none;
  color: #fff;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;
  font-weight: 600;
  width: 220px;
  justify-content: flex-end;
  background-color: #fff;
  color: ${({ theme }) => theme.elemColor.black};
  &:hover {
  }

  &::before {
    content: "";
    position: absolute;
    background-color: #000;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
    transform: translateX(-230px);
    transition: all 0.5s;
  }
  &:hover:before {
    transform: translateX(0px);
  }
`

export const data = graphql`
  query ($id: Int!) {
    wpPost(databaseId: { eq: $id }) {
      title
      content
      id
      date
      excerpt
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
