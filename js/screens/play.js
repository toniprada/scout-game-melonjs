/* the in game stuff*/
game.PlayScreen = me.ScreenObject.extend({
 
	onResetEvent: function() {
		// load a level
		me.levelDirector.loadLevel("area01");
 
		// add a default HUD to the game mngr
		me.game.addHUD(0, 430, 640, 60);
 
		// add a new HUD item
		me.game.HUD.addItem("score", new game.ScoreObject(620, 10));

 		me.game.HUD.addItem("life", new game.LifeObject(100, 10));

		// make sure everything is in the right order
		me.game.sort();
 
	},
 
	/* ---
 
	action to perform when game is finished (state change)
 
	--- */
	onDestroyEvent: function() {
		// remove the HUD
		me.game.disableHUD();
	}
 
});

/*----------------------

 A title screen

----------------------*/

game.TitleScreen = me.ScreenObject.extend({
 // constructor
 init: function() {
  this.parent(true);

  // title screen image
  this.title = null;

  this.font = null;
  this.scrollerfont = null;
  this.scrollertween = null;

  this.scroller = "A GAME ABOUT A BOY SCOUT AND THE DARK ";
  this.scrollerpos = 600;
 },
 
 // reset function
 onResetEvent: function() {
  if (this.title == null) {
   // init stuff if not yet done
   this.title = me.loader.getImage("title_screen");
   // font to display the menu items
   this.font = new me.BitmapFont("32x32_font", 32);

   // set the scroller
   this.scrollerfont = new me.BitmapFont("32x32_font", 32);

  }

  // reset to default value
  this.scrollerpos = 640;

  // a tween to animate the arrow
  this.scrollertween = new me.Tween(this).to({
   scrollerpos: -2200
  }, 10000).onComplete(this.scrollover.bind(this)).start();

  // enable the keyboard
  me.input.bindKey(me.input.KEY.ENTER, "enter", true);

  // play something
  //me.audio.play("cling");

 },

 // some callback for the tween objects
 scrollover: function() {
  // reset to default value
  this.scrollerpos = 640;
  this.scrollertween.to({
   scrollerpos: -2200
  }, 10000).onComplete(this.scrollover.bind(this)).start();
 },

 // update function
 update: function() {
  // enter pressed ?
  if (me.input.isKeyPressed('enter')) {
   me.state.change(me.state.PLAY);
  }
  return true;
 },

 // draw function
 draw: function(context) {
  context.drawImage(this.title, 0, 0);

  this.font.draw(context, "PRESS ENTER TO PLAY", 20, 240);
  this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
 },

 // destroy function
 onDestroyEvent: function() {
  me.input.unbindKey(me.input.KEY.ENTER);

  //just in case
  this.scrollertween.stop();
 }

});

game.GameOverScreen = me.ScreenObject.extend({
 // constructor
 init: function() {
  this.parent(true);

  // title screen image
  this.title = null;

  this.font = null;
 },

 // reset function
 onResetEvent: function() {
  if (this.title == null) {
   // init stuff if not yet done
   this.title = me.loader.getImage("title_screen");
   // font to display the menu items
   this.font = new me.BitmapFont("32x32_font", 32);

   // set the scroller
   this.scrollerfont = new me.BitmapFont("32x32_font", 32);

  }

  // reset to default value
  this.scrollerpos = 640;

  // a tween to animate the arrow
  this.scrollertween = new me.Tween(this).to({
   scrollerpos: -2200
  }, 10000).onComplete(this.scrollover.bind(this)).start();

  // enable the keyboard
  me.input.bindKey(me.input.KEY.ENTER, "enter", true);

  // play something
  //me.audio.play("cling");
  	  setTimeout(function () {
				me.state.change(me.state.MENU);
	  }, 2000)

 },

 // some callback for the tween objects
 scrollover: function() {
  // reset to default value
  this.scrollerpos = 640;
  this.scrollertween.to({
   scrollerpos: -2200
  }, 10000).onComplete(this.scrollover.bind(this)).start();
 },

 // update function
 update: function() {
  // enter pressed ?
  if (me.input.isKeyPressed('enter')) {
   me.state.change(me.state.PLAY);
  }
  return true;
 },

 // draw function
 draw: function(context) {
  context.drawImage(this.title, 0, 0);

  this.font.draw(context, "GAME OVER\n\nPOINTS: " + score , 200, 240);
  this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
 },

 // destroy function
 onDestroyEvent: function() {
  me.input.unbindKey(me.input.KEY.ENTER);

  //just in case
  this.scrollertween.stop();
 }

});