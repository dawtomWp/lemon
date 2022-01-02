import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Paragraph } from "../atoms/Paragraph"

export const Post = ({ bigger, image, title, excerpt, uri, img }) => {
  return (
    <StyledLink to={uri} bigger={bigger} img={img}>
      <Paragraph contentText children={title} />
      <Paragraph opinionsText dangerouslySetInnerHTML={{__html: excerpt}}/>
    
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  margin-bottom: 25px;
  background-image: url(${props => props.img});
  transition: all 0.3s;
  height: 230px;
  border-radius: 10px;
  cursor: pointer;
  &:hover:before {
    opacity:.1;
  }

  & > p {
    margin-left: 20px;
    color: #fff;
    z-index:100;

  }
  &::before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    border-radius: 10px;
    height:100%;
    background-color: rgba(0,0,0,1);
    opacity: .5;
    transition: opacity .3s;
  }
`
