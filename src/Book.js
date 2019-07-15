import React from "react";
import { BookContainer } from "./BookStyles";

const Book = ({ book }) => {
  // volumeInfo.title
  // volumeInfo.publisher
  // volumeInfo.description
  // volumeInfo.publishedDate

  const { title, publisher } = book.volumeInfo;
  return (
    <BookContainer>
      <h1>{title}</h1>
      <h2>{publisher}</h2>
    </BookContainer>
  );
};

export default Book;
