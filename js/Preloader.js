var preloader = function(game){};

preloader.prototype = {
		preload: function() {
				//images
				var loading = this.add.sprite(0, 0, 'loading');
				var loadbar = this.add.sprite(0, 440, 'loadbar');
				this.load.setPreloadSprite(loadbar);
				this.load.image('title', 'assets/title.png');
				this.load.image('start', 'assets/start.png');
		},
		create: function() {
				this.game.state.start('MainMenu');
		}
}
