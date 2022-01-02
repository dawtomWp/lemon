import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
 *, *::before, *::after {
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
// happy rems
html {
    font-size: 62.5%; // dzieki temu 1 rem === 10px a nie 16

}

body {
   font-size: 1.6rem; //sprawiamy zeby dalej byla bazowa fontu wielkosc czaisz nie ?
   font-family: 'Poppins', sans-serif;
   padding:0;
   margin:0;
   color: hsla(208,22%,15%,1);
   background-color: hsla(228,38%,95%,1);
}
button {
    cursor:pointer;
}
a {
    padding: 0;
    margin:0;
    text-decoration: none;
}
h1, h2 {
    font-family: 'Mochiy Pop P One', sans-serif;
    letter-spacing:1px;
.nav-active {
    color: #ee2562;
  }
.swiper-wrapper {
    height:330px !important;
    padding-top:35px;
}

.swiper-slide-prev {
    transition: all .7s;
    opacity:1 !important;
    transform: translateY(-35px) !important;
}
.swiper-slide {
    opacity: 1;
}
@media(min-width: 768px) {
    .swiper-slide {
    opacity: 0.6;

}
}
}
`
