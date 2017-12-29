let state=1;
function step1(resolve , reject){
	console.log('开始买菜做饭')
	if(state == 1){
		resolve('开始买菜完成')
	}else{
		reject('开始买菜失败')
	}
}
function step2(resolve , reject){
	console.log('开始吃饭')
	if(state == 1){
		resolve('开始吃饭完成')
	}else{
		reject('开始吃饭失败')
	}
}
function step3(resolve , reject){
	console.log('开始洗碗')
	if(state == 1){
		resolve('开始洗碗完成')
	}else{
		reject('开始洗碗失败')
	}
}
new Promise(step1).then(function(val){
	console.log("step1"+val);
	return new Promise(step2);
}).then(function(val){
	console.log("step2"+val);
	return new Promise(step3);
}).then(function(val){
	console.log("step3"+val);
	return val
})
