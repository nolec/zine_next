import React from "react";
import {NextSeo} from "next-seo"

interface IMetaProps {
    title: string
}

const Meta: React.FC<IMetaProps> = ({title}) => {
    return (
        <>
            <NextSeo nofollow={true} title={title} description="Zine User Pages"/>
        </>
    )
}
export default Meta;