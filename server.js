const express = require ('express');

const port = process.env.PORT || 3001;
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`server is up on ${port}`);
});
