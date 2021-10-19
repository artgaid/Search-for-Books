import { createAsyncThunk } from "@reduxjs/toolkit";
import BooksService from "../../services/booksAPI";
import constructBooksData from "../../helpers/constructBooksData";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { getState }) => {
    const { searchQuery, currentPage, maxResults } = getState().books;
    const { categories, sortingBy } = getState().searchOptions;
    const options = {
      query: searchQuery,
      categories: categories,
      sortingBy: sortingBy,
      startIndex: currentPage,
      maxResults: maxResults,
    };
    const response = await BooksService(options);
    const data = await response.json();
    let booksData = [];
    if (data.items && data.items.length > 0) {
      booksData = constructBooksData(data.items);
    }
    return { books: booksData, foundTotalBooks: data.totalItems };
  }
);
