import React from "react"
import styled from "styled-components"
import { useTestimonialsQuery } from "../../hooks/useTestimonialsQuery"
import Swiper from "react-id-swiper"
import SwiperCore from "swiper/core"
import { Autoplay } from "swiper/core"
import "swiper/swiper-bundle.css"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import { TestimonialCard } from "../molecules/TestimonialCard"
import { Heading } from "../atoms/Heading"
import { Paragraph } from "../atoms/Paragraph"
import { AiFillStar } from "react-icons/ai"
import { LinkButton } from "../atoms/Button"
import { Svg } from "../atoms/Svg"

SwiperCore.use([Autoplay])

const sliderParams = {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  spaceBetween: -650,
  speed: 400,
  autoplay: {
    delay: 4000,
    disabledOnInteraction: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      spaceBetween: -400,
      speed: 800,
    },
    // 500: {
    //   slidesPerView: 2,
    // }
  },
}

export const Testimonials = () => {
  const data = useTestimonialsQuery()
  console.log(data.opinions.edges)

  const handleAverageGrade = () => {
    let ratings = []
    for (let i = 0; i < data.opinions.edges.length; i++) {
      ratings.push(
        data.opinions.edges[i].node.acfTestimonials.testimonialsRating
      )
    }
    const result = ratings.reduce((a, b) => a + b) / data.opinions.edges.length
    console.log(result, ratings)
    return result
  }

  return (
    <>
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="hsla(165, 100%, 79%, .6)"
          fill-opacity="10"
          d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </StyledSvg>
      <Wrapper>
        <InnerWrapper>
          <div style={{ flexDirection: "column", textAlign: "left" }}>
            <Heading>Opinie klientów</Heading>
            <Paragraph decorativeText>Co myślą o nas klienci</Paragraph>
            <Paragraph smallText>
              Chcemy stawać się coraz lepsi. Podziel się swoją opinią na nasz
              temat!{" "}
            </Paragraph>
          </div>
          <StyledRatings>
            <Paragraph contentText>
              {data.opinions.edges.length}
              {data.opinions.edges.length > 4 ? " opinii" : " opinie"}
            </Paragraph>
            <Paragraph contentText style={{display:"flex", alignItems: "center"}}>
              Ocena: {handleAverageGrade()} <StyledStar />
            </Paragraph>
          </StyledRatings>
          <StyledContact>
            <Paragraph contentText>
              Masz pomysł jak ulepszyć nasz sposób działania?
            </Paragraph>
            <LinkButton
              to="/contact"
              style={{ textAlign: "center" }}
              children="Napisz do nas"
            />
          </StyledContact>
        </InnerWrapper>
        <StyledSwiper {...sliderParams} className="mySwiper">
          {data.opinions.edges.map(opinion => (
            <SwiperElement key={opinion.node.id}>
              <TestimonialCard opinion={opinion.node.acfTestimonials} />
            </SwiperElement>
          ))}
        </StyledSwiper>
        <Svg fill="hsla(132, 77%, 76%, .3)" top="13%" left="60%" desktop />
        <Svg fill="hsla(132, 77%, 76%, .2)" top="-11%" left="15%" desktop />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  padding: 35px 30px;
  background-color: ${({ theme }) => theme.elemColor.alternative};
  margin-top: -7px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    margin-bottom: 10px;
    padding: 10px 100px 90px;
  }
  @media (orientation: landscape) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledSwiper = styled(Swiper)`
  height: 600px;
`

const SwiperElement = styled.div`
  position: relative;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledStar = styled(AiFillStar)`
  color: ${({ theme }) => theme.elemColor.primary};
  font-size: 19px;
`
const StyledRatings = styled.div`
  display: flex;
  flex-direction: row;
  margin-right:20px;
  justify-content: space-between;
`
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 35px;
  justify-content: space-between;
`
const StyledSvg = styled.svg`
  width: 100%;
  margin-top:-220px;
`
