import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import imgLogo from "../../assets/icons/logo.png"
import imgCloseButton from "../../assets/icons/icon-close_btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Icon } from "../atoms/Icon"

export const MobileMenu = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()
  return (
    <Wrapper menuOpen={menuOpen}>
      <InnerWrapper>
        <Icon src={imgLogo} largeLogo />
        <MenuWrapper>
          {wpMenu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.path} activeClassName="mobileActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </MenuWrapper>
        <StyledIcon
          src={imgCloseButton}
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100000;
  left: 0px;
  transition: all 0.3s ease;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.textColor.primary};
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.textColor.primary};
  padding: 40px;
`
const MenuWrapper = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0 0 20px 0;

    a {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.elemColor.secondary};
    }
  }
`
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 30px;
  cursor: pointer;
  transition: all 1s ease;
  outline: none;
  :hover {
    transform: rotate(180deg);
  }
`
