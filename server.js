var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//CHANGING THE MAIN TEXT OF WEBAPP

var element = document.getElementbyId('main-text');
element.innerHTML = 'The value of main text had been changed by javascript';

// MAKE AN IMAGE MOVE IN CLICKING
var img = document.getElementbyId('madi');
var marginright=0;
function marginright(){
    marginleft = marginleft+1;
    img.style.marginleft = marginleft + 'px';
}

//EXCUCUTE THE FUNCTION ON CLICKING
img.onclick = function(){
    var interval = setinterval(moveright,50);
};

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
