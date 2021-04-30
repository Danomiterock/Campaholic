import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  searchAreas: function () {
    // Base URL
    var baseUrl = "https://ridb.recreation.gov/api/v1/recareas?";

    // limit nuumber of records
    var limit = "limit=10";

    // Full data response
    var full = "&full=true";

    // User state query
    var state = "&state=AZ";

    // Will need to process.env this
    var apiKey = "&apikey=aa8846cd-9998-4fc2-91d0-bfca54269cfd";

    var apiUrl = baseUrl + limit + full + state + apiKey;

    // Send axios get request
    axios
      .get(apiUrl, {
        mode: 'cors'
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
  },
};
