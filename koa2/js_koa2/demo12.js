let setArr = new Set(['jspang','jishupang','web','jspang']);
//console.log(setArr);
//set 和array区别在于不允许内部有重复
setArr.add('前端职场');
//console.log(setArr);
//setArr.delete('前端职场');
//setArr.delete('web');
//console.log(setArr);
//setArr.clear();
//console.log(setArr);
//for(let item of setArr){
//	console.log(item);
//}
//console.log(setArr.size);
setArr.forEach((value)=>console.log(value));
