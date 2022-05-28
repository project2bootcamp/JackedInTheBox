// express mysql2 sequelize nodemon dotenv bcrypt
// todo use momentjs to show user what workout they did today/ what workout they should do on a specific day

//importing
const express = require("express");
const path = require("path");

const routes = require("./routes");
const connection = require("./config/connection");

require("dotenv").config();

// instantuate app and get port
const app = express();
const PORT = process.env.PORT || 3001;

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

// use routes for directing web flow
app.use(routes);

// any other route
app.use((req, res) => {
  res.status(404).end();
});

// force true means, if there area any changes, update and re-run database changes.
connection.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Backend Server Live on ${PORT}`);
  });
});
