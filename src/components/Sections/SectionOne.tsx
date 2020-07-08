import React, {useContext, useEffect} from "react";
import {C_Section, C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Context from "../../contextAPI/context";
import Link from "next/link";

const Container = styled.div`
    padding : 75px 0 0 0;
`;
const Area = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height : 750px;
`;
const Left = styled.div`
  height: 100%;
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  padding : 0 20px 0 0;
`;
const Right = styled.div`

`;

//--------Left--------------------------------
const MainTitle = styled.h2`  
  font-family: GmarketSans;
  letter-spacing: -1.39px;  
    font-weight: 500;
  `;
const Title = styled.h3`
  font-family: AppleSDGothicNeo;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1.3px;
  color: #252525;
`;
const Text = styled.p`
  font-family: AppleSDGothicNeo;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.64px;
  text-align: left;
  color: #666666;
`;
const TagBox = styled.div`
    margin-top : 38px;
    display: flex;
`;
const Tags = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #545454;
  padding : 6.5px 17px;
  border : 1px solid;
`;
const ItemContainer = styled.div`
  height : 100%;
  :not(:last-child){}
`;
const Item = styled.div`
  display: flex;
  height : 100%;
  .detail_box {
    height : 100%;
    display : flex;
    flex-direction: row-reverse;
    padding : 57px 0 0 18px;
    .a_box {
      position : relative;
      flex-basis: 40%;
      border-bottom : 2px solid;
      a {
      position : absolute;
      right : 0;
      bottom : 33px;
      padding : 16px 118px 16px 33px;
      border : 1px solid #e2e2e2;
      }
    }
  }
`;

const SectionOne = () => {
    const {placeData, specialOrderData, postingData} = useContext(Context);

    return (
        <C_Section margin={"0 0 0 0"}>
            <Container>
                {/*<C_TextBox width={"100%"} padding={"75px 0"} textAlign={"center"} color={"#f4b8c3"} fontSize={"40px"}>*/}
                {/*    <MainTitle>SPECIAL ORDER</MainTitle>*/}
                {/*</C_TextBox>*/}
                <Area>
                    <Left>
                        <ItemContainer>
                            <Item style={{flexDirection: "column"}}>
                                <C_ImgBox height={"calc(100% - 200px)"}>
                                    <img src={placeData.articles[0].squareThumbnail}/>
                                </C_ImgBox>
                                <div className="detail_box">
                                    <div className="a_box">
                                        <Link href="/[id]" as={`/${placeData.articles[0].id}`}>
                                            <a>
                                            <span>
                                                보러가기
                                            </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <C_TextBox flexBasis={"60%"}>
                                        <Title>{placeData.articles[0].title}</Title>
                                        <Text>{placeData.articles[0].subtitle}</Text>
                                        <TagBox>{placeData.articles[0].tags.map((it: any) =>
                                            <Tags>{it}</Tags>)}
                                        </TagBox>
                                    </C_TextBox>
                                </div>
                            </Item>
                        </ItemContainer>
                    </Left>
                    <Right>{
                        placeData?.articles?.map((item: any) => {
                            return <ItemContainer>
                                <Item>
                                    {/*<LinkBox>*/}
                                    {/*    <Link href="/[id]" as={`/${item.id}`}>*/}
                                    {/*        <a>*/}
                                    {/*            <C_ImgBox height={"200px"}>*/}
                                    {/*                <img src={item.squareThumbnail}/>*/}
                                    {/*            </C_ImgBox>*/}
                                    {/*        </a>*/}
                                    {/*    </Link>*/}
                                    {/*</LinkBox>*/}
                                    {/*<LinkBox>*/}
                                    {/*    <Link href="/[id]" as={`/${item.id}`}>*/}
                                    {/*        <a>*/}
                                    {/*            <C_TextBox>*/}
                                    {/*                <Title>{item.title}</Title>*/}
                                    {/*                <Text>{item.subtitle}</Text>*/}
                                    {/*                <TagBox>{item.tags.map((it: any) => <Tags>{it}</Tags>)}</TagBox>*/}
                                    {/*            </C_TextBox>*/}
                                    {/*        </a>*/}
                                    {/*    </Link>*/}
                                    {/*</LinkBox>*/}

                                </Item>
                            </ItemContainer>
                        })
                    }
                    </Right>
                </Area>
            </Container>
        </C_Section>
    );
};
export default SectionOne;
