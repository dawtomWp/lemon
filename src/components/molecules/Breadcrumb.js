import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Breadcrumb = ({ parent, currentPage }) => {
  console.log(parent, currentPage)
  return (
    <Wrapper>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span> / </span>
      {parent ? (
        <>
          <Link to={parent.uri}>
            <span dangerouslySetInnerHTML={{ __html: parent.title }} />
          </Link>
          <span> / </span>
        </>
      ) : null}
      <span>{currentPage}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div``
