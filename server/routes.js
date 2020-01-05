const BrandRouter = require('./routes/BrandRouter');

function routes(app) {
  app.use('/api/v1/brands', BrandRouter);
}

module.exports = routes;
