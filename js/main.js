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
// best practise to use them whenever possible
// but only for synchronized tasks
computed:{
	output: function(){
		return this.counter>5?'Greater than 5': 'Less than 5';

	}
},
// another object apart from data, methods etc.
watch:{
// the property name we want to watch
//the code I want to execute when the value of this property changes
// which is passed automatically to the function
// no return value
// (this references a Vuejs object here)
	counter: function(value){
		var vm = this;
		setTimeout(function(){
			vm.counter = 0;
		},2000);

	}


}
});