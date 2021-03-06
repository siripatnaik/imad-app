var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    "article-one": {
    title:"Article_one|SiriPatnaik",
    heading:"Article One",
    date:"Date : September 02 2017",
    content:"<p>Hello everyone... welcome to article one..<br> its fun doing these edits and happy to do al this.. you guys to have fun</p>"
    },
    "article-two" : { 
    title:"Article_two|Get Ready",
    heading:"Article two",
    date:"Date : September 12 2017",
    content:"<p>Now this is the article two in which i can only go back to home page.</p>"
    },
    "article-three": {
         title:"Article_three|OkBye",
    heading:"Article three",
    date:"Date : September 20 2017",
    content:"<p>Last article.. Nothing much to say, Just bye.</p>"
    }
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

app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
    counter=counter + 1;
    res.send(counter.toString());
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
