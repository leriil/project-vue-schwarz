// here an instance of Vue is created
new Vue({
el:'#app',
data:{
	title: 'Hello!',
	link: 'http://google.com'},
methods:{
	changeTitle: function(event){
		this.title=event.target.value;
	},
	// to get access to properties we use this keyword, 
	// it doesn't work without it
	sayGoodbye: function(){
		return this.title;
	}
}
});