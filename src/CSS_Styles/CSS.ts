import styled, {css} from "styled-components";

interface ISectionProps {
    position?: string;
    fontSize? : string;
    top?: string;
    left?: string;
    right?: string;
    zIndex?: number;
    display?: string;
    bgColor?: string;
    minWidth?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    borderTop?: string;
    aI?: string;
    flexBasis?: string;
    textAlign?: string;
}

export const C_Section = styled.section<ISectionProps>`
    position : ${(props) => props.position};
    top : ${(props) => props.top};
    left : ${(props) => props.left};
    right : ${(props) => props.right};
    z-index : ${(props) => props.zIndex};
    display : ${(props) => props.display};
    background-color ${(props) => props.bgColor};
    min-width : ${(props) => props.minWidth};
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    margin : ${(props) => props.margin};
    padding : ${(props) => props.padding};
    border-top : ${(props) => props.borderTop};
    align-items : ${(props) => props.aI};
`;
export const C_ImgBox = styled.div<ISectionProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  flex-basis: ${(props) => props.flexBasis};
`;
export const C_TextBox = styled.div<ISectionProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  flex-basis: ${(props) => props.flexBasis};
  text-align: ${(props) => props.textAlign};
  border-top: ${(props) => props.borderTop};
  color : ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

export interface IBannerCSSProps {
    banner?: {
        margin?: string;
        padding?: string;
    };
    container?: {
        width?: string;
        height?: string;
        padding?: string;
    };
    contentBox?: {
        margin?: string;
    };
}

export interface IHeaderCSSProps extends IBannerCSSProps {
    header?: { top?: string }
    area?: {
        width?: string;
        height?: string;
        padding?: string;
    }
    start?: {
        width?: string;
    };
    center?: {};
    end?: {};
}

const BannerCSS = ({banner, container, contentBox}: IBannerCSSProps) => css`
  color: white;
  padding: ${banner?.padding};
  #container {
    width: ${container?.width};
    height: ${container?.height};
    padding: ${container?.padding};
    .content_box {
      height: 100%;
      background-color: #f4b8c3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      line-height: 1.65;
      letter-spacing: 6.37px;
    }
  }
`;
const HeaderCSS = ({
                       header,
                       container,
                       area,
                       start,
                       center,
                       end,
                   }: IHeaderCSSProps) => css`
  z-index: 1;
  position: static;
  top: ${header?.top};
  width: 100%;
  background-color: #ffffff;
  #container {
    width: ${container?.width};
    height: ${container?.height};
    padding: ${container?.padding};
  }
  #area {
    width: ${area?.width};
    height: ${area?.height};
    padding: ${area?.padding};  
    display : flex;
    justify-content: space-between;
    >div{
        display : flex;
        align-items: center;
        > div {
          display : flex;
        }
    }
  }
  #start {
      flex-basis: 25%;
    .hamburger {
      width: 52px;
      height : 42px;
      svg {
        font-size: 50px;
        width: 100%;
        height : 100%;
      }
      > button {
        all : unset;
        padding: 0;
        width: 100%;
        height: 100%;
        line-height: 0;
        cursor: pointer;
      }
    }
  }
  #center {
    flex-basis: 50%;
    justify-content : center;
    .home_title {
    font-size: 75px;
    font-weight: 300;
    }
  }
  #end {
    flex-basis: 25%;
    justify-content: flex-end;
    position : relative;
    .content_box > div {
      &.search {
        margin-right: 30px;
      }
      &.go_shop {
      position : absolute;
      left : 0%;
      top : 50%;
      transform: translate(-30%, -50%);
      width : 230px;
      height : 50px;
    }
      width: 40px;
      height : 40px;
      svg {
        width: 100%;
        height: 100%;
      }
       button {
        all : unset;
        padding: 0;
        width: 100%;
        height: 100%;
        line-height: 0;
        cursor: pointer;
      }    
    }
  }
`;
const theme = {
    css: {
        banner: BannerCSS,
        header: HeaderCSS,
    },
};
export default theme;
