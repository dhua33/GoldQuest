var main = function(game) {
		// images
		var female;
		var male;
		var win;
		var back;
		var shopmenu;
		var background;
		var die;
		// shopkeeper
		var shopGold;
		var shopGreet;
		var shopNo;
		var shopThank;
		var townimg;
		// sprites & associated parameters
		var mon1;
		var mon1HP;
		var mon1Att;
		var mon2;
		var mon2HP;
		var mon2Att;
		var mon3;
		var mon3HP;
		var mon3Att;
		var currentMonHP;
		var currentMonAtt;
		var damage;
		var monGold;
		var slashFX;
		var player;
		var playerHP;
		var playerMaxHP;
		var playerAtt;
		var playerGold;
		var playerPots;
		var playerText;
		// buttons
		var attack;
		var potion;
		var run;
		var counter;
		var shopBut;
		var battleBut1;
		var battleBut2;
		var battleBut3;
		var maleBut;
		var femaleBut;
		var backTown;
		// shop buttons
		var buySword;
		var buySpear;
		var buyAxe;
		var buyIron;
		var buySteel;
		var buyPlate;
		var buyPot;
		var buyRing;
		var cost;
		var hasStat;
		// audio
		var attackSFX;
		var damageSFX;
		var victorySFX;
		var townMusic;
		var shopMusic;
		var battle1Music;
		var battle2Music;
		var endingMusic;
		var buySFX;
		var errorSFX;
		// text
		var style;
    var topText
    var rightText;
    var actionText;
    var shopText;
    
    // variables for battle
    var randomNum;
    var battleNum;
    var mondie1;
    var mondie2;
    var counterChance;
    var counterPercent;
};

main.prototype = {
		create: function() {
				// set initial parameters
				counterChance = 4;
				counterPercent = 20;
				playerHP = 10;
				playerMaxHP = 10;
				playerAtt = 4;
				playerGold = 100;
				playerPots = 1;
				mon1HP = 50;
				mon1Att = 3;
				mon2HP = 370;
				mon2Att = 10; // min 4
				mon3HP = 7500;
				mon3Att = 41; // min 20
				mondie1 = false;
				mondie2 = false;
				
				// set initial button positions, visibility, and functions
				back = this.add.sprite(0, 0, 'back');
				back.visible = false;
				style = {font: "16px Verdana", fill: "#ffffff", align: "left" };
				var style2 = {font: "22px Verdana", fill: "#ffffff", align: "left" }
				topText = this.add.text(200, 35, "", style);
				rightText = this.add.text(550, 35, "", style);
				actionText = this.add.text(635, 515, "None", style);
				playerText = this.add.text(150, 477, " " + playerHP + "                      " + playerGold + "\n\n     " + playerAtt + "                    " + playerPots, style2);
				playerText.visible = false;
				// backgrounds
				shopmenu = this.add.sprite(0, 150, 'shopmenu');
				background = this.add.sprite(0, 150, 'background');
				townimg = this.add.sprite(20, 20, 'townimg');
				// town buttons
				shopBut = this.add.button(400, 150, 'shopBut', this.shop, this);
				battleBut1 = this.add.button(0, 150, 'battleBut1', this.battle1, this);
				battleBut2 = this.add.button(200, 150, 'battleBut2', this.battle2, this);
				battleBut3 = this.add.button(0, 300, 'battleBut3', this.battle3, this);
				
				// monsters & animations
				mon1 = this.add.sprite(345, 302, 'goblin');
				mon1.animations.add('attack', [0, 1, 2, 3, 4, 5, 6], 14, false);
				mon1.animations.add('die', [7, 8, 9, 10, 11], 10, false);
				mon2 = this.add.sprite(445, 302, 'ninja');
				mon2.scale.setTo(-1, 1);
				mon2.animations.add('attack', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, false);
				mon2.animations.add('die', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20, false);
				mon2.animations.add('idle', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], true);
				mon3 = this.add.sprite(310, 262, 'dorver');
				mon3.scale.setTo(1.5, 1.5);
				mon3.animations.add('idle', [0, 1, 2, 3], 8, true);
				slashFX = this.add.sprite(315, 300, 'slash');
				slashFX.scale.setTo(2, 2);
				slashFX.animations.add('attack', [0, 1, 2, 3, 4, 5, 6, 7, 8], 36)
				// shop face assets
				shopGold = this.add.sprite(30, 20, 'shopGold');
				shopGreet = this.add.sprite(30, 20, 'shopGreet');
				shopNo = this.add.sprite(30, 20, 'shopNo');
				shopThank = this.add.sprite(30, 20, 'shopThank');
				// shop buttons
				buySword = this.add.button(345, 215, 'buyBut', this.buySword, this);
				buySpear = this.add.button(345, 257, 'buyBut', this.buySpear, this);
				buyAxe = this.add.button(345, 302, 'buyBut', this.buyAxe, this);
				buyPot = this.add.button(345, 347, 'buyBut', this.buyPot, this);
				buyRing = this.add.button(345, 392, 'buyBut', this.buyRing, this);
				buyIron = this.add.button(675, 215, 'buyBut', this.buyIron, this);
				buySteel = this.add.button(675, 257, 'buyBut', this.buySteel, this);
				buyPlate = this.add.button(675, 302, 'buyBut', this.buyPlate, this);
				
				// action buttons
				backTown = this.add.button(625, 508, 'backTown', this.backTown, this);
				attack = this.add.button(560, 490, 'attack', this.attack, this);
				counter = this.add.button(560, 530, 'counter', this.counter, this);
				potion = this.add.button(680, 490, 'potion', this.potion, this);
				run = this.add.button(680, 530, 'run', this.run, this);
				// gender select buttons
				male = this.add.sprite(230, 200, 'male');
				male.scale.setTo(1.5, 1.5);
				female = this.add.sprite(500, 200, 'female');
				female.scale.setTo(1.5, 1.5);
				maleBut = this.add.button(205, 300, 'maleBut', this.male, this); // , this courtesy of YG
				femaleBut = this.add.button(475, 300, 'femaleBut', this.female, this);
				
				// audio
				attackSFX = this.add.audio('attack', 0.5);
				damageSFX = this.add.audio('damage', 0.5);
				victorySFX = this.add.audio('victory', 0.5);
				townMusic = this.add.audio('town', 0.5, true);
				shopMusic = this.add.audio('shop', 0.5, true);
				buySFX = this.add.audio('buy', 0.5);
				errorSFX = this.add.audio('error', 0.5);
				battle1Music = this.add.audio('battle1', 0.5, true);
				battle2Music = this.add.audio('battle2', 0.5, true);
				endingMusic = this.add.audio('ending', 0.5);
				
				win = this.add.sprite(0, 0, 'win', this.win);
				die = this.add.button(0, 0, 'die', this.die, this);
				this.allVisible();
				// begin selection
				topText.setText("\n                 Are you a Boy or a Girl?");
				
		},
		// misc functions to reduce coding DOES NOT WORK 2/9/2015
		allVisible: function() { // sets all buttons to be invisible and resets text
				// action buttons
				backTown.visible = false;
				attack.visible = false;
				counter.visible = false;
				potion.visible = false;
				run.visible = false;
				// buy buttons
				buySword.visible = false;
				buySpear.visible = false;
				buyAxe.visible = false;
				buyPot.visible = false;
				buyRing.visible = false;
				buyIron.visible = false;
				buySteel.visible = false;
				buyPlate.visible = false;
				// text
				actionText.visible = false;
				topText.setText("");
				rightText.setText("");
				// backgrounds and images
				win.visible = false;
				die.visible = false;
				background.visible = false;
				this.shopVisible();
				shopmenu.visible = false;
				townimg.visible = false;
				// buttons
				shopBut.visible = false;
				battleBut1.visible = false;
				battleBut2.visible = false;
				battleBut3.visible = false;
				// monsters
				mon1.visible = false;
				mon2.visible = false;
				mon3.visible = false;
		},
		shopVisible: function() { // resets the shopkeeper's face
				shopGold.visible = false;
				shopGreet.visible = false;
				shopNo.visible = false;
				shopThank.visible = false;
		},
		updatePlayer: function() { // updates playerText
				playerText.setText(" " + playerHP + "                      " + playerGold + "\n\n     " + playerAtt + "                      " + playerPots);
		},
		// male female
		male: function() {
				female.visible = false;
				maleBut.visible = false;
				femaleBut.visible = false;
				male.x = 20;
				male.y = 500;
				
				this.allVisible();
				this.backTown();
		},
		female: function() {
				male.visible = false;
				maleBut.visible = false;
				femaleBut.visible = false;
				female.x = 20;
				female.y = 500;
				
				this.allVisible();
				this.backTown();
		},
		
		//shop buttons
		shop: function() { 
				// change music
				townMusic.stop();
				shopMusic.play();
				
				// initialize visuals
				townimg.visible = false;
				battleBut1.visible = false;
				battleBut2.visible = false;
				battleBut3.visible = false;
				shopBut.visible = false;
				actionText.visible = false;
				
				backTown.visible = true;
				shopGreet.visible = true;
				shopmenu.visible = true;
				topText.setText("Welcome to the shop!\nSee anything you like?");
				rightText.setText("Get enough gold\nto buy the ring!");
				buySword.visible = true;
				buySpear.visible = true;
				buyAxe.visible = true;
				buyIron.visible = true;
				buySteel.visible = true;
				buyPlate.visible = true;
				buyPot.visible = true;
				buyRing.visible = true;
		},
		buyWep: function() { // for the buy buttons
				if(cost > playerGold) {
						errorSFX.play();
						shopGold.visible = true;
						topText.setText("\nYou don't have enough gold...");
				} else if (hasStat <= playerAtt) {
						errorSFX.play();
						shopNo.visible = true;
						topText.setText("\nBuying another would be useless!");
				} else {
						buySFX.play();
						shopThank.visible = true;
						topText.setText(shopText);
						playerGold -= cost;
						playerAtt = hasStat;
						this.updatePlayer();
				}
		},
		buySword: function() { // initialize vals
				cost = 200;
				hasStat = 10;
				this.shopVisible();
				shopText = "\nThank you~\nNow you're a bit stronger";
				this.buyWep();
		},
		buySpear: function() {
				cost = 1000;
				hasStat = 50;
				this.shopVisible();
				shopText = "\nThanks!\nGood luck hunting~";
				this.buyWep();
		},
		buyAxe: function() {
				cost = 5000;
				hasStat = 300;
				this.shopVisible();
				shopText = "\nThank you very much!\nYou have the best weapon in town.";
				this.buyWep();
				
		},
		buyPot: function() {
				cost = 100;
				this.shopVisible();
				
				if(cost > playerGold) {
						errorSFX.play();
						shopGold.visible = true;
						topText.setText("\nYou don't have enough gold...");
				} else {
						buySFX.play();
						shopThank.visible = true;
						topText.setText("\nThank you.\nKeep your health high!");
						playerGold -= cost;
						playerPots++;
						this.updatePlayer();
				}
		},
		buyRing: function() {
				cost = 20000;
				this.shopVisible();
				
				if(cost > playerGold) {
						errorSFX.play();
						shopGold.visible = true;
						topText.setText("\nYou don't have enough gold...");
				} else {
						shopMusic.stop();
						buySFX.play();
						endingMusic.play();
						win.visible = true;
				}
		},
		buyArmor: function() {
				if(cost > playerGold) {
						errorSFX.play();
						shopGold.visible = true;
						topText.setText("\nYou don't have enough gold...");
				} else if (hasStat <= playerHP) {
						errorSFX.play();
						shopNo.visible = true;
						topText.setText("\nBuying another would be useless!");
				} else {
						buySFX.play();
						shopThank.visible = true;
						topText.setText(shopText);
						playerGold -= cost;
						playerHP = hasStat;
						playerMaxHP = hasStat;
						rightText.setText("Max HP: " + playerMaxHP);
						this.updatePlayer();
				}
		},
		buyIron: function() {
				cost = 350;
				hasStat = 80;
				this.shopVisible();
				shopText = "\nThanks~\nDo your best with that armor!";
				this.buyArmor();
		},
		buySteel: function() {
				cost = 1050;
				hasStat = 540;
				this.shopVisible();
				shopText = "\nThank you~\nYou can take a hit in that armor.";
				this.buyArmor();
		},
		buyPlate: function() {
				cost = 5000;
				hasStat = 1600;
				this.shopVisible();
				shopText = "\nThank you so much!\nNothing can stop you now.";
				this.buyArmor();
		},
		
		// action button functions
		die: function() {
				this.game.state.start('Game');
		},
		monDamage: function() {
				damage = Math.round(Math.random()*100) % currentMonAtt;
						if(battleNum === 1) {
								mon1.animations.play('attack');
						} else if(battleNum === 2) {
								if(damage < 4)
										damage += 4;
								mon2.animations.play('attack');
						} else if(battleNum === 3) {
								if(damage < 20)
										damage += 20;
						}
		},
		monAttack: function() {
						playerHP -= damage;
						topText.setText("Monster HP: "+ currentMonHP + "\nMonster attacked for " + damage + " damage.");
						if(battleNum === 1) {
								if(damage < 1)
										topText.setText("Monster HP: " + currentMonHP + "\nMonster missed!");
								else
										damageSFX.play();
						} else {
								damageSFX.play();
						}
						if(playerHP < 1){
								battle1Music.stop();
								battle2Music.stop();
								die.visible = true;
						}
		},
		playerDamages: function() {
						slashFX.animations.play('attack');
						attackSFX.play();
						currentMonHP -= damage;
						topText.setText("Monster HP: " + currentMonHP);
		},
		killsMonster: function() {
				topText.setText("You defeated the monster!\nGained "+ monGold + " gold.");
								battle1Music.stop();
								battle2Music.stop();
								victorySFX.play();
								if(battleNum === 1)
										mondie1 = true;
								if(battleNum === 2) {
										mon2.animations.play('die');
										mondie2 = true;
								}
								backTown.visible = true;
								attack.visible = false;
								counter.visible = false;
								potion.visible = false;
								run.visible = false;
								playerGold += monGold;
		},
		counter: function() {
				randomNum = Math.random();
				randomNum = Math.round((randomNum * 100)) % 20;
				if(randomNum < counterChance) { // counter success
						damage = playerAtt*5;
						rightText.setText("Counter success!\nPlayer did " + damage + " damage.\nPlayer Turn.");
						this.playerDamages();
						if(currentMonHP < 1) {
								this.killsMonster();
						}
				} else {
						rightText.setText("Counter failed.\nPlayer turn.");
						this.monDamage();
						damage = Math.round(damage*1.5);
						this.monAttack();
				}
				counterChance = 4;
				counterPercent = 20;
				this.updatePlayer();
		},
		attack: function() {
				damage = Math.round(Math.random()*100) % 10;
				if (damage > 0) {
						damage = playerAtt;
						if(counterChance < 7)
						{	counterChance++;	}
						counterPercent = counterChance*5;
						rightText.setText("Counter chance increased \nto " + counterPercent +"%\nPlayer did " + damage + " damage.\nPlayer Turn.");
						this.playerDamages();
				} else {
						rightText.setText("Player Missed!\nPlayer turn.");
				}
						if(currentMonHP < 1) {
								this.killsMonster();
						} else {
						this.monDamage();
						this.monAttack();
					}
				
				this.updatePlayer();
		},
		potion: function() {
				if(playerPots < 1) {
						rightText.setText("No potions left.\nChoose another action.");
				} else if(playerHP === playerMaxHP) {
						rightText.setText("Player at max HP.\nChoose another action.");
				} else {
						playerHP = playerMaxHP;
						playerPots--;
						rightText.setText("Player used potion.\nPlayer turn.");
						this.monDamage();
						this.monAttack();
				}
				this.updatePlayer();
		},
		run: function() { // lose 25% gold, then do backTown
				playerGold = Math.round(playerGold*0.75);
				this.backTown();
		},
		backTown: function() { // for the back to town button
				this.allVisible();
				
				// stop music
				this.game.sound.stopAll();
				
				back.visible = true;
				battleBut1.visible = true;
				battleBut2.visible = true;
				battleBut3.visible = true;
				if(mondie1)
						battleBut1.visible = false;
				if(mondie2)
						battleBut2.visible = false;
				shopBut.visible = true;
				topText.setText("Current Location: Town\nWhat to do now...");
				actionText.visible = true;
				townMusic.play();
				townimg.visible = true;
				
				playerHP = playerMaxHP;
				// updates playerText
				rightText.visible = true;
				rightText.setText("Max HP: " + playerMaxHP + "\nClick on a \nshop or battle button.");
				playerText.visible = true;
				this.updatePlayer();
		},
		battleVisuals: function() {
				// initialize visuals
				townimg.visible = false;
				battleBut1.visible = false;
				battleBut2.visible = false;
				battleBut3.visible = false;
				shopBut.visible = false;
				actionText.visible = false;
				
				attack.visible = true;
				potion.visible = true;
				run.visible = true;
				counter.visible = true;
				background.visible = true;
				// text
				topText.setText("Monster HP: " + currentMonHP);
				rightText.setText("Player turn.\nChoose an action.");
				counterChance = 4;
		},
		battle1: function() { // manage music
				townMusic.stop();
				battle1Music.play();
				mon1.visible = true;
				
				// variables
				battleNum = 1;
				currentMonHP = mon1HP;
				currentMonAtt = mon1Att;
				monGold = 800;
				
				this.battleVisuals();
		},
		battle2: function() {
				townMusic.stop();
				battle1Music.play();
				mon2.visible = true;
				
				// variables
				battleNum = 2;
				currentMonHP = mon2HP;
				currentMonAtt = mon2Att;
				monGold = 3000;
				mon2.animations.play('idle', 20, true, false);
				
				this.battleVisuals();
		},
		battle3: function() {
				townMusic.stop();
				battle2Music.play();
				mon3.visible = true;
				
				// variables
				battleNum = 3;
				currentMonHP = mon3HP;
				currentMonAtt = mon3Att;
				monGold = 15000;
				
				this.battleVisuals();
		}
}
