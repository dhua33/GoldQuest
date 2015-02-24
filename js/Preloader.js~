var preloader = function(game){};

preloader.prototype = {
		preload: function() {
				//images
				var loading = this.add.sprite(0, 0, 'loading');
				var loadbar = this.add.sprite(0, 440, 'loadbar');
				this.load.setPreloadSprite(loadbar);
				this.load.image('title', 'assets/title.png');
				this.load.image('start', 'assets/start.png');
				this.load.image('female', 'assets/female1.png');
				this.load.image('male', 'assets/male1.png');
				this.load.image('win', 'assets/win.png');
				this.load.image('back', 'assets/back.png');
				this.load.image('shopmenu', 'assets/shopmenu.png');
				this.load.image('background', 'assets/background.png');
				this.load.image('die', 'assets/die.png');
				//faces
				this.load.image('shopGold', 'assets/shopGold.png');
				this.load.image('shopGreet', 'assets/shopGreet.png');
				this.load.image('shopNo', 'assets/shopNo.png');
				this.load.image('shopThank', 'assets/shopThank.png');
				this.load.image('townimg', 'assets/town.png');
				//spritesheets
				this.load.spritesheet('dorver', 'assets/dorver.png', 180, 144);
				this.load.spritesheet('goblin', 'assets/goblin.png', 64, 64);
				this.load.spritesheet('ninja', 'assets/ninja.png', 100, 100);
				this.load.spritesheet('slash', 'assets/slash.png', 40, 50);
				//buttons
				this.load.image('attack', 'assets/attack.png');
				this.load.image('potion', 'assets/potion.png');
				this.load.image('run', 'assets/run.png');
				this.load.image('counter', 'assets/counter.png');
				this.load.image('shopBut', 'assets/shop.png');
				this.load.image('battleBut1', 'assets/battle1.png');
				this.load.image('battleBut2', 'assets/battle2.png');
				this.load.image('battleBut3', 'assets/battle3.png');
				this.load.image('buyBut', 'assets/buy.png');
				this.load.image('femaleBut', 'assets/femaleBut.png');
				this.load.image('maleBut', 'assets/maleBut.png');
				this.load.image('backTown', 'assets/backTown.png');
				
				//audio
				this.load.audio('attack', 'assets/attack.mp3');
				this.load.audio('damage', 'assets/damage.mp3');
				this.load.audio('town', 'assets/SteppingStones.mp3');
				this.load.audio('shop', 'assets/EnchantedFestival.mp3');
				this.load.audio('buy', 'assets/buy.mp3');
				this.load.audio('error', 'assets/error.mp3');
				this.load.audio('battle1', 'assets/Sigil.mp3');
				this.load.audio('battle2', 'assets/TheLastEncounter.mp3');
				this.load.audio('victory', 'assets/LivelyMeadowVictoryFanfare.mp3');
				this.load.audio('ending', 'assets/LivelyMeadowSong.mp3');
		},
		create: function() {
				this.game.state.start('MainMenu');
		}
}
