import React from "react";
import {C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Link from "next/link";

interface IContentProps {
    length?: number | undefined;
}

interface IProps {
    articlesData: { articles: [] }
    count: number
}

const Ul = styled.ul`
      display : flex;
      justify-content: flex-start;
      li:first-child{
        margin-left : 0;
      }
      li:last-child{
        margin-right : 0;
      }
`;
const ItemLi = styled.li<IContentProps>`
      margin : 10px 10px;
      width : ${(props) => `calc(100%/${props.length})`};
`;
const ItemContainer = styled.div`
`;
const A = styled.a`
`;
const AContainer = styled.div`
    height : 100%;
    display : flex;
    flex-flow : wrap column;
`;
const Title = styled.h3``;
const Text = styled.p``;

const ContentItem: React.FC<IProps> = ({articlesData, count}) => {
    return (
        <Ul>
            {articlesData?.articles?.map((item: any, index: number) => {
                if (index > count - 1) {
                    return <React.Fragment key={index}></React.Fragment>
                } else {
                    return (
                        <ItemLi
                            length={articlesData?.articles?.length <= count ? articlesData?.articles?.length : count}
                            key={index}>
                            <ItemContainer>
                                <Link href="/[id]" as={`/${item.id}`}>
                                    <A>
                                        <AContainer>
                                            <C_ImgBox height={"300px"}>
                                                <img src={item.squareThumbnail}/>
                                            </C_ImgBox>
                                            <C_TextBox padding={"10px 0"}>
                                                <Title>{item.title}</Title>
                                                <Text>{item.subtitle}</Text>
                                            </C_TextBox>
                                        </AContainer>
                                    </A>
                                </Link>
                            </ItemContainer>
                        </ItemLi>
                    )
                }

            })}
        </Ul>
    )
}
export default ContentItem;