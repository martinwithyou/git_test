const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router')

let home = new Router;
home.get("/jspang",async(ctx)=>{
	ctx.body="home jspang";
}).get('/todo',async(ctx)=>{
	ctx.body="home todo";
})

let page= new Router();
page.get('/jspang',async(ctx)=>{
	ctx.body="page jspang";
}).get('/todo',async(ctx)=>{
	ctx.body="page todo";
})

let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
	console.log("demo listen is starting at port 3000");
})
