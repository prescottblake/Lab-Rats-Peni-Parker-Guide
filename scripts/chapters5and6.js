var radioElement = document.getElementById('map-select-radio');
var selectedMap = document.getElementById('selected-map');

function getTarget(e) {
	if(!e) {
		e = window.event;
	}
	return e.target||e.srcElement;
}

if (radioElement.addEventListener) {
	radioElement.addEventListener('change', function(e) {
		reportMap(e);
	}, false);
}
else {
	radioElement.attachEvent('onchange', function(e) {
		reportMap(e);
	});
}

function reportMap(e) {
	var target = getTarget(e);
	var message = "You have selected: ";

	message += target.value;
	selectedMap.innerHTML = message;
}