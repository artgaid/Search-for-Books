import PropTypes from "prop-types";

constructBooksData.propTypes = {
  id: PropTypes.string,
  volumeInfo: {
    title: PropTypes.string,
    authors: PropTypes.string || PropTypes.Array,
    imageLinks: {
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string,
    },
    description: PropTypes.string,
    categories: PropTypes.string || PropTypes.Array,
  },
};

function constructBooksData(books) {
  return books.map((book) => ({
    id: book.id,
    volumeInfo: {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      imageLinks: {
        smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail,
        thumbnail: book.volumeInfo.imageLinks?.smallThumbnail.replace(
          /(?<=zoom=)\d/,
          "2"
        ),
      },
      description: book.volumeInfo.description,
      categories: book.volumeInfo.categories,
    },
  }));
}

export default constructBooksData;
