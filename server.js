const express = require('express');
const app = express();

app.get('/', function (req,res) {
    res.send('hello world');
});

const port = Number( process.env.port || 5000);
app.listen(port, () => console.log(`listening on port ${port}`));
