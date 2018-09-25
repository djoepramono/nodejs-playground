const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello World');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err);
  }

  console.log(`Server is running on port ${port}`);
})
