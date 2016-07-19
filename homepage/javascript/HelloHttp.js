var express = require("express");
var app     = express();
var path    = require("path");
var fs = require('fs');



app.get('/',function(req,res){
//	console.log(req.url);
//	if (/\.(css)$/.test(req.url)){
//		
//	}
//	else{
		var htmldir=path.resolve('..','html');
		res.sendFile(path.join(htmldir+'/index.html'));
	
//}
});

app.get('/css/*',function(req,res){
	var cssdir=path.resolve('..','css');
	var spliturl=req.url.split('/');
	var filepath=spliturl.slice(2,spliturl.length).join('/');
	 fs.readFile(cssdir+'/'+filepath, function (err, data) {
	        if (err) console.log(err);
	        res.writeHead(200, {'Content-Type': 'text/css'});
	        res.write(data);
	        res.end();
	      });
	
});

app.listen(3000);

console.log("Running at Port 3000");