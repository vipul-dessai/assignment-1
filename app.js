const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();

const router = require('./routes')

app.set('view engine', 'hjs');
app.set('layout', 'default');
app.set('partials', {
    header: 'header',
    footer: 'footer',
});

app.engine('hjs', require('hogan-express'));
app.set('views', [path.join(__dirname, 'templates')]);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(router);

app.get('/favicon.ico', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'build')))
//app.use('/dist',express.static(path.join(__dirname + 'build')));
module.exports = app;
