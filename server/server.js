const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/
