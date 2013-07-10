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
	    this.setVelocity(3, 15);
	 
	    // adjust the bounding box
	    this.updateColRect(8, 48, -1, 0);
	 
	    // set the display to follow our position on both axis
	    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
            }
 
        }
 
        // check & update player movement
        this.updateMovement();
 
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
<<<<<<< HEAD
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
 
});// TODO
=======
    update: function() {
        if (game.PlayerEntity) {
            var mainPlayerPosition = me.game.getEntityByName("mainPlayer")[0].pos;
            this.pos.x = mainPlayerPosition.x;
            this.pos.y = mainPlayerPosition.y;
        }
        this.updateMovement();
        return true;
    }
 
});// TODO
>>>>>>> e8c2cb7799a0c9e4f094450fc1010f66a39af00a
