module.exports = errorHandler = (err) => {
  const error = {}
  console.log(err);
  switch(err.code) {
    case 1: 
      error.message = 'Not authenticated';
      return error;
    case 2: 
      error.message = 'Database retrieval failure';
      return error;
    default: 
      error.message = err.message;
      return error;
  }
}