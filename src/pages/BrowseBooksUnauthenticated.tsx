import React, { useState } from "react";
import {
  BrowseBooksPage as BrowseBooks,
  BookActionCardCollection,
  CloseBar,
  ProductDetail,
} from "../ui-components";

const BrowseBooksUnauthenticated: React.FC = () => {
  return (
    <>
      <BrowseBooks />
    </>
  );
};

export default BrowseBooksUnauthenticated;
