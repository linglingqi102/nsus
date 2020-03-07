require('regenerator-runtime/runtime');
// require('../env-config');
// const server = require('umi-server');
const Koa = require('koa');
const compress = require('koa-compress');
// const proxy = require('koa-proxies');
// const mount = require('koa-mount');
// const Router = require('koa-router');
const staticServe = require('koa-static');
// const { join, extname } = require('path');
const { join } = require('path');
// const isDev = process.env.NODE_ENV !== 'production';

const root = join(__dirname, '../dist');
// const render = server({
//   root,
//   polyfill: false,
//   dev: isDev,
// });

const app = new Koa();
// const router = new Router();

// const objectifyCookie = c => {
//   return (
//     c &&
//     c.split(';').reduce((acc, curr) => {
//       const temp = curr.trim().split('=');
//       acc[temp[0]] = temp[1];
//       return acc;
//     }, {})
//   );
// };

// app.use(
//   proxy('/overseas-website-bff', {
//     target: process.env.BACKEND_URL_SERVER_SIDE,
//     rewrite: path => path.replace(/^\/overseas-website-bff/, '/'),
//   }),
// );

app.use(
  compress({
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH,
  }),
);

// router.get('/health', async ctx => {
//   ctx.body = 'fine';
//   return;
// });

// app.use(async (ctx, next) => {
//   const ext = extname(ctx.request.path);
//   // 符合要求的路由才进行服务端渲染，否则走静态文件逻辑
//   if (!ext) {
//     ctx.type = 'text/html';
//     ctx.status = 200;
//     const { ssrHtml } = await render({
//       req: {
//         url: ctx.request.url,
//         cookie: objectifyCookie(ctx.request.header && ctx.request.header.cookie),
//       },
//     });

//     ctx.body = ssrHtml;
//   } else {
//     await next();
//   }
// });

app.use(staticServe(root));

if (!process.env.NOW_ZEIT_ENV) {
  app.listen(8080);
  console.log('http://localhost:8080');
}

module.exports = app.callback();
