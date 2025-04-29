var outputMessage = "This loop will run between 1 and 10 times<br />";
var numIterations = Math.floor(Math.random() * 11) + 1;
var i;

for(i = 0; i < numIterations; i++) {
	outputMessage += "For Loop example: " + i + "<br />";
}


while(i > 0) {
	i--;
	outputMessage += "While Loop example: " + i + "<br />";
}



var el = document.getElementById('decision-loop-demo');
el.innerHTML = outputMessage;