import styled, { css } from 'styled-components'

export const MenuWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  position: absolute;
  background: ${(props) => props.theme.modal};
  z-index: 15;
  opacity: 0;
  top: 50px;
  width: 180px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  padding: 10px 15px 0;
  text-align: center;

  &.profile-menu-enter {
  opacity: 0;
  transform: scale(0.9);
  }
 &.profile-menu-enter-active {
   opacity: 1;
   transform: translateX(0);
   transition: opacity 300ms, transform 300ms;
  }
 &.profile-menu-exit {
   opacity: 1;
  }
 &.profile-menu-exit-active {
   opacity: 0;
   transform: scale(0.9);
   transition: opacity 300ms, transform 300ms;
 }
 &.profile-menu-enter-done{
    opacity: 1;
 }

`

export const OptionStyled = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.commonText};
`

export const MenuOptionStyled = styled(OptionStyled)``

export const LogoutOptionStyled = styled(OptionStyled)`
color:#F45B69;
`

export const I18nOptionStyled = styled(OptionStyled) <{ code: string }> `
 &:before {
    content: '';
    height: 23px;
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    background-size: 23px 23px;
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
