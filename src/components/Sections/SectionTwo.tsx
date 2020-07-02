import React, {useContext} from "react";
import {C_Section, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
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
    ul {
      display : flex;
    }
`;

const SectionTwo = () => {
    const {articlesData, articlesLoading} = useContext(Context);


    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                <ContentBox>
                    <HeaderBox>
                        <C_TextBox width={"100%"} padding={"10px 0"}>
                            <Title>Place</Title>
                        </C_TextBox>
                    </HeaderBox>
                    <ContentMain>
                        <ul>
                            {articlesData?.articles?.map((item: any) => <li>{item.title}</li>)}
                        </ul>
                    </ContentMain>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionTwo;