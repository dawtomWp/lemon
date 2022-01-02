import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const LinkButton = styled(Link)`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.medium};
  height: 42px;
  padding: 7px 15px;
  background-color:${({theme}) => theme.elemColor.black};
  border: none;
  color: #fff;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;
  font-weight: 600;
  width: 220px;



  &::before {
    content: "";
    position: absolute;
    background-color: black;
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
  ${({ secondBtn }) =>
    secondBtn &&
    css`
      background-color: #fff;
      color:${({theme}) => theme.elemColor.black};
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
    `}

  ${({ alternativeBtn }) =>
    alternativeBtn &&
    css`
      background-color: transparent;
      box-shadow: none;
      color: ${({ theme }) => theme.elemColor.secondary};
      border: 3px solid ${({ theme }) => theme.elemColor.secondary};
      line-height: 17px;
      transition: all 0.5s;
      &:hover {
        color: #fff;
      }
      &::before {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.elemColor.secondary};
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 0.5;
        transform: translateX(-200px);
        transition: all 0.5s;
      }
      &:hover:before {
        transform: translateX(0px);
      }
      ${({ secondVersion }) =>
        secondVersion &&
        css`
          color: ${({ theme }) => theme.elemColor.primary};
          border: 3px solid ${({ theme }) => theme.elemColor.primary};
          &::before {
            background-color: ${({ theme }) => theme.elemColor.primary};
          }
        `}
    `}
`
