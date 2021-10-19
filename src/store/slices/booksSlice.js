import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../actions/books";

const initialState = {
  searchQuery: "",
  books: [],
  status: "idle",
  foundTotalBooks: null,
  currentPage: 0,
  maxResults: 30,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.currentPage = 0;
      state.books = [];
      state.foundTotalBooks = null;
      state.searchQuery = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setNextPage: (state) => {
      state.currentPage += state.maxResults;
    },
    cleanup: (state) => {
      state.searchQuery = "";
      state.books = [];
      state.currentPage = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (state.currentPage > 0) {
          state.books = state.books.concat(action.payload.books);
        } else {
          state.books = action.payload.books;
        }
        state.foundTotalBooks = action.payload.foundTotalBooks;
        state.status = "idle";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { cleanup, setBooks, setSearchQuery, setNextPage } =
  booksSlice.actions;
export default booksSlice.reducer;
