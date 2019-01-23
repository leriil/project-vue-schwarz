// here an instance of Vue is created
new Vue({
el:'#app',
data:{
	name: 'Max',
	title: 'Hello!',
	link: 'http://google.com',
	anotherLink: '<a href="http://google.com">Google</a>',
    counter: 0},
    // are executed no matter what
    //the result is not cached
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
	increase: function(step){
		this.counter+=step;
	}
},
// is used like a property not a function
// are calculated only if the value of counter changes
//it means that the result is cached
computed:{
	output: function(){
		return this.counter>5?'Greater than 5': 'Less than 5';

	}
}
});