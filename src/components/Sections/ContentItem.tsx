import React from "react";
import {C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Link from "next/link";

interface IContentProps {
    length?: number;
}

interface IProps {
    articlesData: { articles: [] }
    count: number
    fetchMore: Function
    limit: number
    total: number
    handleLimit: Function,
    which: string
}

const Ul = styled.ul`
      display : flex;
      flex-flow: wrap row;
      width : 100%;
      position : relative;
`;
const ItemLi = styled.li<IContentProps>`
  width : ${props => `calc(100%/${props.length})`};
  padding : 0 1%;
  // margin-left: ${props => `calc(1% / ${props.length})`};
  //   margin-right: ${props => `calc(1% / ${props.length})`};
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

const MoreBox = styled.div`
  width : 100%;
  display :flex;
  justify-content: center;
  align-items: center;
  margin : 10px 0;
`;
const More = styled.div`
    padding : 10px 30px;
    cursor : pointer;
    border : 1px solid;
    transition : .1s linear;
    :hover {
      background-color : black;
      color : white;
    }
`;

const ContentItem: React.FC<IProps> = ({articlesData, count, fetchMore, limit, total, handleLimit, which}) => {
    return (
        <>
            <Ul>
                {articlesData?.articles?.map((item: any, index: number) => {
                    return (
                        <ItemLi
                            length={articlesData?.articles?.length <= count ? articlesData?.articles?.length : count}
                            key={index}>
                            <ItemContainer>
                                <Link href="/[id]" as={`/${item.id}`}>
                                    <A>
                                        <AContainer>
                                            <C_ImgBox height={"300px"} width={"100%"}>
                                                <img src={item.squareThumbnail}/>
                                            </C_ImgBox>
                                            <C_TextBox padding={"10px 0"} width={"100%"}>
                                                <Title>{item.title}</Title>
                                                <Text>{item.subtitle}</Text>
                                            </C_TextBox>
                                        </AContainer>
                                    </A>
                                </Link>
                            </ItemContainer>
                        </ItemLi>
                    )

                })}

            </Ul>
            {console.log(which, articlesData?.articles.length, total, limit)}
            {total <= articlesData?.articles.length ? <></> : <MoreBox>
                <More onClick={() => {
                    handleLimit(which);
                    fetchMore({
                        variables: {
                            limit: 3,
                            skip : 3 * (limit/3)
                        },
                        updateQuery: (prev: { articles: any; }, {fetchMoreResult}: any) => {
                            if (!fetchMoreResult) return {};
                            const result = Object.assign({}, prev, {articles : [...prev.articles, ...fetchMoreResult.articles]});
                            console.log(result)
                            return result
                        }
                    })
                }}>
                    <span>More</span>
                    </More>
                    </MoreBox>}

                </>
                )
                }
            export default ContentItem;