import React from "react";
import { BookContainer, BookImage, BookDetails, Authors } from "./BookStyles";

const Book = ({ book }) => {
  // volumeInfo.title
  // volumeInfo.publisher
  // volumeInfo.description
  // volumeInfo.publishedDate
  // volumeInfo.authors - array

  const {
    title,
    publisher,
    description,
    publishedDate,
    authors
  } = book.volumeInfo;

  const { thumbnail } = book.volumeInfo.imageLinks;
  const { buyLink, isEbook } = book.saleInfo;
  return (
    <BookContainer>
      <BookImage>
        <img src={thumbnail} alt="book thumbnail" />
      </BookImage>

      <BookDetails>
        <h1>{title}</h1>
        <Authors>
          by: {""}
          {authors.map(author => (
            <span key={author}>{author}</span>
          ))}
        </Authors>
        {/* <a href={} /> */}
        <p>Description: {description}</p>
        <h2>Publisher: {publisher}</h2>
        <h3>Published: {publishedDate}</h3>
      </BookDetails>
    </BookContainer>
  );
};

export default Book;
