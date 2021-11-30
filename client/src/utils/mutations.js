import { gql } from '@apollo/client';

export const login_user = gql `
  mutation login(
    $email: String!
    $password: String!
  ) {
    login( 
      email: $email
      password: $password
    ) {
      token
      user{
        _id
        username
      }
    }
  }
`;

export const create_user = gql `
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username 
      email: $email
      password: $password
    ) {
      token
      user{
        _id
        username
        email 
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

export const save_book = gql `
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username 
      email: $email
      password: $password
    ) {
      token
      user{
        _id
        username
        email 
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

