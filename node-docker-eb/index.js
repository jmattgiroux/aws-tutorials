const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Now I can update what\'s on EB just by pushing to GitHub!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
