import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import imgLogo from "../../assets/icons/logo.png"
import { Hamburger } from "../atoms/Hamburger"
import { MobileMenu } from "../molecules/MobileMenu"
import { Navigation } from "../molecules/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Icon } from "../atoms/Icon"

export const Header = () => {
  const { site, wpMenu } = useMenuQuery()
  const [menuOpen, setNavigationOpen] = useState(false)
  const handleOverlayNavigation = () => setNavigationOpen(prev => !prev)

  return (
    <Wrapper>
      <Link to="/">
        <Icon logo src={imgLogo} alt={site.siteMetadata.title} />
      </Link>
      <Navigation menu={wpMenu} />
      <Hamburger onClick={handleOverlayNavigation} />
      <MobileMenu menuOpen={menuOpen} callback={handleOverlayNavigation} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width:100%;
  /* background: ${({ theme }) => theme.elemColor.primary}; */
  justify-content: space-between;
  align-items: center;
  background:transparent;
  padding: 10px 30px;
  z-index:1000;
  @media(min-width:768px) {
    width: 80%;
    left: calc(50% - 40%);
  }
`
