var SideScroller = SideScroller || {};

SideScroller.Game = function () {};
SideScroller.Game.prototype = {
  preload: function() {
    this.game.time.advancedTiming = true;
  },
  create: function() {
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');
    this.backgroundLayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');

    this.backgroundLayer.resizeWorld();

    this.map.setCollisionBetween(1, 10000, true, 'blockedlayer');

    this.player = this.game.add.sprite(100, 300, 'player');
  },
  update: function() {

  },
  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
  }
};
