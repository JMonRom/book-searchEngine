import { gql } from '@apollo/client';

export const login_User = gql `
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

export const create_User = gql `
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

export const save_Book = gql `
  mutation saveBook($newBook: InputBook!){
    saveBook(newBook: $newBook) {
        _id
        username
        email 
        savedBooks {
          authors
          bookId
          description
          title
          image
          link
        }
      }
    }
`;

export const delete_Book = gql `
  mutation saveBook($newBook: InputBook!){
    saveBook(newBook: $newBook) {
        _id
        username
        email 
        savedBooks {
          authors
          bookId
          description
          title
          image
          link
        }
      }
    }
`;