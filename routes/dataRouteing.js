// assume this code runs on a server
const express = require('express');
const app = express();

// database setup
const db = require('../db/schema');
const connection = db.connect('../../config/connection');

// Handlebars setup
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// route to render data from database table
app.get('/savedData', (req, res) => {
  const query = 'SELECT tNumber, address, postal FROM savedata';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else {
      console.log(results);
      res.render('savedLoc', { savedData: results });
    }
  });
});


