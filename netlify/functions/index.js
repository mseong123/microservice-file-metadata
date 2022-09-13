var express = require('express');
const serverless=require('serverless-http');
const multer=require('multer');
var cors = require('cors');
const upload=multer() //Don't insert object parameter, hence keeping upload in memory only and not saved to permanent folder in server.
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors());
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204


//API endpoint
app.post('/api/fileanalyse', upload.single('upfile'),function (req, res) {
  res.json({
    name:req.file.originalname,
    type:req.file.mimetype,
    size:req.file.size

  })
});


module.exports.handler = serverless(app)

