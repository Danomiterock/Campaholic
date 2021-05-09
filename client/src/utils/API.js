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
  getRecentPosts: function () {
    return axios.get("/api/posts/recent");
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/posts", postData);
  },
  // Sends a GET request to our reverse proxy Heroku server.
  // Heroku server sends a CORS-enabled GET request
  // through https and returns data to localhost:3000
  // These are search results that will display on the Search page
  searchAreas: function () {
    // Reverse proxy url
    // Allows GET request to override CORS from Heroku
    // server uses CORS to connect to Recreation RIDB API
    const baseUrl =
      "https://arcane-retreat-20879.herokuapp.com/api/v1/recareas";

    return axios.get(baseUrl);
  },
};
