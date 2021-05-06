const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER } = require("./config");

module.exports = {
  MONGODB_URI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
};