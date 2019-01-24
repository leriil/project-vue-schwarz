
var vm1 = new Vue({
	// el:'#app1',
	data:{
		title: 'Friends season 1',
		showParagraph: false
	},
	methods:{
		show: function(){
			this.showParagraph=true;
			this.updateTitle('Friends season 2');
			// accessing refs and changing their values
			console.log(this.$refs);
			this.$refs.myButton.innerText='myButton';
		},
		updateTitle: function(title){
			this.title=title;
		}
	},
	computed:{
		lowerCaseTitle: function(){
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value){
			// alert('title has been changed: ' + value);
		}
	}
});
// we can use $mount to tell Vue instance which element to control
vm1.$mount('#app1');
// we can use multiple instances for different elements
// they have to be independent from each other, like widgets

// we can create data objects outside the instance
var data = {
		title: 'Last Man on Earth season 1',
		showParagraph: false
	}
var vm2 = new Vue({
	el:'#app2',
	data: data,
	methods:{
		updateTitle: function(title){
			this.title=title;
		},
		// this is how we can reference the property on another instance
		changeInstance1:function(){
			vm1.title='Last man on Earth';
		}
	},
	computed:{
		lowerCaseTitle: function(){
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value){
			// alert('title has been changed: ' + value);
		}
	}
});
// we can also access the properties of Vue js instances from outside
// because Vue js proxies the properties
setTimeout(function(){vm2.title = 'Breaking Bad'}, 3000);

// this property won't get getters and setters because it isn't created inside vm1
// it won't work as a normal property
vm1.newProp='hello';
// to access a property use a $
console.log(vm1.$data.title);
console.log(vm1.$data===data);

// this changes the dom element but not the Vue instance properties
// thats why changes may be overwritten
// so it's better to user $refs for getting the value not changing it
vm1.$refs.Heading.innerText='something else';

// this instance is not deriving the element from code, it has its own instance
var vm3 = new Vue({
	template: '<h1 style="text-align:center;"> Hello </h1>'
});

vm3.$mount('#app3');