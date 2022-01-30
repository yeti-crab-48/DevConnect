//importing express
const express = require('express');
const app = express();
const PORT = 3000;


//Routers
const apiRouter = require('./routes/apiRouter.js');
//ERROR CODES
const errorCodes = require('./utils/errorCodes.js');
//parsing Cookies
const cookieParser = require('cookie-parser');

//Allows server to process incoming JSON, form data into the req.body, cookies
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//when the path is /api, go into the apiRouter.js in routes folder
app.use('/api', apiRouter);

//When the client makes a GET request to homepage, send back the index.html
app.get('/', (req, res) => {
  res.end('/');
});

//404 NOT FOUND, unknown path handler
app.use((req, res) => {
  res.end('not a valid path');
});

//Global Error Handler, refer to errorCodes.js in utils to give err meaning
app.use((err, req, res, next) => {
  const errObj = errorCodes(err);
  res.json(errObj);
})

//server will listen to specified PORT
app.listen(PORT, () => {
  console.log('server listening to port ' + PORT);
})