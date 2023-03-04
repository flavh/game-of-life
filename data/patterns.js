const patterns = {
	/* Stables */
	block: {
		rows: 4,
		columns: 4,
		cells: [
			{ row: 1, col: 1 },
			{ row: 1, col: 2 },
			{ row: 2, col: 1 },
			{ row: 2, col: 2 },
		],
	},
	beehive: {
		rows: 5,
		columns: 6,
		cells: [
			{ row: 1, col: 2 },
			{ row: 1, col: 3 },
			{ row: 2, col: 1 },
			{ row: 2, col: 4 },
			{ row: 3, col: 2 },
			{ row: 3, col: 3 },
		],
	},
	loaf: {
		rows: 6,
		columns: 6,
		cells: [
			{ row: 1, col: 2 },
			{ row: 1, col: 3 },
			{ row: 2, col: 1 },
			{ row: 2, col: 4 },
			{ row: 3, col: 2 },
			{ row: 3, col: 4 },
			{ row: 4, col: 3 },
		],
	},
	boat: {
		rows: 5,
		columns: 5,
		cells: [
			{ row: 1, col: 1 },
			{ row: 1, col: 2 },
			{ row: 2, col: 1 },
			{ row: 2, col: 3 },
			{ row: 3, col: 2 },
		],
	},
	tub: {
		rows: 5,
		columns: 5,
		cells: [
			{ row: 1, col: 2 },
			{ row: 2, col: 1 },
			{ row: 2, col: 3 },
			{ row: 3, col: 2 },
		],
	},
	/* Oscillators */
	blinker: {
		rows: 5,
		columns: 5,
		cells: [
			{ row: 2, col: 1 },
			{ row: 2, col: 2 },
			{ row: 2, col: 3 },
		],
	},
	/* Spaceships */
	glider: {
		rows: 20,
		columns: 21,
		cells: [
			{ row: 1, col: 3 },
			{ row: 2, col: 1 },
			{ row: 2, col: 3 },
			{ row: 3, col: 2 },
			{ row: 3, col: 3 },
		],
	},
	lightWeightSpaceship: {
		rows: 20,
		columns: 50,
		cells: [
			{ row: 3, col: 2 },
			{ row: 5, col: 2 },
			{ row: 2, col: 3 },
			{ row: 2, col: 4 },
			{ row: 2, col: 5 },
			{ row: 2, col: 6 },
			{ row: 3, col: 6 },
			{ row: 4, col: 6 },
			{ row: 5, col: 5 },
		],
	},
	middleWeightSpaceship: {
		rows: 20,
		columns: 50,
		cells: [
			{ row: 2, col: 2 },
			{ row: 4, col: 2 },
            { row: 5, col: 3 },
            { row: 5, col: 4 },
            { row: 5, col: 5 },
            { row: 5, col: 6 },
            { row: 5, col: 7 },
            { row: 4, col: 7 },
            { row: 3, col: 7 },
            { row: 2, col: 6 },
            { row: 1, col: 4 },

		],
	},
    heavyWeightSpaceship: {
        rows: 20,
        columns: 50,
        cells: [
            { row: 2, col: 2 },
            { row: 4, col: 2 },
            {row: 5, col: 3},
            {row: 5, col: 4},
            {row: 5, col: 5},
            {row: 5, col: 6},
            {row: 5, col: 7},
            {row: 5, col: 8},
            {row: 4, col: 8},
            {row: 3, col: 8},
            {row: 2, col: 7},
            {row: 1, col: 4},
            {row: 1, col: 5},


        ],
    },
};
