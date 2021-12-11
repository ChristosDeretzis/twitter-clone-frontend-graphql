import gql from "graphql-tag";

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                userName
                avatar
                fullname
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation Signup($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!) {
        signup(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password) {
            token
            user {
            id
            userName
            fullname
            avatar
            }
        }
    }
`;