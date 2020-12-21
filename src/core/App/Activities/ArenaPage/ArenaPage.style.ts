import styled from 'styled-components'
import { media } from '../../../../theme/helper'

export const WrapperStyled = styled.div`
  width: 1117px;
  margin: 0 auto;
  ${media.rubber} {
    width: 62.055rem;
  }
  ${media.phone} {
    width: 100vw;
    margin: 0 auto;
  }
`

export const HeaderPageWrapper = styled.div`
  margin: 0 auto 50px;
  ${media.rubber} {
    margin: 0 auto 2.77rem;
  }
  ${media.phone} {
    padding: 0 6%;
    margin: 0 auto 1.55rem;
  }
`

export const TitleWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  margin-bottom: 20px;
  ${media.rubber} {
    margin-bottom: 1.11rem;
  }
`

export const TitleStyled = styled.h1`
  color: ${(props) => props.theme.titleText};
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;

  ${media.rubber} {
    font-size: 2rem;
    line-height: 2.388rem;
  }
`

export const NavigationWrapper = styled.div`
  line-height: 43px;
  font-family: Rubik;
  font-style: normal;

  ${media.rubber} {
    line-height: 2.388rem;
  }
`

const NavigationItemStyled = styled.span`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.commonText};
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
`

export const NavigationCoursesStyled = styled(NavigationItemStyled)``

export const NavigationCourseStyled = styled(NavigationItemStyled)``

export const NavigationLessonStyled = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 1rem;
    line-height: 1.166rem;
  }
`

export const PageWrapper = styled.div`
  grid-gap: 0;
  grid-template-rows: 150px 1fr 140px;
  min-height: 690px;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  height: 100%;
  min-height: 460px;
  overflow: hidden;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;

  ${media.rubber} {
    grid-template-rows: 8.33rem 1fr 7.77rem;
    min-height: 38.33rem;
    min-height: 25.55rem;
  }

  ${media.phone} {
    margin-top: 50px;
    width: 100vw;
    display: block;
    position: relative;
  }
`

export const TaskWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin: auto;
  max-height: 450px;
  min-width: 700px;
  max-width: 800px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;

  ${media.rubber} {
    max-height: 25rem;
    min-width: 38.88rem;
    max-width: 44.44rem;
    border-radius: 0.55rem;
  }

  ${media.phone} {
    min-width: 0;
    width: 100%;
    padding: 0 7% 15px;
    border-radius: 0.55rem;
  }
`

export const TitlePageWrapper = styled.div`
  margin-bottom: 20px;
  ${media.rubber} {
    margin-bottom: 1.11rem;
  }
  ${media.phone} {
    margin-bottom: 1.11rem;
  }
`

export const TitlePage = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: ${(props) => props.theme.titleText};

  ${media.rubber} {
    font-size: 0.88rem;
    line-height: 0.77rem;
  }
  ${media.phone} {
    font-size: 0.88rem;
    line-height: 0.77rem;
  }
`

export const LivesTextWrapper = styled.div`
  margin-bottom: 10px;
  ${media.rubber} {
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    margin-bottom: 0.55rem;
  }
`

export const LivesTextStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 0.77rem;
    line-height: 0.944rem;
  }

  ${media.phone} {
    font-size: 1rem;
    line-height: 1.11rem;
  }
`

export const LivesContentWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin: 100px auto 0;

  ${media.rubber} {
    margin: 5.5rem auto 0;
  }
  ${media.phone} {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const LivesWrapper = styled.div`
  max-width: 198px;
  height: 35px;
  background: ${(props) => props.theme.elevation2};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 43px;
  padding: 8px 9px;
  display: flex;

  ${media.rubber} {
    max-width: 11rem;
    height: 1.944rem;
    box-shadow: 0 0.11rem 0.22rem rgba(0, 0, 0, 0.05);
    border-radius: 2.388rem;
    padding: 0.44rem 0.5rem;
  }

  ${media.phone} {
    max-width: 11rem;
    height: 1.944rem;
    box-shadow: 0 0.11rem 0.22rem rgba(0, 0, 0, 0.05);
    border-radius: 2.388rem;
    padding: 0.44rem 0.5rem;
  }
`

export const LivesStyled = styled.span`
  display: inline-block;
  width: 20px;
  height: 18px;
  background-size: 20px 18px;
  margin: 0 2.5px;

  ${media.rubber} {
    width: 1.11rem;
    height: 1rem;
    background-size: 1.11rem 1rem;
    margin: 0 0.138rem;
  }

  ${media.phone} {
    width: 1.11rem;
    height: 1rem;
    background-size: 1.11rem 1rem;
    margin: 0 0.138rem;
  }
`

export const FullLiveStyled = styled(LivesStyled)`
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.0004 1.55852C8.90786 0.556289 7.47776 4.65691e-05 5.99349 0C5.20789 0.000815974 4.4302 0.156612 3.70518 0.458421C2.98016 0.760231 2.32213 1.2021 1.76896 1.75859C-0.590488 4.12237 -0.589485 7.81961 1.77096 10.1734L9.12304 17.5078C9.29351 17.8069 9.62241 18 10.0004 18C10.1557 17.9985 10.3084 17.9607 10.4463 17.8896C10.5842 17.8186 10.7035 17.7163 10.7946 17.5909L18.2299 10.1734C20.5904 7.81861 20.5904 4.12237 18.2279 1.75458C17.675 1.19912 17.0175 0.758149 16.2932 0.457036C15.5689 0.155922 14.7921 0.000599806 14.0074 0C12.5232 0.00024204 11.0931 0.556458 10.0004 1.55852ZM16.81 3.16906C18.3773 4.74058 18.3783 7.1954 16.812 8.75892L10.0004 15.5542L3.18883 8.75892C1.62256 7.1954 1.62356 4.74058 3.18683 3.17306C3.94891 2.41681 4.94563 2.00067 5.99349 2.00067C7.04136 2.00067 8.03407 2.41681 8.79013 3.17106L9.2915 3.67122C9.38455 3.7642 9.49505 3.83796 9.6167 3.88829C9.73835 3.93862 9.86875 3.96452 10.0004 3.96452C10.1321 3.96452 10.2625 3.93862 10.3842 3.88829C10.5058 3.83796 10.6163 3.7642 10.7094 3.67122L11.2107 3.17106C12.7269 1.66155 15.2959 1.66556 16.81 3.16906Z' fill='%23F45B69'/%3E%3C/svg%3E%0A");
`

export const EmptyLiveStyled = styled(LivesStyled)`
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.25' d='M10.0004 1.55852C8.90786 0.556289 7.47776 4.65691e-05 5.99349 0C5.20789 0.000815974 4.4302 0.156612 3.70518 0.458421C2.98016 0.760231 2.32213 1.2021 1.76896 1.75859C-0.590488 4.12237 -0.589485 7.81961 1.77096 10.1734L9.12304 17.5078C9.29351 17.8069 9.62241 18 10.0004 18C10.1557 17.9985 10.3084 17.9607 10.4463 17.8896C10.5842 17.8186 10.7035 17.7163 10.7946 17.5909L18.2299 10.1734C20.5904 7.81861 20.5904 4.12237 18.2279 1.75458C17.675 1.19912 17.0175 0.758149 16.2932 0.457036C15.5689 0.155922 14.7921 0.000599806 14.0074 0C12.5232 0.00024204 11.0931 0.556458 10.0004 1.55852ZM16.81 3.16906C18.3773 4.74058 18.3783 7.1954 16.812 8.75892L10.0004 15.5542L3.18883 8.75892C1.62256 7.1954 1.62356 4.74058 3.18683 3.17306C3.94891 2.41681 4.94563 2.00067 5.99349 2.00067C7.04136 2.00067 8.03407 2.41681 8.79013 3.17106L9.2915 3.67122C9.38455 3.7642 9.49505 3.83796 9.6167 3.88829C9.73835 3.93862 9.86875 3.96452 10.0004 3.96452C10.1321 3.96452 10.2625 3.93862 10.3842 3.88829C10.5058 3.83796 10.6163 3.7642 10.7094 3.67122L11.2107 3.17106C12.7269 1.66155 15.2959 1.66556 16.81 3.16906Z' fill='%23F45B69'/%3E%3C/svg%3E%0A");
`

export const ButtonContentWrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  position: relative;
  border-top: 2px solid rgba(255, 255, 255, 0.05);

  ${media.rubber} {
    border-top: 0.11rem solid rgba(255, 255, 255, 0.05);
  }

  ${media.phone} {
    height: 100px;
    background-color: ${(props) => props.theme.body};
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 0 7% 15px;
    border-top: 0.11rem solid rgba(255, 255, 255, 0.05);
  }
`

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 1000px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 110;
  display: flex;
  flex-direction: row;

  ${media.rubber} {
    width: 55.55rem;
  }

  ${media.phone} {
    width: 100%;
  }
`

const ButtonStyled = styled.button`
  width: 170px;
  height: 50px;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${media.rubber} {
    width: 9.44rem;
    height: 2.77rem;
    font-size: 1.11rem;
    margin-right: 0.55rem;
    border-radius: 0.22rem;
  }

  ${media.phone} {
    width: 9.44rem;
    height: 2.77rem;
    font-size: 1.11rem;
    margin-right: 0.55rem;
    border-radius: 0.22rem;
  }
`

export const ContinueButtonStyled = styled(ButtonStyled)`
  color: #ffffff;
  background: ${(props) => props.theme.checkButton};
  border: 1px solid #00a7e1;

  ${media.rubber} {
    border: 0.055rem solid #00a7e1;
  }
`

export const SkipButtonStyled = styled(ButtonStyled)`
  background: ${(props) => props.theme.commonButton};
  color: ${(props) => props.theme.commonText};
  border: 1px solid #758d9d;

  ${media.rubber} {
    margin-bottom: 0.55rem;
    border: 0.055rem solid #758d9d;
  }
`

export const CheckButtonStyled = styled(ButtonStyled)`
  background: ${(props) => props.theme.checkButton};
  color: #ffffff;
  border: 1px solid #00a7e1;

  ${media.rubber} {
    border: 0.055rem solid #00a7e1;
  }
`

export const LessonWrapper = styled.div`
  margin: 0px auto;
  width: 1000px;

  ${media.rubber} {
    width: 55.55rem;
  }
`

export const TaskSwitchWrapper = styled.div``

export const TaskWrapperStyled = styled.span`
  cursor: pointer;
  font-size: 15px;
  ${media.rubber} {
    font-size: 0.833rem;
  }
`

 export const TaskAnimation = styled.div`
   &.task-enter {
    opacity: 0;
  }
  &.task-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  &.task-exit {
    opacity: 1;
  }
  &.task-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;