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
	{name: "duck", type:"image", src: "data/img/sprite/duck.png"},
	{name: "blood", type:"image", src: "data/img/sprite/blood.png"},
	{name: "title_screen", type:"image", src: "data/img/gui/menu.png"},
	{name: "cat", type:"image", src: "data/img/sprite/cat.png"},

	{name: "apple", type:"image", src: "data/img/collectible/apple.png"},
	{name: "axe", type:"image", src: "data/img/collectible/axe.png"},
	{name: "blanket", type:"image", src: "data/img/collectible/blanket.png"},
	{name: "canteen", type:"image", src: "data/img/collectible/canteen.png"},
	{name: "cherry", type:"image", src: "data/img/collectible/cherry.png"},
	{name: "knife", type:"image", src: "data/img/collectible/knife.png"},
	{name: "mushroom", type:"image", src: "data/img/collectible/mushroom.png"},
	{name: "parachute", type:"image", src: "data/img/collectible/parachute.png"},
	{name: "suncream", type:"image", src: "data/img/collectible/suncream.png"},
	{name: "wood", type:"image", src: "data/img/collectible/wood.png"},

	{name: "tent", type:"image", src: "data/img/collectible/tent.png"},

	// sounds
	{name: "duck", type: "audio", src: "data/sfx/", channel : 1},
		{name: "cat", type: "audio", src: "data/sfx/", channel : 1},
	{name: "child", type: "audio", src: "data/sfx/", channel : 1},
		{name: "laugh", type: "audio", src: "data/sfx/", channel : 1},
	{name: "fearofthedark", type: "audio", src: "data/sfx/", channel : 2},
	{name: "blood", type: "audio", src: "data/sfx/", channel : 3},

	// the parallax background
	{name: "area01_bkg0",         type:"image", src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image", src: "data/img/area01_bkg1.png"},

	{name: "cave",         type:"image", src: "data/sprites/cave.png"},
	{name: "grass_9",         type:"image", src: "data/sprites/grass_9.png"},
	{name: "blekit",         type:"image", src: "data/sprites/blekit.png"},
	{name: "drabinaduza",         type:"image", src: "data/sprites/moje/drabinaduza.png"},
	{name: "drzewka",         type:"image", src: "data/sprites/moje/drzewka.png"},
	{name: "pubdlcnt",         type:"image", src: "data/sprites/pubdlcnt.png"},
	{name: "drzewkabeztla",         type:"image", src: "data/sprites/moje/drzewkabeztla.png"},
	{name: "Clouds_01_256x128_Set_03_01",         type:"image", src: "data/sprites/Clouds_01/Clouds_01_256x128_Set_03_01.png"},
	{name: "Clouds_01_192x128_Set_01_07",         type:"image", src: "data/sprites/Clouds_01/Clouds_01_192x128_Set_01_07.png"},
	{name: "niebieska",         type:"image", src: "data/sprites/Clouds_01/niebieska.png"},
	{name: "rozowa",         type:"image", src: "data/sprites/Clouds_01/rozowa.png"},
	{name: "przejscieKoloru",         type:"image", src: "data/sprites/moje/przejscieKoloru.png"},
	{name: "przejscieKoloru2",         type:"image", src: "data/sprites/moje/przejscieKoloru2.png"},
	{name: "krzaki na drzewo",         type:"image", src: "data/sprites/moje/krzaki na drzewo.png"},
	{name: "mushrooms",         type:"image", src: "data/sprites/mushrooms.png"},
	{name: "przejscieKoloru2",         type:"image", src: "data/sprites/moje/przejscieKoloru2.png"},

	// game font
	{name: "32x32_font", type: "image", src: "data/img/font/32x32_font.png"},
	/* 
	 * Maps. 
	 */
	{name: "area01", type: "tmx", src: "data/map/game2.tmx"}
	//{name: "area01", type: "tmx", src: "data/map/area01.tmx"}


];
