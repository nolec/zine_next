import React, {useContext} from "react";
import {C_Section, C_TextBox} from "../../CSS_Styles/CSS";
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
const Title = styled.h2`
    font-weight: bold;
    font-size : 30px;
`;

const ContentMain = styled.div`
    width : 100%;
    padding : 10px 0;
`;

const SectionFour = () => {
    const {postingData, postingFetchMore, postingLimit, postingTotal, handleLimit} = useContext(Context);

    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"10px 0"}>
                            <Title>Posting</Title>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ContentItem articlesData={postingData} count={10} fetchMore={postingFetchMore} limit={postingLimit}
                                     total={postingTotal?.totalCount} handleLimit={handleLimit} which={"third"}/>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionFour;