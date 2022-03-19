import { gql } from '@apollo/client';

export const FEED = gql`
    query Query {
        feed {
            id
            text
            tags {
            id
            text
            }
            isLiked
            isTweetMine
            likesCount
            commentsCount
            retweetsCount
            isRetweet
            files {
            id
            url
            }
            user {
            id
            avatar
            userName
            fullname
            }
            createdAt
        }
    }
`;

export const USERS = gql`
    query Query {
        users {
            id
            userName
            isSelf
            isFollowing
            avatar
            fullname
        }
    }
`;