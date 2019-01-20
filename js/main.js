new Vue({
el:'#app',
data:{
	title:'Hello!'},
methods:{
	changeTitle: function(event){
		this.title=event.target.value;
	}
}
});