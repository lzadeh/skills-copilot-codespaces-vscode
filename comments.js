// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with a JSON object. The object should have a key comments that contains an array of strings, each of which is a comment.

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({ comments: ['first comment', 'second comment'] });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});