export const BookType = {
  id: String,
  volumeInfo: {
    title: String,
    authors: String || Array,
    imageLinks: {
      smallThumbnail: String,
      thumbnail: String,
    },
    description: String,
    categories: String || Array,
  },
};

export const BooksResponseData = {
  items: BookType,
  totalItems: Number,
};
