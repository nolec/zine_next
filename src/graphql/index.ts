import gql from "graphql-tag";

export const GET_TOTALCOUNT = gql`
    query getTotalCount($tag : String){
        totalCount(includeInvisible: false, tag : $tag)
    }
`;

export const GET_ARTICLES_PLACE = gql`
    query getPlaceArticles($limit : Int,$skip : Int){
        articles(includeInvisible: false,skip : $skip,  limit : $limit, tag : "네일맛집") {
            id
            title
            subtitle
            squareThumbnail
            rectangleThumbnail
            tags
            createdAt
            container {
                alt
                float
                image
                key
                link
                width
                title
            }
        }
    }
`;
export const GET_ARTICLES_SPECIAL_ORDER = gql`
    query getSpecialOrderArticles($limit : Int,$skip : Int){
        articles(includeInvisible: false,skip : $skip,limit : $limit, tag : "트와이스") {
            id
            title
            subtitle
            squareThumbnail
            rectangleThumbnail
            tags
            createdAt
            container {
                alt
                float
                image
                key
                link
                width
                title
            }
        }
    }
`;
export const GET_ARTICLES_POSTING = gql`
    query getPostingArticles($limit : Int,$skip : Int){
        articles(includeInvisible: false,skip : $skip, limit : $limit, tag : "레드벨벳") {
            id
            title
            subtitle
            squareThumbnail
            rectangleThumbnail
            tags
            createdAt
            container {
                alt
                float
                image
                key
                link
                width
                title
            }
        }
    }
`;

export const GET_ARTICLE = gql`
    query article($id: String!) {
        article(id: $id) {
            title
            subtitle
            squareThumbnail
            rectangleThumbnail
            tags
            createdAt
            container {
                alt
                float
                image
                key
                link
                width
                title
            }
        }
    }
`;
