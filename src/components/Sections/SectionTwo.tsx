import React, {DetailedHTMLProps, LiHTMLAttributes, useContext} from "react";
import {C_Section, C_TextBox, C_ImgBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Context from "../../contextAPI/context";
import ContentItem from "./ContentItem";

const Container = styled.div``;
const ContentBox = styled.div`
  display : flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const HeaderBox = styled.header`
  width : 100%;
  border-bottom: 3px solid black;
`;
const MainTitle = styled.h2`
  font-weight: bold;
  font-size : 30px;
`;

const ContentMain = styled.div`
    width : 100%;
    padding : 10px 0;
`;

const SectionTwo: React.FC = () => {
    const {articlesData, articlesLoading} = useContext(Context);


    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"10px 0"}>
                            <MainTitle>Place</MainTitle>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ContentItem articlesData={articlesData} count={3}/>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionTwo;