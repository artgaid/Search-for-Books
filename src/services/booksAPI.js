const apiConfig = {
  baseURL: "https://www.googleapis.com/books/v1",
  apiKey: "AIzaSyC26Es5eJDrBPR8Rkgi51B4O5WImfiHtSk",
};

const BooksService = (options) => {
  fetch(
    `${apiConfig.baseURL}/volumes?q=${options.query}${
      options.categories && `+subject:${options.categories}`
    }${options.sortingBy && `&orderBy=${options.sortingBy}`}&startIndex=${
      options.startIndex
    }&maxResults=${options.maxResults}&key=${apiConfig.apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

export default BooksService;
