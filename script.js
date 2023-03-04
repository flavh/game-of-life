const resize = () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	cellSize = Math.floor(Math.min(width / cols, height / rows));
	canvas.width = cellSize * cols;
	canvas.height = cellSize * rows;
};

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const homePage = document.getElementById("homePage");
const startForm = document.getElementById("startForm");
const mainUI = document.getElementById("mainUI");
let cellSize = 0;
let rows = 10;
let cols = 10;
let cells = [];
window.addEventListener("resize", resize);
startForm.addEventListener("submit", (e) => {
	e.preventDefault();
	start();
});

const start = () => {
	homePage.classList.add("hidden");
	mainUI.classList.remove("hidden");
	rows = document.getElementById("rowsInput").value;
	cols = document.getElementById("colsInput").value;
	resize();
	cells = new Array(rows);
	for (let i = 0; i < rows; i++) {
		cells[i] = new Array(cols);
		for (let j = 0; j < cols; j++) {
			cells[i][j] = false;
		}
	}
	canvas.onclick = (e) => {
		const x = e.offsetX;
		const y = e.offsetY;
		const row = Math.floor(y / cellSize);
		const column = Math.floor(x / cellSize);
		cells[row][column] = !cells[row][column];
		render();
	};
	render();
};

/********** RENDERING **********/

const drawGrid = () => {
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
		}
	}
};

const drawCell = (row, column) => {
	ctx.fillStyle = "black";
	ctx.fillRect(column * cellSize, row * cellSize, cellSize, cellSize);
};

const drawCells = () => {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (cells[i][j]) {
				drawCell(i, j);
			}
		}
	}
};

const render = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawGrid();
	drawCells();
};

/********** Game Logic **********/

const getNeighbors = (row, column) => {
	const neighbors = [];
	try {
		const cell = cells[row - 1][column - 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row - 1][column];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row - 1][column + 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row][column - 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row][column + 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row + 1][column - 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row + 1][column];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}
	try {
		const cell = cells[row + 1][column + 1];
		if (cell !== undefined) neighbors.push(cell);
	} catch (error) {
		/* unexisting neighbor */
	}

	return neighbors;
};

const countAliveNeighbors = (row, column) => {
	const neighbors = getNeighbors(row, column);
	return neighbors.filter((cell) => cell).length;
};
