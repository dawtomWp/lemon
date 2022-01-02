import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Image = styled(GatsbyImage)`
  z-index: 2;

  ${({ heroimg }) =>
    heroimg &&
    css`
      height: 500px;
    `}
  ${({ bannerimg }) =>
    bannerimg &&
    css`
      margin-top: 35px;
      width: 100vw;
      @media (min-width: 768px) {
        width: 100vw;
      }
      @media (min-width: 1400px) {
        width: 40vw;
      }
    `}
`
