var SideScroller = SideScroller || {};

SideScroller.Preload = function() {};
SideScroller.Preload.prototype = {
  preload: function() {
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gametiles', 'assets/images/tiles_spritesheet.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('playerDuck', 'assets/images/player_duck.png');
    this.load.image('playerDead', 'assets/images/player_dead.png');
    this.load.image('goldCoin', 'assets/images/goldCoin.png');
    this.load.audio('coin', 'assets/audio/coin.wav');
  },
  create: function() {
    this.state.start('Game');
  }
};
