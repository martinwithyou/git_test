const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
	let url=ctx.url;
	let req_query=ctx.request;
	let req_querystring = req_query.querystring;
	
	ctx.body={
		url,
		req_query,
		req_querystring
	}
})

app.listen(3000,()=>{
	console.log('demo server is starting at port 3000')
})
