describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function () {
    it("creates a new Player object", function () {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function(){
  describe("initialize", function(){
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("creates a new instance of Space", function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

describe("markBy", function(){
  it("lets the player mark a space", function(){
    var testPlayer = Player.create("X");
    var testSpace = Space.create(1,2);
    testSpace.markBy(testPlayer)
    testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = Object.create(Board);
    testBoard.initialize(1, 2);
    testBoard.spaces.length.should.equal(9);
  });
});

describe("Game", function () {
  describe("create", function () {
    it("creates a new instance of Game", function () {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
     });
   });

  describe("isWin", function() {
    it("returns 'Win!' if the win condition is met", function() {
      var newGame = Game.create();
      newGame.board.spaces=["X","X","X",[2,1],"O",[2,3],"O",[3,2],[3,3]];
      newGame.isWin(newGame.board.spaces).should.equal("Win!");
    });
  });
});
