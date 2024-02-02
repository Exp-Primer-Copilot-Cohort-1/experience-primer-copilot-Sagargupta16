// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send('Hello World!')
});

app.post('/comments', (req, res) => {
    console.log(req.body);
    fs.writeFile('comments.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

