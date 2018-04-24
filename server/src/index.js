const Koa = require('koa');
const config = require('./config');
const serve = require('koa-static');
const views = require('koa-views');
const path = require('path');
const router = require('./routes');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(serve(path.join(__dirname, '/../../dist/')));

app.use(views(path.join(__dirname, '/../../client/public/'), {
  extension: 'html',
  map: {
    html: 'handlebars',
  },
}));
app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve(path.join(__dirname, '/../../client/public/')));
try {
  app.listen(config.port);
  console.log('process mode : ', config.env);
  console.log('Application Listen on ', config.port);
} catch (e) {
  console.log(e);
}
