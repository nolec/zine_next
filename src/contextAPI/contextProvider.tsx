import React from "react";
import Context from "./context";
import {useQuery} from "@apollo/react-hooks"
import {GET_ARTICLES} from "../graphql";

const ContextProvider: React.FC = ({children}) => {

    const {data: articlesData, loading : articlesLoading} = useQuery(GET_ARTICLES);

    const provider = {articlesData,articlesLoading}

    return <Context.Provider value={provider}>{children}</Context.Provider>
}

export default ContextProvider;