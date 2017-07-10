var SideScroller = SideScroller || {};

SideScroller.game = new Phaser.game(746, 420, Phaser.Auto, '');

SideScroller.game.state.add('Boot', SideScroller.Boot);
SideScroller.game.state.add('Preload', SideScroller.Preload);
SideScroller.game.state.add('Game', SideScroller.Game);
