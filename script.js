const resize = () => {
	const width = window.innerWidth;
	const height = window.innerHeight * 0.8;
	cellSize = Math.min(width / cols, height / rows);
	canvas.width = cellSize * cols;
	canvas.height = cellSize * rows;
};

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const homePage = document.getElementById("homePage");
const startForm = document.getElementById("startForm");
const rowsInput = document.getElementById("rowsInput");
const colsInput = document.getElementById("colsInput");
const mainUI = document.getElementById("mainUI");
const generationNumberUI = document.getElementById("generationNumber");
const generationRateInput = document.getElementById("generationRateRange");
const beginSimulationButton = document.getElementById("beginSimulation");
const patternSelector = document.getElementById("patternSelector");
let play = false;
let cellSize = 0;
let rows = 10;
let cols = 20;
let cells = [];
let generation = 0;
let genPerSec = 1;
let patternData = [];
window.addEventListener("resize", resize);
startForm.addEventListener("submit", (e) => {
	e.preventDefault();
	start();
});
generationRateInput.oninput = (e) => {
	genPerSec = e.target.value;
};

const updatePatternData = () => {
	const pattern = patternSelector.value;
	if (pattern === "none") {
		rowsInput.disabled = false;
		colsInput.disabled = false;
		return;
	} else {
		rowsInput.disabled = true;
		rowsInput.value = patterns[pattern].rows;
		colsInput.disabled = true;
		colsInput.value = patterns[pattern].columns;
	}
	patternData = patterns[pattern];
};
patternSelector.onchange = updatePatternData;
updatePatternData();

const start = () => {
	homePage.classList.add("hidden");
	mainUI.classList.remove("hidden");
	if (patternData !== undefined && patternData.rows !== undefined && patternData.columns !== undefined) {
		rows = patternData.rows;
		cols = patternData.columns;
	} else {
		rows = rowsInput.value;
		cols = colsInput.value;
	}
	resize();
	cells = new Array(rows);
	for (let i = 0; i < rows; i++) {
		cells[i] = new Array(cols);
		for (let j = 0; j < cols; j++) {
			cells[i][j] = false;
		}
	}
	if (patternData && patternData.cells && patternData.cells.length > 0) {
		patternData.cells.forEach((cell) => {
			cells[cell.row][cell.col] = true;
		});
	}
	canvas.onclick = (e) => {
		const x = e.offsetX;
		const y = e.offsetY;
		const row = Math.floor(y / cellSize);
		const column = Math.floor(x / cellSize);
		cells[row][column] = !cells[row][column];
		render();
	};
	beginSimulationButton.onclick = () => {
		play = !play;
		updateBeginPauseButton();
		if (play) {
			setTimeout(() => {
				loop();
			}, 1000 / genPerSec);
		}
	};
	render();
};

/********** GRID RENDERING **********/

const drawGrid = () => {
	ctx.strokeStyle = "black";
	ctx.lineWidth = cellSize / 50;
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

/********** LOGIC **********/

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

const update = () => {
	const newCells = new Array(rows);
	for (let i = 0; i < rows; i++) {
		newCells[i] = new Array(cols);
		for (let j = 0; j < cols; j++) {
			const aliveNeighborsNumber = countAliveNeighbors(i, j);
			if (cells[i][j]) {
				newCells[i][j] =
					aliveNeighborsNumber === 2 || aliveNeighborsNumber === 3;
			} else {
				newCells[i][j] = aliveNeighborsNumber === 3;
			}
		}
	}
	cells = newCells;
};

/********** UI RENDERING **********/

const updateGenerationNumber = () => {
	generationNumberUI.innerText = generation;
};

const updateBeginPauseButton = () => {
	if (play) {
		beginSimulationButton.innerText = "Pause simulation";
	} else {
		beginSimulationButton.innerText = "Resume simulation";
	}
};

/********** LOOP **********/

const loop = () => {
	generation++;
	updateGenerationNumber();
	update();
	render();
	if (play) {
		setTimeout(() => {
			requestAnimationFrame(loop);
		}, 1000 / genPerSec);
	}
};
