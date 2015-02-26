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
		var roll;
	
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
		var index;
		var p;
		
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
				
				// player sprites and properties
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
						
						// location properties
						p[i].rightX = 1460;
						p[i].Xdiv = 205;
						p[i].divisionsX = 6;
						p[i].leftX = p[i].rightX - 6*p[i].Xdiv;
						p[i].bottomY = 1015;
						p[i].Ydiv = 150;
						p[i].divisionsY = 5;
						p[i].topY = p[i].bottomY - 5*p[i].Ydiv;
						
						// starting stats
						p[i].HP = 25;
						p[i].MaxHP = 25;
						p[i].att = 20;
						p[i].gold = 80;
						p[i].pot1 = 0;
						p[i].pot2 = 0;
						p[i].pot3 = 0;
						p[i].Mname = "";
						p[i].Mhp = 0;
						p[i].Matt = 0;
						p[i].Mgold = 0;
						p[i].inBattle = false;
						p[i].animations.play('down');
						p[i].visible = false;
						i +=1;
				} // shop vars
				p.item = "";
				p.price = 0;
				p.stat = 0;
				
				//shop and UI
				shop = this.add.sprite(0, 100, 'shop');
				shop.fixedToCamera = true;
				shop.visible = false;
				//UI top
				UI = this.add.sprite(0, 0, 'UI');
				UI.fixedToCamera = true;
				UI.style = {font: "16px Verdana", fill: "#ffffff", align: "left" };
				UI.Ltext = this.add.text(15, 15, "", UI.style);
				UI.Mtext = this.add.text(255, 15, "", UI.style);
				UI.Rtext = this.add.text(505, 15, "", UI.style);
				UI.Ltext.fixedToCamera = true;
				UI.Mtext.fixedToCamera = true;
				UI.Rtext.fixedToCamera = true;
				//UI bottom
				UI.bot = this.add.sprite(0, 500, 'UI');
				UI.bot.fixedToCamera = true;
				UI.bot.text = this.add.text(15, 515, "", UI.style);
				UI.bot.text.fixedToCamera = true;
				//UI select
				UI.select = this.add.sprite(300, 175, 'select');
				UI.select.fixedToCamera = true;
				UI.select.visible = false;
				UI.select.text = this.add.text(350, 190, "", UI.style);
				UI.select.text.fixedToCamera = true;
				
				// initialize pointer
				pointer = this.add.sprite(this.camera.x + 90, this.camera.y + 295, 'pointer');
				pointer.animations.add('blink', [0, 1], 3, true);
				pointer.animations.play('blink');
				// pointer selection array
				arrayX = 180;
				camXL = this.camera.x + 90;
				selectArrayX = [camXL, camXL + arrayX, camXL + 2*arrayX, camXL + 3*arrayX];
				camXR = camXL + 3*arrayX;
				pointer.fixedToCamera = true;
				
				// dice
				roll = [];
				die = [];
				monDie = [];
				die[0] = this.add.sprite(600, 175, 'die0');
				die[1] = this.add.sprite(600, 175, 'die1');
				die[2] = this.add.sprite(600, 175, 'die2');
				die[3] = this.add.sprite(600, 175, 'die3');
				die[4] = this.add.sprite(600, 175, 'die4');
				die[5] = this.add.sprite(600, 175, 'die5');
				die[6] = this.add.sprite(600, 175, 'die6');
				monDie[0] = this.add.sprite(100, 175, 'die0');
				monDie[1] = this.add.sprite(100, 175, 'die1');
				monDie[2] = this.add.sprite(100, 175, 'die2');
				monDie[3] = this.add.sprite(100, 175, 'die3');
				monDie[4] = this.add.sprite(100, 175, 'die4');
				monDie[5] = this.add.sprite(100, 175, 'die5');
				monDie[6] = this.add.sprite(100, 175, 'die6');
				i = 0;
				while(i < 7) {
						die[i].fixedToCamera = true;
						monDie[i].fixedToCamera = true;
						i += 1;
				}
				this.hideDice();
				
				// audio
				sounds = []; // dummy variable
				sounds.beep = this.add.audio('beep', 0.5);
				sounds.select = this.add.audio('selectSFX', 0.3);
				sounds.music = this.add.audio('music', 0.3, true);
				sounds.walk = this.add.audio('walk', 0.5);
				sounds.roll = this.add.audio('roll', 0.5);
				sounds.victory = this.add.audio('victory', 0.5, true);
				
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
						monDie[i].visible = false;
						i += 1;
				}
		},
		// start screen cursor functions
		selectNumPlayers: function() {
				sounds.select.play();
				this.resetKeys();
				startScreen.visible = false;
				index = 1;
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
				this.playerTurn();
		},
		hidePlayers: function() {
				p[1].visible = false;
				p[2].visible = false;
				p[3].visible = false;
				p[4].visible = false;
		},
		updatePlayer: function() {
				UI.bot.text.setText("Player " + index + " Stats:\n        Current HP: " + p[index].HP + "           Attack: " + p[index].att + "        Gold: " + p[index].gold + "\n        Mex HP: " + p[index].MaxHP + "       20 HP Potions: " + p[index].pot1 + "       150 HP Potions: " + p[index].pot2 + "       500 HP Potions: " + p[index].pot3);
		},
		playerTurn: function() { // initialize turn params
				this.hidePlayers();
				this.resetKeys();
				UI.Ltext.setText("");
				UI.Mtext.setText("");
				UI.Rtext.setText("");
				p[index].visible = true;
				p[index].animations.play('down');
				this.camera.follow(p[index]);
				this.updatePlayer();
				if(p[index].inBattle) {
						this.battle();
				} else { // select screen
						UI.select.visible = true;
						UI.select.text.visible = true;
						pointer.visible = true;
						die[0].visible = true;
						UI.select.text.setText("Player " + index + " turn\n\n  Roll die\n  20   HP Potion\n  150 HP Potion\n  500 HP Potion");
						
						// pointer vars             
						pointer.cameraOffset.x = 330;
						camYU = 238;
						pointer.cameraOffset.y = camYU;
						arrayY = 24;
						camYD = camYU + 3*arrayY;
						selectArrayY = [camYU, camYU + arrayY, camYU + 2*arrayY, camYD];
						keys.up.onDown.add(this.pointerUp, this);
						keys.down.onDown.add(this.pointerDown, this);
						space.onDown.add(this.turnSelect, this);
				}
		},
		turnSelect: function() {
				if(pointer.cameraOffset.y === selectArrayY[0]) {
						this.rollDice();
						UI.Mtext.setText("You rolled a " + roll.r1 + "\nUse arrow keys to move");
						UI.Rtext.setText("Once you have moved forward \nspaces, you cannot move back");
						p[index].spaces = roll.r1;
						this.playerMovement();
				}
				if(pointer.cameraOffset.y === selectArrayY[1]) {
						this.pot1();
				}
				if(pointer.cameraOffset.y === selectArrayY[2]) {
						this.pot2();
				}
				if(pointer.cameraOffset.y === selectArrayY[3]) {
						this.pot3();
				}
		},
		rollDice: function() {
				roll.r1 = Math.round((Math.random()*100)) % 6 + 1;
				roll.r2 = Math.round((Math.random()*100)) % 6 + 1;
				die[0].visible = false;
				monDie[0].visible = false;
				die[roll.r1].visible = true;
				sounds.roll.play();
		},
		pot1: function() {
				if(p[index].pot1 < 1) {
						UI.Mtext.setText("\nYou don't have any 20 HP Potions.");
				} else if(p[index].HP < p[index].MaxHP) {
						p[index].HP += 20;
						if(p[index].HP > p[index].MaxHP){
								p[index].HP = p[index].MaxHP;
						}
						p[index].pot1 -= 1;
						sounds.select.play();
						this.updatePlayer();
						UI.Mtext.setText("\nYou used a 20 HP Potion.");
				} else {
						UI.Mtext.setText("\nYour HP is already full.");
				}
		},
		pot2: function() {
				if(p[index].pot2 < 1) {
						UI.Mtext.setText("\nYou don't have any 150 HP Potions.");
				} else if(p[index].HP < p[index].MaxHP) {
						p[index].HP += 150;
						if(p[index].HP > p[index].MaxHP){
								p[index].HP = p[index].MaxHP;
						}
						p[index].pot2 -= 1;
						sounds.select.play();
						this.updatePlayer();
						UI.Mtext.setText("\nYou used a 150 HP Potion.");
				} else {
						UI.Mtext.setText("\nYour HP is already full.");
				}
		},
		pot3: function() {
				if(p[index].pot3 < 1) {
						UI.Mtext.setText("\nYou don't have any 500 HP Potions.");
				} else if(p[index].HP < p[index].MaxHP) {
						p[index].HP += 500;
						if(p[index].HP > p[index].MaxHP){
								p[index].HP = p[index].MaxHP;
						}
						p[index].pot3 -= 1;
						sounds.select.play();
						this.updatePlayer();
						UI.Mtext.setText("\nYou used a 500 HP Potion.");
				} else {
						UI.Mtext.setText("\nYour HP is already full.");
				}
		},
		endTurn: function() {
				index += 1;
				sounds.select.play();
				this.hideDice();
				if(index > numPlayers)
						index = 1;
				this.playerTurn();
		}, // movement functions
		playerMovement: function() {
				shop.visible = false;
				pointer.visible = false;
				UI.select.visible = false;
				UI.select.text.visible = false;
				this.resetKeys();
				if(p[index].spaces < 1) {
						UI.Mtext.setText("\nPress Space to end turn");
						space.onDown.add(this.endTurn, this);
				} else {
						keys.up.onDown.add(this.moveUp, this);
						keys.down.onDown.add(this.moveDown, this);
						keys.left.onDown.add(this.moveLeft, this);
						keys.right.onDown.add(this.moveRight, this);
						space.onDown.add(this.checkSpace, this);
				}
		},
		moveUp: function() {
				if(p[index].x === p[index].leftX + 2*p[index].Xdiv || p[index].x === p[index].leftX) {
						if(p[index].y > p[index].topY && p[index].spaces > 0) {
								p[index].y -= p[index].Ydiv;
								p[index].spaces -= 1;
								p[index].animations.play('up');
								this.updateSpaces();
						}
				}
		},
		moveDown: function() {
				if(p[index].x === p[index].leftX + 4*p[index].Xdiv || p[index].x === p[index].rightX) {
						if(p[index].y < p[index].bottomY && p[index].spaces > 0) {
								p[index].y += p[index].Ydiv;
								p[index].spaces -= 1;
								p[index].animations.play('down');
								this.updateSpaces();
						}
				}
		},
		moveLeft: function() {
				if(p[index].y === p[index].bottomY) {
						if(p[index].x > p[index].leftX && p[index].spaces > 0) {
								p[index].x -= p[index].Xdiv;
								p[index].spaces -= 1;
								p[index].animations.play('left');
								this.updateSpaces();
						}
				}
		},
		moveRight: function() {
				if(p[index].y === p[index].topY) {
						if(p[index].x < p[index].rightX && p[index].spaces > 0) {
								p[index].x += p[index].Xdiv;
								p[index].spaces -= 1;
								p[index].animations.play('right');
								this.updateSpaces();
						}
				}
		},
		updateSpaces: function() {
				sounds.walk.play();
				this.hideDice();
				UI.Rtext.setText("Once you have moved forward \nspaces, you cannot move back");
				UI.Mtext.setText("\nSpaces left: " + p[index].spaces);
				if( (p[index].x === p[index].leftX && p[index].y === p[index].bottomY) || (p[index].x === p[index].rightX && p[index].y === p[index].bottomY) || (p[index].x === p[index].leftX + 3*p[index].Xdiv && p[index].y === p[index].topY) ) {
								this.shopPrompt();
				}
				if(p[index].spaces < 1) {
						UI.Mtext.setText("\nPress Space for event");
						UI.Rtext.setText("");
				}
		},
		shopPrompt: function() {
				UI.select.visible = true;
				UI.select.text.visible = true;
				UI.select.text.setText("Enter shop?\n\n   Yes\n   No");
				if(p[index].spaces > 0)
						UI.Rtext.setText("You can keep moving\nafter buying items");
				pointer.visible = true;
				pointer.cameraOffset.x = 330;
				camYU = 238;
				pointer.cameraOffset.y = camYU;
				camYD = camYU + arrayY;
				arrayY = 24;
				this.resetKeys();
				keys.up.onDown.add(this.pointerUp, this);
				keys.down.onDown.add(this.pointerDown, this);
				space.onDown.add(this.shopPromptSelect, this);
		},
		shopPromptSelect: function() {
				sounds.select.play();
				if(pointer.cameraOffset.y === camYU) {
						UI.select.visible = false;
						UI.select.text.visible = false;
						this.shop();
				} else {
						this.playerMovement();
				}
		},
		shop: function() {
				shop.visible = true;
				UI.Rtext.setText("        Press space to buy");
				UI.Mtext.setText("");
				arrayX = 250;
				arrayY = 44;
				camXL = 35;
				camYU = 280;
				camXR = camXL + 2*arrayX;
				camYD = camYU + 3*arrayY;
				pointer.cameraOffset.x = camXL;
				pointer.cameraOffset.y = camYU;
				selectArrayX = [camXL, camXL + arrayX, camXR];
				selectArrayY = [camYU, camYU + arrayY, camYU + 2*arrayY, camYD];
				space.reset(true);
				keys.left.onDown.add(this.pointerLeft, this);
				keys.right.onDown.add(this.pointerRight, this);
				space.onDown.add(this.shopSelect, this);
		},
		shopSelect: function() {
				if(pointer.cameraOffset.x === selectArrayX[0]) { // first col
						if(pointer.cameraOffset.y === selectArrayY[0]) { // leather
								p.item = "Leather Armor";
								p.price = 50;
								p.stat = 50;
						} else if(pointer.cameraOffset.y === selectArrayY[1]) { // steel
								p.item = "Steel Armor";
								p.price = 250;
								p.stat = 420;
						} else if(pointer.cameraOffset.y === selectArrayY[2]) { // plate
								p.item = "Plate Armor";
								p.price = 700;
								p.stat = 1000;
						} else {
								p.stat = 1000;
								p.price = 50000;
						}
						if(p[index].gold < p.price) {
								UI.Mtext.setText("\nYou don't have enough gold");
						} else if (pointer.cameraOffset.y === selectArrayY[3]) {
										this.win(); 
						} else if(p[index].MaxHP >= p.stat) {
								UI.Mtext.setText("\nYou don't need that armor");
						} else {
								UI.Mtext.setText("\nYou bought " + p.item);
								sounds.select.play();
								p[index].gold -= p.price;
								p[index].MaxHP = p.stat;
								p[index].HP = p.stat;
								this.updatePlayer();
						}
				} else if(pointer.cameraOffset.x === selectArrayX[1]) { // second col
						if(pointer.cameraOffset.y === selectArrayY[0]) { // knife
								p.item = "Knife";
								p.price = 50;
								p.stat = 50;
						} else if(pointer.cameraOffset.y === selectArrayY[1]) { // sword
								p.item = "Sword";
								p.price = 300;
								p.stat = 200;
						} else if(pointer.cameraOffset.y === selectArrayY[2]) { // glaive
								p.item = "Glaive";
								p.price = 825;
								p.stat = 680;
						} else {
								p.stat = 1000;
								p.price = 50000;
						}
						if(p[index].gold < p.price) {
								UI.Mtext.setText("\nYou don't have enough gold");
						} else if (pointer.cameraOffset.y === selectArrayY[3]) {
										this.win(); 
						} else if(p[index].att >= p.stat) {
								UI.Mtext.setText("\nYou don't need that weapon");
						}  else {
								UI.Mtext.setText("\nYou bought a " + p.item);
								sounds.select.play();
								p[index].gold -= p.price;
								p[index].att = p.stat;
								this.updatePlayer();
						}
				} else { // last col
						p.breaker = true;
						if(pointer.cameraOffset.y === selectArrayY[0]) { // knife
								p.item = "20 HP Potion";
								p.price = 10;
						} else if(pointer.cameraOffset.y === selectArrayY[1]) { // sword
								p.item = "150 HP Potion";
								p.price = 50;
						} else if(pointer.cameraOffset.y === selectArrayY[2]) { // glaive
								p.item = "500 HP Potion";
								p.price = 100;
						} else {
								sounds.select.play();
								UI.Mtext.setText("\nSpaces left: " + p[index].spaces);
								this.playerMovement();
								p.breaker = false;
						}
						if(p[index].gold < p.price && p.breaker) {
								UI.Mtext.setText("\nYou don't have enough gold");
						} else if (p.breaker) {
								UI.Mtext.setText("\nYou bought a " + p.item);
								p[index].gold -= p.price;
								sounds.select.play();
								if(p.price === 10) {
										p[index].pot1 += 1;
								} else if(p.price === 50) {
										p[index].pot2 += 1;
								} else {
										p[index].pot3 += 1;
								}
								this.updatePlayer();
						}
				}
		},
		win: function() {
				UI.Mtext.setText("\nYou Win!");
				this.resetKeys();
				sounds.music.stop();
				sounds.victory.play();
		},
		checkSpace: function() {
				if(p[index].spaces === 0) {
				if(p[index].y === p[index].bottomY) { // bottom row
						if(p[index].x === p[index].leftX + 3*p[index].Xdiv)
								this.getGold();
						else
								this.battle1();
				} else if(p[index].x <= p[index].leftX + p[index].Xdiv) { // blue
						if(p[index].y === p[index].topY + p[index].Ydiv)
								this.getGold();
						else
								this.battle2();
				} else if(p[index].y === p[index].topY || p[index].x === p[index].rightX) { // red
						if(p[index].y === p[index].topY + 2*p[index].Ydiv)
								this.getGold();
						else
								this.battle3();
				} else { // purple
						this.battle4();
				} }
		},
		getGold: function() {
				UI.Mtext.setText("You got lucky\nPress space to roll dice\nto see how much gold you get");
				UI.Rtext.setText("");
				this.resetKeys();
				space.onDown.add(this.gold, this);
		},
		gold: function() {
				this.rollDice();
				monDie[roll.r2].visible = true;
				UI.Mtext.setText("Congratulations\nYou get " + (roll.r1 + roll.r2) * 20 + " gold\nPress space to end turn");
				p[index].gold += (roll.r1 + roll.r2) * 20;
				this.updatePlayer();
				this.resetKeys();
				space.onDown.add(this.endTurn, this);
		},
		battle1: function() {
				this.rollDice();
				this.hideDice();
				if(roll.r1 < 4) {
						p[index].Mname = "Slime";
						p[index].Mhp = 40;
						p[index].Matt = 9;
						p[index].Mgold = 60;
				} else {
						p[index].Mname = "Zombie";
						p[index].Mhp = 60;
						p[index].Matt = 12;
						p[index].Mgold = 120;
				}
				this.battle();
		},
		battle2: function() {
				this.rollDice();
				this.hideDice();
				if(roll.r1 < 4) {
						p[index].Mname = "Goblin";
						p[index].Mhp = 100;
						p[index].Matt = 20;
						p[index].Mgold = 240;
				} else {
						p[index].Mname = "Pirate";
						p[index].Mhp = 150;
						p[index].Matt = 24;
						p[index].Mgold = 480;
				}
				this.battle();
		},
		battle3: function() {
				this.rollDice();
				this.hideDice();
				if(roll.r1 < 4) {
						p[index].Mname = "Bandit";
						p[index].Mhp = 400;
						p[index].Matt = 170;
						p[index].Mgold = 900;
				} else {
						p[index].Mname = "Sorcerer";
						p[index].Mhp = 600;
						p[index].Matt = 200;
						p[index].Mgold = 1800;
				}
				this.battle();
				
		},
		battle4: function() {
				this.rollDice();
				this.hideDice();
				if(roll.r1 < 4) {
						p[index].Mname = "Gunslinger";
						p[index].Mhp = 1300;
						p[index].Matt = 300;
						p[index].Mgold = 4000;
				} else {
						p[index].Mname = "Sword Master";
						p[index].Mhp = 2000;
						p[index].Matt = 350;
						p[index].Mgold = 50000;
				}
				this.battle();
				
		},
		battle: function() {
				p[index].inBattle = true;
				this.updateMonster();
				UI.Mtext.setText("You are fighting a monster\nPress space to roll dice\nand determine who goes first");
				UI.Rtext.setText("                If you tie,\n                you go first");
				this.resetKeys();
				space.onDown.add(this.battleRoll, this);
		},
		battleRoll: function() {
				this.rollDice();
				monDie[roll.r2].visible = true;
				if(roll.r2 > roll.r1) {
						UI.Rtext.setText("                You rolled " + roll.r1 + "\n                You go last");
						this.monsterBattle();
				} else {
						UI.Rtext.setText("                You rolled " + roll.r1 + "\n                You go first");
						this.playerBattle();
				}
		}, 
		monsterBattle: function() {
				this.resetKeys();
				p[index].HP -= p[index].Matt;
				sounds.select.play();
				this.updatePlayer();
				if(p[index].HP < 1) {
						UI.Rtext.setText("                You took " + p[index].Matt + "\n                damage and died");
						this.death();
				} else {
						UI.Mtext.setText("\nYou took " + p[index].Matt + " damage");
						if(roll.r2 > roll.r1) {
								this.playerBattle();
						} else {
								UI.Rtext.setText("                Press space \n                to end your turn");
								space.onDown.add(this.endTurn, this);
						}
				}
		},
		playerBattle: function() {
				this.resetKeys();
				if(roll.r2 < roll.r1)
						UI.Mtext.setText("\nYou will be attacked next turn")
				UI.select.visible = true;
				UI.select.text.visible = true;
				pointer.visible = true;
				UI.select.text.setText("Player " + index + " turn\n\n  Attack\n  20   HP Potion\n  150 HP Potion\n  500 HP Potion\n  Run");
						
				// pointer vars             
				pointer.cameraOffset.x = 330;
				camYU = 238;
				pointer.cameraOffset.y = camYU;
				arrayY = 24;
				camYD = camYU + 4*arrayY;
				selectArrayY = [camYU, camYU + arrayY, camYU + 2*arrayY, camYU + 3*arrayY, camYD];
				keys.up.onDown.add(this.pointerUp, this);
				keys.down.onDown.add(this.pointerDown, this);
				space.onDown.add(this.battleSelect, this);
		}, 
		battleSelect: function() {
				if(pointer.cameraOffset.y === selectArrayY[0]) {
						p[index].Mhp -= p[index].att;
						sounds.select.play();
						UI.select.visible = false;
						UI.select.text.visible = false;
						pointer.visible = false;
						this.updateMonster();
						if(p[index].Mhp < 1) {
								p[index].inBattle = false;
								UI.Mtext.setText("Victory!\nYou gained " + p[index].Mgold + " gold\nPress space to end your turn");
								p[index].gold += p[index].Mgold;
								this.updatePlayer();
								this.resetKeys();
								space.onDown.add(this.endTurn, this);
						} else if(roll.r1 >= roll.r2) {
								UI.Mtext.setText("You attacked for " + p[index].att + " damage\nPress space to continue");
								this.resetKeys();
								space.onDown.add(this.monsterBattle, this);
						} else {
								UI.Mtext.setText("You attacked for " + p[index].att + " damage\nPress space to end your turn");
								this.resetKeys();
								space.onDown.add(this.endTurn, this);
						}
				} else if(pointer.cameraOffset.y === selectArrayY[1]) {
						this.pot1();
				} else if(pointer.cameraOffset.y === selectArrayY[2]) {
						this.pot2();
				} else if(pointer.cameraOffset.y === selectArrayY[3]) {
						this.pot3();
				} else {
						UI.Mtext.setText("You ran from battle\nPress space to end your turn");
						sounds.select.play();
						UI.select.visible = false;
						UI.select.text.visible = false;
						pointer.visible = false;
						this.resetKeys();
						p[index].inBattle = false;
						space.onDown.add(this.endTurn, this);
				}
		},
		death: function() {
				p[index].inBattle = false;
				UI.Mtext.setText("You will lose a portion of your gold\nPress space to roll and \ndetermine the loss");
				this.resetKeys();
				UI.select.visible = false;
				UI.select.text.visible = false;
				pointer.visible = false;
				space.onDown.add(this.deathRoll, this);
		},
		deathRoll: function() {
				this.rollDice();
				monDie[roll.r2].visible = true;
				UI.Mtext.setText("You lost "+ Math.round(p[index].gold*(roll.r1*5/100)) + " gold\nYou are sent back to the start\nPress space to end your turn");
				UI.Rtext.setText("                You will respawn\n                with full HP");
				this.resetKeys();
				p[index].gold -= Math.round(p[index].gold*(roll.r1*5/100));
				p[index].x = p[index].rightX;
				p[index].y = p[index].bottomY;
				p[index].visible = false;
				this.updatePlayer();
				p[index].HP = p[index].MaxHP;
				space.onDown.add(this.endTurn, this);
		},
		updateMonster: function() {
				UI.Ltext.setText("Monster: " + p[index].Mname + "\nHP: " + p[index].Mhp + "     Attack: " + p[index].Matt + "\nGold: ");
		}, // pointer functions
		pointerDown: function() {
				sounds.beep.play();
				if(pointer.cameraOffset.y < camYD)
						pointer.cameraOffset.y += arrayY;
				else
						pointer.cameraOffset.y = camYU;
		},
		pointerUp: function() {
				sounds.beep.play();
				if(pointer.cameraOffset.y > camYU)
						pointer.cameraOffset.y -= arrayY;
				else
						pointer.cameraOffset.y = camYD;
		},
		pointerRight: function() {
				sounds.beep.play();
				if(pointer.cameraOffset.x < camXR)
						pointer.cameraOffset.x += arrayX;
				else
						pointer.cameraOffset.x = camXL;
		},
		pointerLeft: function() {
				sounds.beep.play();
				if(pointer.cameraOffset.x > camXL)
						pointer.cameraOffset.x -= arrayX;
				else
						pointer.cameraOffset.x = camXR;
		}
}
