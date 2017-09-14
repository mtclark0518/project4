const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 6969;

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));

app.set('views', 'public');
app.set('view-engine', 'html');
app.use(express.static(__dirname + '/public'));


router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log('gettin schwifty on ' + PORT);
});