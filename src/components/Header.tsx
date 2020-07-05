import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { IHeaderCSSProps } from "../CSS_Styles/CSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Context from "src/contextAPI/context";

const Header = styled.header<IHeaderCSSProps>`
  ${(props) => props.theme.css.header(props)}
`;

export default () => {
  const { top, topHandle } = useContext(Context);
  useEffect(() => {
    topHandle(window.scrollY);
    window.addEventListener("scroll", () => topHandle(window.scrollY));
    console.log("mount");
    return function cleanUp() {
      window.removeEventListener("scroll", () => topHandle(window.scrollY));
      console.log("unmount");
    };
  }, []);
  return (
    <Header
      header={{ top: top }}
      container={{ width: "100%", height: "70px", padding: "0 10px" }}
      start={{}}
      center={{}}
      end={{}}
    >
      <div id="container">
        <div id="start">
          <div className="back">
            <Link href="/[id]" as="/123">
              <a>
                <div className="icon_box">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div id="center"></div>
        <div id="end">
          <div className="content_box">
            <a className="myPage">
              <div className="icon_box">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </a>
            <a className="search">
              <div className="icon_box">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </a>
            <a className="basket">
              <div className="icon_box">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
};
