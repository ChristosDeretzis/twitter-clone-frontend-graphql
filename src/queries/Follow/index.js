import { gql } from '@apollo/client';

export const FOLLOW = gql`
    mutation Follow($followId: ID!) {
        follow(id: $followId)
    }
`;

export const UNFOLLOW = gql`
    mutation Unfollow($unfollowId: ID!) {
        unfollow(id: $unfollowId)
    }
`;
