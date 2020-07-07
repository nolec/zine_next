import React, {useEffect, useState} from "react";
import Context from "./context";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import {
    GET_ARTICLES_PLACE,
    GET_ARTICLES_POSTING,
    GET_ARTICLES_SPECIAL_ORDER, GET_TOTALCOUNT
} from "../graphql";
import {NextRouter, useRouter} from "next/router";

const ContextProvider: React.FC = ({children}) => {

    const [placeLimit, setPlaceLimit] = useState(3)
    const [specialLimit, setSpecialLimit] = useState(2)
    const [postingLimit, setPostingLimit] = useState(3)
    const handleLimit = (which: string) => {
        if (which === "first") {
            setPlaceLimit(placeLimit);
        }
        if (which === "second") {
            setSpecialLimit(specialLimit);
        }
        if (which === "third") {
            setPostingLimit(postingLimit);
        }
    }
    const {data: placeTotal} = useQuery(GET_TOTALCOUNT, {variables: {tag: "네일맛집"}})
    const {data: specialTotal} = useQuery(GET_TOTALCOUNT, {variables: {tag: "트와이스"}})
    const {data: postingTotal} = useQuery(GET_TOTALCOUNT, {variables: {tag: "레드벨벳"}})

    const {data: placeData, loading: placeLoading, fetchMore: placeFetchMore} = useQuery(
        GET_ARTICLES_PLACE,
        {variables: {limit: placeLimit}}
    );
    const {data: specialOrderData, loading: specialOrderLoading, fetchMore: specialFetchMore} = useQuery(
        GET_ARTICLES_SPECIAL_ORDER,
        {variables: {limit: specialLimit}}
    );
    const {data: postingData, loading: postingLoading, fetchMore: postingFetchMore} = useQuery(
        GET_ARTICLES_POSTING,
        {variables: {limit: postingLimit}}
    );

    //-- Header -- ScrollY --
    const [top, setTop] = useState("");

    const topHandle = (y: number) => {
        if (y >= 0 && y < 61) {
            setTop(`${60 - y}px`);
        } else if (y > 59) {
            setTop(`${0}px`);
        }
    };
    //-- Header -- ScrollY --

    //-- Modal -- Check -- Search --
    const [modalCheck, setModalCheck] = useState(false);

    const modalHandle = () => {
        console.log(modalCheck);
        setModalCheck(!modalCheck);
    }
    //-- Modal -- Check -- Search --


    const provider = {
        placeLimit, specialLimit, postingLimit,
        placeTotal, specialTotal, postingTotal,
        handleLimit,
        placeFetchMore, placeData, placeLoading,
        specialFetchMore, specialOrderData, specialOrderLoading,
        postingFetchMore, postingData, postingLoading,
        top, topHandle,
        modalCheck, modalHandle
    };

    return <Context.Provider value={provider}>{children}</Context.Provider>;
};

export default ContextProvider;
