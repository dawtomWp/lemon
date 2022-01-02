import React from "react"
import styled from "styled-components"
import { useCompanyMission } from "../../hooks/useCompanyMission"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import missionImage from "../../assets/images/lemonAboutImg.png"
import { LinkButton } from "../atoms/Button"
import { BiggerSvg } from "../atoms/BiggerSvg"

export const CompanyMission = () => {
  const { ourMission } = useCompanyMission()
  // console.log(ourMission)
  return (
    <Wrapper>
      <img src={missionImage} alt="nasza misja" />
      <InnerWrapper>
        <Paragraph decorativeText>Kilka słów o nas</Paragraph>
        <Heading>{ourMission.acfMission.mission}</Heading>
        <Paragraph smallText>{ourMission.acfMission.missionDesc}</Paragraph>
        <div>
          <LinkButton  to="/blog">
            Blog
          </LinkButton>
        </div>
      </InnerWrapper>
      <BiggerSvg fill="#4C57CF" top="-15%" left="75%" desktop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  text-align: center;
  padding: 25px 0px;
  margin-top: 25px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    margin-bottom: 70px;
    margin-top: 75px;
  }
  & > img {
    max-width: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 400px;
    }
    @media (min-width: 1024px) {
      max-width: 550px;
    }
  }
  & > svg {
    transform: scale(0.8);
    opacity:.1;
  }
`
const InnerWrapper = styled.div`
  width: 80%;
  text-align: left;
  margin: 0 auto;

  & > div {
    display: flex;
    margin-top: 30px;
    & > a {
      margin-right: 15px;
    }
  }
`
