const express = require('express');

const app = express();

// needed to use express templating
app.set('view engine', 'ejs');

// needed to access public folder files
app.use(express.static('public'));


// ROUTES
app.get('/', (request, response, next) => {
  response.render('home.ejs');
});

app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});

app.get('/gallery', (request, response, next) => {
  response.render('gallery.ejs');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
