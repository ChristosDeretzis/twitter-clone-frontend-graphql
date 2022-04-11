import { gql } from '@apollo/client';

export const SEARCH_BY_USER = gql`
    query Query($term: String!) {
        searchByUser(term: $term) {
            id
            userName
            fullname
            avatar
            followingCount
            followersCount
            tweetsCount
            isSelf
            isFollowing
        }
    }
`;

export const SEARCH_BY_TAG = gql`
    query Query($term: String!) {
        searchByTag(term: $term) {
            id
            text
            tags {
                id
                text
            }
            isRetweet
            isTweetMine
            isLiked
            likesCount
            commentsCount
            retweetsCount
            createdAt
            files {
                id
                url
            }
            user {
                id
                userName
                fullname
                avatar
            }
        }
    }
`;

export const SEARCH_BY_TWEET = gql`
    query Query($term: String!) {
        searchByTweet(term: $term) {
            id
            text
            tags {
                id
                text
            }
            isRetweet
            isTweetMine
            isLiked
            likesCount
            commentsCount
            retweetsCount
            createdAt
            files {
                id
                url
            }
            user {
                id
                userName
                fullname
                avatar
            }
        }
    }
`;