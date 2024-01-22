const express = require('express');
const routes = require('./Myapp/routes/api');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Import sequelize connection
const { development } = require('./Myapp/config/config.json');

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests for debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Define a route for the root path ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use your API routes
app.use(routes);

// Middleware to handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Middleware to handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Sync sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced.');
  // Start the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});