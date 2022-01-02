import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Navigation = ({ menu }) => {
  return (
    <StyledNavigationContainer>
      <StyledNavigation>
        {menu.menuItems.nodes.map(menuItem =>
          !menuItem.parentId ? (
            <li key={menuItem.id}>
              <Link to={menuItem.path} activeClassName="nav-active">
                {menuItem.label}
              </Link>
            </li>
          ) : null
        )}
      </StyledNavigation>
    </StyledNavigationContainer>
  )
}

const StyledNavigationContainer = styled.nav``
const StyledNavigation = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px;
    position: relative;
    font-weight: 700;

    a {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #fff;
    }
  }
  li:hover > ul {
    display: block;
  }
`
const StyledChildNavigation = styled.ul`
  animation: fadeInMenu 0.3s both ease-in;
  display: none;
  position: absolute;
  left: 0;
  margin: 0;
  top: 25px;
  text-transform: none;
  background: #fff;
  padding: 15px 10px 10px 10px;

  li {
    width: auto;
    min-width: 170px;
    a {
      font-weight: ${({ theme }) => theme.fontWeight.thin};
      color: ${({ theme }) => theme.textColor.secondary};
    }
  }
  li:hover {
    background-color: ${({ theme }) => theme.elemColor.shadow};
  }
  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
