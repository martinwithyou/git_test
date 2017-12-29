//class Coder{
//	name(val){
//		console.log(val);
//		return val
//	}
//	skill(val){
//		console.log(this.name("dezhi:")+this.val);
//	}
//}
//	let jspang=new Coder;
//	//jspang.name("dezhu");
//	//jspang.name("德竹");
//	jspang.skill("web");
//class Coder{
//	name(val){
//		console.log(val);
//		return val;
//	}
//	skill(val){
//		console.log(this.name('jspang')+':::::'+'Skill'+val);
//	}
//}
//let jspang = new Coder;
//jspang.skill('web');
class Coder{
	name(val){
		console.log(val);
		return val;
	}
	skill(val){
		console.log(this.name('jspang')+':'+'Skill'+val);
	}
	constructor(a,b){
		this.a=a;
		this.b=b;
	}
	add(){
		return this.a+this.b;
	}
}
let jspang = new Coder(1,2);
console.log(jspang.add());


class htmler extends Coder{
	
}
let pang = new htmler(11,22);
pang.name("jspang_html");
pang.skill("html");
console.log(pang);
