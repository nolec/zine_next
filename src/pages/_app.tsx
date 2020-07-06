import React from "react";
import {NextComponentType} from "next";
import {AppContext, AppInitialProps, AppProps} from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {Router} from "next/router";
import Layout from "../components/Layout";
import GlobalStyle from "../CSS_Styles/Globalstyles";
import ContextProvider from "../contextAPI/contextProvider";
import {ThemeProvider} from "styled-components";
import theme from "../CSS_Styles/CSS";
import {ApolloProvider} from "@apollo/react-hooks";
import {useApollo} from "../lib/apolloClient";
import Meta from "../partials/Meta";

NProgress.configure({showSpinner: false, trickleSpeed: 300})

Router.events.on('routeChangeStart', () => {
    NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
})

Router.events.on('routeChangeError', () => {
    NProgress.done();
})

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
    const apolloClient = useApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={apolloClient}>
            <ContextProvider>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <GlobalStyle/>
                        <Component {...pageProps}/>
                    </Layout>
                </ThemeProvider>
            </ContextProvider>
        </ApolloProvider>
    )
}
export default MyApp;