const Koa=require('koa');
const app=new Koa();
app.use( async (ctx) => {
	ctx.body='Hello';
});
app.listen(3000);
console.log('app staring at localhost 3000')
