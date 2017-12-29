const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async(ctx)=>{
	if(ctx.url==='/'&&ctx.method==='GET'){
		let html=`
		<h1>koa2 post demo</h1>
		<form method='post' action='/'>
		<p>name</p>
		<input name='username'/><br/>
		<p></p>
		<input name='age'/><br/>
		<p>webside</p>
		<input name="website"/><br/>
		<button type="submit">submit</button>
		</form>
		`;
		ctx.body=html;
	}else if(ctx.url==='/'&&ctx.method==='POST'){
		let postData =ctx.request.body;
		ctx.body=postData;
	}else{
		ctx.body='<h1>404</h1>'
	}
});
app.listen(3000,()=>{
	console.log('demo server is starting at port 3000');
})
