import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const WrapperStyled = styled.div`
  padding-top: 50px;

  ${media.rubber} {
    padding-top: 2.78rem;
  }

  ${media.phone} {
    padding-top: 2.78rem;
  }
`

export const NewsWrapper = styled.div`
  display: flex;
  width: 1114px;
  flex-wrap: wrap;
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

export const ArticleWrapper = styled.div`
  height: 348px;
  margin: 3px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.elevation2};
  box-shadow: 1.35484px 1.35484px 7.4194px rgba(0, 0, 0, 0.04);
  border-radius: 9.35484px;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    transform: scale(1.01); 
  }
  ${media.rubber} {
    height: 19.33rem;
    margin: 0.166rem;
    margin-bottom: 0.55rem;
    border-radius: 0.277rem;
    box-shadow: 0.072rem 0.072rem 0.412rem rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
  }

  ${media.phone} {
    width: 100%;
    height: 270px;
    margin: 0.166rem;
    margin-bottom: 0.55rem;
    border-radius: 0.277rem;
    box-shadow: 0.072rem 0.072rem 0.412rem rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
  }
`

export const FirstRowImageWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  height: 206px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  &:hover {
    opacity: 0.95;
  }

  ${media.rubber} {
    border-radius: 0.277rem 0.277rem 0 0;
    height: 11.44rem;
  }

  ${media.phone} {
    height: 150px;
    border-radius: 0.277rem 0.277rem 0 0;
  }
`

export const ImageStyled = styled.img`
  border-radius: inherit;
  position: absolute;
`

export const SecondRowArticleWrapper = styled(ArticleWrapper) <{ image: string }>`
  width: 550px;
  position: relative;

  ${media.rubber} {
    width: 30.55rem;
  }

  ${media.phone} {
    width: 100%;
    height: 300px;
  }

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.2)),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  &:nth-child(2) {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.95;
  }
`

export const SecondRowArticleContentWrapper = styled.div`
  left: 10px;
  position: absolute;
  bottom: 15px;
  color: white;

  ${media.rubber} {
    left: 0.55rem;
    bottom: 0.83rem;
  }

  ${media.phone} {
    left: 0.55rem;
    bottom: 0.83rem;
  }
`

export const FirstRowArticleWrapper = styled(ArticleWrapper)`
  width: 364px;

  ${media.rubber} {
    width: 20.22rem;
  }

  ${media.phone} {
    width: 100%;
  }
`

export const FirstRowArticleContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  color: ${(props) => props.theme.titleText};
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;

  ${media.rubber} {
    padding: 0.55rem;
    border-radius: 0.277rem;
  }

  ${media.phone} {
    padding: 0.55rem;
    border-radius: 0.277rem;
  }
`

export const ArticleTitleStyled = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: Rubik;
  font-style: normal;

  ${media.rubber} {
    font-size: 1rem;
    margin-bottom: 0.83rem;
  }

  ${media.phone} {
      font-size: 20px;
    margin-bottom: 0.83rem;
  }
`

export const ArticleTimeStyled = styled.div`
  margin-bottom: 12px;
  color: #b4bbc0;
  font-size: 11px;

  ${media.rubber} {
    margin-bottom: 0.66rem;
    font-size: 0.61rem;
  }

  ${media.phone} {
    margin-bottom: 5px;
    font-size: 13px;
  }
`
