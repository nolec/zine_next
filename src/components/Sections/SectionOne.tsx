import React, {useContext, useEffect} from "react";
import {C_Section, C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Context from "../../contextAPI/context";
import Link from "next/link";

const Container = styled.div`
  padding : 0 100px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height : 795px;
`;
const Left = styled.div`
  height: 100%;
  flex-basis: 65%;
  border-right: solid 1px #e2e2e2;
  display: flex;
  flex-direction: column;
  padding : 0 20px 0 0;
`;
const Right = styled.div`
  flex-basis: 35%;
  display : grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding : 0 0 0 20px;
   height : 100%;
  > div {
  padding-bottom : 30px;
  }
`;

//--------Left--------------------------------
const MainTitle = styled.h2`    
  font-weight: bold;
  letter-spacing: -0.7px;
  font-size : 20px;`;
const Title = styled.h3`
  letter-spacing: -0.62px;
  color: #252525;
  font-size: 24px;
  font-weight: bold;
  padding : 0 0 5px 0;
    text-align: left;
`;
const Text = styled.p`
  text-align: left;
    font-family: AppleSDGothicNeo;
  font-size: 12.1px;
  font-weight: 500;
   letter-spacing: -0.3px;
    color: #666666;
`;
const TagBox = styled.div``;
const Tags = styled.div`
font-size : 12px;
`;
const ItemContainer = styled.div`
height : 100%;
      :not(:last-child){
    border-bottom: solid 1px #e2e2e2;
    }
`;

//--------Right--------------------------------
const Item = styled.div`
  display: flex;
  height : 100%;
`;
const LinkBox = styled.div`
    height : 100%;
    &:first-child {
        flex-basis : 40%;
    }
    &:last-child {
        flex-basis: 60%;
    }
`;

const SectionOne = () => {
    const {placeData, specialOrderData, postingData} = useContext(Context);

    return (
        <C_Section margin={"70px 0 0 0"}>
            <Container>
                <C_TextBox width={"200px"} padding={"20px 0 20px 0"} borderTop={"3px solid #ff7384"}>
                    <MainTitle>UP TO DATA POST</MainTitle>
                </C_TextBox>
                <ContentBox>
                    <Left>
                        <ItemContainer>
                            <Item style={{flexDirection : "column"}}>
                                <LinkBox style={{height : "80%"}}>
                                    <Link href="/[id]" as={`/${placeData?.articles[0]?.id}`}>
                                        <a>
                                            <C_ImgBox height={"100%"}>
                                                <img src={placeData?.articles[0]?.squareThumbnail}/>
                                            </C_ImgBox>
                                        </a>
                                    </Link>
                                </LinkBox>
                                <LinkBox>
                                    <Link href="/[id]" as={`/${placeData?.articles[0]?.id}`}>
                                        <a>
                                            <C_TextBox textAlign={"center"}>
                                                <Title style={{
                                                    textAlign: "center",
                                                    fontSize: "40px",
                                                    padding: "30px 0 10px 0"
                                                }}>{placeData?.articles[0]?.title}</Title>
                                                <Text
                                                    style={{textAlign: "center"}}>{placeData?.articles[0]?.subtitle}</Text>
                                                <TagBox>{placeData?.articles[0]?.tags.map((item: any) =>
                                                    <Tags>{item}</Tags>)}</TagBox>
                                            </C_TextBox>
                                        </a>
                                    </Link>
                                </LinkBox>
                            </Item>
                        </ItemContainer>
                    </Left>
                    <Right>{
                        placeData?.articles?.map((item: any) => {
                            return <ItemContainer>
                                <Item>
                                    <LinkBox>
                                        <Link href="/[id]" as={`/${item.id}`}>
                                            <a>
                                                <C_ImgBox height={"200px"}>
                                                    <img src={item.squareThumbnail}/>
                                                </C_ImgBox>
                                            </a>
                                        </Link>
                                    </LinkBox>
                                    <LinkBox>
                                        <Link href="/[id]" as={`/${item.id}`}>
                                            <a>
                                                <C_TextBox>
                                                    <Title>{item.title}</Title>
                                                    <Text>{item.subtitle}</Text>
                                                    <TagBox>{item.tags.map((it: any) => <Tags>{it}</Tags>)}</TagBox>
                                                </C_TextBox>
                                            </a>
                                        </Link>
                                    </LinkBox>

                                </Item>
                            </ItemContainer>
                        })
                    }
                    </Right>
                </ContentBox>
            </Container>
        </C_Section>
);
};
export default SectionOne;
