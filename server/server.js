const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

app.use(fileUpload())

app.post('/upload', function(req, res) {
  console.log(req.files); // the uploaded file object
});

app.listen(3000)