const server = require("./api/app");
const port = process.env.PORT || 8000;
server.listen(port, () => `\n** Running on port ${port} **\n`);
