import gql from "graphql-tag";

export const GET_ARTICLES = gql`{
    articles(includeInvisible : false){
        id
        title
        subtitle
        squareThumbnail
        rectangleThumbnail
        tags
        createdAt
        container{
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
    query article($id : String!){
        article(id : $id){
            title
            subtitle
            squareThumbnail
            rectangleThumbnail
            tags
            createdAt
            container{
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