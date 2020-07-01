import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";
import SectionThree from "./components/Sections/SectionThree";
import SectionFour from "./components/Sections/SectionFour";


export default () => {
    return (
        <>
            <Banner container={{height: "60px"}} title="탑 배너"/>
            <Header/>
            <SectionOne/>
            <Banner container={{height: "150px", padding: "0 45px"}} contentBox={{margin: "120px 0"}} title="중간 배너"/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <Banner container={{height: "150px", padding: "0 45px"}} contentBox={{margin: "120px 0"}} title="푸터 배너"/>

        </>
    )
}