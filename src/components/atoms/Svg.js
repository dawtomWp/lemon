import React from 'react';
import styled,{css} from 'styled-components';

const StyledSvg = styled.svg`
   
   position:absolute;
   top:  ${(props) => props.top};
   left: ${(props) => props.left};
   z-index:-1;

   ${({desktop}) => desktop && css`
        display:none;
     @media(min-width:768px) {
         display: block;
     }
   `}
   
`

export const Svg = ({fill,top,left, desktop}) => {
    return ( 
        <StyledSvg desktop={desktop} top={top} left={left} version="1.1" xmlns="http://www.w3.org/2000/svg" width="347" height="400" viewbox="0 0 346.41016151377545 400"><path fill={fill} d="M173.20508075688772 0L346.41016151377545 100L346.41016151377545 300L173.20508075688772 400L0 300L0 100Z"></path></StyledSvg>
     );
}
