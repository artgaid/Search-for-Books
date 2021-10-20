const apiConfig = {
  baseURL: "https://www.googleapis.com/books/v1",
  apiKey: "AIzaSyBX3IHC5OcFFseQRtWrNwn1YDV50UZAWbE",
};

export default class BooksService {
  static async getBooks(query, startIndex, maxResults, categories, sortingBy) {
    return await fetch(
      `${apiConfig.baseURL}/volumes?q=${query}${
        categories && `+subject:${categories}`
      }${
        sortingBy && `&orderBy=${sortingBy}`
      }&startIndex=${startIndex}&maxResults=${maxResults}&key=${
        apiConfig.apiKey
      }`
    );
  }
}

// const BooksService = (options) => {
//   fetch(
//     `${apiConfig.baseURL}/volumes?q=${options.query}${
//       options.categories && `+subject:${options.categories}`
//     }${options.sortingBy && `&orderBy=${options.sortingBy}`}&startIndex=${
//       options.startIndex
//     }&maxResults=${options.maxResults}&key=${apiConfig.apiKey}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data, ": BooksService");

//       return data;
//     })
//     .catch((err) => {
//       console.log(err, "err");
//     });
// };

// export default BooksService;
