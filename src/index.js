var Vector          = require('./vector');
var Grid            = require('./grid');
var Word            = require('./world');
var BouncingCritter = require('./bouncing_critter');
var Wall            = require('./wall');
var World           = require('./world');
var LifelikeWorld  = require('./life_like_world');
var WallFollower    = require('./wall_follower');
var Plant           = require('./plant');
var PlantEater      = require('./plant_eater');

// animator
require('./animator');

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});

var valley = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": PlantEater,
   "*": Plant}
);

animateWorld(valley);

console.log(world.toString());



