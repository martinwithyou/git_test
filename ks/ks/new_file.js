let vm=new Vue({
	data(){
		return{
			
		}
	},
	beforeCreate(){
		//初始化实例和生命周期函数
	},
	created(){
		//注入响应式数据
		//data里面才会有数据
		//请求数据在这里操作
	},
	beforeMounted(){
		//确认是否挂在dom
		//看有没有写template，如果没有写。就将外面html编写成模板
		//
	},
	mounted(){
		//将编写好的数据挂在dom元素，在
		//渲染到真实的dom元素
		//操作dom,在这里执行
	},
	beforeUpdate(){
		//数据更新前
	},
	updated(){
		//数据更新后
		//执行回调函数
	},
	beforeDestroy(){
		//数据销毁前
		
	},
	destroyed(){
		//数据销毁或
		//监听函数，观察者函数，
		//自组件解除绑定
	}
	
});
//实例上的属性和方法
//vm.$data获得响应式的数据，是一个对象
//vm.$el挂载的根dom元素
//vm.$options，vm上所有的选项
//vm.$refs获取的dom元素
//vm.$nextTick函数渲染完成
//vm.$watch监听
//vm.$mount挂载dom元素
//vm.$dostory销毁dom元素

