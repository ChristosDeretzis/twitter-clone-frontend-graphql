# Twitter Clone Frontend

This project is the frontend repo of the Twitter Clone application that I developed in order to improve my programming skills

You can find the backend repo here: https://github.com/ChristosDeretzis/twitter-clone-backend-graphql

## Features
- [x] Login/Sign Up
- [x] Add a new Post
- [x] Show user Feed
- [x] Show Details of a Post 
- [x] Add Comment to Post
- [x] Show User Profile
- [x] Edit User Profile
- [x] Follow/Unfollow User
- [x] Search by Users/Post/Hashtag
- [ ] Show and send Notifications
- [ ] Dark/Light Theme
- [ ] Bookmark a Post

## Technologies/Dependencies Used
- React/JavaScript
- React router (for routing our application)
- CSS
- Apollo Client (for the GraphQL)
- Material UI (for some components and icons)
- Formik/yup (for the form validation)

## How to setup project
1. Clone this project locally
2. Run `npm install`
3. Create an .env file with 2 variables:
   
    ```js
    SERVER_URL=<SERVER_ENDPOINT> 
    CLOUDINARY_URL=<URL_FOR_CLOUDINARY_API>
    ```
4. After that run `npm run start` to launch the application
