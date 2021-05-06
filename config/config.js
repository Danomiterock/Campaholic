require('dotenv').config();

module.exports = {
DB_USERNAME: process.env.DB_USERNAME,
DB_PASSWORD: process.env.DB_PASSWORD,
DB_CLUSTER: process.env.DB_CLUSTER
}