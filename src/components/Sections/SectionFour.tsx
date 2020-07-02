import React from "react";
import {C_Section, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";

const Container = styled.div``;
const ContentBox = styled.div`
  display : flex;
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

const ContentMain = styled.div``;

const SectionFour = () => {



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
                        <ul>
                            {}
                        </ul>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionFour;