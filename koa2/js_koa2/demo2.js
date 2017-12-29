function takeLongTime(){
	return new Promise(resolve=>{
		setTimeOut(()=>resolve("long _time_value"),1000)
	});
}

async function test(){
	const v= await takeLongTime();
	console.log(v);
}

test();
