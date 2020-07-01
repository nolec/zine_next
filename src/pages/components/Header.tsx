import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {IHeaderCSSProps} from "../CSS_Styles/CSS";

const Header = styled.header<IHeaderCSSProps>`
  ${props => props.theme.css.header(props)}
`;


export default () => {

    const [top, setTop] = useState("60px");

    useEffect(() => {
        const topHandle = (y: number) => {
            if (y >= 0 && y < 61) {
                setTop(`${60 - y}px`)
            }
           else if( y > 59){
                setTop(`${0}px`)
            }
        }
        window.addEventListener("scroll", () => topHandle(window.scrollY))

        return window.removeEventListener("scroll", () => topHandle(window.scrollY))
    }, [])

    return (
        <Header header={{top: top}} container={{width: "100%", height: "70px", padding: "0 10px"}} start={{}}
                center={{}} end={{}}>
            <div id="container">
                <div id="start">
                    <a className="back">
                        <img src={`http://localhost:3000/images/backArrow.png`}/>
                    </a>
                </div>
                <div id="center"></div>
                <div id="end">
                    <a className="myPage">
                        <img src={`http://localhost:3000/images/User.png`}/>
                    </a>
                    <a className="search">
                        <img src={`http://localhost:3000/images/MagnifyingGlass.png`}/>
                    </a>
                    <a className="basket">
                        <img src={`http://localhost:3000/images/backArrow.png`}/>
                    </a>
                </div>
            </div>
        </Header>
    )
}