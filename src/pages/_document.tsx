import Document, {DocumentContext, Html, Main} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import React from "react";
import Meta from "../partials/Meta";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                        <Html lang="kr">
                            <Meta title="home"/>
                            {initialProps.styles}
                            {sheet.getStyleElement()}
                        </Html>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    // render() {
    //     const sheet = new ServerStyleSheet()
    //     const main = sheet.collectStyles(<Main/>)
    //     const styleTags = sheet.getStyleElement()
    //     return (
    //         <Html lang="ko">
    //             <Head>
    //                 <meta charSet="utf-8" />
    //                 <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //             </Head>
    //             <Meta title="home"/>
    //             {styleTags}
    //         </Html>
    //     );
    // }
}