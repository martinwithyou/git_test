//var obj ={
//	add:function(val){
//		return val+10;
//	},
//	name:'I am JSPang'
//};
//console.log(obj.add(88));
//console.log(obj.name);

var pro = new Proxy({
	add:function(val){
		
	},
	name:'I am jspang'
},{
	get:function(target,key,property){
		//console.log('come in get');
		//console.log(target);
		//console.log(key);
		//console.log(property);
		return target[key]
	},
	set:function(target,key,value,receiver){
		console.log(".....................");
		console.log(target);
		console.log(key);
		console.log(value);
		console.log(".....................");
		return target[key]=value;
	}
})
console.log(pro.name);
pro.name="技术胖";
console.log(pro.name);

