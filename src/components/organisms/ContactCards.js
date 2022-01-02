import React from "react"
import styled from "styled-components"
import { useContentAreaQuery } from "../../hooks/useContentAreaQuery"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { Card } from "../molecules/Card"
import lemon1 from "../../assets/images/lemonFruit1.png"
import lemon2 from "../../assets/images/lemonFruit2.png"
import lemon3 from "../../assets/images/lemonFruit3.png"

export const ContactCards = () => {
  const { wpPage } = useContentAreaQuery()
  // console.log(wpPage.acfHomepage.contentImage1)
  return (
    <Wrapper>
      <Heading children="Telefon i email" />
      <Paragraph decorativeText>Informacje</Paragraph>

      <InnerWrapper>
        <Card
          image={lemon1}
          text="Telefon"
          desc="
        696-630-627 "
        />
        <Card
          image={lemon3}
          text="Email"
          desc="
           kontakt.lemonbay@gmail.com"
        />
        <Card
          image={lemon2}
          text="Godziny otwarcia"
          desc="
           Poniedziałek-Piątek: 8:00 - 16:00
        "
        />
       
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align:center;
  justify-content: space-evenly;
  background-color: #e2e5ed;
  padding: 20px 0px 70px 0;
  & > p {
    text-align: center;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 20px 10px 0px 10px;
    text-align: center;
    
  }

  & > div:first-child {
    background: linear-gradient(
        321.82deg,
        #21f2ff,
        #4181ff 59.22%,
        #4475ff 98.02%
      ),
      #7196ff;
  }
  & > div:nth-child(2) {
    background: linear-gradient(142.53deg, #00a295, #26f45c 98.75%), #3dcda7;
  }
  & > div:nth-child(3) {
    background: linear-gradient(141.85deg, #7e7bff, #ff73fa);
  }
  cursor: pointer;
`
