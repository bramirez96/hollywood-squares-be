const createError = require('./errorHandler');

module.exports = {
  post: async (res, query, name, ...args) => {
    try {
      const IDs = await query(...args);
      if (IDs.length === 1) {
        res.status(201).json(IDs[0]);
      } else {
        res.status(201).json(IDs);
      }
    } catch (error) {
      createError(res, error, name);
    }
  },
};
