var mainmenu = function(game) {
		var title;
		var start;
		var pointer;
		var space;
};

mainmenu.prototype = {
		create: function() {
				title = this.add.sprite(0, 0, 'title');
				start = this.add.button(350, 510, 'start');
				pointer = this.add.sprite(330, 525, 'pointer');
				pointer.animations.add('blink', [0, 1], 2, true);
				pointer.animations.play('blink');
				space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				space.onDown.add(this.play, this);
		},
		play: function() {
				this.state.start('Game');
		}
}
