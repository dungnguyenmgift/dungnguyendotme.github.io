var port = process.env.PORT || 8089;
var path = require('path');
var express = require('express');
var app = express();


app.use('/vendor', express.static('vendor'))
app.use('/css', express.static('css'))
app.use('/device-mockups', express.static('device-mockups'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))
app.use('/scss', express.static('scss'))
app.get('/',function(req,res){		
	res.sendfile(__dirname + '/index.html');	
});

var server = app.listen(port, function() {
    console.log('Ready on port %d', port);    
});



