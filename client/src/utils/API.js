import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/posts", postData);
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
