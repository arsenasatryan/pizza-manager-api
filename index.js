const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();
const io = require("socket.io")({
  cors: {
    origin: '*'
  }
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
router.render = function (req, res) {
  if (req.url.indexOf('/orders') > -1 && (req.method === 'POST' || req.method === 'PATCH')) {
    io.emit('orderMessage', res.locals.data);
  }
  res.jsonp(res.locals.data)
}
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use(middlewares);
// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
io.listen(3001);
