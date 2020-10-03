module.exports = (res, error, name = '') => {
  console.log(error.message);
  let status, message;
  if (error.message.includes('violates unique constraint')) {
    status = 403;
    message = `${name} already exists.`;
  } else if (error.message.includes('violates not-null constraint')) {
    status = 400;
    message = `Invalid ${name}`;
  } else if (error.message.includes('not found')) {
    status = 404;
    message = `${name} not found.`;
  } else {
    status = 500;
    message = error.message;
  }
  res.status(status).json({ error: message });
};
