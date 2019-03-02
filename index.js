const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const singerRouter = require('./router/singer');
const userRouter = require('./router/user');
const Port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use('/singer',singerRouter);
app.use('/user',userRouter);
app.set('view engine','ejs');

app.listen(Port, ()=> console.log(`Server is running on port ${Port}`)
);


