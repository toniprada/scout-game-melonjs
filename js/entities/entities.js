var BLOOD_SPLASH_TIME_MS = 3000;
var lastBloodSplashTimestamp = undefined;
var showingBlood = false;

/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({

	/* -----

	constructor

	------ */

	init: function(x, y, settings) {
		// call the constructor
		this.parent(x, y, settings);
	
		// set the walking & jumping speed
		this.setVelocity(6, 19);
	
		// adjust the bounding box
		this.updateColRect(8, 30, -1, 0);
	
		// set the display to follow our position on both axis
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		this.collidable = true;
		me.audio.play("fearofthedark", true, null, 1);

//me.entityPool.add("blood", game.BloodEntity, true);

	},

/* -----
update the player pos
------ */
update: function() {


	if (me.input.isKeyPressed('left'))
	{
		// flip the sprite on horizontal axis
		this.flipX(true);
		// update the entity velocity
		this.vel.x -= this.accel.x * me.timer.tick;
	}
	else if (me.input.isKeyPressed('right'))
	{
		// unflip the sprite
		this.flipX(false);
		// update the entity velocity
		this.vel.x += this.accel.x * me.timer.tick;
	}
	else
	{
		this.vel.x = 0;
	}
	if (me.input.isKeyPressed('jump'))
	{ 
		if (!this.jumping && !this.falling) 
		{
			// set current vel to the maximum defined value
			// gravity will then do the rest
			this.vel.y = -this.maxVel.y * me.timer.tick;
			// set the jumping flag
			this.jumping = true;
		}
	}


	// check & update player movement
	this.updateMovement();

	// check for collision
	var res = me.game.collide(this);

	if (res) {
		// if we collide with an enemy
		if (res.obj.type == me.game.ENEMY_OBJECT) {
			console.log("collision with the enemy")

			// check if we jumped on it
			if ((res.y > 0) && ! this.jumping) {
				// bounce (force jump)
				this.falling = false;
				this.vel.y = -this.maxVel.y * me.timer.tick;
				// set the jumping flag
				this.jumping = true;

			} else {
				// let's flicker in case we touched an enemy
				this.renderable.flicker(45);
				me.audio.play("child", false, null, 0.1);

				//lastBloodSplashTimestamp = new Date().getTime();
				//showingBlood = true;
				//var blood = me.entityPool.newInstanceOf("blood");
				//if (blood != undefined) {
				//	me.game.remove(blood); 
				//}
					
			}	
				//me.entityPool.add("blood", game.BloodEntity);
				//lastBloodSplashTimestamp = new Date().getTime();
				//showingBlood = true;
				//me.state.change(me.state.PLAY);

		}
	}

	//if (showingBlood) {
	//	var now = new Date().getTime();
	//	if (now - lastBloodSplashTimestamp > BLOOD_SPLASH_TIME_MS) {
	//		console.log("Stop showing the blood")
	//		me.entityPool.freeInstance(game.BloodEntity);
	//		showingBlood = false;
	//	}
	//}

	// update animation if necessary
	if (this.vel.x!=0 || this.vel.y!=0) {
		// update object animation
		this.parent();
		return true;
	}
	// else inform the engine we did not perform
	// any update (e.g. position, animation)
	return false; 

}


});

game.LightEntity = me.ObjectEntity.extend({

	/* -----

	constructor

	------ */

	init: function(x, y, settings) {
		// call the constructor
	this.parent(x, y, settings);

		// set the walking & jumping speed
		this.setVelocity(3, 15);

		// adjust the bounding box
		this.updateColRect(-1,0, -1, 0);

		// set the display to follow our position on both axis
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
	},

	/* -----

	update the player pos

	------ */
	update: function() {

		if (me.input.isKeyPressed('left')) {
			this.flipX(true);
		} else if (me.input.isKeyPressed('right')) {
			this.flipX(false);
		}
		if (game.PlayerEntity) {
			var mainPlayerPosition = me.game.getEntityByName("mainPlayer")[0].pos;
			this.pos.x = mainPlayerPosition.x + 30;
			this.pos.y = mainPlayerPosition.y - 10;
			this.gravity = 0;
		}
		this.updateMovement();
		return true;
	 }

});

game.BloodEntity = me.ObjectEntity.extend({

	/* -----

	constructor

	------ */

	init: function(x, y, settings) {
		// call the constructor
	this.parent(x, y, settings);
	
		// set the walking & jumping speed
		this.setVelocity(3, 15);
	
		// adjust the bounding box
		this.updateColRect(-1,0, -1, 0);
			this.collidable = false;

		// set the display to follow our position on both axis
	},

	/* -----

	update the player pos

	------ */
	update: function() {
		if (game.PlayerEntity) {
			var mainPlayerPosition = me.game.getEntityByName("mainPlayer")[0].pos;
			this.pos.x = mainPlayerPosition.x + 30;
			this.pos.y = mainPlayerPosition.y - 70;
			this.gravity = 0;
		}
		this.updateMovement();
		return true;
	}

});


/* --------------------------
an enemy Entity
------------------------ */
game.EnemyEntity = me.ObjectEntity.extend({
	init: function(x, y, settings) {
		// define this here instead of tiled
	   // settings.image = "duck";
	   // settings.spritewidth = 64;

		// call the parent constructor
		this.parent(x, y, settings);

		this.startX = x;
		this.endX = x + settings.width - settings.spritewidth;
		// size of sprite

		// make him start from the right
		this.pos.x = x + settings.width - settings.spritewidth;
		this.walkLeft = true;

		// walking & jumping speed
		this.setVelocity(2, 2);

		// make it collidable
		this.collidable = true;
		// make it a enemy object
		this.type = me.game.ENEMY_OBJECT;

	},

	// call by the engine when colliding with another object
	// obj parameter corresponds to the other object (typically the player) touching this one
	onCollision: function(res, obj) {

		// res.y >0 means touched by something on the bottom
		// which mean at top position for this one
		if (this.alive && (res.y > 0) && obj.falling) {
			this.renderable.flicker(45);
						me.audio.play("duck",  false, null, 0.3);
								console.log(me.game.getEntityByName('BloodEntity')[0].show())

		}
	},

	// manage the enemy movement
	update: function() {
		// do nothing if not in viewport
		if (!this.inViewport)
			return false;

		if (this.alive) {
			if (this.walkLeft && this.pos.x <= this.startX) {
				this.walkLeft = false;
			} else if (!this.walkLeft && this.pos.x >= this.endX) {
				this.walkLeft = true;
			}
			// make it walk
			this.flipX(this.walkLeft);
			this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;

		} else {
			this.vel.x = 0;
		}

		// check and update movement
		this.updateMovement();

		// update animation if necessary
		if (this.vel.x!=0 || this.vel.y!=0) {
			// update object animation
			this.parent();
			return true;
		}
		return false;
	}
});

game.BloodEntity = me.ObjectEntity.extend({
	init: function(x, y, settings) {

		settings.spritewidth = 300
		settings.spriteheight = 300
		settings.gravity = 0

	  this.parent(x, y, settings);
		this.renderable.alpha = 0
	},
	// manage the enemy movement
	update: function() {
		// do nothing if not in viewport
		if (!this.inViewport)
			return false;

		this.parent();
		// return true;
	},

	show: function () {
		var playerPosition = me.game.getEntityByName("mainPlayer")[0].pos
		, level = me.game.currentLevel
		, that = this

	  that.renderable.alpha = 1
		// level.width
		// level.height

		// Set position here
		this.pos.x = playerPosition.x - this.width / 2 
		this.pos.y = playerPosition.y - this.height / 2 - 30
	  this.updateMovement();

	  setTimeout(function () {
		that.renderable.alpha = 0
		that.renderable.update()
	  }, 300)
	}
});
