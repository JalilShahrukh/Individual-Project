const express = require('express'); 
const app = express(); 
const fs = require('fs'); 
var path = require('path');

// app.use(express.static(path.join(__dirname, './../dist/bundle.js'))); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/index.html'));
}); 

app.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/bundle.js'));
}); 

app.listen(3005, () => console.log('Example app listening on port 3005!'));