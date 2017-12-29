function takeLongTime(){
	return new Promise(resolve=>{
		setTimeout(()=>resolve('long tion value'),10000);
	})
}

async function test(){
	const v=await takeLongTime();
	console.log(v);
}

test();
