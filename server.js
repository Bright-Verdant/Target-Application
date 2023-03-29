const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./routes');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Express
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// Run the sequelize connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
});


