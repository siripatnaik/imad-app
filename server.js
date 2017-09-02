var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:"Article_one|SiriPatnaik",
    heading:"Article One",
    date:"Date : September 02 2017",
    content:"<p>Hello everyone... welcome to article one..<br> its fun doing these edits and happy to do al this.. you guys to have fun</p>"
};

function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`<html>
      <head>
        <title> ${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
      </head>
     <body class="body center">
        <div class="margin">
        <div class="center text-big">
            <a href="/">Home Page</a>
        </div>
        <hr>
        <div class="pink center bold text-big">
            <h2> ${heading} </h2>
        </div>
        <div class="blue center">
            <h3> ${date} </h3></div>
            ${content}
        </div>
     </body>
  </html>`;
  return htmlTemplate;
}

app.get('/article-one', function(req,res){
    res.send(createTemplate(articleone));
});
app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
