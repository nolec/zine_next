import React, {useContext, useEffect} from "react";
import {C_Section, C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Context from "../../contextAPI/context";
import Link from "next/link";

const Container = styled.div``;
const ContentBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Left = styled.div`
  flex-basis: 60%;
  border-right: solid 1px #e2e2e2;
  padding: 0 20px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0px 20px;
`;

//--------Left--------------------------------
const Title = styled.h3``;
const Text = styled.p``;
const ItemContainer = styled.div``;

//--------Right--------------------------------
const Top = styled.div`
  border-bottom: solid 1px #e2e2e2;
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  padding: 20px 0 0 0;
`;

const SectionOne = () => {
    const {placeData,specialOrderData,postingData} = useContext(Context);

    return (
        <C_Section margin={"70px 0 0 0"}>
            <Container>
                <ContentBox>
                    <Left>
                        <ItemContainer>
                            <Link href="/[id]" as={`/${placeData?.articles[0]?.id}`}>
                                <a>
                                    <C_ImgBox>
                                        <img src={placeData?.articles[0]?.squareThumbnail}/>
                                    </C_ImgBox>
                                    <C_TextBox padding={"20px 20px 0 20px"} textAlign={"center"}>
                                        <Title>{placeData?.articles[0]?.title}</Title>
                                        <Text>{placeData?.articles[0]?.subtitle}</Text>
                                    </C_TextBox>
                                </a>
                            </Link>
                        </ItemContainer>
                    </Left>
                    <Right>
                        <ItemContainer>
                            <Link href="/[id]" as={`/${specialOrderData?.articles[0]?.id}`}>
                                <a>
                                    <Top>
                                        <C_ImgBox flexBasis={"50%"}>
                                            <img src={specialOrderData?.articles[0]?.squareThumbnail}/>
                                        </C_ImgBox>
                                        <C_TextBox padding={"20px 20px 20px 20px"} textAlign={"center"}>
                                            <Title>{specialOrderData?.articles[0]?.title}</Title>
                                            <Text>{specialOrderData?.articles[0]?.subtitle}</Text>
                                        </C_TextBox>
                                    </Top>
                                </a>
                            </Link>

                        </ItemContainer>
                        <ItemContainer>
                            <Link href="/[id]" as={`/${postingData?.articles[0]?.id}`}>
                                <a>
                                    <Bottom>
                                        <C_TextBox
                                            padding={"20px 20px 0 20px"}
                                            flexBasis={"50%"}
                                            textAlign={"auto"}
                                        >
                                            <Title>{postingData?.articles[0]?.title}</Title>
                                            <Text>{postingData?.articles[0]?.subtitle}</Text>
                                        </C_TextBox>
                                        <C_ImgBox flexBasis={"50%"}>
                                            <img src={postingData?.articles[0]?.squareThumbnail}/>
                                        </C_ImgBox>
                                    </Bottom>
                                </a>
                            </Link>
                        </ItemContainer>

                    </Right>
                </ContentBox>
            </Container>
        </C_Section>
    );
};
export default SectionOne;
