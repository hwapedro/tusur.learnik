import { createGlobalStyle } from 'styled-components'
import { media } from './helper'

type Props = {
  theme: {
    body: string
    text: string
  }
}

export const GlobalStyle = createGlobalStyle<Props>`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=cyrillic');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    background: ${(props) => props.theme.body};
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

  }

 

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html{
    font-size: 13px;

    ${media.rubber}{
      font-size: 13px;
    }

    @media only screen and (max-width: 1023px) and (min-width: 449px){
      font-size: 1.25vw;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`
