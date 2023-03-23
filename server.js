const express = require("express");
const exphbs = require("express-handlebars");

// const session = require("express-session");
// const routes = require("./routes");

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// Handlebars configuration
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Route to handlebars main page
app.get("/", (req, res) => {
  res.render("layouts/main");
});

// Home page route
app.get("/home", (req, res) => {
  res.render("homepage", { title: "Home" });
});

// app.use(routes);

// Future use of sequelize
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
