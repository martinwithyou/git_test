const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
	if(ctx.url==='/index'){
		ctx.cookies.set(
			'MyName','JSPang',{
				domain:'127.0.0.1',
				path:'/index',
				maxAge:1000*60*60*24,
				expires:new Date('2018-12-12'),
				httpOnly:true,
				overwrite:true
			}
		);
		ctx.body='cookie is ok';
	}else{
		//ctx.body='overwrite cookie';
		console.log(ctx.cookies.get('MyName'))
		if(ctx.cookies.get('MyName')){
			ctx.body=ctx.cookies.get('MyName');
			
		}else{
			ctx.body= 'cook is none'
		}
	}
});

app.listen(3000,()=>{
	console.log('server is starting at port 30000')
})
