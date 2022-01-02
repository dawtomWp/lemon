import React from "react"
import styled from "styled-components"
import { useContentAreaQuery } from "../../hooks/useContentAreaQuery"
import { LinkButton } from "../atoms/Button"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { Card } from "../molecules/Card"
import lemon1 from "../../assets/images/lemonFruit1.png"
import lemon2 from "../../assets/images/lemonFruit2.png"
import lemon3 from "../../assets/images/lemonFruit3.png"
import lemon4 from "../../assets/images/lemonFruit4.png"

export const ContentCards = () => {
  const { wpPage } = useContentAreaQuery()
  // console.log(wpPage.acfHomepage.contentImage1)
  return (
    <Wrapper>
      <Heading children="Oferta dopasowana do twoich potrzeb" />
      <Paragraph decorativeText>Zapoznaj się z nasza ofertą</Paragraph>

      <InnerWrapper>
        <Card
          image={lemon1}
          text="Serwisy internetowe w technologii React.js"
          desc="
        Tworzenie stron typu Headless CMS w oparciu o Gatsby oraz Next.js. "
        />
        <Card
          image={lemon3}
          text="Strony portfolio i blogi w technologii Vue.js"
          desc="
         Tworzenie stron typu Headless CMS w intuicyjnym i prostym w obsłudze Prismic.io "
        />
        <Card
          image={lemon2}
          text="Serwisy internetowe w CMS Wordpress"
          desc="
        Serwisy internetowe z wykorzystaniem najpopularniejszego systemu CMS Wordpress
        "
        />
        <Card
          image={lemon4}
          text="Sklepy internetowe w systemie Woocommerce"
          desc="
        Sklepy internetowe tworzone w łatwym do zarządzania systemie Woocommerce opartym na CMS Wordpress. Technologia idealna dla małych i średnich sklepów
        "
        />
        <Card
          image={lemon4}
          text="Sklepy internetowe w technologii Magento 2"
          desc="
        Oferta skierowana do sklepów z większą ilością towarów. Magento 2 gwarantuje satysfakcję klientów i oferuje ogromne możliwości zarządzania sklepem
        "
        />

        <Card
          image={lemon2}
          text="Audyty i wdrożenia"
          desc="
        Wdrożenia z zakresu najpopularniejszych systemów ERP.
        "
        />
        <Card
          image={lemon1}
          text="Szkolenia IT"
          desc="
        Poznaj nowe technologie, bądź sposoby na zwiększenie sprzedaży i popularności w sieci dzięki szkoleniom z zakresu: front-end, back-end, e-commerce, SEO
        "
        />
        <Card
          image={lemon3}
          text="SEO i pozycjonowanie stron"
          desc="
        Zwiększ zasięgi swojego serwisu internetowego, a tym samym jego zasięgi i sprzedaż, dzięki optymalizacji strony zgodnie z najnowszymi trendami.
        "
        />
      </InnerWrapper>
      <Heading children="Potrzebujesz pomocy? Skontaktuj się z nami" />
      <LinkButton
        
        secondVersion
        to="/contact"
        style={{ textAlign: "center", margin: "40px auto 25px" }}
        children="Kontakt"
      />
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
  padding: 20px 0px;
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
  & > div:nth-child(4) {
    background: linear-gradient(141.48deg, #f837ee 1.35%, #ffcd4b);
  }
  & > div:nth-child(5) {
    background: linear-gradient(321.73deg, #ffcd4b -1.09%, #ee6315 100.65%);
  }
  & > div:nth-child(8) {
    background: linear-gradient(138.46deg, #3e70ff 1.48%, #9a98ff 98.75%),
      #ff73fa;
  }
  & > div:nth-child(7) {
    background: linear-gradient(142.53deg, #00a295, #26e8f4 98.75%), #3dcda7;
  }
  & > div:nth-child(6) {
    background: linear-gradient(141.48deg, #f837ee 1.35%, #cf4bff);
  }
  cursor: pointer;
`
