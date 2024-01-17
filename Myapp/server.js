const express = require('express');
const routes = require('./routes');
const { Sequelize } = require('sequelize');

// Import sequelize connection
const sequelize = require('./config/config.json'); // Update the path if needed

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced.');
  // Start the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});