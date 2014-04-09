var ETIME = 750;

var GameBoard = function (test, height, width) {
    this.width = width || 5;
    this.height = height || 5;
    this.evolution = 0;

    if(test){
        this.width = 5;
        this.height = 5;
        this.board = this.getTestBoard();        
    }else{
        this.board = this.buildBoard(height, width);        
    }
}

/* generates a random starting board for gameBoard
 * @params height, width refer to board dimensions
*/
GameBoard.prototype.buildBoard = function (height, width){
    var a = [];
    for (var i = 0; i < this.height; i++){
        a.push([]);
        for(var j = 0; j < this.width; j++){
            a[i][j] = Math.floor(Math.random()*2);
        }
    }
    return a;
}

/* checks all neighbors of cell
 * @params (x, y) within the bounds
 * of the board
*/ 
GameBoard.prototype.checkCell = function (x, y){
    var liveCount = 0;

    for(var i = -1; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            
            if((x + j) >= 0 && (x + j) < (this.width) && (y + i) >= 0 && (y + i) < (this.height)){
                if(!((x + j) === x && (y + i) === y)){
                    if(this.board[y + i][x + j]){
                        liveCount++;
                    }
                }
            }

        }
    }

    if(this.board[y][x]){
        // alive
        if(liveCount < 2){
            return 0;
        }else if(liveCount >= 2 && liveCount <= 3){
            return 1;
        }else{
            return 0;
        }
    }else{
        // dead
        if(liveCount === 3){
            return 1;
        }else{
            return 0;
        }
    }
    
}

/* executes one evolution of the current 
 * GameBoard board and replaces existing 
 * board with evolved board
*/
GameBoard.prototype.evolveBoard = function () {
    var newBoard = [];
    this.evolution++;

    for(var i = 0; i < this.board.length; i++){
        newBoard.push([]);
        for(var j = 0; j < this.board[i].length; j++){
            newBoard[i][j] = this.checkCell(j, i);
        }
    }

    this.board = newBoard;
    console.log('\n---- evolution ' + this.evolution + ' -----\n');
    this.toString();
    
}

GameBoard.prototype.toString = function () {
    for(var i = 0; i < this.board.length; i++){
        console.log(this.board[i].join(' '));
    }
}

GameBoard.prototype.getTestBoard = function () {
    return [
        [0, 1, 0, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 1]
    ]
}

/************************************************************************
* Hello! and thanks for taking a look at what I've done!
*
* when instantiating a new GameBoard a single argument of true will 
* evolve the example board that was provided with the excercise 
*
* additionally if you instantiate GameBoard with an argument of false
* it will generate and evolve a random board with a default size of
* 5 x 5, board size can be specified by providing the additional
* arguments to the GameBoard constructor ie: GameBoard(false, 10, 10)
* 
* I hope you enjoy and I look forward to hearing from you!
************************************************************************/

var rallyBoard = new GameBoard(true);

console.log('\n---- initial board -----\n');
rallyBoard.toString();

setInterval(function () { rallyBoard.evolveBoard() }, ETIME);


