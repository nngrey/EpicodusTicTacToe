var Game = {

  create: function() {
    var game = Object.create(Game);
    game.initialize();
    return game;
  },
  initialize: function() {
    this.board = Board.create();
    this.player = Player.create("O");
    this.player = Player.create("X");
    this.currentPlayer = "Z";
    console.log(this.currentPlayer);
    this.turnCounter = 3;
    this.turn();

 },
  turn: function() {
 //   var turnCounter = 3;
//    this.currentPlayer = Player.players[1];
      this.turnCounter = this.turnCounter + 1;
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = Player.players[0];
      console.log(this.currentPlayer);

    } else {
      this.currentPlayer = Player.players[1];
    //  this.turnCounter += this.turnCounter;
      console.log(this.currentPlayer);
    }
  }
}

var Player = {

  players: [],

  create: function(symbol) {
  var player = Object.create(Player);
  player.initialize(symbol);
  return player;
  },

  initialize: function(symbol) {
    this.symbol = symbol;
 //   console.log(this.symbol)
    this.players.push(this.symbol);
 //   console.log(Player.players)
  }
}

var Space = {
  create: function() {
    return Object.create(Space);
  },
  
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  },

  markBy: function(Player) {
    this.markedBy = Player;
    console.log(Space);
  }
}
 var Board = {
  
  create: function() {
  var board = Object.create(Board);
  board.initialize();
  return board;
  },

  initialize: function() {
    this.spaces = []; 
      for (var j=1; j<=3; j++) {
        for (var k=1; k<=3; k++) {
          var newSpace = Space.create();
          newSpace.initialize(j,k); 
          this.spaces.push(newSpace);         
        }
      }    
    }
 }

$(document).ready(function(){
  $("#start-game").click(function() {
    var newGame = Game.create();
//    console.log(newGame);

 $("#pos1").click(function(){
      newGame.turn();
    $("#pos1").text(newGame.currentPlayer);
 });
 $("#pos2").click(function(){
    newGame.turn();
    $("#pos2").text(newGame.currentPlayer);
 });
 $("#pos3").click(function(){
    newGame.turn();
    $("#pos3").text(newGame.currentPlayer);
 });
 $("#pos4").click(function(){
    newGame.turn();
    $("#pos4").text(newGame.currentPlayer);
 });
 $("#pos5").click(function(){    
    newGame.turn();
    $("#pos5").text(newGame.currentPlayer);
 });
 $("#pos6").click(function(){
    newGame.turn();
    $("#pos6").text(newGame.currentPlayer);
 });
 $("#pos7").click(function(){
    newGame.turn();
    $("#pos7").text(newGame.currentPlayer);
 });
 $("#pos8").click(function(){
    newGame.turn();
    $("#pos8").text(newGame.currentPlayer);
 });
 $("#pos9").click(function(){
    newGame.turn();
    $("#pos9").text(newGame.currentPlayer);
 });
});

});


// var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
// winningCombinations.forEach(function(combination) {
//   if (spaces[combination[0]].markedBy === spaces[combination[1]].markedBy && spaces[combination[1]].markedBy === spaces[combination[2]].markedBy){
//     alert("Win!");
//     }
//   });
// };


// var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
// winningCombinations.forEach(function(combination) {
//   if (spaces[0] === combination[0] && spaces[1] === combination[1] && spaces[2] === combination[2]){
//     alert("Win!");
//   } else {
// alert("fail");
// }
// });

// var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
// winningCombinations.forEach(combination) {
//   if (spaces[combination[0]] === spaces[combination[1]] && spaces[combination[1]] === spaces[combination[2]]){
//     alert("Win!")
//   }
// }

// var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
// winningCombinations.forEach(function(combination) {
//   if (spaces[combination[0]] === spaces[combination[1]] && spaces[combination[1]] === spaces[combination[2]]){
//     alert("Win!");
//   }
// });





// function 

