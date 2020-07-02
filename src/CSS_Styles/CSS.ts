import styled, { css } from "styled-components";

interface ISectionProps {
  position?: string;
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
  flex-grow: 1;
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
  header?: { top?: string };
  start?: {
    width?: string;
  };
  center?: {};
  end?: {};
}

const BannerCSS = ({ banner, container, contentBox }: IBannerCSSProps) => css`
  color: white;
  padding: ${banner?.padding};
  #container {
    width: ${container?.width};
    height: ${container?.height};
    padding: ${container?.padding};
    .content_box {
      height: 100%;
      background-color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const HeaderCSS = ({
  header,
  container,
  start,
  center,
  end,
}: IHeaderCSSProps) => css`
  position: fixed;
  top: ${header?.top};
  width: 100%;
  background-color: #ffffff;
  #container {
    width: ${container?.width};
    height: ${container?.height};
    padding: ${container?.padding};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon_box {
      width: 49px;
      svg {
        font-size: 50px;
        width: 100%;
      }
    }
  }
  #start {
    .back {
      display: block;
      width: 49px;
      height: 100%;
    }
  }
  #center {
  }
  #end {
    .content_box {
      display: flex;
      height: 100%;
      > a {
        width: 43px;
        padding: 0 4px;
        margin: 0 6px;
        .icon_box {
          width: 100%;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
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
