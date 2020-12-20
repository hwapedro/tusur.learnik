import styled, { css } from 'styled-components'
import { media } from '../../../theme/helper'
import { Form } from 'formik'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1440 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.75'%3E%3Cpath opacity='0.75' fill-rule='evenodd' clip-rule='evenodd' d='M-263.663 647.269C-306.573 597.834 -305.283 526.889 -311.287 461.702C-316.879 400.991 -322.453 339.3 -297.137 283.834C-271.097 226.782 -224.58 182.17 -169.783 151.669C-113.392 120.281 -45.7305 87.2361 14.5163 110.362C73.8229 133.126 76.2892 217.491 120.51 263.097C163.56 307.496 254.025 309.581 266.43 370.17C278.723 430.207 202.208 469.463 173.892 523.816C145.974 577.405 149.749 648.203 102.176 685.46C51.2833 725.317 -18.5577 731.593 -82.8465 724.881C-149.72 717.9 -219.591 698.044 -263.663 647.269Z' fill='url(%23paint0_linear)'/%3E%3Cpath opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M215.548 1128.17C203.4 1069.68 148.76 1023.85 154.417 964.382C160.736 897.951 186.664 820.189 247.459 792.678C308.665 764.98 372.195 834.188 439.364 835.436C506.708 836.687 570.348 775.746 633.245 799.845C700.129 825.471 747.394 892.23 767.227 961.054C786.931 1029.43 773.715 1105.2 739.166 1167.41C707.721 1224.03 640.104 1243.29 588.647 1282.62C533.763 1324.58 496.404 1396 427.951 1405.31C356.594 1415.01 274.427 1388.45 230.621 1331.3C188.284 1276.05 229.701 1196.31 215.548 1128.17Z' fill='url(%23paint1_linear)'/%3E%3Cg opacity='0.5' filter='url(%23filter0_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M608.449 1155.39C550.665 1140.24 485.307 1168.78 434.569 1137.25C377.89 1102.03 319.79 1044.21 322.207 977.518C324.64 910.381 414.888 884.286 445.896 824.689C476.984 764.938 450.73 680.827 500.3 635.225C553.013 586.732 633.83 574.113 704.29 586.978C774.293 599.761 836.264 645.314 876.602 703.936C913.316 757.294 900.468 826.415 912.795 890C925.944 957.82 973.285 1023.06 951.157 1088.51C928.09 1156.72 867.742 1218.49 797.062 1232.28C728.753 1245.61 675.772 1173.04 608.449 1155.39Z' fill='url(%23paint2_linear)'/%3E%3C/g%3E%3Cg opacity='0.5' filter='url(%23filter1_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1211.78 296.078C1199.4 310.826 1176.89 315.491 1169.42 333.236C1161.06 353.058 1156.55 379.092 1169.6 396.187C1182.75 413.398 1211.35 403.455 1230.61 413.359C1249.92 423.29 1258.67 450.309 1280.21 453.074C1303.11 456.015 1326.72 444.283 1342.86 427.775C1358.9 411.374 1366.72 387.848 1366.42 364.911C1366.14 344.035 1349.88 328.242 1341.28 309.218C1332.11 288.926 1332.42 262.944 1314.41 249.847C1295.63 236.195 1268.25 231.184 1247.09 240.719C1226.63 249.934 1226.21 278.896 1211.78 296.078Z' fill='url(%23paint3_linear)'/%3E%3C/g%3E%3Cpath opacity='0.75' fill-rule='evenodd' clip-rule='evenodd' d='M1839.34 641.92C1823.39 701.9 1759.36 731.244 1712.02 771.297C1674.15 803.336 1634.61 827.763 1591.24 851.806C1530.03 885.735 1472.22 965.022 1406.68 940.556C1341.55 916.244 1361.16 813.699 1326.89 753.128C1295.34 697.348 1226.14 665.583 1215.36 602.382C1203.48 532.758 1212.5 447.018 1267.04 402.234C1321.63 357.406 1404.29 405.528 1473.29 390.597C1537.86 376.623 1588.05 305.802 1652.83 318.745C1719.07 331.98 1762.33 396.535 1796.13 455.103C1828.87 511.829 1856.19 578.597 1839.34 641.92Z' fill='url(%23paint4_linear)'/%3E%3Cg opacity='0.25' filter='url(%23filter2_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1134.06 789.837C1180.41 793.471 1232.83 777.965 1268.99 807.201C1304.87 836.205 1303.72 889.64 1313.34 934.783C1321.85 974.74 1332.01 1014.57 1321.56 1054.06C1310.69 1095.13 1289.12 1134.44 1254.13 1158.5C1219.62 1182.23 1175.41 1176.37 1134.06 1183.01C1082.47 1191.28 1025.06 1232.21 982.35 1202.09C939.764 1172.07 961.154 1103.91 949.734 1053.03C939.776 1008.67 914.215 968.52 919.785 923.398C926.161 871.74 938.703 812.275 982.846 784.761C1026.73 757.406 1082.52 785.795 1134.06 789.837Z' fill='url(%23paint5_linear)'/%3E%3C/g%3E%3Cg opacity='0.25' filter='url(%23filter3_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M291.522 -118.312C329.29 -135.954 332.498 -203.083 381.43 -199.748C436.09 -196.023 510.911 -169.77 567.571 -99.4978C624.613 -28.7515 608.669 50.1949 646.993 129.616C685.415 209.242 769.385 280.993 787.679 356.653C807.133 437.109 783.556 496.702 742.352 524.006C701.416 551.133 635.558 539.784 567.627 502.472C505.797 468.512 451.483 389.716 391.214 331.142C326.93 268.666 250.284 228.554 203.113 148.21C153.941 64.4583 126.266 -34.1037 144.499 -89.0712C162.121 -142.195 247.519 -97.7567 291.522 -118.312Z' fill='url(%23paint6_linear)'/%3E%3C/g%3E%3Cg opacity='0.5' filter='url(%23filter4_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M54.2471 649.255C69.111 660.237 70.2308 681.178 76.1412 698.672C80.869 712.666 83.3071 726.287 85.2187 740.929C87.9162 761.592 103.546 786.278 89.5983 801.751C75.7382 817.126 49.4875 800.473 28.9638 803.334C10.0637 805.968 -6.30497 821.654 -24.9867 817.723C-45.5671 813.393 -68.3243 801.515 -74.7575 781.51C-81.1969 761.485 -58.8249 743.861 -55.4091 723.12C-52.2124 703.71 -66.3318 682.06 -55.6582 665.538C-44.7449 648.644 -22.1338 643.728 -2.21588 640.777C17.0755 637.919 38.5549 637.66 54.2471 649.255Z' fill='url(%23paint7_linear)'/%3E%3C/g%3E%3Cpath opacity='0.75' fill-rule='evenodd' clip-rule='evenodd' d='M-255.076 -59.7902C-225.779 -115.608 -217.063 -189.23 -161.329 -218.685C-106.038 -247.905 -40.1105 -217.946 21.2398 -205.818C75.5417 -195.084 130.572 -186.481 174.161 -152.365C219.494 -116.885 256.908 -69.0119 268.167 -12.5571C279.274 43.13 248.343 95.1087 234.501 150.179C217.228 218.897 237.507 312.31 177.173 349.462C117.018 386.503 43.5781 323.443 -25.8728 310.509C-86.4313 299.231 -150.095 309.643 -203.304 278.605C-264.22 243.071 -331.562 195.681 -342.228 125.97C-352.831 56.6642 -287.66 2.28996 -255.076 -59.7902Z' fill='url(%23paint8_linear)'/%3E%3Cg opacity='0.25' filter='url(%23filter5_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M269.041 408.036C291.244 409.77 316.362 402.37 333.687 416.323C350.874 430.166 350.328 455.669 354.933 477.215C359.009 496.285 363.879 515.295 358.872 534.143C353.665 553.746 343.331 572.505 326.568 583.988C310.034 595.316 288.849 592.519 269.041 595.684C244.323 599.634 216.817 619.169 196.352 604.795C175.948 590.463 186.197 557.932 180.725 533.652C175.954 512.481 163.708 493.316 166.376 471.781C169.431 447.126 175.44 418.745 196.59 405.613C217.616 392.558 244.346 406.107 269.041 408.036Z' fill='url(%23paint9_linear)'/%3E%3C/g%3E%3Cg opacity='0.5' filter='url(%23filter6_f)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M821.722 31.613C832.726 39.454 829.602 56.5044 835.337 68.7383C842.008 82.9674 857.827 93.0932 857.913 108.808C858.009 126.097 851.47 146.997 835.81 154.324C819.841 161.795 803.161 141.883 785.548 142.667C767.47 143.472 751.48 166.516 735.108 158.808C719.37 151.398 723.598 127.33 717.993 110.862C712.519 94.7785 696.626 79.4265 702.687 63.5547C708.793 47.5669 729.972 44.5742 745.796 38.0564C757.503 33.2346 769.522 31.9007 782.137 30.8301C795.618 29.6861 810.704 23.7623 821.722 31.613Z' fill='url(%23paint10_linear)'/%3E%3C/g%3E%3Cpath opacity='0.75' fill-rule='evenodd' clip-rule='evenodd' d='M1658.89 51.6302C1678.58 103.022 1629.58 153.857 1621.5 208.296C1612.1 271.612 1642.99 341.599 1607.9 395.133C1569.29 454.028 1500.03 510.237 1430.38 499.843C1359.36 489.244 1347.58 384.099 1286.04 347.102C1222.87 309.126 1116.71 351.332 1078.5 288.303C1041.76 227.714 1110.31 155.545 1128.37 87.0311C1146.01 20.115 1126.64 -67.7783 1182.95 -108C1239.67 -148.516 1318.3 -110.981 1386.68 -97.4702C1437.27 -87.4748 1481.07 -64.9373 1526.3 -40.1636C1574.63 -13.692 1639.17 0.174896 1658.89 51.6302Z' fill='url(%23paint11_linear)'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f' x='242' y='485' width='835.912' height='824.371' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='25' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter1_f' x='1079' y='160' width='388.851' height='388.836' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='25' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter2_f' x='869' y='723' width='507' height='540' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='25' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter3_f' x='17' y='-348' width='951.825' height='1052.11' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='25' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter4_f' x='-130' y='589' width='293.143' height='292.677' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='10' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter5_f' x='116' y='350' width='295' height='310' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='25' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3Cfilter id='filter6_f' x='648' y='-34' width='263.905' height='260.788' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='10' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear' x1='-267.732' y1='643.805' x2='144.805' y2='231.268' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300A7E1' stop-opacity='0.58'/%3E%3Cstop offset='1' stop-color='%2300A7E1' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='169.866' y1='1150.22' x2='769.531' y2='968.569' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23003459' stop-opacity='0.17'/%3E%3Cstop offset='1' stop-color='%23003459' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='607.867' y1='1206.11' x2='712.045' y2='588.259' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23003459' stop-opacity='0.17'/%3E%3Cstop offset='1' stop-color='%23003459' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='1202.18' y1='282.842' x2='1344.67' y2='425.994' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23003459' stop-opacity='0.17'/%3E%3Cstop offset='1' stop-color='%23003459' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear' x1='1841.71' y1='650.63' x2='1206.24' y2='610.364' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F45B69' stop-opacity='0.5'/%3E%3Cstop offset='1' stop-color='%23F45B69' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint5_linear' x1='1181.49' y1='727.726' x2='1144.35' y2='1247.73' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F45B69' stop-opacity='0.78'/%3E%3Cstop offset='1' stop-color='%23F45B69' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint6_linear' x1='247.89' y1='-171.037' x2='737.934' y2='527.151' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23003459' stop-opacity='0.17'/%3E%3Cstop offset='1' stop-color='%23003459' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint7_linear' x1='56.9178' y1='649.553' x2='-23.7749' y2='821.124' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F45B69' stop-opacity='0.5'/%3E%3Cstop offset='1' stop-color='%23F45B69' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint8_linear' x1='-307.064' y1='-152.072' x2='320.633' y2='171.839' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F45B69' stop-opacity='0.78'/%3E%3Cstop offset='1' stop-color='%23F45B69' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint9_linear' x1='291.764' y1='378.392' x2='274.106' y2='626.584' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F45B69' stop-opacity='0.78'/%3E%3Cstop offset='1' stop-color='%23F45B69' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint10_linear' x1='779.82' y1='29.9116' x2='777.908' y2='184.682' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300A7E1'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint11_linear' x1='1520.5' y1='-48.5' x2='1165.5' y2='472.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300A7E1'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");

  ${media.phone} {
    background-color: white;
    background-image: none;
  }
`
export const CardStyled = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 10px;
  padding: 35px 70px;

  ${media.rubber} {
    border-radius: 0.55rem;
    padding: 1.94rem 3.88rem;
    width: 28.88rem;
  }

  ${media.phone} {
    width: 350px;
  }
`

export const FormWrappedStyled = styled(Form)`
  width: 100%;
  line-height: normal;
`

export const TabsWrapper = styled.div`
  margin: 0px auto 35px;
  ${media.rubber} {
    margin: 0px auto 1.94rem;
  }
`

export const TabStyled = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-block;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #003459;

  &:first-child {
    margin-right: 20px;
  }

  ${media.rubber} {
    font-size: 1.11rem;
    line-height: 1.5rem;
    &:first-child {
      margin-right: 1.11rem;
    }
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      font-weight: 500;
      color: #003459;
      padding-bottom: 2px;
      border-bottom: 2px #F45B69 solid
      cursor: default;

      ${media.rubber} {
        padding-bottom: 0.11rem;
        border-bottom: 0.11rem #F45B69 solid
      }
    `}
`

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5rem 0.5rem;
  margin: 0 auto;
  color: black;
`

export const TitleStyled = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`

export const SubtitleStyled = styled.span`
  padding-top: 0.5rem;
  font-size: 1.1rem;
`

export const ButtonWrapperStyled = styled.div`
  text-align: center;
`

export const ButtonsWrapperStyled = styled.div`
  margin: 20px 0px 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.rubber} {
    margin: 0.9rem 0px 0.33rem;
  }

  ${media.phone} {
    flex-direction: column;
  }
`

export const ButtonStyled = styled.button<{ type?: string }>`
  min-width: 150px;
  height: 40px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  border: 1.5px solid #00a7e1;
  background: #00a7e1;
  border-radius: 6px;
  cursor: pointer;

  ${media.rubber} {
    min-width: 8.33rem;
    height: 2.22rem;
    font-size: 0.83rem;
    line-height: 1rem;
    border: 0.083rem solid #00a7e1;
    border-radius: 0.33rem;
  }

  ${({ type }: { type?: string }) =>
    type !== "submit" &&
    css`
      color: #003459;
      border: 1.5px solid #003459;
      background-color: #ffffff;
      margin-right: 40px;

      ${media.rubber} {
        margin-right: 2.22rem; 
      }

      ${media.phone} {
        margin-right: 0;
        margin-bottom: 15px;
        }
    `}
`
