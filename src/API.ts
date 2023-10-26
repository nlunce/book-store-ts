/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookActionCardInput = {
  id?: string | null,
  title: string,
  author?: Array< string > | null,
  description: string,
  bookCover: string,
  price: number,
  isbn10: string,
  available: boolean,
};

export type ModelBookActionCardConditionInput = {
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  description?: ModelStringInput | null,
  bookCover?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isbn10?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  and?: Array< ModelBookActionCardConditionInput | null > | null,
  or?: Array< ModelBookActionCardConditionInput | null > | null,
  not?: ModelBookActionCardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type BookActionCard = {
  __typename: "BookActionCard",
  id: string,
  title: string,
  author?: Array< string > | null,
  description: string,
  bookCover: string,
  price: number,
  isbn10: string,
  available: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBookActionCardInput = {
  id: string,
  title?: string | null,
  author?: Array< string > | null,
  description?: string | null,
  bookCover?: string | null,
  price?: number | null,
  isbn10?: string | null,
  available?: boolean | null,
};

export type DeleteBookActionCardInput = {
  id: string,
};

export type ModelBookActionCardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  description?: ModelStringInput | null,
  bookCover?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isbn10?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  and?: Array< ModelBookActionCardFilterInput | null > | null,
  or?: Array< ModelBookActionCardFilterInput | null > | null,
  not?: ModelBookActionCardFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBookActionCardConnection = {
  __typename: "ModelBookActionCardConnection",
  items:  Array<BookActionCard | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBookActionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  bookCover?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  isbn10?: ModelSubscriptionStringInput | null,
  available?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionBookActionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookActionCardFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateBookActionCardMutationVariables = {
  input: CreateBookActionCardInput,
  condition?: ModelBookActionCardConditionInput | null,
};

export type CreateBookActionCardMutation = {
  createBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookActionCardMutationVariables = {
  input: UpdateBookActionCardInput,
  condition?: ModelBookActionCardConditionInput | null,
};

export type UpdateBookActionCardMutation = {
  updateBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookActionCardMutationVariables = {
  input: DeleteBookActionCardInput,
  condition?: ModelBookActionCardConditionInput | null,
};

export type DeleteBookActionCardMutation = {
  deleteBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookActionCardQueryVariables = {
  id: string,
};

export type GetBookActionCardQuery = {
  getBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookActionCardsQueryVariables = {
  filter?: ModelBookActionCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookActionCardsQuery = {
  listBookActionCards?:  {
    __typename: "ModelBookActionCardConnection",
    items:  Array< {
      __typename: "BookActionCard",
      id: string,
      title: string,
      author?: Array< string > | null,
      description: string,
      bookCover: string,
      price: number,
      isbn10: string,
      available: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookActionCardSubscriptionVariables = {
  filter?: ModelSubscriptionBookActionCardFilterInput | null,
};

export type OnCreateBookActionCardSubscription = {
  onCreateBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookActionCardSubscriptionVariables = {
  filter?: ModelSubscriptionBookActionCardFilterInput | null,
};

export type OnUpdateBookActionCardSubscription = {
  onUpdateBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookActionCardSubscriptionVariables = {
  filter?: ModelSubscriptionBookActionCardFilterInput | null,
};

export type OnDeleteBookActionCardSubscription = {
  onDeleteBookActionCard?:  {
    __typename: "BookActionCard",
    id: string,
    title: string,
    author?: Array< string > | null,
    description: string,
    bookCover: string,
    price: number,
    isbn10: string,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
