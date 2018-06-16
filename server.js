const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use( express.static('public') );

app.get('/', function (req,res) {
    res.render('index', {
        name: 'World',
        time: new Date().toTimeString(),
    });
});

const port = Number( process.env.port || 5000);
app.listen(port, () => console.log(`listening on port ${port}`));
