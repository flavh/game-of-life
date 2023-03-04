# game-of-life
A JavaScript implementation of the Conway's game of life.

## Basic rules
In the John Conway's game of life, there is only 2 rules :
* If a cell is alive, it must have exactly 2 or 3 living neighbors to stay alive in the next generation.
* If a cell is dead, it must have exactly 3 living neighbors to live to the next generation.

## Features
### Settings
You can choose the number of rows and columns you want, then start and manually click on the cases where you want a live cell.
Otherwise, you can choose a pattern, which will impose the number of rows and columns and select pre-filled cells, which you can then modify.

### Simulation
You can pause/resume the simulation at any time.
While running the simulation, you can still place new live cell.
You can also move the slider to select the speed of the generations updating.

## Note
The Conway's game of life rule's are designed for an infinite grid.
This implementation doesn't support the simulation of the outside of the grid, the neighbors of the cells on the sides of the grid are considered dead, which can lead to strange behavior.
