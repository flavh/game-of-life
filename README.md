# game-of-life
A JavaScript implementation of the Conway's game of life.

## Basic rules
In John Conway's game of life there are only 2 rules:
* If a cell is alive, it must have exactly 2 or 3 living neighbours to live into the next generation.
* If a cell is dead, it must have exactly 3 living neighbours to survive to the next generation.

## Features
### Settings
You can choose the number of rows and columns you want, then start and manually click on the cases where you want a live cell.
Otherwise, you can choose a pattern, which will impose the number of rows and columns and select pre-filled cells, which you can then modify.

### Simulation
You can pause/resume the simulation at any time.
While the simulation is running you can still place new live cells.
You can also move the slider to select the speed at which the generations are updated.

#### Grid borders
The Conway's game of life rules are designed for an infinite grid.

In this implementation, you can choose whether you want the borders to be delimited or reflected.
For example, the upper neighbour of a cell in the first row is the following :
* In the delimited mode, it doesn't exist.
* In the reflected mode, it is the cell in the same column, but in the last row of the grid.
