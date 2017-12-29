let weakObj=new WeakSet();
let obj={a:'jspang',b:'技术胖'};
weakObj.add(obj);
let obj1=obj;
weakObj.add(obj1);
console.log(weakObj);
