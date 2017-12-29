function gst(){
	return "something"
}

async function testAsync(){
	return 'hello wheel'
}
async function test(){
	const v1= await gst();
	const v2= await testAsync();
	console.log(v1);
	console.log(v2);
}
test();
//const result=testAsync();
//console.log(result);
//await ：async wait
//await 必须在async里面
