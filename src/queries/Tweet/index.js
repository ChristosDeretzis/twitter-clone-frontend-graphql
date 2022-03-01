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

export const LIKE_TWEET = gql`
    mutation Mutation($toggleLikeId: ID!) {
        toggleLike(id: $toggleLikeId)
    }
`;

export const RETWEET_TWEET = gql`
    mutation Mutation($toggleRetweetId: ID!) {
        toggleRetweet(id: $toggleRetweetId)
    }
`;

export const DELETE_TWEET = gql`
    mutation Mutation($deleteTweetId: ID!) {
        deleteTweet(id: $deleteTweetId) {
            id
        }
    }
`;

export const TWEET = gql`
    query Query($tweetId: ID!) {
        tweet(id: $tweetId) {
            id
            text
            tags {
                id
                text
            }
            user {
                id
                fullname
                avatar
                userName
            }
            files {
                id
                url
            }
            likesCount
            commentsCount
            retweetsCount
            isLiked
            isRetweet
            comments {
                id
                text
                isCommentMine
                user {
                    id
                    fullname
                    userName
                    avatar
                }
                createdAt
            }
            createdAt
        }
    }
`;