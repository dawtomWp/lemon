import React from "react"
import styled from "styled-components"
import { useBannerQuery } from "../../hooks/useBannerQuery"
import { Image } from "../atoms/Image"
import { Heading } from "../atoms/Heading"
import { LinkButton } from "../atoms/Button"
import { Paragraph } from "../atoms/Paragraph"
import { Icon } from "../atoms/Icon"
import lemonFruit from "../../assets/images/lemonFruit1.png";
import lemonFruit2 from "../../assets/images/lemonFruit2.png"
import { motion } from "framer-motion"
import { Svg } from "../atoms/Svg"

export const Banner = () => {
  const { wpPage } = useBannerQuery()
  console.log(wpPage)

  return (
    <Wrapper>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4C57CF"
          d="M32.7,-54.4C46.7,-48.5,65.4,-48.5,66.9,-40.4C68.5,-32.4,52.9,-16.2,44.5,-4.9C36,6.5,34.8,12.9,36.1,25.9C37.4,38.8,41.1,58.3,35.5,63.6C29.9,68.8,15,59.9,4.9,51.4C-5.1,42.9,-10.3,34.8,-23.5,34C-36.8,33.1,-58.2,39.5,-69.3,35.1C-80.4,30.6,-81.2,15.3,-81.2,0C-81.2,-15.3,-80.3,-30.6,-73.3,-42.2C-66.3,-53.7,-53.2,-61.6,-40,-68C-26.8,-74.3,-13.4,-79.1,-2,-75.6C9.3,-72.1,18.7,-60.3,32.7,-54.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <Image
        bannerimg
        image={
          wpPage.acfBanner.image1.localFile.childImageSharp.gatsbyImageData
        }
        alt="Banner image"
      />
      <Icon
        custom
        src={lemonFruit}
        width="7.5vw"
        top="58%"
        left="1%"
        as={motion.img}
        animate={{ x: [-50, 60], y: 30 }}
        transition={{ duration: 1.5 }}
      />
      <Icon
        custom
        src={lemonFruit2}
        width="5.5vw"
        top="8%"
        left="100%"
        as={motion.img}
        initial={{ rotate: 270 }}
        animate={{ x: -120, y: [50, 30] }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      <InnerWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      >
        <Paragraph decorativeText>Witaj w LemonBay</Paragraph>
        <Heading secondVersion children={wpPage.acfBanner.imagetext1} />
        <Paragraph smallText children={wpPage.acfBanner.imagedesc1} />
        <Paragraph
          contentTextAlt
          children="Zapoznaj się z nasza ofertą i dołącz do wielu zadowolonych klientów"
        />
        <ButtonsWrapper>
          <LinkButton to="/about">Projekty</LinkButton>
          <LinkButton secondBtn to="/about">Kontakt</LinkButton>
        </ButtonsWrapper>
      </InnerWrapper>

      <Svg fill="hsla(132, 77%, 76%, .4)" top="35%" left="50%" desktop />
      <Svg fill="hsla(132, 77%, 76%, .3)" top="10%" left="12%" desktop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.elemColor.primary};
  position: relative;
  padding: 50px 10px;
  & > svg {
    position: absolute;
    width:800px;
    left:0;
    bottom:-200px;
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 70px 50px 0px 50px;
    height: 680px;
  }
  @media (min-width: 1400px) {
    flex-direction: row-reverse;
    padding: 70px 100px 0px 100px;
  }
  @media (orientation: landscape) and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #fff;
  width: 85%;
  margin: 0 auto;
  text-align: left;
  z-index: 10;
  & > div {
    display: flex;
  }
  & > h1 {
    color: #fff;
  }
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1400px) {
    width: 30%;
    margin-top: -100px;
  }
  @media (orientation: landscape) and (max-width: 768px) {
    margin-left: 20px;
  }
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
   & > button,a {
     margin-left:8px;
     margin-top: 8px;
   }
   @media (min-width: 768px) {
      flex-direction: row;
  }
`
