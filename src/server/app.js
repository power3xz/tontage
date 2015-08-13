var express = require('express');
var app = new express();

app.use(express.static('./src/client'));
app.use(express.static('./'));
app.use(express.static('./.tmp'));
app.listen(3000);
