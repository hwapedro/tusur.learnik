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

export const HeaderPageWrapper = styled.div`
  margin: 0 auto 50px;
  width: 1113px;

  ${media.rubber} {
    margin: 0 auto 2.78rem;
    width: 61.83rem;
  }
`

export const CoursesWrapper = styled.div`
  width: 1114px;
  grid-column-gap: 26px;
  grid-row-gap: 26px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${media.rubber} {
    width: 61.83rem;
    grid-column-gap: 1.44rem;
    grid-row-gap: 1.44rem;
  }

  ${media.phone} {
    display: block;
    width: 100vw;
    padding: 0 7% 15px;
  }
`

export const GradientLineStyled = styled.div<{
  gradientIndex: number
  courseStarted: boolean
}>`
  height: 5px;
  border-radius: 5px 5px 0 0;
  background: ${(props) =>
    props.theme.coursesGradients &&
    props.theme.coursesGradients[props.gradientIndex].gradientColor};

  ${media.rubber} {
    height: 0.28rem;
    border-radius: 0.28rem 0.28rem 0 0;
  }

  ${({ courseStarted }: { courseStarted: boolean }) =>
    !courseStarted &&
    css`
      background: ${(props) => props.theme.disabledGradient};
    `}
`

export const CourseCardStyled = styled.div<{
  gradientIndex: number
  courseStarted: boolean
}>`
  cursor: pointer;
  width: 362px;
  height: 327px;
  grid-row: span 1;
  position: relative;
  
  box-shadow: ${(props) => props.theme.boxShadow};

  &:after {
    bottom: -15px;
    left: -10px;
    border-radius: 5px;
    content: '';
    position: absolute;
    z-index: -1;
    height: 105%;
    width: 104%;
    opacity: 0.2;
    -webkit-filter: blur(9px);
    -moz-filter: blur(9px);
    -o-filter: blur(9px);
    -ms-filter: blur(9px);
    filter: blur(9px);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  transition: all 0.5s;
  &:hover{
    transform: translateY(-5px);
  }


  ${media.rubber} {
    width: 20.11rem;
    height: 18.17rem;
    &:after {
      bottom: -0.83rem;
      left: -0.55rem;
      border-radius: 0.27rem;
      -webkit-filter: blur(0.5rem);
      -moz-filter: blur(0.5rem);
      -o-filter: blur(0.5rem);
      -ms-filter: blur(0.5rem);
      filter: blur(0.5rem);
    }
  }

  ${media.phone} {
    width: 100%
    height: auto;
    margin-bottom: 15px;
    margin-right: 0;
      &:after {
        bottom: -15px;
        left: -10px;
        border-radius: 5px;
        content: '';
        -webkit-filter: blur(9px);
        -moz-filter: blur(9px);
        -o-filter: blur(9px);
        -ms-filter: blur(9px);
        filter: blur(9px);
      }
  }
`

export const CourseContentWrapper = styled.div`
  position: relative;;
  height: 100%;
  padding: 30px 45px 0;
  border-radius: 0 0 5px 5px;
  background: ${(props) => props.theme.elevation2};

  ${media.rubber} {
    height: 17.88rem;
    padding: 1.66rem 2.5rem 0;
    border-radius: 0 0 0.27rem 0.27rem;
  }

  ${media.phone} {
    padding: 1.66rem 2.5rem 0;
    border-radius: 0 0 0.27rem 0.27rem;
  }
`

export const CourseTitleStyled = styled.div<{
  gradientIndex: number
  courseStarted: boolean
}>`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: Rubik;
  font-style: normal;
  background: ${(props) =>
    props.theme.coursesGradients &&
    props.theme.coursesGradients[props.gradientIndex].gradientColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.rubber} {
    font-size: 1.66rem;
    margin-bottom: 0.83rem;
  }

  ${media.phone} {
    font-size: 28px;
    margin-bottom: 0.83rem;
  }

  ${({ courseStarted }: { courseStarted: boolean }) =>
    !courseStarted &&
    css`
      background: ${(props) => props.theme.disabledGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`

export const CourseAnnotationStyled = styled.div`
  width: 223px;
  height: 68px;
  font-size: 14px;
  line-height: 17px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  color: #a3aaaf;

  ${media.rubber} {
    width: 12.38rem;
    height: 3.77rem;
    font-size: 0.77rem;
    line-height: 0.94rem;
  }

  ${media.phone} {
    width: 100%;
    height: 3.77rem;
    font-size: 1rem;
    line-height: 0.94rem;
  }
`

export const CourseBottomWrapper = styled.div`
  height: 28px;
  bottom: 35px;
  position: absolute;
  display: flex;
  flex-direction: row;

  ${media.rubber} {
    height: 1.55rem;
    bottom: 1.94rem;
  }

  ${media.phone} {
    display: block;
    margin-top: 48px;
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 15px;
  }
`

export const LessonsDoneStyled = styled.div<{ courseStarted: boolean }>`
  font-size: 24px;
  line-height: 28px;
  margin-right: 10px;
  border-radius: 5px;
  width: 75px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background: ${(props) => props.theme.completeCounter};
  color: #fcfcfc;

  ${media.rubber} {
    font-size: 1.33rem;
    line-height: 1.55rem;
    margin-right: 0.55rem;
    border-radius: 0.27rem;
    width: 4.16rem;
  }

  ${media.phone} {
    display: inline-block;
    font-size: 1.33rem;
    width: 4.16rem;
    margin-right: 0.55rem;
    border-radius: 0.27rem;
  }

  ${({ courseStarted }: { courseStarted: boolean }) =>
    !courseStarted &&
    css`
      background: ${(props) => props.theme.completeCounterDisabled};
    `}
`

export const CompletedTextStyled = styled.div`
  font-size: 12px;
  line-height: 14px;
  width: 65px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  color: #a3aaaf;

  ${media.rubber} {
    font-size: 0.66rem;
    line-height: 0.77rem;
    width: 3.61rem;
  }

  ${media.phone} {
    display: inline-block;
    font-size: 13px;
    margin-left: 5px;
    line-height: 0.77rem;
    width: auto;
  }
`

export const CourseButton = styled.div`
  font-size: 15.6px;
  line-height: 18px;
  display: flex;
  align-self: flex-end;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  &:after {
    height: 12px;
    margin: 3px 0 0 10px;
    width: 9px;
    background-size: 9px 12px;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }

  ${media.rubber} {
    font-size: 0.86rem;
    line-height: 1rem;
    &:after {
      height: 0.66rem;
      margin: 0.16rem 0 0 0.55rem;
      width: 0.5rem;
      background-size: 0.5rem 0.66rem;
    }
  }

  ${media.phone} {
    display: block;
    font-size: 1.33rem;
    line-height: 1rem;
    margin-left: 0;
    text-align: end;
    margin-top: 15px;
    &:after {
      height: 0.66rem;
      margin: 3px 0 0 10px;
      width: 0.5rem;
      background-size: 0.5rem 0.66rem;
    }
  }
`

export const LessonsAmountStyled = styled.span`
  font-weight: 500;
`

export const BeginStyled = styled(CourseButton)`
  margin-left: 60px;

  color: #00a7e1;
  &:after {
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='12' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.879394 2.31475L5.44818 6.40657L0.879394 10.4984L2.38423 11.8461L8.45785 6.40657L2.38423 0.967009L0.879394 2.31475Z' fill='%2300A7E1'/%3E%3C/svg%3E%0A");
  }

  ${media.rubber} {
    margin-left: 3.33rem;
  }

  ${media.phone} {
    margin-left: 0;
    text-align: end;
  }
`

export const ContinueStyled = styled(CourseButton)`
  margin-left: 30px;

  background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &:after {
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='12' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.879394 2.31475L5.44818 6.40657L0.879394 10.4984L2.38423 11.8461L8.45785 6.40657L2.38423 0.967009L0.879394 2.31475Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='4.66862' y1='11.8461' x2='4.66862' y2='0.967009' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23E0C3FC'/%3E%3Cstop offset='1' stop-color='%238EC5FC'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  }

  ${media.rubber} {
    margin-left: 1.66rem;
  }

  ${media.phone} {
    text-align: end;
    margin: 3px 0 0 10px;
  }
`

