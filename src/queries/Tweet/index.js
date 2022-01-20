import { gql } from '@apollo/client';

export const NEW_TWEET = gql`
    mutation Mutation($text: String!, $files: [String!], $tags: [String!]) {
        newTweet(text: $text, files: $files, tags: $tags) {
        id
        text
        tags {
            id
            text
        }
        isLiked
        likesCount
        commentsCount
        createdAt
        }
    }
  `;