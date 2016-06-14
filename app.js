var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
  });

app.get("/about", function(req,res){
    res.render('about');
  });

app.get("/inspiration", function(req,res){
    res.render('inspiration' );
  });

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
