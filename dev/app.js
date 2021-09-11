const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));
app.get('/', (req, res)=> {
  res.render('index.html');
})

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
