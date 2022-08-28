const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers')
const hbs = exphbs.create({
    
});


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);
//sequelize.sync();
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});