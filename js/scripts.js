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
    //console.log(this.currentPlayer);
    this.turnCounter = 3;
    this.turn();

 },
  turn: function() {
      this.turnCounter = this.turnCounter + 1;
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = Player.players[0];
    } else {
      this.currentPlayer = Player.players[1];
    }

    //console.log(this.spaces);
  },
  isWin: function(markedSpacesArray) {
    console.log(markedSpacesArray);
  var winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; 
  winningCombinations.forEach(function(combination) {
    if (markedSpacesArray[combination[0]].markedBy === markedSpacesArray[combination[1]].markedBy && markedSpacesArray[combination[1]].markedBy === markedSpacesArray[combination[2]].markedBy) {
      //console.log(markedSpacesArray[combination[0]].markedBy);
      //console.log(markedSpacesArray[combination[0]],markedSpacesArray[combination[1]],markedSpacesArray[combination[2]]);
      alert("Win!");
      return "Win!";
      }
    });
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
  
  initialize: function(xCoordinate, yCoordinate, markedByCount) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.markedBy=markedByCount;

  },

  markBy: function(Player) {
    this.markedBy = Player;
    //console.log(Space);
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
    var count = 1; 
      for (var j=1; j<=3; j++) {
        for (var k=1; k<=3; k++) {
          var newSpace = Space.create();
          newSpace.initialize(j,k,count);
          count = count + 1; 
          this.spaces.push(newSpace);         
        }
      } 
 //         console.log(this.spaces);   
    }
 }

$(document).ready(function(){
  $("#start-game").click(function() {
    var newGame = Game.create();
//    console.log(newGame);

 $("#pos1").click(function(){
    newGame.turn();
    $("#pos1").text(newGame.currentPlayer);
    newGame.board.spaces[0].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
    

 });
 $("#pos2").click(function(){
    newGame.turn();
    $("#pos2").text(newGame.currentPlayer);
    newGame.board.spaces[1].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);


 });
 $("#pos3").click(function(){
    newGame.turn();
    $("#pos3").text(newGame.currentPlayer);
    newGame.board.spaces[2].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);


 });
 $("#pos4").click(function(){
    newGame.turn();
    $("#pos4").text(newGame.currentPlayer);
    newGame.board.spaces[3].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);


 });
 $("#pos5").click(function(){    
    newGame.turn();
    $("#pos5").text(newGame.currentPlayer);
    newGame.board.spaces[4].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
 });

 $("#pos6").click(function(){
    newGame.turn();
    $("#pos6").text(newGame.currentPlayer);
    newGame.board.spaces[5].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
 });

 $("#pos7").click(function(){
    newGame.turn();
    $("#pos7").text(newGame.currentPlayer);
    newGame.board.spaces[6].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
 });

 $("#pos8").click(function(){
    newGame.turn();
    $("#pos8").text(newGame.currentPlayer);
    newGame.board.spaces[7].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
 });

 $("#pos9").click(function(){
    newGame.turn();
    $("#pos9").text(newGame.currentPlayer);
    newGame.board.spaces[8].markBy(newGame.currentPlayer);
    newGame.isWin(newGame.board.spaces);
 });
});
});





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

