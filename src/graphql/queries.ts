/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookActionCard = /* GraphQL */ `
  query GetBookActionCard($id: ID!) {
    getBookActionCard(id: $id) {
      id
      title
      author
      description
      bookCover
      price
      isbn10
      available
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookActionCards = /* GraphQL */ `
  query ListBookActionCards(
    $filter: ModelBookActionCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookActionCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        description
        bookCover
        price
        isbn10
        available
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
