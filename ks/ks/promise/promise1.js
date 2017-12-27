//使用场景
//多个接口请求数据，每个接口的操作依赖于上次请求回来的数据，操作成功后返回一个回调函数
function fn(){
    console.log(1);
}
function bind(data,callback){
    this.res = data;
    callback();
}
$.ajax({
    url:"",
    success:function(data){
        $.ajax({
            url:"",
            data:{aa:data},
            success:function(data){
               bind(data,fn)
            }
        })
    }
})
 //思路好理解，代码组织看上去比较乱，层次也不清晰，这种情况叫CallBacks Hell (回调地狱)

//promise 承诺 过了一段时间后会把你要的返回给你，都是异步的操作
//promise 用法：初始化promise时等待状态（pending） 成功状态（fulfilled） 失败的状态（rejected）


