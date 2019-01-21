// here an instance of Vue is created
new Vue({
el:'#app',
data:{
	title: 'Hello!',
	link: 'http://google.com',
	anotherLink: '<a href="http://google.com">Google</a>',
    counter: 0},
methods:{
	changeTitle: function(event){
		this.title=event.target.value;
	},
	// to get access to properties we use this keyword, 
	// it doesn't work without it
	sayGoodbye: function(){
		// overriding the value of 'title'
		this.title='Hello you';
		return this.title;
	},
	increase: function(){
		this.counter++;
	}
}
});