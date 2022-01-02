import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useAddressQuery } from "../../hooks/useAddressQuery"
import { Paragraph } from "../atoms/Paragraph"
import { Icon } from "../atoms/Icon"
import imgLogo from "../../assets/icons/logo.png"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import euro from '../../assets/images/logotypPower.png'

export const Footer = () => {
  const { addressQuery } = useAddressQuery()
  return (
    <div style={{ position: "relative", background: '#23272a', marginTop:'80px'}}>
      <Wrapper>
        <InnerWrapper>
          <Link to="/">
            <Icon src={imgLogo} alt="logo" />
          </Link>
          <div>
            <Paragraph contentText>
              {addressQuery.acfAddress.companyName}
            </Paragraph>
            <Paragraph opinionsText>
              {addressQuery.acfAddress.companyCity}
            </Paragraph>
            <Paragraph opinionsText>
              {addressQuery.acfAddress.companyStreet}
            </Paragraph>
            <IconsWrapper>
              <Link to="/">
                <FaFacebookF />
              </Link>

              <Link to="/">
                <FaInstagram />
              </Link>

              <Link to="/">
                <FaTwitter />
              </Link>
            </IconsWrapper>
          </div>
        </InnerWrapper>
        <StyledContact>
          <div>
            <Paragraph contentText children="Zadzwoń" />
            <Paragraph opinionsText>
              {addressQuery.acfAddress.companyPhone1}
            </Paragraph>
          </div>
          <div>
            <Paragraph contentText children="Napisz" />
            <Paragraph opinionsText>
              {addressQuery.acfAddress.companyEmail}
            </Paragraph>
          </div>
        </StyledContact>
        <ServicesWrapper>
          <Paragraph contentText children="Usługi" />
          <Link to="/">
            <Paragraph opinionsText>Strony internetowe</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>E-commerce</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>SEO</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>Szkolenia</Paragraph>
          </Link>
        </ServicesWrapper>
        <ServicesWrapper>
          <Paragraph contentText children="Projekty" />
          <Link to="/">
            <Paragraph opinionsText>Strony internetowe</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>E-commerce</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>SEO</Paragraph>
          </Link>
          <Link to="/">
            <Paragraph opinionsText>Szkolenia</Paragraph>
          </Link>

        </ServicesWrapper>

      </Wrapper>
      <BottomWrapper>
         <StyledParagraph opinionsText>
            @ 2021 LemonBay.pl. All right reserved
         </StyledParagraph>
         <img src={euro}/>
      </BottomWrapper>

    </div>
  )
}

const Wrapper = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 65px 35px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.second};
  z-index: 1;
  & > div {
    text-align: center;
  }
  @media (min-width: 768px) {
    max-width: 1152px;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`
const InnerWrapper = styled.div`
  text-align: left;
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  & > a {
    font-size: 25px;
    & > svg {
      color: ${({ theme }) => theme.textColor.second} !important;
    }
  }
`

const ServicesWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    & > a {
      color: ${({ theme }) => theme.textColor.second};
    }
  }
`
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 186px;
    & > div > p {
      text-align: left;
    }
  }
`
const StyledParagraph = styled.p`

`
const BottomWrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
width:100%;
max-width:1152px;
margin:0 auto;
& > img {
  width:320px;
}
color:#fff;
padding: 25px 3px 55px 5px;
border-top: 2px solid ${({theme})=>theme.elemColor.primary};
@media (min-width: 768px) {
  flex-direction:row


  }

`