var main = function(game) {
		// initialization vars
		var pointer;
		var space;
		var keys;
		var board;
		var startScreen;
		var sounds;
		var die;
		var monDie;
		var i;
	
		// selection variables
		var selectArrayX;
		var arrayX;
		var camXL;
		var camXR;
		var selectArrayY;
		var arrayY;     
		var camYU;
		var camYD;
		var numPlayers;
		
		// player variables
		var player;
		var index;
		var p;
		var monster;
		
		// shop and UI
		var shop;
		var UI;
};

main.prototype = {
		create: function() {
				// set world and bounds
				this.world.setBounds(0, 0, 1800, 1314);
				board = this.add.tileSprite(0, 0, 1800, 1314, 'board');
				// start screen
				startScreen = this.add.sprite(0, 0, 'startScreen');
				
				// player sprites
				p = []; // dummy
				p[1] = this.add.sprite(1460, 1015, 'p1');
				p[2] = this.add.sprite(1460, 1015, 'p2');
				p[3] = this.add.sprite(1460, 1015, 'p3');
				p[4] = this.add.sprite(1460, 1015, 'p4');
				// animations
				i = 1;
				while(i < 5) {
						p[i].animations.add('down', [6, 7, 8, 7], 3, true);
						p[i].animations.add('up', [0, 1, 2, 1], 3, true);
						p[i].animations.add('left', [9, 10, 11, 10], 3, true);
						p[i].animations.add('right', [3, 4, 5, 4], 3, true);
						p[i].animations.play('down');
						p[i].visible = false;
						i +=1;
				}
				
				//shop and UI
				shop = this.add.sprite(0, 100, 'shop');
				shop.fixedToCamera = true;
				shop.visible = false;
				//UI top
				UI = this.add.sprite(0, 0, 'UI');
				UI.fixedToCamera = true;
				UI.style = {font: "16px Verdana", fill: "#ffffff", align: "center" };
				UI.text = this.add.text(15, 15, "", UI.style);
				//UI bottom
				UI.bot = this.add.sprite(0, 500, 'UI');
				UI.bot.fixedToCamera = true;
				//UI select
				UI.select = this.add.sprite(300, 175, 'select');
				UI.select.fixedToCamera = true;
				UI.select.visible = false;
				
				// initialize pointer
				pointer = this.add.sprite(this.camera.x + 90, this.camera.y + 295, 'pointer');
				pointer.animations.add('blink', [0, 1], 3, true);
				pointer.animations.play('blink');
				// pointer selection array
				arrayX = 180;
				camXL = this.camera.x + 90;
				selectArrayX = [camXL, camXL + arrayX, camXL + 2*arrayX, camXL + 3*arrayX];
				camXR = camXL + 3*arrayX;
				
				// dice
				die = [this.add.sprite(600, 175, 'die0'), this.add.sprite(600, 175, 'die1'), this.add.sprite(600, 175, 'die2'), this.add.sprite(600, 175, 'die3'), this.add.sprite(600, 175, 'die4'), this.add.sprite(600, 175, 'die5'), this.add.sprite(600, 175, 'die6')];
				monDie = [this.add.sprite(100, 175, 'die0'), this.add.sprite(100, 175, 'die1'), this.add.sprite(100, 175, 'die2'), this.add.sprite(100, 175, 'die3'), this.add.sprite(100, 175, 'die4'), this.add.sprite(100, 175, 'die5'), this.add.sprite(100, 175, 'die6')];
				this.hideDice();
				
				// audio
				sounds = []; // dummy variable
				sounds.beep = this.add.audio('beep', 0.5);
				sounds.select = this.add.audio('selectSFX', 0.5);
				sounds.music = this.add.audio('music', 0.25, true);
				
				// set keyboard controls
				space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				space.onDown.add(this.selectNumPlayers, this);
				keys = this.input.keyboard.createCursorKeys();
				keys.left.onDown.add(this.pointerLeft, this);
				keys.right.onDown.add(this.pointerRight, this);
				
		},
		resetKeys: function() { // resets all the key bindings
				space.reset(true);
				keys.left.reset(true);
				keys.right.reset(true);
				keys.up.reset(true);
				keys.down.reset(true);
		},
		hideDice: function() { // hides dice
				i = 0;
				while(i < 7) {
						die[i].visible = false;
						die[i].fixedToCamera = true;
						monDie[i].visible = false;
						monDie[i].fixedToCamera = true;
						i += 1;
				}
		},
		// start screen cursor functions
		selectNumPlayers: function() {
				sounds.select.play();
				this.resetKeys();
				startScreen.visible = false;
				p[1].visible = true;
				this.camera.follow(p[1]);
				sounds.music.play();
				if(pointer.x === selectArrayX[0]) {
						numPlayers = 1;
				} else if(pointer.x === selectArrayX[1]) {
						numPlayers = 2;
				} else if(pointer.x === selectArrayX[2]) {
						numPlayers = 3;
				} else {
						numPlayers = 4; 
				}
		},
		pointerRight: function() {
				sounds.beep.play();
				if(pointer.x < camXR)
						pointer.x += arrayX;
				else
						pointer.x = camXL;
		},
		pointerLeft: function() {
				sounds.beep.play();
				if(pointer.x > camXL)
						pointer.x -= arrayX;
				else
						pointer.x = camXR;
		}
}
