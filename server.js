const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = 3000;


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.static('public'));


const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomItem = data[randomIndex];

  res.render('index', { item: randomItem });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
