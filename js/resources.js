game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */

    /**
     * Graphics.
     */
    // our level tileset
    {name: "area01_level_tiles", type:"image", src: "data/img/map/area01_level_tiles.png"},
    // the main player spritesheet
    {name: "boyscout_day", type:"image", src: "data/img/sprite/boyscout_day.png"},
    {name: "boyscout_night", type:"image", src: "data/img/sprite/boyscout_night.png"},
    {name: "light_mask", type:"image", src: "data/img/sprite/light_mask.png"},

    // the parallax background
    {name: "area01_bkg0",         type:"image", src: "data/img/area01_bkg0.png"},
    {name: "area01_bkg1",         type:"image", src: "data/img/area01_bkg1.png"},

    /* 
     * Maps. 
     */
    {name: "area01", type: "tmx", src: "data/map/area01.tmx"}

];
