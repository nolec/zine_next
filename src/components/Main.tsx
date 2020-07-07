import React from "react";
import SectionOne from "./Sections/SectionOne";
import Banner from "./Banner";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import styled from "styled-components";

const Main = styled.main`
  padding : 100px 0 0 0;
  color : #ff7384;
`;

export default () => {
    return (
        <Main>
            <SectionOne/>
            <Banner container={{height: "121px", padding: "0 0"}} banner={{padding: "120px 0"}}
                    title="중간 배너"/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            {/*<Banner container={{height: "150px", padding: "0 0"}} banner={{padding: "120px 0 0 0"}}*/}
            {/*        title="푸터 배너"/>*/}
        </Main>
    )
}