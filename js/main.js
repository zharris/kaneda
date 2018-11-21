document.onmousemove = handleMouseMove;

function handleMouseMove(e) {
	const centerWidth = window.innerWidth / 2;
	const centerHeight = window.innerHeight / 2;
	const pink = document.getElementById('kaneda-pink');
	const blue = document.getElementById('kaneda-blue');

	const mouseDistanceX = centerWidth - e.clientX;
	const mouseDistanceY = centerHeight - e.clientY;

	pink.setAttribute('style', 'top: ' + mouseDistanceY / -8 + 'px; left: ' + mouseDistanceX / -8 + 'px;');
	blue.setAttribute('style', 'top: ' + mouseDistanceY / 10 + 'px; left: ' + mouseDistanceX / 10 + 'px;');
}