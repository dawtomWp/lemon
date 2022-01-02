import React from "react"
import styled from "styled-components"
import { Paragraph } from "../atoms/Paragraph"

export const Card = ({ image, text, desc}) => {
  return (
      <Wrapper>
        <InnerWrapper>
          <p>{text}</p>
          <Paragraph opinionsText>{desc}</Paragraph>
        </InnerWrapper>
        <img src={image} alt="content image" />
      </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height:285px;
  min-width: 300px;
  max-width:380px;
  padding:20px;
  border-radius:14px;
  color:#fff;
  max-height:285px;
  background:transparent;
  transition: .5s all;
  &:hover {
    box-shadow:0px 6px 12px 1px #a4a4a5;
    color:${({theme}) => theme.elemColor.secondary};
  }
  & > img {

        width:55px;
      }
`
const InnerWrapper = styled.article`
    & > p:first-child {
      font-size:17px;
    }

  

    
`
