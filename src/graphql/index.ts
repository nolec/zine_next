import gql from "graphql-tag";

export const GET_ARTICLES = gql`{
    articles(includeInvisible : false){
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