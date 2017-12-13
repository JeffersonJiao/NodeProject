var express = require('express');
var checkmarkController = require('./controllers/checkmarkController');
var chatController = require('./controllers/chatController');
var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

checkmarkController(app);
chatController(app);

app.listen(3000);
console.log('server started');