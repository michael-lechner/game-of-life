/*Write some code that evolves generations through the "game of
life".
The input will be a game board of cells, either alive (1) or dead
(0).
The code should take this board and create a new board for the
next generation based on the following rules:
1) Any live cell with fewer than two live neighbours dies (underpopulation)
2) Any live cell with two or three live neighbours lives on to
the next generation (survival)
3) Any live cell with more than three live neighbours dies
(overcrowding)
4) Any dead cell with exactly three live neighbours becomes a
live cell (reproduction)
As an example, this game board as input:
0 1 0 0 0
1 0 0 1 1
1 1 0 0 1
0 1 0 0 0
1 0 0 0 1
Will have a subsequent generation of:
0 0 0 0 0
1 0 1 1 1
1 1 1 1 1
0 1 0 0 0
0 0 0 0 0*/
var GameBoard = function (height, width) {
    // this.board = this.buildBoard(height, width);
    this.board = this.getTestBoard();
    this.width = width;
    this.height = height;
}

/* generates a random starting board for gameBoard
 * @params height, width refer to board dimensions
*/
GameBoard.prototype.buildBoard = function (height, width){
    var a = [];
    for (var i = 0; i < height; i++){
        a.push([]);
        for(var j = 0; j < width; j++){
            a[i][j] = Math.floor(Math.random()*2);
        }
    }
    return a;
}

GameBoard.prototype.checkCell = function (x, y){
    var liveCount = 0;

    for(var i = -1; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            if((x + j) >= 0 && (x + j) < (this.width) && (y + i) >= 0 && (y + i) < (this.width)){
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

GameBoard.prototype.evolveBoard = function () {
    var newBoard = [];
    
    for(var i = 0; i < this.board.length; i++){
        newBoard.push([]);
        for(var j = 0; j < this.board[i].length; j++){
            newBoard[i][j] = this.checkCell(j, i);
        }
    }

    this.board = newBoard;
    console.log('\n---- evolved -----\n');
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



var rallyBoard = new GameBoard(5, 5);

console.log('\n---- initial board -----\n');
rallyBoard.toString();

rallyBoard.evolveBoard();
