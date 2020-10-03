module.exports = (res, error, name = '') => {
  console.log(error.message);
  let status, message;
  if (error.message.includes('violates unique constraint')) {
    status = 403;
    message = `${name} already exists.`;
  } else if (
    /null value.+violates not-null constraint/g.test(error.message) ||
    /column.+of relation.+does not exist/g.test(error.message) ||
    error.message.includes('Illegal arguments:')
  ) {
    status = 400;
    message = `Invalid format for ${name}.`;
  } else if (error.message.includes('logged in')) {
    status = 401;
    message = error.message;
  } else if (error.message.includes('not found')) {
    status = 404;
    message = `${name} not found.`;
  } else if (error.message.includes('invalid credentials')) {
    status = 401;
    message = 'Your password is incorrect.';
  } else {
    status = 500;
    message = error.message;
  }
  res.status(status).json({ error: message });
};
