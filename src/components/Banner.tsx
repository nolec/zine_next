import React from "react";
import styled from "styled-components";
import {IBannerCSSProps} from "../CSS_Styles/CSS";

const Banner = styled.div<IBannerCSSProps>`
 ${props => props.theme.css.banner(props)}
`;

interface IBannerProps extends IBannerCSSProps {
    title?: string
}

export default ({banner, container, contentBox, title}: IBannerProps) => {
    return (
        <Banner banner={{padding: banner?.padding}}
                container={{width: "100%", height: container?.height, padding: container?.padding}}>
            <div id="container">
                <div className="content_box">
                    <p>{title}</p>
                </div>
            </div>
        </Banner>
    )
}