import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { media } from '../../../../theme/helper'


export const NavMenuWrapper = styled.div<{ isOpen: boolean }>`
  height: 100%; 
  width: 20px;
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: ${props => props.theme.elevation1};
  overflow-x: hidden; 
  padding-top: 100px; 
  transition: 0.5s; 
  border-right: 0.055rem solid ${props => props.theme.navLine};

  ${media.rubber} {
      width: 1.11rem;
  }

  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
          width: 120px;
          ${media.rubber} {
            width: 6.66rem;
          }
    `}
`

export const TextStyled = styled.div<{ isActive: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 13px;
  color: #B4BBC0;

  ${media.rubber} {
    font-size: 0.66rem;
    line-height: 0.77rem;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
        font-weight: 500;
          color: #788086;
    `}
`

export const NavLinkWrappper = styled.div<{ isActive: boolean }>`
  padding: 7px 0;
  width: 120px;
  cursor: pointer;
  margin-bottom: 10px;

  ${media.rubber} {
    height: 5rem;
    width: 6.66rem;
    margin-bottom: 2.611rem;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
        background-color: ${props => props.theme.navActive}
    `}
`

export const SvgWrapper = styled.div<{ isActive: boolean, icon: string }>`
  margin: 0 auto;
  width: 35px; 
  height: 35px;
  background-size: 35px 35px;
  background-repeat: no-repeat;
  ${media.rubber} {
    margin: 0 auto 0.277rem;
    width: 2.22rem; 
    height: 2.22rem;
    background-size: 2.22rem 2.22rem;
  }

  ${({ icon }: { icon: string }) => {
    switch (icon) {
      case "courses":
        return css`
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg %3E%3Cpath d='M11.6665 28.355L19.0215 28.33L35.0748 12.43C35.7048 11.8 36.0515 10.9633 36.0515 10.0733C36.0515 9.18331 35.7048 8.34665 35.0748 7.71665L32.4315 5.07331C31.1715 3.81331 28.9732 3.81998 27.7232 5.06831L11.6665 20.9716V28.355ZM30.0748 7.42998L32.7232 10.0683L30.0615 12.705L27.4182 10.0633L30.0748 7.42998ZM14.9998 22.3616L25.0498 12.4066L27.6932 15.05L17.6448 25.0016L14.9998 25.01V22.3616Z' fill='%23B4BBC0'/%3E%3Cpath d='M8.33333 35H31.6667C33.505 35 35 33.505 35 31.6667V17.22L31.6667 20.5533V31.6667H13.5967C13.5533 31.6667 13.5083 31.6833 13.465 31.6833C13.41 31.6833 13.355 31.6683 13.2983 31.6667H8.33333V8.33333H19.745L23.0783 5H8.33333C6.495 5 5 6.495 5 8.33333V31.6667C5 33.505 6.495 35 8.33333 35Z' fill='%23B4BBC0'/%3E%3C/g%3E%3C/svg%3E%0A");  
        `
      case "news":
        return css`
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.60801 32.585C3.91801 33.0517 4.43967 33.3333 4.99967 33.3333H29.9997C30.6663 33.3333 31.2697 32.9367 31.5313 32.3233L36.5313 20.6567C36.6409 20.4032 36.6856 20.1265 36.6615 19.8514C36.6374 19.5764 36.5452 19.3117 36.3933 19.0811C36.2413 18.8506 36.0343 18.6616 35.791 18.531C35.5477 18.4005 35.2758 18.3325 34.9997 18.3333H33.333V11.6667C33.333 9.82833 31.838 8.33333 29.9997 8.33333H19.833L16.0263 5.355C15.7336 5.12499 15.372 4.99997 14.9997 5H6.66634C4.82801 5 3.33301 6.495 3.33301 8.33333V31.6667H3.34467C3.34096 31.9919 3.4325 32.3111 3.60801 32.585V32.585ZM28.9013 30H7.52801L11.0997 21.6667H32.473L28.9013 30ZM29.9997 11.6667V18.3333H9.99967C9.33301 18.3333 8.72967 18.73 8.46801 19.3433L6.66634 23.5483V11.6667H29.9997Z' fill='%23B4BBC0' /%3E%3C/svg%3E%0A");
        `
      case "achievements":
        return css`
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg %3E%3Cpath d='M10.8602 23.8716L8.37687 34.625C8.29998 34.9506 8.32306 35.2918 8.44311 35.6041C8.56317 35.9164 8.77461 36.1852 9.04982 36.3755C9.32504 36.5658 9.65123 36.6686 9.98579 36.6706C10.3204 36.6726 10.6478 36.5736 10.9252 36.3867L20.0002 30.3366L29.0752 36.3867C29.3591 36.5751 29.6939 36.6722 30.0346 36.6647C30.3753 36.6572 30.7055 36.5456 30.9809 36.3449C31.2562 36.1441 31.4635 35.8638 31.5748 35.5418C31.6861 35.2197 31.6962 34.8713 31.6035 34.5433L28.5552 23.8766L36.1152 17.0733C36.3573 16.8553 36.5303 16.5711 36.6126 16.2558C36.6949 15.9406 36.683 15.6081 36.5784 15.2996C36.4737 14.991 36.281 14.7199 36.0239 14.5197C35.7668 14.3195 35.4567 14.1991 35.1319 14.1733L25.6302 13.4167L21.5185 4.31498C21.3874 4.02191 21.1743 3.77304 20.9049 3.59842C20.6355 3.42379 20.3213 3.33087 20.0002 3.33087C19.6791 3.33087 19.3649 3.42379 19.0955 3.59842C18.8261 3.77304 18.613 4.02191 18.4819 4.31498L14.3702 13.4167L4.86854 14.1717C4.5493 14.1969 4.2441 14.3137 3.98946 14.5079C3.73483 14.7021 3.54153 14.9655 3.4327 15.2667C3.32386 15.5679 3.3041 15.894 3.37578 16.2062C3.44746 16.5183 3.60754 16.8031 3.83687 17.0266L10.8602 23.8716ZM15.6152 16.6616C15.9127 16.6382 16.1984 16.5352 16.4424 16.3633C16.6864 16.1915 16.8796 15.9572 17.0019 15.685L20.0002 9.04998L22.9985 15.685C23.1208 15.9572 23.3141 16.1915 23.558 16.3633C23.802 16.5352 24.0877 16.6382 24.3852 16.6616L31.0052 17.1866L25.5535 22.0933C25.0802 22.52 24.8919 23.1766 25.0652 23.79L27.1535 31.0983L20.9269 26.9466C20.6536 26.7632 20.3319 26.6653 20.0027 26.6653C19.6736 26.6653 19.3518 26.7632 19.0785 26.9466L12.5719 31.285L14.3219 23.7083C14.386 23.4297 14.3774 23.1392 14.2969 22.8648C14.2163 22.5904 14.0665 22.3414 13.8619 22.1416L8.79854 17.205L15.6152 16.6616Z' fill='%23B4BBC0'/%3E%3C/g%3E%3C/svg%3E%0A");
        `
      case "arena":
        return css`
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.001 512.001' style='enable-background:new 0 0 512.001 512.001;' xml:space='preserve' fill='%23B4BBC0'%3E%3Cg%3E%3Cg %3E%3Cpath d='M507.606,4.394c-3.339-3.339-8.055-4.909-12.728-4.243L346.387,21.364c-3.688,0.527-7.047,2.406-9.425,5.273 L139.321,264.938c-16.353-7.263-36.394-4.357-50.074,9.323l-21.213,21.213c-5.854,5.854-5.857,15.356,0,21.213l31.82,31.82 l-48.64,48.64H45c-24.813,0-45,20.187-45,45V467c0,24.813,20.187,45,45,45h24.853c24.813,0,45-20.187,45-45v-6.213l48.639-48.64 l31.82,31.82c5.854,5.854,15.356,5.857,21.213,0l21.212-21.213c13.638-13.638,16.611-33.666,9.323-50.075l238.302-197.641 c2.866-2.378,4.746-5.737,5.273-9.425L511.85,17.121C512.517,12.447,510.945,7.732,507.606,4.394z M84.853,467 c0,8.271-6.729,15-15,15H45c-8.271,0-15-6.729-15-15v-24.853c0-8.271,6.729-15,15-15h6.213l33.64,33.64V467z M99.853,433.36 L78.64,412.147l42.426-42.426l21.213,21.213L99.853,433.36z M216.525,401.54l-10.606,10.606L99.853,306.081l10.607-10.606 c5.863-5.863,15.349-5.863,21.213,0l84.853,84.853C222.388,386.191,222.388,395.677,216.525,401.54z M461.757,155.642 L228.075,349.451l-22.156-22.157l174.408-174.408c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0 L184.706,306.081l-22.156-22.156L356.358,50.244l122.964-17.566L461.757,155.642z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
        `
    }
  }}

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
       opacity: 0.5;
    `}
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #B4BBC0;
`

export const ThemeToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 120px;
  ${media.rubber} {
    margin-bottom:0.8333rem;
    width: 6.66rem;
  }
`


