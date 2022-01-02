import styled, { css } from "styled-components"

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeight.xbold};
  color: ${({ theme }) => theme.textColor.primary};
  margin:0 0 20px 0;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
  }
  ${({ secondVersion }) =>
    secondVersion &&
    css`
      color: ${({ theme }) => theme.elemColor.secondary};
    `}
`
