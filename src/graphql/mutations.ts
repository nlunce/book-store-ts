/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookActionCard = /* GraphQL */ `
  mutation CreateBookActionCard(
    $input: CreateBookActionCardInput!
    $condition: ModelBookActionCardConditionInput
  ) {
    createBookActionCard(input: $input, condition: $condition) {
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
export const updateBookActionCard = /* GraphQL */ `
  mutation UpdateBookActionCard(
    $input: UpdateBookActionCardInput!
    $condition: ModelBookActionCardConditionInput
  ) {
    updateBookActionCard(input: $input, condition: $condition) {
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
export const deleteBookActionCard = /* GraphQL */ `
  mutation DeleteBookActionCard(
    $input: DeleteBookActionCardInput!
    $condition: ModelBookActionCardConditionInput
  ) {
    deleteBookActionCard(input: $input, condition: $condition) {
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
