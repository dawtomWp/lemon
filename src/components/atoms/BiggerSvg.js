import React from "react"
import styled, { css } from "styled-components"

const StyledBiggerSvg = styled.svg`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: -1;

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    `}
`
export const BiggerSvg = ({ fill, top, left, desktop }) => {
  return (
    <StyledBiggerSvg
      desktop={desktop}
      top={top}
      left={left}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="607"
      height="700"
      viewbox="0 0 606.217782649107 700"
    >
      <path
        fill={fill}
        d="M303.1088913245535 0L606.217782649107 175L606.217782649107 525L303.1088913245535 700L0 525L0 175Z"
      ></path>
    </StyledBiggerSvg>
  )
}
