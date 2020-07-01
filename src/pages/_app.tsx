import React from "react";
import {NextComponentType} from "next";
import {AppContext, AppInitialProps, AppProps} from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {Router} from "next/router";
import Layout from "./components/Layout";
import GlobalStyle from "./CSS_Styles/Globalstyles";
import ContextProvider from "./contextAPI/contextProvider";
import {ThemeProvider} from "styled-components";
import theme from "./CSS_Styles/CSS";

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
    return (
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyle/>
                    <Component {...pageProps}/>
                </Layout>
            </ThemeProvider>
        </ContextProvider>
    )
}
export default MyApp;