import React from "react"
import styled from "styled-components"
import { Image } from "../atoms/Image"
import { Heading } from "../atoms/Heading"

export const PageHero = ({ img, imgTitle }) => {
  return (
    <Wrapper>
      <Image heroimg image={img} alt="hero image" />
      <h1 children={imgTitle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  & > h1 {
    position: absolute;
    top: 50%;
    color: #fff;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
