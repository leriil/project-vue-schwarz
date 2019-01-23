// here an instance of Vue is created
new Vue({
	el: '#app',
	data: {
		show: true,
		ingredients:['meat', 'fruit','cookies'],
		persons:[
			{name:'Max', age: 21, student: true	},
			{name:'Julia', age: 30, student: false}	
		]
	}
});