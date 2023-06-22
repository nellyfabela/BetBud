/* import */ 
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const expressHandlebars = require('express-handlebars');


const app = express();
const hbs = expressHandlebars.create();
const PORT = process.env.PORT || 3001;


/*middleware*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);



sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));});
