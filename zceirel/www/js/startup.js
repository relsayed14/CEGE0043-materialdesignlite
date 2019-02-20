function trackAndCircle() {

	trackLocation();
	addPointLinePoly(position);
	getEarthquakes();

}

function startup() {
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}