let json={
	name:'jspang',
	skill:'web'
}
//console.log(json.name);

var map=new Map();
map.set(json,'iam');
//console.log(map);

map.set('jspang',json);
//console.log(map);
console.log(map.get(json));

console.log(map.get('jspang'));

map.delete(json);
console.log(map);
//map.clear();
console.log(map.size);
console.log(map.has('jspang000'));
