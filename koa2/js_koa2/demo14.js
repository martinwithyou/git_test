//var a=new String;
//var b=new Number;
//var c=new Boolean;
//var d=new Array;
//var e=new Object;
////var f=new Symbol();
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//console.log(e);
////console.log(f);
////console.log();
//var g=Symbol('jspang');
//console.log(g);
//console.log(g.toString());


//var jspang=Symbol();
//var obj={
//	[jspang]:'技术胖'
//}
//console.log(obj[jspang]);
//obj[jspang]='web'
//console.log(obj[jspang]);

//var obj={name:'jspang',skill:'web',age:18};
//for(let item in obj){
//	console.log(obj[item]);

let obj={name:'jspang',skill:'web'}
let age=Symbol();
obj[age]=18;
for(let item in obj){
	console.log(obj[item]);
}
console.log(obj);
console.log(obj[age]);




