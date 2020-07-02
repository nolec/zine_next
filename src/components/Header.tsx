import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {IHeaderCSSProps} from "../CSS_Styles/CSS";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSearch,faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";

const Header = styled.header<IHeaderCSSProps>`
  ${props => props.theme.css.header(props)}
`;


export default () => {

    const [top, setTop] = useState("60px");

    useEffect(() => {
        const topHandle = (y: number) => {
            if (y >= 0 && y < 61) {
                setTop(`${60 - y}px`)
            } else if (y > 59) {
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
                    <div className="back">
                        <a>
                            <div className="icon_box">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="center"></div>
                <div id="end">
                    <div className="content_box">
                        <a className="myPage">
                            <div className="icon_box">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                        </a>
                        <a className="search">
                            <div className="icon_box">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                        </a>
                        <a className="basket">
                            <div className="icon_box">
                                <FontAwesomeIcon icon={faShoppingBag}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Header>
    )
}