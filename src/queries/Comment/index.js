import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation Mutation($addCommentId: ID!, $text: String!) {
        addComment(id: $addCommentId, text: $text) {
            id
            text
            isCommentMine
            user {
                id
                avatar
                fullname
                userName
            }
            createdAt
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation Mutation($deleteCommentId: ID!) {
        deleteComment(id: $deleteCommentId) {
            id
        }
    }
`;