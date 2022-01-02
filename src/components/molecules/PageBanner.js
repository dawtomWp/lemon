import React from "react"
import styled from "styled-components"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"

export const PageBanner = ({ title, desc }) => {
  return (
    <Wrapper>
      <Heading secondVersion>{title}</Heading>
      <Paragraph contentTextAlt>{desc}</Paragraph>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4C57CF"
          d="M39.9,-51.9C54.4,-44.4,70.6,-36.3,72.8,-24.8C75,-13.2,63.2,1.7,56.6,17.3C50.1,32.9,48.7,49,40.1,52.7C31.6,56.4,15.8,47.8,2.2,44.8C-11.4,41.8,-22.8,44.5,-29.1,40C-35.4,35.5,-36.5,23.9,-46.5,10.9C-56.4,-2,-75.2,-16.3,-74,-25.3C-72.8,-34.4,-51.7,-38.2,-36,-45.3C-20.4,-52.5,-10.2,-62.9,1.3,-64.6C12.7,-66.4,25.4,-59.4,39.9,-51.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #5966f3;
  margin: 0;
  padding: 0;
  overflow: hidden;

  & > p,h2 {
      z-index: 2;
  }

  & > svg {
     position: absolute;
     width:800px;
     top:-50%;
     left:0;
     z-index:1;
  }
`
