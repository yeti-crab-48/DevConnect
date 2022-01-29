module.exports = errorHandler = (err) => {
  const error = {}
  console.log(err);
  switch(err.code) {
    case 1: 
      return error.message = 'Not authenticated'
    default: 
      return error.message = err.message
  }
}