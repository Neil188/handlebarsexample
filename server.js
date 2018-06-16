const express = require('express');
const app = express();

// app.use('/public', express.static('public)'));
app.use( express.static('public') );

app.get('/', function (req,res) {
    res.send('hello world');
});

const port = Number( process.env.port || 5000);
app.listen(port, () => console.log(`listening on port ${port}`));
