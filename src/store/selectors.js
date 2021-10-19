export const selectFoundTotalBooks = (state) => state.books.foundTotalBooks;
export const selectFoundBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.status === "loading";
