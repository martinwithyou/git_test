const Koa=require("koa");
const app=new Koa();
app.use(async(ctx)=>{
	ctx.body='hello world';
})
app.listen(3000);
console.log('app start at localhost:3000');
