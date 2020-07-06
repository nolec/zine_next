import React, {useContext} from "react";
import {C_TextBox, C_Section} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import Context from "../../contextAPI/context";

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

const SectionThree = () => {
    const {specialOrderData, specialFetchMore, specialLimit, specialTotal, handleLimit} = useContext(Context);

    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"10px 0"}>
                            <MainTitle>Special order</MainTitle>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ContentItem articlesData={specialOrderData} count={2} fetchMore={specialFetchMore} limit={specialLimit}
                                     total={specialTotal?.totalCount} handleLimit={handleLimit} which={"second"}/>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionThree;