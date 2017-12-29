//let name='jspang';
//let skill='web';
//var obj={name,skill};
//console.log(obj);
//
//let key='skill';
//var obj={
//	[key]:'web'
//}
//console.log(obj.skill);
//var obj={
//	add:function(a,b){
//		return a+b;
//	}
//}
//console.log(obj.add(1,2));
//var obj1={name:'jspang'};
//var obj2={name:'jspang'};
//console.log(obj1.name === obj2.name);
//console.log(Object.is(obj1.name,obj2.name));
//console.log(+0 === -0);
//console.log(NaN === NaN);
//console.log(Object.is(+0,-0));
//console.log(Object.is(NaN,NaN));
//===为值相等
//is()是严格相等
var a={a:'jang'};
var b={b:'技术胖'};
var c={c:'web'};
let d=Object.assign(a,b,c);
console.log(d);

