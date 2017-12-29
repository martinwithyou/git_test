//let json={
//	"0":"jspang",
//	"1":"ppp",
//	"2":"aaaa",
//	length:3
//}
//let arr=Array.from(json);
//console.log(arr)
let arr=Array.of(3,4,5,6);
console.log(arr);
let arrs=Array.of('www','jsp','php','eee');
console.log(arrs);
let arrq=[1,2,3,4,5,8,9,10];
console.log(arrs.find(function(value,index,arrq){
	return value=='rwww';
}))
