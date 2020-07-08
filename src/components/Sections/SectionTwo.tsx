import React, {DetailedHTMLProps, LiHTMLAttributes, useContext} from "react";
import {C_Section, C_TextBox, C_ImgBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Context from "../../contextAPI/context";
import ContentItem from "./ContentItem";

const Container = styled.div`
  padding : 0 100px;
`;
const ContentBox = styled.div`
  display : flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const HeaderBox = styled.header`
  width : 100%;
`;
const MainTitle = styled.h2`
  font-weight: bold;
  letter-spacing: -0.7px;
  font-size : 20px;
`;

const ContentMain = styled.div`
    width : 100%;
    padding : 20px 0 0 0;
`;

const SectionTwo: React.FC = () => {
    const {placeData, placeFetchMore, placeLimit, placeTotal, handleLimit} = useContext(Context);
    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"20px 0 0 0"}>
                            <MainTitle>JUN, 2020</MainTitle>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ContentItem articlesData={placeData} count={3} fetchMore={placeFetchMore} limit={placeLimit}
                                     total={placeTotal?.totalCount} handleLimit={handleLimit} which={"first"}/>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionTwo;