const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', function(req, res, next){
    res.status(200).send('Hello world!');
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

