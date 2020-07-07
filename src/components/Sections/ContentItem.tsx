import React, {useEffect, useState} from "react";
import {C_ImgBox, C_TextBox} from "../../CSS_Styles/CSS";
import styled from "styled-components";
import Link from "next/link";
import MoreBtn from "../MoreBtn";

interface IContentProps {
    length?: number | undefined;
    marginCount?: number[];
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

const Ul = styled.ul<IContentProps>`
      display : flex;
      flex-flow: wrap row;
      width : 100%;
      position : relative;
`;
const ItemLi = styled.li<IContentProps>`
  width : ${props => `calc(100%/${props.length} - ${props.length % 3 === 0 ? 12 : 18}px)`};
  ${props => {
        return props.marginCount.map((item: any) : any => {
            if (props.length % 3 === 0) {
                return `&:nth-of-type(${item - 1}){margin-right : 18px; margin-left : 18px;}`
            }
            if (props.length % 2 === 0) {
                return `&:nth-of-type(${item - 1}){margin-right : 18px;} &:nth-of-type(${item - 2}){margin-left : 18px;}`
            }
        })
    }}
`
;
const ItemContainer = styled.div
    `
`
;
const A = styled.a
    `
`
;
const AContainer = styled.div
    `
height : 100%;
display : flex;
flex-flow : wrap column;
`
;
const Title = styled.h3
    ``
;
const Text = styled.p
    ``
;

const ContentItem: React.FC<IProps> = ({articlesData, count, fetchMore, limit, total, handleLimit, which}) => {
    const [marginCount, setMarginCount] = useState([count]);
    const handleMarginCount = () => {
        const copy = marginCount;
        marginCount.map(item => {
            const it = item + count;
            copy.push(it);
        });
        const result = Array.from(new Set(copy));
        console.log(result);
        setMarginCount(result);
    }
    return (
        <>
            <Ul>
                {articlesData?.articles?.map((item: any, index: number) => {
                    return (
                        <ItemLi
                            length={articlesData?.articles?.length <= count ? articlesData?.articles?.length : count}
                            marginCount={marginCount}
                            key={index}>
                            <ItemContainer>
                                <Link href="/[id]" as={
                                    `/${item.id}`
                                }>
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
            {total <= articlesData?.articles.length ? null : (
                <MoreBtn handleMarginCount={handleMarginCount} limit={limit} fetchMore={fetchMore}/>)}
        </>
    )
}
export default ContentItem;