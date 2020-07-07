import React, {useContext} from "react";
import {C_Section, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import Context from "../../contextAPI/context";

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
const Title = styled.h2`
    font-weight: bold;
  letter-spacing: -0.7px;
  font-size : 20px;
`;

const ContentMain = styled.div`
    width : 100%;
    padding : 20px 0 0 0;
`;

const SectionFour = () => {
    const {postingData, postingFetchMore, postingLimit, postingTotal, handleLimit} = useContext(Context);

    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"20px 0 0 0"} borderTop={"3px solid #ff7384"}>
                            <Title>우리 동네 네일 맛집</Title>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ContentItem articlesData={postingData} count={3} fetchMore={postingFetchMore}
                                     limit={postingLimit}
                                     total={postingTotal?.totalCount} handleLimit={handleLimit} which={"third"}/>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionFour;