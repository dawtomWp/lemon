import React from "react"
import styled from "styled-components"
import MainTemplate from "./MainTemplate"

const PageTemplate = ({ children }) => {
  return (
    <MainTemplate>
      <Wrapper>{children}</Wrapper>
    </MainTemplate>
  )
}

export default PageTemplate

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0px;
`
