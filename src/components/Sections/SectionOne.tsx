import React, {useContext, useEffect} from "react";
import {C_Section, C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import {ParsedUrlQuery} from "querystring";
import {GetServerSidePropsContext} from "next";
import {initializeApollo} from "../../lib/apolloClient";
import {GET_ARTICLES} from "../../graphql";
import Context from "../../contextAPI/context";

const Container = styled.div``;
const ContentBox = styled.div`
  display : flex;
  flex-wrap: nowrap;
`;
const Left = styled.div`
  flex-basis: 60%;
  border-right: solid 1px #e2e2e2;
  padding : 0 20px 0px 20px;
`;
const Right = styled.div`
  flex-basis: 40%;
  display : flex;
  flex-direction: column;
  padding : 0 20px 0px 20px;
`;

//--------Left--------------------------------
const Title = styled.h3``;
const Text = styled.p``;

//--------Right--------------------------------
const Top = styled.div`
  border-bottom: solid 1px #e2e2e2;
  display : flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  display : flex;
  padding : 20px 0 0 0
`;

const SectionOne = () => {
    const {articlesData, articlesLoading} = useContext(Context);


    useEffect(() => {
        if (articlesData) console.log(articlesData);
    }, [articlesLoading])

    return (
        <C_Section margin={"70px 0 0 0"}>
            <Container>
                <ContentBox>
                    <Left>
                        <C_ImgBox>
                            <img src={articlesData?.articles[0]?.squareThumbnail}/>
                        </C_ImgBox>
                        <C_TextBox padding={"20px 20px 0 20px"}  textAlign={"center"}>
                            <Title>{articlesData?.articles[0]?.title}</Title>
                            <Text>{articlesData?.articles[0]?.subtitle}</Text>
                        </C_TextBox>
                    </Left>
                    <Right>
                        <Top>
                            <C_ImgBox flexBasis={"50%"}>
                                <img src={articlesData?.articles[0]?.squareThumbnail}/>
                            </C_ImgBox>
                            <C_TextBox padding={"20px 20px 20px 20px"}  textAlign={"center"}>
                                <Title>{articlesData?.articles[0]?.title}</Title>
                                <Text>{articlesData?.articles[0]?.subtitle}</Text>
                            </C_TextBox>
                        </Top>
                        <Bottom>
                            <C_TextBox padding={"20px 20px 0 20px"} flexBasis={"50%"} textAlign={"auto"}>
                                <Title>{articlesData?.articles[0]?.title}</Title>
                                <Text>{articlesData?.articles[0]?.subtitle}</Text>
                            </C_TextBox>
                            <C_ImgBox flexBasis={"50%"}>
                                <img src={articlesData?.articles[0]?.squareThumbnail}/>
                            </C_ImgBox>
                        </Bottom>
                    </Right>
                </ContentBox>
            </Container>
        </C_Section>
    )
}
export default SectionOne;