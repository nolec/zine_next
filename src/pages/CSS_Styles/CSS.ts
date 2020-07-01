import styled, {css} from "styled-components";

interface ISectionProps {
    position?: string
    top?: string
    left?: string
    right?: string
    zIndex?: number
    display?: string
    bgColor?: string
    minWidth?: string
    width?: string
    height?: string
    margin?: string
    padding?: string
    borderTop?: string
    aI?: string
}

export const Section = styled.section<ISectionProps>`
    position : ${props => props.position};
    top : ${props => props.top};
    left : ${props => props.left};
    right : ${props => props.right};
    z-index : ${props => props.zIndex};
    display : ${props => props.display};
    background-color ${props => props.bgColor};
    min-width : ${props => props.minWidth};
    width : ${props => props.width};
    height : ${props => props.height};
    margin : ${props => props.margin};
    padding : ${props => props.padding};
    border-top : ${props => props.borderTop};
    align-items : ${props => props.aI};
`

export interface IBannerCSSProps {
    banner? : {
        margin? : string
    }
    container?: {
        width?: string
        height?: string
        padding?: string
    }
    contentBox? : {
        margin? : string
    }

}

export interface IHeaderCSSProps extends IBannerCSSProps {
    header? : {top? : string}
    start?: {
        width?: string
    }
    center?: {}
    end?: {}
}

export const BannerCSS = ({container, contentBox}: IBannerCSSProps) => css`
    color : white;
    #container {
        width : ${container?.width};
        height : ${container?.height};
        padding : ${container?.padding};
        .content_box {
          height : 100%;
          margin : ${contentBox?.margin};
          background-color : #000000;
          display : flex;
          justify-content: center;
          align-items: center;
        }
    }
`;
export const HeaderCSS = ({header,container, start, center, end}: IHeaderCSSProps) => css`
    position: fixed;
    top : ${header?.top};
    width : 100%;
    background-color : #ffffff;
    #container {
        width : ${container?.width};        
        height : ${container?.height};
        padding : ${container?.padding};
        display : flex;
        justify-content: space-between;
        align-items: center;        
    }
    #start {
      .back {
          display : block;
          width : 49px;
          height : 100%;
       }
    }
    #center {
    }
    #end {
    display : flex;
      a {
          display : block;
          width : 49px;
          height : 100%;      
      }
    }

`;

const theme = {
    css: {
        banner: BannerCSS,
        header: HeaderCSS
    }
}
export default theme;