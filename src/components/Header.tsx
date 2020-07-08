import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {IHeaderCSSProps} from "../CSS_Styles/CSS";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faSearch,
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Context from "src/contextAPI/context";
import Search from "./Search";

const Header = styled.header<IHeaderCSSProps>`
  ${(props) => props.theme.css.header(props)}
`;

export default () => {
    const {top, topHandle, modalHandle} = useContext(Context);
    // useEffect(() => {
    //   topHandle(window.scrollY);
    //   window.addEventListener("scroll", () => topHandle(window.scrollY));
    //   console.log("mount");
    //   return function cleanUp() {
    //     window.removeEventListener("scroll", () => topHandle(window.scrollY));
    //     console.log("unmount");
    //   };
    // }, []);
    return (
        <Header
            header={{top: top}}
            container={{width: "100%", padding: "0 64px"}}
            area={{height: "160px"}}
            start={{}}
            center={{}}
            end={{}}
        >
            <div id="container">
                <div id="area">
                    <div id="start">
                        <div className="content_box">
                            <div className="hamburger">
                                <button>
                                    <svg id="레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 50.16 40.17">
                                        <defs>
                                            {/*<style>.cls-1{fill:#252525;}</style>*/}
                                        </defs>
                                        <rect className="cls-1" width="50.16" height="1"/>
                                        <rect className="cls-1" y="19.58" width="50.16" height="1"/>
                                        <rect className="cls-1" y="39.17" width="50.16" height="1"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="center">
                        <div className="content_box">
                            <div className="home_title">
                                <Link href="/[id]" as="/5f0433f7f12e6310d27b2e08">
                                    <a>
                                        <div className="title_box">
                                            <span>Z I N E</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="end">
                        <div className="content_box">
                            <div className="go_shop">
                                <Link href="/[id]" as="/5f0433f7f12e6310d27b2e08">
                                    <a>
                                        <svg id="레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 232.2 45.32">
                                            <defs>
                                            </defs>
                                            <path className="cls-1"
                                                  d="M50.57,18.46a2.2,2.2,0,0,0-1.77-.88h-2a4.51,4.51,0,0,0-9,0h-2a2.21,2.21,0,0,0-2.22,2.22,2.06,2.06,0,0,0,.08.6L36.5,30.49a2.22,2.22,0,0,0,2.13,1.61H46a2.23,2.23,0,0,0,2.13-1.61L50.92,20.4A2.18,2.18,0,0,0,50.57,18.46ZM46,30.6H38.64a.72.72,0,0,1-.69-.52L35.12,20a.7.7,0,0,1,.12-.62.68.68,0,0,1,.57-.29h13a.72.72,0,0,1,.72.72.58.58,0,0,1,0,.19L46.66,30.09a.71.71,0,0,1-.69.51ZM42.26,14.71a3,3,0,0,1,3,2.87h-6A3,3,0,0,1,42.26,14.71Z"/>
                                            <g className="cls-2">
                                                <path className="cls-1"
                                                      d="M72.64,20.09H71c-.16-1.29-1.33-2.27-3.23-2.27s-3,.79-3,1.88c0,1.26,1.13,1.8,3.72,2.35,3,.64,4.19,1.79,4.19,3.59,0,2.19-2.14,3.52-4.84,3.52s-4.89-1.55-5-3.9h1.64c.16,1.48,1.48,2.52,3.51,2.52,1.82,0,3.11-.83,3.11-2.05s-1.1-1.89-3.74-2.45-4.14-1.57-4.14-3.58,2-3.25,4.67-3.25S72.49,18,72.64,20.09Z"/>
                                                <path className="cls-1"
                                                      d="M84.48,16.74V28.89H82.89V23.4h-7v5.49h-1.6V16.74h1.6v5.2h7v-5.2Z"/>
                                                <path className="cls-1"
                                                      d="M86.1,22.81a6.41,6.41,0,0,1,12.81,0,6.41,6.41,0,0,1-12.81,0Zm11.22,0a4.82,4.82,0,1,0-9.63,0,4.82,4.82,0,1,0,9.63,0Z"/>
                                                <path className="cls-1"
                                                      d="M104.85,16.74c3.16,0,5,1.68,5,4.22s-1.85,4.21-5,4.21h-2.71v3.72h-1.59V16.74ZM108.27,21c0-1.81-1.34-2.78-3.54-2.78h-2.59v5.55h2.59C106.93,23.73,108.27,22.76,108.27,21Z"/>
                                                <path className="cls-1"
                                                      d="M115.47,16.74c3.15,0,5,1.68,5,4.22s-1.85,4.21-5,4.21h-2.72v3.72h-1.59V16.74ZM118.88,21c0-1.81-1.34-2.78-3.54-2.78h-2.59v5.55h2.59C117.54,23.73,118.88,22.76,118.88,21Z"/>
                                                <path className="cls-1" d="M123.36,28.89h-1.59V16.74h1.59Z"/>
                                                <path className="cls-1"
                                                      d="M127,16.74l7.36,9.46V16.66H136V28.81h-1.5l-7.35-9.46v9.54h-1.6V16.74Z"/>
                                                <path className="cls-1"
                                                      d="M137.54,22.81a6.15,6.15,0,0,1,6.37-6.36A6,6,0,0,1,150,20.58h-1.73a4.36,4.36,0,0,0-4.29-2.67,4.68,4.68,0,0,0-4.81,4.9A4.7,4.7,0,0,0,144,27.74a4.3,4.3,0,0,0,4.52-3.84h-4.84V22.52h6.54v.54a6,6,0,0,1-6.28,6.1A6.14,6.14,0,0,1,137.54,22.81Z"/>
                                                <path className="cls-1"
                                                      d="M156.94,16.74,161.63,25l4.69-8.25h1.39V28.89h-1.59v-9l-3.91,6.92h-1.16l-3.91-6.92v9h-1.59V16.74Z"/>
                                                <path className="cls-1"
                                                      d="M177.58,25.89h-5.84l-1.22,3h-1.66l5-12.15h1.68l5,12.15h-1.75ZM177,24.48l-2.35-5.87-2.37,5.87Z"/>
                                                <path className="cls-1" d="M183.29,27.45H190v1.44H181.7V16.74h1.59Z"/>
                                                <path className="cls-1" d="M192.89,27.45h6.67v1.44h-8.27V16.74h1.6Z"/>
                                            </g>
                                            <path className="cls-1" d="M232.2,45.32H0V0H232.2ZM1,44.32H231.2V1H1Z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="search" onClick={modalHandle}>
                                <button>
                                    <svg id="레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 37.8 39.63">
                                        <defs>
                                            {/*<style>.cls-1{fill:#545454;}</style>*/}
                                        </defs>
                                        <path className="cls-1"
                                              d="M1708.75,30.7a14.16,14.16,0,1,1,14.15-14.16A14.17,14.17,0,0,1,1708.75,30.7Zm0-27.31a13.16,13.16,0,1,0,13.15,13.15A13.17,13.17,0,0,0,1708.75,3.39Z"
                                              transform="translate(-1694.59 -2.39)"/>
                                        <rect className="cls-1" x="1724.24" y="24.05" width="1" height="20.64"
                                              transform="translate(-1213.73 1227.25) rotate(-45)"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="exit">
                                <Link href="/[id]" as="/5f0433f7f12e6310d27b2e08">
                                    <a>
                                        <button>
                                            <svg id="레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 36.47 39.71">
                                                <defs>
                                                    {/*<style>.cls-1{fill:#545454;}</style>*/}
                                                </defs>
                                                <polygon className="cls-1"
                                                         points="36.47 39.71 25.59 39.71 25.59 38.71 35.47 38.71 35.47 1 25.85 1 25.85 0 36.47 0 36.47 39.71"/>
                                                <rect className="cls-1" y="19.62" width="28.28" height="1"/>
                                                <polygon className="cls-1"
                                                         points="18.34 30.77 17.63 30.07 27.58 20.12 17.63 10.17 18.34 9.47 28.99 20.12 18.34 30.77"/>
                                            </svg>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Search/>
        </Header>
    );
};
