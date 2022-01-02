import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../assets/styles/globalStyles"
import { theme } from "../assets/styles/mainTheme"
import { Footer } from "../components/molecules/Footer"
import { Header } from "../components/organisms/Header"

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MainTemplate

//STYLES

const Wrapper = styled.div`
  padding: 0px 0px;
  overflow-x: hidden;
`
