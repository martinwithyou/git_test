/*ajax({url:"",dataType:"json"}).then((res)=>{
    console.log(res);
},error=>{
    console.log(error);
});*/

function ajax({url="",type='get',dataType="json"}){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onload = function(){//响应成功时 xhr.readystate == 4
            if(/^2\d{2}$/.test(xhr.status)){
                let data = xhr.response;
                resolve(data);
            }else{
                reject("失败了");
            }
        }
        xhr.onerror = function () {
            reject("失败了");
        };
        xhr.send(null);
    })
}

