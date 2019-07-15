import React, { useState } from "react";
import axios from "axios";
import Book from "./Book";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState([]);
  const URL = "https://www.googleapis.com/books/v1";

  const handleSearch = async event => {
    event.preventDefault();
    const response = await axios.get(`${URL}/volumes?q=${query}`);
    setBooks(response.data.items);
    setQuery("");
  };

  console.log(books);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          onChange={event => setQuery(event.target.value)}
          type="text"
          value={query}
          placeholder="Find your book here..."
        />
        <button type="submit">Search</button>
      </form>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default App;
