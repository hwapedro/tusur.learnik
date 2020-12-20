import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const WrapperStyled = styled.div``

export const ArticleWrapper = styled.div`
  display: flex;
  width: 1114px;
  flex-direction: column;
  margin: 0 auto;

  ${media.rubber} {
    width: 61.83rem;
  }

  ${media.phone} {
    display: block;
    width: 100vw;
    padding: 0 7% 15px;
  }
`

export const ImageWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  width: 1114px;
  height: 590px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  ${media.rubber} {
    border-radius: 0.27rem 0.27rem 0 0;
    width: 60rem;
    height: 32.77rem;
  }

  ${media.phone} {
    border-radius: 0.27rem 0.27rem 0 0;
    width: 100%;
    height: 100%;
  }
`

export const NavigationWrapper = styled.div`
  line-height: 43px;
  margin-bottom: 25px;
  font-family: Rubik;
  font-style: normal;
  ${media.rubber} {
    line-height: 2.388rem;
  }

  ${media.phone} {
    line-height: 2.388rem;
    margin-bottom: 10px;
  }
`

export const NavigationNewsStyled = styled.span`
  cursor: pointer;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #b4bbc0;
  margin: 50px 10px 0 0;
  &:after {
    content: '';
    height: 12px;
    margin: 1px 0 0 15px;
    display: inline-block;
    vertical-align: middle;
    width: 8px;
    background-size: 8px 12px;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-4.37114e-07 1.414L4.293 5.707L-6.18079e-08 10L1.414 11.414L7.121 5.707L1.414 8.91866e-07L-4.37114e-07 1.414Z' fill='%23B4BBC0'/%3E%3C/svg%3E%0A");
  }

  ${media.rubber} {
    font-size: 1rem;
    line-height: 1.166rem;
    margin: 2.77rem 0.55rem 0 0;
    &:after {
      height: 0.66rem;
      margin: 0.055rem 0 0 0.833rem;
      width: 0.444rem;
      background-size: 0.444rem 0.666rem;
      background-image: url("data:image/svg+xml,%3Csvg width='0.444rem' height='0.666rem;' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-4.37114e-07 1.414L4.293 5.707L-6.18079e-08 10L1.414 11.414L7.121 5.707L1.414 8.91866e-07L-4.37114e-07 1.414Z' fill='%23B4BBC0'/%3E%3C/svg%3E%0A");
    }
  }

  ${media.phone} {
    font-size: 1.22rem;
    line-height: 1.166rem;
    margin: 2.77rem 0.55rem 0 0;
    &:after {
      height: 0.66rem;
      margin: 0.055rem 0 0 0.833rem;
      width: 0.444rem;
      background-size: 0.444rem 0.666rem;
      background-image: url("data:image/svg+xml,%3Csvg width='0.444rem' height='0.666rem;' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-4.37114e-07 1.414L4.293 5.707L-6.18079e-08 10L1.414 11.414L7.121 5.707L1.414 8.91866e-07L-4.37114e-07 1.414Z' fill='%23B4BBC0'/%3E%3C/svg%3E%0A");
    }
  }
`

export const NavigationArticleStyled = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #b4bbc0;
  ${media.rubber} {
    font-size: 1rem;
    line-height: 1.166rem;
  }

  ${media.phone} {
    font-size: 1.22rem;
    line-height: 1.166rem;
  }
`

export const ImageStyled = styled.img``

export const TitleWrapper = styled.div`
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  text-align: center;
  border: 1px solid #b4bbc0;
  border-top: none;
  width: 1114px;

  margin-bottom: 50px;

  ${media.rubber} {
    border-radius: 0 0 0.27rem 0.27rem;
    border: 0.055rem solid #b4bbc0;
    width: 60rem;
    margin-bottom: 2.77rem;
  }

  ${media.phone} {
    border-radius: 0 0 0.27rem 0.27rem;
    border: 0.055rem solid #b4bbc0;
    width: 100%;
    margin-bottom: 1.5rem;
  }
`

export const TitleStyled = styled.div`
  font-family: Rubik;
  margin: 35px 0px;
  text-transform: uppercase;
  color: ${(props) => props.theme.titleText};
  font-size: 40px;
  font-weight: 900;
  font-style: italic;

  ${media.rubber} {
    margin: 1.944rem 0px;
    text-transform: uppercase;
    font-size: 2.22rem;
  }

  ${media.phone} {
    margin: 1.944rem 0px;
    text-transform: uppercase;
    font-size: 2.22rem;
  }
`

export const MetaWrapper = styled.div`
  border-top: 1px solid #b4bbc0;
  height: 42px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.rubber} {
    border-top: 0.055rem solid #b4bbc0;
    height: 2.33rem;
  }

  ${media.phone} {
    border-top: 0.055rem solid #b4bbc0;
    height: 2.33rem;
  }
`

export const DateStyled = styled.div`
  height: 100%;
  font-size: 15px;
  font-weight: 500;
  border-right: 1px solid #b4bbc0;
  padding: 10px 20px 10px 0;
  vertical-align: middle;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 0.83rem;
    padding: 0.55rem 1.11rem 0.55rem 0;
  }

  ${media.phone} {
    font-size: 1.11rem;
    padding: 0.55rem 1.11rem 0.55rem 0;
  }
`

export const ShareStyled = styled.div`
  cursor: pointer;
`

export const TextStyled = styled.div`
  margin: 0px 80px 70px;
  color: ${(props) => props.theme.commonText};
  p {
    line-height: 2.2;
    font-family: Rubik;
    font-style: normal;
    font-size: 17px;
    margin-bottom: 20px;
  }

  a {
    padding-bottom: 3px;
    text-decoration: none;
    color: ${(props) => props.theme.commonText};
    border-bottom: ${(props) => props.theme.link};
  }

  ${media.rubber} {
    margin: 3.88rem 4.44rem;
    p {
      font-size: 0.944rem;
      margin-bottom: 1.11rem;
    }
  }

  ${media.phone} {
    margin: 0 4%;
    p {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
    }
  }
`

export const BottomMetaWrapper = styled.div`
  width: 1113px;
  max-width: 400px;
  margin: 4% auto;

  ${media.rubber} {
    width: 61.83rem;
    max-width: 22.22rem;
  }

  ${media.phone} {
    width: 100%;
    max-width: 60%;
  }
`

export const BeforeSocialWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`
export const BeforeLineStyled = styled.hr`
  width: 100%;
  height: 1px;
  flex: 1 1 0%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  background: rgb(193, 193, 193);

  ${media.rubber} {
    height: 0.055rem;
  }

`
export const MetaLabelStyled = styled.label`
  text-transform: uppercase;
  flex-shrink: 0;
  color: ${(props) => props.theme.commonText};
  font-size: 0.625rem;
  letter-spacing: 0.15em;
  margin: 0px 10px;
  cursor: default;

  ${media.rubber} {
    margin: 0px 0.55rem;
  }
`
export const SocialWrapper = styled.div`
  display: block;
  margin-top: 3px;
  text-align: center;
  height: 32px;
  color: rgb(204, 167, 92);

  ${media.rubber} {
    margin-top: 0.166rem;
    height: 1.77rem;
  }
`
export const SocialListStyled = styled.ul`
  height: 100%;
  width: 100px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
`

export const ListItemStyled = styled.li`
  height: 100%;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
`

export const SvgButtonStyled = styled.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  background-color: transparent;
  color: inherit;
  padding: 8px 10px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;

  ${media.rubber} {
    width: 2.22rem;
    padding: 0.44rem 0.55rem;
  }
`
export const SvgStyled = styled.svg`
  display: block;
  height: 100%;
  fill: currentcolor;
  margin: 0px auto;
`

export const AfterLineWrapper = styled.div`
  display: block;
  margin-top: 3px;
  text-align: center;
  height: 32px;
  color: rgb(204, 167, 92);

  ${media.rubber} {
    margin-top: 0.166rem;
    height: 1.77rem;
  }
`

export const AfterLineStyled = styled.div`
  width: 100%;
  height: 1px;
  flex: 1 1 0%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  background: rgb(193, 193, 193);
  box-sizing: content-box;
  overflow: visible;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
`
