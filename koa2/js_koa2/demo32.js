function parsePostData(ctx){
	return new Promise((resolve,reject)=>{
		try{
			let postdata="";
			ctx.req.on('data',(data)=>{
				postdata += data;
			})
			ctx.req.addListener('end'.function(){
				resolve(postdata);
			})
		}catch(error){
			
		}
	})
}
let pastData=await parsePostData(ctx);
