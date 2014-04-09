Game of Life (Excercise 4)
============

<p>Write some code that evolves generations through the "game of life".</p>
<p>The input will be a game board of cells, either alive (1) or dead (0).</p>

<p>The code should take this board and create a new board for the next generation based on the following rules:</p>

1. Any live cell with fewer than two live neighbours dies (underpopulation)
2. Any live cell with two or three live neighbours lives on to
the next generation (survival)
3. Any live cell with more than three live neighbours dies
(overcrowding)
4. Any dead cell with exactly three live neighbours becomes a
live cell (reproduction)

<p>As an example, this game board as input:</p>
0 1 0 0 0<br>
1 0 0 1 1<br>
1 1 0 0 1<br>
0 1 0 0 0<br>
1 0 0 0 1<br>

<p>Will have a subsequent generation of:</p>
0 0 0 0 0<br>
1 0 1 1 1<br>
1 1 1 1 1<br>
0 1 0 0 0<br>
0 0 0 0 0<br>
