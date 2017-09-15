const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./config/routes');
const PORT = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));

// app.set('views', 'public');
// app.set('view-engine', 'html');
app.use(express.static(path.join(__dirname + 'assistant_director/build')))

app.use('/', routes);

app.listen(PORT, function() {
    console.log('gettin schwifty on ' + PORT);
});