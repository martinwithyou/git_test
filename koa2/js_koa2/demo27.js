function getSomething(){
    return 'something';
}
 
async function testAsync(){
    return 'Hello async';
}
 
async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1,v2);
}
 
test();

