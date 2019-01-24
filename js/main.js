// here an instance of Vue is created
new Vue({
	el: '#app',
	data: {
	playerHealth: 100,
	monsterHealth: 100,
	gameIsRunning: false,
	turns: []
	},
	methods:{
		attack:function(){
			var damage = this.calculateHealth (3,10);
			this.monsterHealth-=damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits '+ damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttacks();
		},
		specialAttack: function(){
			var damage = this.calculateHealth (10,20);
			this.monsterHealth-=damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits '+ damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttacks();

		},
		heal: function(){
			if(this.playerHealth<=90){
				this.playerHealth+=10;
			}else this.playerHealth=100;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals 10'
			});
			this.monsterAttacks();
		},
		giveUp: function(){
			this.finishGame();
		},
		monsterAttacks(){
			var damage=this.calculateHealth (5,12);
			this.playerHealth-=damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits '+ damage
			});
			this.checkWin();
		},
		startGame: function(){
			this.gameIsRunning=true;
			this.playerHealth=100;
			this.monsterHealth=100;
			this.clearLog();
		},
		finishGame(){
			this.gameIsRunning=false;
			this.playerHealth=100;
			this.monsterHealth=100;
			this.clearLog();
		},
		calculateHealth: function(min,max){
			return Math.max(Math.floor(Math.random()*max)+1, min);
		},
		checkWin(){
			if(this.monsterHealth<=0){
				if (confirm('You won! Would you like to play again?')) {
					this.startGame();
				}
				else{
					this.finishGame();
				}
				return true;
				
			}
			else if(this.playerHealth<=0){
				if (confirm('You lost! Would you like to play again?')) {
					this.startGame();
				}
				else{
					this.finishGame();
				}
				return true;
			}
			return false;
		},
		clearLog(){
			this.turns=[];
		}



	}
});