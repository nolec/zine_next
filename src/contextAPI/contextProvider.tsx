import React, {useEffect, useState} from "react";
import Context from "./context";
import {useQuery} from "@apollo/react-hooks"
import {GET_ARTICLE, GET_ARTICLES} from "../graphql";
import {NextRouter, useRouter} from "next/router";

const ContextProvider: React.FC = ({children}) => {

    const {data: articlesData, loading : articlesLoading} = useQuery(GET_ARTICLES);

    const provider = {articlesData,articlesLoading}

    return <Context.Provider value={provider}>{children}</Context.Provider>
}

export default ContextProvider;