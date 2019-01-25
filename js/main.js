// creating a reusable component registered globally
// 1 tag name - unique, 2 - object
// the data should be a function which returns an object
// the template contains html code that will be inserted
// into the <my-cmp></my-cmp> of the dev id="app"
Vue.component('my-cmp', {
	data: function() {
		// it returns a unique object for each component, 
		// therefore the changes for it will not be global
		return {status: 'Critical'}
	},
	template: '<p> Server status {{ status}}  <button @click="changeStatus">ChangeStatus</button> </p>',
	methods:{
		changeStatus: function(){
		this.status='Normal';
	}
} 
});


new Vue({
	el: '#app',
 });

new Vue({
	el: '#app2',
 });