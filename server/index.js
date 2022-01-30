const express = require('express');
const app = express();
const PORT = 3000;


//Routers
const apiRouter = require('./routes/apiRouter.js');
//ERROR CODES
const errorCodes = require('./utils/errorCodes.js');
//parsing Cookies
const cookieParser = require('cookie-parser');

//Allows server to process incoming JSON and form data into the req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//when the url path is /api, go into the apiRouter.js in routes folder
app.use('/api', apiRouter);

//When the client makes a get request to homepage, send back the index.html
app.get('/', (req, res) => {
  res.end('/');
});

//404 NOT FOUND, path handler
app.use((req, res) => {
  res.end('not a valid path');
});


app.use((err, req, res, next) => {
  const errObj = errorCodes(err);
  res.json(errObj);
})

//server will listen to value of PORT
app.listen(PORT, () => {
  console.log('server listening to port ' + PORT);
})