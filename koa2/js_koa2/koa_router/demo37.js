const Koa =require('koa');
const Router = require('Koa-router');

const app =new Koa();
const router = new Router();

router.get('/',function(ctx,next){
	ctx.body="hello jspang";
});

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000,()=>{
	console.log('starting at port 3000')
})

//function render(page){
//	
//	return new Promise((resolve,reject)=>{
//		let pageUrl =`./page/${page}`;
//		fs.readFile(pageUrl,"binary",(err,data)=>{
//			console.log(444);
//			if(err){
//				reject(err)
//			}else{
//				resolve(data);
//				console.log(data)
//			}
//		})
//	})
//}
//
//async function route(url){
//	
//	let page='404.html';
//	switch(url){
//		case'/':
//		     page="index.html";
//		     break;
//		     case'/index':
//		     page="index.html";
//		     break;
//		     case '/todo':
//		     page='todo.html';
//		     break;
//		     case '404':
//		     page='404.html';
//		     break;
//		     defalut:
//		     break;
//	}
//	let html = await render(page);
//	
//	return html;
//}
//
//app.use(async(ctx)=>{
//	let url = ctx.request.url;
//	let html =await route(url);
//	
//	ctx.body=html;
//});
//app.listen(3000);
//console.log('start.at.3000');
