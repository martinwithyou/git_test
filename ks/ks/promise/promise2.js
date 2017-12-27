let promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(Math.random()>0.5){
            resolve("成功了") //成功状态后会执行then里第一个参数
        }else{
            reject("失败了")//失败状态后执行then里第二个参数
        }
    },1000)
})
//promise调用then时每次会返回新的promise对象，然后就可以使用链式写法继续调用then
promise.then((data)=>{
    console.log(data);
},(error)=>{
   console.log(error)
});