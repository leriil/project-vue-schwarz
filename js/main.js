
var vm1 = new Vue({
	el:'#app1',
	data:{
		title: 'Friends',
	},
	beforeCreate: function(){
		console.log('beforeCreate');
	},
	created: function(){
		console.log('created');
	},
	beforeMount: function(){
		console.log('beforeMount');
	},
	mounted: function(){
		console.log('mounted');
	},
	beforeUpdate: function(){
		console.log('beforeupdate');
	},
	// this methods are executed only when the changes really happen
	updated: function(){
		console.log('updated');
	},
	beforeDestroy: function(){
		console.log('beforeDestroy');
	},
	destroyed: function(){
		console.log('destroyed');
	},
	// this methods destroys the Vuejs instance
	// the code will still be in the DOM
	// but the js logic is removed
	methods:{
		destroy: function(){
			this.$destroy();
		}
		}
 });