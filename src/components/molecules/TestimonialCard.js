import React from "react"
import styled from "styled-components"
import { Paragraph } from "../atoms/Paragraph"
import { AiFillStar } from "react-icons/ai"
import { TriangleShape } from "../atoms/TriangleShape"

export const TestimonialCard = ({ opinion }) => {
  const ratingStars = opinion.testimonialsRating
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledParagraph contentText>
          {opinion.testimonialsName} {opinion.testimonialsSurname}
        </StyledParagraph>
        {opinion.testimonialsCompany && (
          <StyledParagraph contentText>{opinion.testimonialsCompany}</StyledParagraph>
        )}
      </InnerWrapper>

      <Paragraph opinionsText>{opinion.testimonialsOpinion}</Paragraph>
      <StyledRatings>
        {new Array(ratingStars).fill("").map(() => (
          <StyledStar />
        ))}
      </StyledRatings>
      <TriangleShape/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:  7px 24px 17px 1px rgba(0,0,0, .1);
  background-color: #fff;
  max-width: 290px;
  height: 260px;
  margin-left:30px;
  padding: 8px 15px;
  border-radius: 10px 10px 10px 0px;
  @media(min-width:768px) {
    max-width:350px;
  }
`
const InnerWrapper = styled.div`
    display:flex;
    justify-content: space-between;
`
const StyledParagraph = styled(Paragraph)`
    color: ${({theme})=> theme.elemColor.secondary};
`
const StyledRatings = styled.div`
  width:100px;
  text-align:left;
`
const StyledStar = styled(AiFillStar)`
  color: ${({ theme }) => theme.elemColor.primary};
  font-size: 18px;
`
