import styled, { css, keyframes } from 'styled-components'
import { media } from '../../../../theme/helper'

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Info = styled.div`
  width: 300px;
  ${media.rubber} {
    width: 16.66rem;
  }
`

export const LessonWrapperStyled = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px 25px;
  margin: 10px 0;
  height: 100px;
  width: 350px;
  ${media.rubber} {
    border-radius: 0.55rem;
    padding: 0.83rem 1.38rem;
    margin: 0.55rem 0;
    height: 5.55rem;
    width: 19.44rem;
  }
`

export const CourseWrapperStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  height: 500px;
  ${media.rubber} {
    margin-top: 5.55rem;
    height: 27.77rem;
  }
`

export const WrapperStyled = styled.div`
  width: 1117px;
  margin: 0 auto;

  ${media.rubber} {
    padding-top: 2.77rem;
    width: 62.055rem;
  }

  ${media.phone} {
    display: block;
    width: 100vw;
    padding: 0 7% 15px;
  }
`

export const HeaderPageWrapper = styled.div`
  margin: 0 auto 50px;

  ${media.rubber} {
    margin: 0 auto 1.55rem;
  }
`

export const NavigationWrapper = styled.div`
  line-height: 43px;
  font-family: Rubik;
  font-style: normal;
  ${media.rubber} {
    line-height: 2.388rem;
  }
  ${media.phone} {
    font-size: 1.22rem;
    line-height: 2.388rem;
    margin-bottom: 10px;
  }
`

export const NavigationCoursesStyled = styled.span`
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
  }
`

export const NavigationCourseStyled = styled.span`
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

export const ProgressWrapper = styled.div`
  display: flex;
  font-family: Rubik;
  font-style: normal;
  width: 270px;
  height: 120px;
  background: ${(props) => props.theme.elevation2};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 10px;
  padding: 33px 30px;
  line-height: 17px;
  font-weight: 500;
  margin-bottom: 50px;

  ${media.rubber} {
    width: 15rem;
    height: 6.66rem;

    border-radius: 0.55rem;
    padding: 1.833rem 1.666rem;
    line-height: 0.944rem;
    margin-bottom: 2.77rem;
  }
  ${media.phone} {
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const ProgressTextWrapper = styled.div`
  margin-right: 38px;
  ${media.rubber} {
    margin-right: 2.11rem;
  }

  ${media.phone} {
    margin-right: 2.11rem;
  }
`

export const ProgressTextStyled = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.commonText};
  ${media.rubber} {
    font-size: 0.77rem;
    margin-bottom: 1.11rem;
  }

  ${media.phone} {
    font-size: 18px;
    margin-bottom: 1.11rem;
  }
`

export const ProgressLessonDoneStyled = styled.div`
  font-size: 14px;
  color: #b4bbc0;
  ${media.rubber} {
    font-size: 0.77rem;
  }

  ${media.phone} {
    font-size: 0.88rem;
  }
`

export const PrecentStyled = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #b4bbc0;
  ${media.rubber} {
    margin-left: 0.55rem;
    font-size: 0.77rem;
  }
  ${media.phone} {
    margin-left: 0.55rem;
    font-size: 18px;
  }
`

export const LessonsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 26px;
  grid-row-gap: 26px;
  grid-template-columns: repeat(4, 1fr);

  ${media.rubber} {
    width: 61.88rem;
    grid-column-gap: 1.44rem;
    grid-row-gap: 1.44rem;
  }

  ${media.phone} {
    display: block;
    width: 100%;
  }
`

export const LessonCardStyled = styled.div`
  cursor: pointer;
  position: relative;
  grid-row: span 1;
  width: 100%;
  height: 280px;
  padding: 35px 30px 0;
  background: ${(props) => props.theme.elevation2};
  box-shadow: ${(props) => props.theme.boxShadow};
  font-style: normal;
  font-weight: normal;
  font-weight: 500;

  transition: all 0.5s;
  &:hover {
    transform: translateY(-5px);
  }

  ${media.rubber} {
    width: 15rem;
    height: 15.55rem;
    padding: 1.944rem 1.66rem 0;
    box-shadow: 0.519713rem 0.519713rem 2.07885rem rgba(0, 0, 0, 0.05);
  }
  ${media.phone} {
    width: 100%;
    height: 16.55rem;
    margin: 0 auto 1rem;
  }
`

export const LessonTitleStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16.8387px;
  line-height: 20px;
  color: ${(props) => props.theme.titleText};
  margin-bottom: 10px;
  ${media.rubber} {
    font-size: 0.935483rem;
    line-height: 1.11rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 20px;
    line-height: 1.11rem;
    margin-bottom: 15px;
  }
`

export const LessonDescriptionStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 13.0968px;
  line-height: 16px;
  color: #b4bbc0;
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 0.7276rem;
    line-height: 0.88rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const PageDoneWrapper = styled.div`
  font-size: 13.0968px;
  color: #b4bbc0;

  ${media.rubber} {
    font-size: 0.7276rem;
  }
`

export const PageDoneStyled = styled.div<{ isDone: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 11.2258px;
  line-height: 13px;
  margin-top: 10px;

  &:before {
    content: '';
    height: 15px;
    margin: -3px 5px 0 0;
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    background-size: 15px 15px;
  }

  ${media.rubber} {
    font-size: 0.62365rem;
    line-height: 0.722rem;
    margin-top: 0.55rem;

    &:before {
      height: 0.83rem;
      margin: -0.166rem 0.277rem 0 0;
      width: 0.833rem;
      background-size: 0.833rem 0.833rem;
    }
  }

  ${media.phone} {
    font-size: 17px;
    margin-top: 0.55rem;

    &:before {
      height: 0.83rem;
      margin: -0.166rem 0.277rem 0 0;
      width: 0.833rem;
      background-size: 0.833rem 0.833rem;
    }
  }
  ${({ isDone }: { isDone: boolean }) =>
    isDone
      ? css`
          color: #5ecba1;
          &:before {
            background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.24998 9.74124L4.19186 7.68312L3.30811 8.56687L6.24998 11.5087L12.3169 5.44187L11.4331 4.55812L6.24998 9.74124Z' fill='%235ECBA1'/%3E%3C/svg%3E%0A");
          }
        `
      : css`
          color: #b4bbc0;
          &:before {
            background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 4.06243V7.18743H10.625V5.93743H8.75V4.06243H7.5Z' fill='%23B4BBC0'/%3E%3Cpath d='M13.3075 4.37313C13.0256 3.70441 12.6163 3.09689 12.1025 2.58438C11.3247 1.80661 10.3361 1.27382 9.25875 1.05188C8.511 0.899687 7.74025 0.899687 6.9925 1.05188C5.91417 1.27241 4.92467 1.80563 4.1475 2.58501C3.63493 3.09806 3.22583 3.70492 2.9425 4.37251C2.64944 5.06539 2.49895 5.8102 2.5 6.56251L2.50062 6.57813H1.25L3.125 9.06251L5 6.57813H3.75062L3.75 6.56251C3.7482 5.69087 4.00841 4.8388 4.49688 4.11688C4.81195 3.65106 5.21309 3.2497 5.67875 2.93438C6.15246 2.61526 6.68382 2.39151 7.24312 2.27563C8.37971 2.04195 9.56257 2.26915 10.5317 2.9073C11.5008 3.54545 12.1769 4.54232 12.4112 5.67876C12.5291 6.26119 12.5291 6.86133 12.4112 7.44376C12.2969 8.00353 12.073 8.53518 11.7525 9.00813C11.5963 9.24001 11.4169 9.45813 11.2188 9.65563C10.8195 10.0544 10.3474 10.3729 9.82813 10.5938C9.56364 10.7056 9.28877 10.791 9.0075 10.8488C8.42527 10.9666 7.82535 10.9666 7.24312 10.8488C6.68394 10.7341 6.15279 10.5105 5.68 10.1906C5.44747 10.0335 5.23045 9.85457 5.03187 9.65626L4.14813 10.54C4.67008 11.0627 5.29002 11.4772 5.97244 11.7599C6.65485 12.0426 7.38634 12.1879 8.125 12.1875C8.87691 12.1872 9.62121 12.037 10.3144 11.7456C11.3191 11.3205 12.1788 10.6127 12.7887 9.70813C13.4165 8.77932 13.7514 7.68359 13.75 6.56251C13.7516 5.81035 13.6011 5.06564 13.3075 4.37313V4.37313Z' fill='%23B4BBC0'/%3E%3C/svg%3E%0A");
          }
        `}
`

export const LessonBottomWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 28px;
  bottom: 35px;
  right: 30px;

  ${media.rubber} {
    height: 1.55rem;
    bottom: 1.944rem;
    right: 1.66rem;
  }

  ${media.phone} {
    height: 1.55rem;
    bottom: 1.944rem;
    right: 1.66rem;
  }
`

export const LessonButtonStyled = styled.button`
  display: flex;
  align-self: flex-end;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 15.6px;
  line-height: 18px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #00a7e1;
  &:after {
    content: '';
    height: 12px;
    margin: 3px 0 0 10px;
    display: inline-block;
    vertical-align: middle;
    width: 9px;
    background-size: 9px 12px;
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='12' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.879394 2.31475L5.44818 6.40657L0.879394 10.4984L2.38423 11.8461L8.45785 6.40657L2.38423 0.967009L0.879394 2.31475Z' fill='%2300A7E1'/%3E%3C/svg%3E%0A");
  }

  ${media.rubber} {
    font-size: 0.866rem;
    line-height: 1rem;
    &:after {
      height: 0.66rem;
      margin: 0.055rem 0 0 0.55rem;
      width: 0.5rem;
      background-size: 0.5rem 0.66rem;
      background-image: url("data:image/svg+xml,%3Csvg width='0.5rem' height='0.66rem' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.879394 2.31475L5.44818 6.40657L0.879394 10.4984L2.38423 11.8461L8.45785 6.40657L2.38423 0.967009L0.879394 2.31475Z' fill='%2300A7E1'/%3E%3C/svg%3E%0A");
    }
  }

  ${media.phone} {
    font-size: 1.11rem;
    line-height: 1.22rem;
    &:after {
      height: 0.66rem;
      margin: 0.055rem 0 0 0.55rem;
      width: 0.5rem;
      background-size: 0.5rem 0.66rem;
      background-image: url("data:image/svg+xml,%3Csvg width='0.5rem' height='0.66rem' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.879394 2.31475L5.44818 6.40657L0.879394 10.4984L2.38423 11.8461L8.45785 6.40657L2.38423 0.967009L0.879394 2.31475Z' fill='%2300A7E1'/%3E%3C/svg%3E%0A");
    }
  }
`

export const LessonsDoneStyled = styled.div<{ courseStarted: boolean }>`
  font-family: Rubik;
  width: 75px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  background: #5ecba1;
  margin-right: 10px;
  border-radius: 5px;
  color: #fcfcfc;

  ${media.rubber} {
    width: 4.166rem;
    font-size: 1.33rem;
    line-height: 1.555rem;
    margin-right: 0.55rem;
    border-radius: 0.277rem;
  }

  ${({ courseStarted }: { courseStarted: boolean }) =>
    !courseStarted &&
    css`
      background: linear-gradient(90deg, #cfd9df 0%, #e2ebf0 100%);
    `}
`

export const LessonsAmountStyled = styled.span`
  font-weight: 500;
`

export const TopWrapper = styled.div`
  display: flex;
  ${media.phone} {
    display: block;
    margin-bottom: 1rem;
`

export const ArenaButtonWrapper = styled.div`
  display: flex;
  font-family: Rubik;
  font-style: normal;
  position: relative;
  width: 100%;
  height: 120px;
  background: ${(props) => props.theme.container};
  box-shadow: ${(props) => props.theme.boxShadow};

  padding: 33px 30px;
  line-height: 17px;
  font-weight: 500;
  margin-left: 30px;
  margin-bottom: 50px;
  justify-content: space-between;
  color: # ${(props) => props.theme.commonText};
  background-clip: padding-box;
  border: solid 5px transparent;
  border-radius: 10px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3.7px;
    border-radius: inherit;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${gradient} 5500ms ease both infinite;
  }

  ${media.rubber} {
    height: 6.666rem;
    padding: 1.833rem 1.666rem;
    line-height: 0.944rem;
    margin-left: 1.666rem;
    margin: 0.2055rem;
  }
  
  ${media.phone} {
    display: block
    height: auto;
    padding: 1.833rem 1.666rem;
    line-height: 0.944rem;
    margin-left: 1.666rem;
    margin-bottom: 2.77rem;
    margin: 0.2055rem;
    text-align: center;
  }
`

const ButtonStyled = styled.button`
  width: 160px;
  height: 100%;
  font-size: 15px;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${media.rubber} {
    width: 8.88rem;
    height: 2.22rem;
    font-size: 0.83rem;
  }

  ${media.phone} {
    width: 15rem;
    height: 3rem;
    font-size: 1rem;
  }
`

export const ArenaButtonJoinStyled = styled(ButtonStyled)`
  color: #00a7e1;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #00a7e1;
`

export const ArenaButtonLeaveStyled = styled(ButtonStyled)`
  color: #f45b69;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #f45b69;
`

export const ArenaTextWrapper = styled.div`
  width: 70%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16.8387px;
  line-height: 20px;
  color: ${(props) => props.theme.titleText};
  margin-bottom: 10px;
  ${media.rubber} {
    font-size: 0.935483rem;
    line-height: 1.11rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.6rem;
    margin-bottom: 15px;
    text-align: left;
  }
`

export const TeoriaStyled = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Rubik;
  font-weight: normal;
  color: #00a7e1;

  &:before {
    content: '';
    height: 15px;
    margin: 0 5px 0 0;
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    background-size: 15px 15px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 333 333' style='enable-background:new 0 0 333 333;' xml:space='preserve' fill='%2300a7e1'%3E%3Cg%3E%3Cg%3E%3Cpath d='M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M230,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S235.5,114.5,230,114.5z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M151,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S156.5,281.5,151,281.5z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  }

  ${media.rubber} {
    margin-bottom: 0.5556rem;
    font-size: 1rem;
    &:before {
      height: 0.833rem;
      margin: 0 0.2778rem 0 0;
      width: 0.833rem;
      background-size: 0.833rem 0.833rem;
    }
  }

  ${media.phone} {
    margin-bottom: 0.5556rem;
    font-size: 1rem;
    &:before {
      height: 0.833rem;
      margin: 0 0.2778rem 0 0;
      width: 0.833rem;
      background-size: 0.833rem 0.833rem;
    }
  }
`

export const LessonDifficultydWrapper = styled.div<{ difficulty: number }>`
  font-family: Rubik;
  font-weight: normal;
  position: absolute;
  top: 5%;
  right: 8%;

  ${({ difficulty }: { difficulty: number }) => {
    switch (difficulty) {
      case 1:
        return css`
          color: #00a7e1;
        `
      case 2:
        return css`
          color: #ff9800;
        `
      case 3:
        return css`
          color: #f45b69;
        `
    }
  }}
`
