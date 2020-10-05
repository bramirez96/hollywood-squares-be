const createError = require('./errorHandler');

module.exports = {
  post: async (res, query, name, ...args) => {
    try {
      const [data] = await query(...args);
      res.status(201).json(data);
    } catch (error) {
      createError(res, error, name);
    }
  },
  postMult: async (res, query, name, ...args) => {
    try {
      const data = await query(...args);
      res.status(201).json(data);
    } catch (error) {
      createError(res, error, name);
    }
  },
  getAll: async (res, query, name, ...args) => {
    try {
      const items = await query(...args);
      res.status(200).json(items);
    } catch (error) {
      createError(res, error, name);
    }
  },
};
