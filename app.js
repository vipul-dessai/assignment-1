const express = require('express');
const path = require('path');
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

app.use(router);

app.use('/static', express.static(path.join(__dirname, 'public')));

module.exports = app;