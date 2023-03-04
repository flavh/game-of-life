const resize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
window.addEventListener("resize", resize);
resize();
document.getElementById("startForm").addEventListener("submit", (e) => {
	e.preventDefault();
	start();
});

const start = () => {
	const rows = document.getElementById("rowsInput").value;
	const cols = document.getElementById("colsInput").value;
	alert(rows + " " + cols);
};
