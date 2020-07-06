import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useQuery} from "@apollo/react-hooks";
import {GET_ARTICLE} from "../../graphql";
import {ParsedUrlQuery} from "querystring";
import {GetServerSidePropsContext} from "next";
import {initializeApollo} from "../../lib/apolloClient";

interface IHtmlParserProps {
    initialApolloState: {}
    id: string
}

const SectionContWrap = styled.div`
    overflow : hidden;
    
    &.sectionContWrap > div:not(.GoodsItem) + div.GoodsItem {
        clear : both;
    }
    &.sectionContWrap > div.GoodsItem + div:not(.GoodsItem){
        clear : both;
    }`

const VideoWrapper = styled.div`
        position : relative;
        padding-bottom : 56.25%;
        padding-top : 25px;
        height : 0;
        float : left;
        overflow : hidden;
        left : 50%;
        transform : translateX(-50%);
 `

const Detail: React.FC<IHtmlParserProps> = ({initialApolloState, id}) => {

    const [article, setArticle] = useState({container: []});
    const {data: articleData} = useQuery(GET_ARTICLE, {
        variables: {
            id
        }
    });

    useEffect(() => {
        if (articleData?.article) {
            setArticle(articleData?.article)
        }
    }, [articleData])

    return (
        <div className={'eventCont'} style={{width: '1150px', margin: '0 auto'}}>
            <section style={{overflow: 'hidden'}}>
                <SectionContWrap className={'sectionContWrap'}>
                    {article?.container?.map((item: any, index: number): any => {
                        if (item.image.includes('https://saracen.azureedge.net/img/template/goods')) {
                            return (
                                <div className={'GoodsItem'} key={index}
                                     style={{display: 'block', width: '25%', padding: '1%', float: 'left'}}>
                                    <a href={`https://thesaracen.com/goods/${item.link}`} target="_blank"
                                       rel='noopener noreferrer'>
                                        <img src={item.image}
                                             style={{width: '100%', border: 'solid 1px #e9e9e9'}}
                                             alt={item.alt}/>
                                        <span style={{
                                            fontSize: '1.4em',
                                            display: 'block',
                                            margin: '10px 0 5px 0',
                                            fontWeight: 'bold',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>{item.title}</span>
                                        <>
                                            {
                                                (item.price.market > item.price.retailSale) ?
                                                    <>
                                                        <div style={{float: 'left'}}>
                                                                <span style={{
                                                                    display: 'block',
                                                                    fontSize: '4em',
                                                                    color: '#f5588b',
                                                                    fontWeight: 'bold',
                                                                    float: 'right',
                                                                    paddingTop: '15px'
                                                                }}>{Math.floor((item.price.market - item.price.retailSale) / item.price.market * 100) + "% "}</span>
                                                        </div>
                                                        <div style={{float: 'right'}}>
                                                                <span style={{
                                                                    color: '#3e3e3e',
                                                                    fontSize: '1.5em',
                                                                    display: 'block',
                                                                    margin: '15px 0 0 0',
                                                                    textDecoration: 'line-through',
                                                                    textAlign: 'right'
                                                                }}>{`${item.price.market}원`}</span>
                                                            <span style={{
                                                                color: '#f5588b',
                                                                fontSize: '2.2em',
                                                                fontWeight: 'bold'
                                                            }}>{`${item.price.retailSale}원`}</span>
                                                        </div>
                                                    </>
                                                    :
                                                    <div style={{float: 'right'}}>
                                                            <span style={{
                                                                color: '#f5588b',
                                                                fontSize: '2.2em',
                                                                display: 'block',
                                                                margin: '15px 0 0 0',
                                                                fontWeight: 'bold'
                                                            }}>{`${item.price.retailSale}원`}</span>
                                                    </div>
                                            }
                                        </>
                                    </a>
                                </div>
                            )
                        }

                        if (item.image.length < 50) {
                            return (
                                <VideoWrapper key={index} style={{width: `${item.width}%`}}
                                              className={'VideoWrapper'}>
                                    <iframe src={`https://www.youtube.com/embed/${item.image}`} frameBorder='0'
                                            allowFullScreen style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '100%'
                                    }} title={item.title}/>
                                </VideoWrapper>
                            )
                        }

                        if (item.image.length > 50) {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        (item.imgLink?.use && item.imgLink.href !== '')
                                            ?
                                            <div
                                                style={{width: `${item.width}%`, float: item.float}}>
                                                <a href={item.imgLink.href} style={{display: 'block'}}
                                                   target='_blank' rel='noopener noreferrer'>
                                                    <img src={item.image} alt={item.alt}
                                                         style={{display: 'block'}}/>
                                                </a>
                                            </div>
                                            :
                                            <div
                                                style={{width: `${item.width}%`, float: item.float}}>
                                                <img src={item.image} alt={item.alt} style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '100%'
                                                }}/>
                                            </div>
                                    }
                                    {
                                        (item.imgTitle?.use && item.imgTitle.value !== '')
                                            ?
                                            <h2 style={{
                                                color: `${item.imgTitle.color}`,
                                                fontSize: '22px',
                                                fontWeight: 'bold',
                                                display: 'block',
                                                width: '100%',
                                                padding: '10px'
                                            }}>{item.imgTitle.value}</h2>
                                            : null
                                    }
                                    {
                                        (item.imgExplanation?.use && item.imgExplanation.value !== '')
                                            ?
                                            <span style={{
                                                display: 'block',
                                                fontSize: '16px',
                                                padding: '10px',
                                                width: '100%',
                                                whiteSpace: 'pre',
                                                lineHeight: '1.4em'
                                            }}>{item.imgExplanation.value}</span>
                                            : null
                                    }
                                </React.Fragment>
                            )
                        }
                    })}
                </SectionContWrap>
            </section>
        </div>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: GET_ARTICLE,
        variables: {
            id: ctx.query.id
        }
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
            id: ctx.query.id
        }
    }
}

export default Detail;