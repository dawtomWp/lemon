import React from 'react';
import styled from 'styled-components';
import iconHamburger from '../../assets/icons/icon-hamburger.svg';

const HamburgerButton = styled.div`
  img {
   position: fixed;
   display:block;
   z-index:100;
   right:30px;
   top:29px;
   width:40px;
   height:40px;
   cursor: pointer;
  }

  @media (min-width: 768px) {
     display: none;
  }
`
export const Hamburger = ({onClick}) => {
   return ( 
      <HamburgerButton onClick={onClick}>
         <img src={iconHamburger} alt="menu hamburger"/>
      </HamburgerButton>
    );
}
 

