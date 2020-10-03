const createError = require('./errorHandler');

module.exports = {
  post: async (res, query, name, ...args) => {
    try {
      const IDs = await query(...args);
      res.status(201).json(IDs);
    } catch (error) {
      createError(res, error, name);
    }
  },
};
