var Game = {
  create: function() {
    var game = Object.create(Game);
    game.initialize();
    return game;
  },
  initialize: function() {
    this.board = Board.create();
    this.player = Player.create("X");
    this.player = Player.create("Y");
 }
  turn: function() {
    var turnCounter = 0;
    if (turnCounter % 2 === 0){
      pl
    }
  }
}

var Player = {
  this.players = [];
  create: function() 
    return Object.create(Player);

  },
  initialize: function(symbol) {
    this.symbol = symbol;
    players.push(this.symbol);
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
  
  create: function(){
  var board = Object.create(Board);
  board.initialize();
  return board;
  }

  initialize: function(){
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

 



// var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
// winningCombinations.forEach(function(combination) {
//   if (spaces[combination[0]].markedBy === spaces[combination[1]].markedBy && spaces[combination[1]].markedBy === spaces[combination[2]].markedBy){
//     alert("Win!");
//     }
//   });
// };

$(document).ready(function(){
  $("#start-game").click(function() {
    Game.create();
 });
});
 $("#pos1").click(function(){
    $("#pos1").text(Player.symbol);
 });
 $("#pos2").click(function(){
    $("#pos2").text(Player.symbol);
 });
 $("#pos3").click(function(){
    $("#pos3").text(Player.symbol);
 });
 $("#pos4").click(function(){
    $("#pos4").text(Player.symbol);
 });
 $("#pos5").click(function(){
    $("#pos5").text(Player.symbol);
 });
 $("#pos6").click(function(){
    $("#pos6").text(Player.symbol);
 });
 $("#pos7").click(function(){
    $("#pos7").text(Player.symbol);
 });
 $("#pos8").click(function(){
    $("#pos8").text(Player.symbol);
 });
 $("#pos9").click(function(){
    $("#pos9").text(Player.symbol);
 });
});

var array = ["#pos1"];


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

