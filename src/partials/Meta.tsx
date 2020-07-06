import React from "react";
import {NextSeo, BreadcrumbJsonLd} from "next-seo"

interface IMetaProps {
    title: string
    data: any
}

const Meta: React.FC<IMetaProps> = ({title, data}) => {
    return (
        <>
            <NextSeo title={title} description="Zine User Pages"
                     openGraph={{
                         type: 'website',
                         url: 'https://localhost:3000',
                         title: "",
                         images: data?.articles.map((item : any) => {
                             return {
                                 url: item.squareThumbnail,
                                 width: 300,
                                 height: 300,
                                 alt: item.subtitle
                             }
                         })
                     }}/>
            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: 'Books',
                        item: 'https://example.com/books',
                    },
                    {
                        position: 2,
                        name: 'Authors',
                        item: 'https://example.com/books/authors',
                    },
                    {
                        position: 3,
                        name: 'Ann Leckie',
                        item: 'https://example.com/books/authors/annleckie',
                    },
                    {
                        position: 4,
                        name: 'Ancillary Justice',
                        item: 'https://example.com/books/authors/ancillaryjustice',
                    },
                ]}
            />
        </>
    )
}
export default Meta;