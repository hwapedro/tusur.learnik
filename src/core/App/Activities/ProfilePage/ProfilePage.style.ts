import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const WrapperStyled = styled.div`
  width: 700px;
  margin: 100px auto 0;

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

export const ProfileWrapper = styled.div`
  margin: 0 auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${media.rubber} {
    margin: 0 auto 2.22rem;
  }

  ${media.phone} {
    margin: 0 auto 2.22rem;
  }
`

export const LeftWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
`

export const UsernameStyled = styled.div`
  font-size: 30px;
  line-height: 28px;
  color: ${({ theme }) => theme.titleText};

  ${media.rubber} {
    font-size: 1.66rem;
    line-height: 1.55rem;
  }

  ${media.phone} {
    font-size: 1.66rem;
    line-height: 1.55rem;
  }
`

export const EmailStyled = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 17px;
  color: #b4bbc0;

  ${media.rubber} {
    margin-top: 1.11rem;
    font-size: 1rem;
    line-height: 0.94rem;
  }

  ${media.phone} {
    margin-top: 1.11rem;
    font-size: 1rem;
    line-height: 0.94rem;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 22px;

  ${media.rubber} {
    margin-top: 1.22rem;
  }

  ${media.phone} {
    margin-top: 1.22rem;
  }
`

export const EditButtonWrapper = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: center;

  ${media.rubber} {
    margin-top: 2.33rem;
  }

  ${media.phone} {
    margin-top: 2.33rem;
  }
`

export const LogoutButtonWrapper = styled.div`
  margin-top: 50px;
  text-align: center;

  ${media.rubber} {
    margin-top: 2.77rem;
  }

  ${media.phone} {
    margin-top: 2.77rem;
  }
`

const ButtonStyled = styled.button`
  width: 160px;
  height: 40px;
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
    width: 8.88rem;
    height: 2.22rem;
    font-size: 0.83rem;
  }
`
export const BackButtonStyled = styled(ButtonStyled)`
  margin-left: 20px;
  width: 40px;
  color: #f45b69;
  background: ${({ theme }) => (theme.elevation2 ? theme.elevation2 : '#ffffff')};
  border: 1px solid #f45b69;
  background-size: 19px 19px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.59961 4.79999L1.59961 6.79999L3.59961 8.79999' stroke='%23F45B69' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2.09961 6.79999H11.2871C13.1234 6.79999 14.5996 8.34155 14.5996 10.175V10.8' stroke='%23F45B69' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

  ${media.rubber} {
    margin-left: 1.11rem;
    width: 2.22rem;
    border: 0.05rem solid #f45b69;
    background-size: 1.05rem 1.05rem;
  }

  ${media.phone} {
    margin-left: 1.11rem;
    width: 2.22rem;
    border: 0.05rem solid #f45b69;
    background-size: 1.05rem 1.05rem;
  }
`

export const EditProfileButtonStyled = styled(ButtonStyled)`
  color: #ffffff;
  background: ${(props) => props.theme.checkButton};
  border: 1px solid #00a7e1;
`

export const EditButtonStyled = styled(ButtonStyled)`
  color: #00a7e1;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #00a7e1;
`

export const LogoutButtonStyled = styled(ButtonStyled)`
  color: #f45b69;
  background: ${(props) => props.theme.commonButton};
  border: 1px solid #f45b69;
`

export const RightWrapper = styled.div``

export const ImageWrapper = styled.div`
  border-radius: 50%;
  position: relative;
  &:hover {
    border-color: transparent;
    img {
      filter: grayscale(50%);
    }
    box-shadow: 0 0 0 3px #00a7e1;

    ${media.rubber} {
      box-shadow: 0 0 0 0.16rem #00a7e1;
    }

    ${media.phone} {
      box-shadow: 0 0 0 0.16rem #00a7e1;
    }
    cursor: pointer;
    &:after {
      content: '';
      top: 41%;
      left: 41%;
      height: 30px;
      width: 30px;
      background-size: 30px 30px;
      ${media.rubber} {
        height: 1.66rem;
        width: 1.66rem;
        background-size: 1.66rem 1.66rem;
      }

      ${media.phone} {
        height: 1.66rem;
        width: 1.66rem;
        background-size: 1.66rem 1.66rem;
      }
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M4 20H18V11H20V20C20 21.1 19.1 22 18 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H13V6H4V20Z' fill='white'/%3E%3Cpath d='M8.25 14.47L10.21 16.83L12.96 13.29L16.5 18H5.5L8.25 14.47Z' fill='white'/%3E%3Crect x='18' y='1' width='2' height='8' fill='white'/%3E%3Crect x='23' y='4' width='2' height='8' transform='rotate(90 23 4)' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-2' y='-1' width='28' height='28' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='1'/%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
      position: absolute;
    }
  }
`

export const ImageIconStyled = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  ${media.rubber} {
    height: 8.33rem;
    width: 8.33rem;
  }

  ${media.phone} {
    height: 8.33rem;
    width: 8.33rem;
  }
`

export const ImageStyled = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;

  ${media.rubber} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }

  ${media.phone} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }
`

export const InfoWrapper = styled.div``

export const LabelStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  color: ${(props) => props.theme.titleText};
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 0.88rem;
    line-height: 0.77rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 0.88rem;
    line-height: 0.77rem;
    margin-bottom: 0.55rem;
  }
`

const Container = styled.div`
  width: auto;
  background: ${({ theme }) => (theme.elevation2 ? theme.elevation2 : '#ffffff')};
  display: flex;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  justify-content: space-around;

  ${media.rubber} {
    box-shadow: 0.11rem 0.11rem 0.38rem rgba(0, 0, 0, 0.05);
    border-radius: 0.55rem;
  }

  ${media.phone} {
    box-shadow: 0.11rem 0.11rem 0.38rem rgba(0, 0, 0, 0.05);
    border-radius: 0.55rem;
  }
`

export const InfoContainer = styled(Container)`
  height: 100px;
  margin-bottom: 40px;
  padding: 35px 84px;

  ${media.rubber} {
    height: 5.55rem;
    margin-bottom: 2.22rem;
    padding: 1.94rem 4.66rem;
  }

  ${media.phone} {
    height: 5.55rem;
    margin-bottom: 2.22rem;
    padding: 1.94rem 4.66rem;
  }
`

export const StatsWrapper = styled.div``

export const StatsContainer = styled(Container)`
  height: 160px;
  padding: 40px 65px;
  display: flex;
  text-align: center;

  ${media.rubber} {
    height: 8.88rem;
    padding: 2.22rem 3.61rem;
  }

  ${media.phone} {
    height: 8.88rem;
    padding: 2.22rem 3.61rem;
  }
`

export const StatsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const NumberStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 21px;
  color: #00a7e1;
  margin-bottom: 20px;

  ${media.rubber} {
    font-size: 1.222rem;
    line-height: 1.16rem;
    margin-bottom: 1.11rem;
  }

  ${media.phone} {
    font-size: 1.222rem;
    line-height: 1.16rem;
    margin-bottom: 1.11rem;
  }
`

export const TextStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 0.944rem;
    line-height: 0.944rem;
  }

  ${media.phone} {
    font-size: 0.944rem;
    line-height: 0.944rem;
  }
`
export const InfoItemWrapper = styled.div`
  display: flex;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 32px;
  color: ${(props) => props.theme.commonText};
  text-align: center;
  line-height: 25px;

  ${media.rubber} {
    font-size: 0.88rem;
    height: 1.77rem;
    line-height: 1.77rem;
  }

  ${media.phone} {
    font-size: 0.88rem;
    height: 1.77rem;
    line-height: 1.77rem;
  }
`

export const LanguageInfo = styled.div<{ code: string }>`
  color: ${(props) => props.theme.commonText};

  &:before {
    content: '';
    height: 23px;
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    background-size: 25px 25px;
    margin-right: 15px;

    ${media.rubber} {
      height: 1.27rem;
      width: 1.27rem;
      background-size: 1.38rem 1.38rem;
      margin-right: 0.83rem;
    }

    ${media.phone} {
      height: 1.27rem;
      width: 1.27rem;
      background-size: 1.38rem 1.38rem;
      margin-right: 0.83rem;
    }
  }

  ${({ code }: { code: string }) => {
    switch (code) {
      case 'ru':
        return css`
          &:before {
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpolygon style='fill:%23F0F0F0;' points='0,85.33 0,199.107 0,312.885 0,426.662 512,426.662 512,312.885 512,199.107 512,85.33 '/%3E%3Crect y='85.333' style='fill:%230052B4;' width='512' height='341.337'/%3E%3Crect y='85.333' style='fill:%23F0F0F0;' width='512' height='113.775'/%3E%3Crect y='312.884' style='fill:%23D80027;' width='512' height='113.775'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
          }
        `
      case 'en':
        return css`
          &:before {
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Crect y='85.331' style='fill:%23F0F0F0;' width='512' height='341.337'/%3E%3Cg%3E%3Crect y='127.994' style='fill:%23D80027;' width='512' height='42.663'/%3E%3Crect y='213.331' style='fill:%23D80027;' width='512' height='42.663'/%3E%3Crect y='298.657' style='fill:%23D80027;' width='512' height='42.663'/%3E%3Crect y='383.994' style='fill:%23D80027;' width='512' height='42.663'/%3E%3C/g%3E%3Crect y='85.331' style='fill:%232E52B2;' width='256' height='183.797'/%3E%3Cg%3E%3Cpolygon style='fill:%23F0F0F0;' points='99.822,160.624 95.699,173.308 82.363,173.308 93.154,181.143 89.031,193.826 99.822,185.991 110.606,193.826 106.484,181.143 117.275,173.308 103.938,173.308 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='103.938,219.08 99.822,206.397 95.699,219.08 82.363,219.08 93.154,226.916 89.031,239.599 99.822,231.763 110.606,239.599 106.484,226.916 117.275,219.08 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='47.577,219.08 43.46,206.397 39.337,219.08 26.001,219.08 36.792,226.916 32.669,239.599 43.46,231.763 54.245,239.599 50.123,226.916 60.912,219.08 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='43.46,160.624 39.337,173.308 26.001,173.308 36.792,181.143 32.669,193.826 43.46,185.991 54.245,193.826 50.123,181.143 60.912,173.308 47.577,173.308 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='99.822,114.85 95.699,127.535 82.363,127.535 93.154,135.371 89.031,148.054 99.822,140.218 110.606,148.054 106.484,135.371 117.275,127.535 103.938,127.535 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='43.46,114.85 39.337,127.535 26.001,127.535 36.792,135.371 32.669,148.054 43.46,140.218 54.245,148.054 50.123,135.371 60.912,127.535 47.577,127.535 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='156.183,160.624 152.061,173.308 138.725,173.308 149.515,181.143 145.394,193.826 156.183,185.991 166.969,193.826 162.846,181.143 173.637,173.308 160.301,173.308 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='160.301,219.08 156.183,206.397 152.061,219.08 138.725,219.08 149.515,226.916 145.394,239.599 156.183,231.763 166.969,239.599 162.846,226.916 173.637,219.08 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='216.663,219.08 212.546,206.397 208.423,219.08 195.088,219.08 205.877,226.916 201.755,239.599 212.546,231.763 223.331,239.599 219.208,226.916 229.999,219.08 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='212.546,160.624 208.423,173.308 195.088,173.308 205.877,181.143 201.755,193.826 212.546,185.991 223.331,193.826 219.208,181.143 229.999,173.308 216.663,173.308 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='156.183,114.85 152.061,127.535 138.725,127.535 149.515,135.371 145.394,148.054 156.183,140.218 166.969,148.054 162.846,135.371 173.637,127.535 160.301,127.535 '/%3E%3Cpolygon style='fill:%23F0F0F0;' points='212.546,114.85 208.423,127.535 195.088,127.535 205.877,135.371 201.755,148.054 212.546,140.218 223.331,148.054 219.208,135.371 229.999,127.535 216.663,127.535 '/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
          }
        `
      default:
        break
    }
  }}
`
