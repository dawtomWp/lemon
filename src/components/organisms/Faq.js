import React from "react"
import styled from "styled-components"
import { useFaqQuery } from "../../hooks/useFaqQuery"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { FaMoneyBillWave, FaPaintBrush } from "react-icons/fa"
import { MdScience, MdMoreTime } from "react-icons/md"
import { GiGiftOfKnowledge, GiPayMoney } from "react-icons/gi"

export const Faq = ({}) => {
  const { wpPage } = useFaqQuery()
  const faqData = wpPage.faq
  return (
    <Wrapper>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4C57CF"
          d="M36.2,-68C40.5,-53.7,32.9,-32.6,34.3,-18.8C35.6,-5,45.8,1.5,51.2,11.7C56.5,22,57,35.9,51.5,47.6C46,59.3,34.5,68.8,22.2,69.7C9.9,70.6,-3.1,62.8,-19.3,60.4C-35.4,58.1,-54.6,61,-58.6,52.8C-62.5,44.5,-51.3,25.1,-50.9,9.1C-50.5,-7,-60.9,-19.8,-61.5,-32C-62,-44.2,-52.7,-55.8,-40.8,-66.6C-28.9,-77.4,-14.4,-87.4,0.8,-88.7C16,-89.9,32,-82.3,36.2,-68Z"
          transform="translate(100 100)"
        />
      </svg>
      <Paragraph decorativeText>Sprawdź FAQ</Paragraph>
      <Heading children="Masz pytanie?" />
      <InnerWrapper>
        <FaqCard>
          <h4>{faqData.faq1}</h4>
          <p>{faqData.faq1Description}</p>
          <MdScience />
        </FaqCard>
        <FaqCard>
          <h4>{faqData.faq2}</h4>
          <p>{faqData.faq2Description}</p>
          <FaMoneyBillWave />
        </FaqCard>
        <FaqCard>
          <h4>{faqData.faq3}</h4>
          <p>{faqData.faq3Description}</p>
          <FaPaintBrush />
        </FaqCard>
        <FaqCard>
          <h4>{faqData.faq4}</h4>
          <p>{faqData.faq4Description}</p>
          <MdMoreTime />
        </FaqCard>
        <FaqCard>
          <h4>{faqData.faq5}</h4>
          <p>{faqData.faq5Description}</p>
          <a href="https://dofinansowanekursy.pl/">dofinansowanekursy.pl</a>
          <GiGiftOfKnowledge />
        </FaqCard>
        <FaqCard>
          <h4>{faqData.faq6}</h4>
          <p>{faqData.faq6Description}</p>
          <GiPayMoney />
        </FaqCard>
      </InnerWrapper>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  & > svg {
      position: absolute;
      width:800px;
      right:-10%;
      top:10%;
      opacity:.1;
  }

  @media (min-width: 768px) {
    margin-top: 90px;
  }
`
const FaqCard = styled.div`
  position: relative;
  max-width: 500px;
  min-height: 300px;
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 16px;
  cursor: pointer;
  transition: 0.4s box-shadow;
  &:hover {
    box-shadow: 0 10px 10px rgb(0 0 0 / 10%);
  }
  & > svg {
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-size: 34px;
    color: ${({ theme }) => theme.elemColor.primary};
  }
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
