var t = 0.0;
var timerRunning = true;
var start = setInterval(timer,100);


function timer() {
	t += 0.1
	document.getElementById("demo").innerHTML = t.toFixed(1)
};

function startTime() {
	if (timerRunning === false) {
		timerRunning = true;
		start = setInterval(timer,100);
	} else {
		timerRunning = false;
		clearInterval(start);
	}
}

function reset() {
	t = 0
	document.getElementById("demo").innerHTML = 0
}


