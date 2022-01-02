import styled,{css} from 'styled-components';

export const Icon = styled.img`
   width: ${prop => prop.logo ? "55px" : "65px"};
   z-index:5;

   ${({largeLogo})=> largeLogo && css`
      width:55px;
      margin-bottom:25px;
   `}
   ${({custom}) => custom && css`
      position: absolute;
      width:${(props) => props.width};
      left:${(props) => props.left};
      top:${(props) => props.top};
      transform:${(props) => props.rotate};
   `}
`