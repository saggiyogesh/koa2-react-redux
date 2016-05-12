import Koa from 'koa'
import koaBody from 'koa-body';
import convert from 'koa-convert';
const router = require('koa-router')();

const app = new Koa();

const _use = app.use
app.use = x => _use.call(app, convert(x))

app.use(koaBody({formidable:{uploadDir: __dirname}}));


// routes
router
.get('/', async (ctx, next) => {
  ctx.body = 'testing'
})
.get('/user/login', async (ctx, next) => {
  ctx.body = 'login'
})
.post('/user/login', async (ctx, next) => {
  console.log(ctx.request.body)
  var req = ctx.request;
  var result = {
    user: {}
  };
  result.isLoggedIn = (req.body.email === "s@s.com" && req.body.password === "1");
  result.isLoggedIn && (result.user = req.body);
  ctx.body = result;
});

app.use(router.routes());
app.listen(8081, () => console.log('server started ', 8081));

export default app
