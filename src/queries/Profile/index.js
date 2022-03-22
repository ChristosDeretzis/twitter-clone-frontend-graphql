import { gql } from '@apollo/client';

export const PROFILE = gql`
    query Query($userName: String!) {
        profile(userName: $userName) {
            id
            firstName
            lastName
            fullname
            email
            userName
            coverPhoto
            avatar
            bio
            location
            website
            dob
            isSelf
            isFollowing
            followingCount
            followersCount
            tweetsCount
            tweets {
                id
                text
                tags {
                    id
                    text
                }
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
                likesCount
                commentsCount
                retweetsCount
                isLiked
                isTweetMine
                isRetweet
                createdAt
            }
        createdAt 
        }
    }
`;

export const EDIT_PROFILE = gql`
    mutation Mutation(
        $firstName: String, 
        $lastName: String, 
        $coverPhoto: String, 
        $avatar: String, 
        $bio: String, 
        $location: String, 
        $website: String, 
        $dob: String) {
        editProfile(
            firstName: $firstName, 
            lastName: $lastName, 
            coverPhoto: $coverPhoto, 
            avatar: $avatar, 
            bio: $bio, 
            location: $location, 
            website: $website, 
            dob: $dob) {
                id
        }
}
`;