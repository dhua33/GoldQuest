var mainmenu = function(game) {
		var title;
		var start;
};

mainmenu.prototype = {
		create: function() {
				title = this.add.sprite(0, 0, 'title');
				start = this.add.button(350, 540, 'start', this.play, this); 
		},
		play: function() {
				this.game.state.start('Game');
		}
}
