
// track user location
function trackLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	} else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
			}
	}

// code to feed location onto map
var userPos;
function showPosition(position) {
	// check if previous point exists
	if (userMarker) {
		mymap.removeLayer(userPos);
	}
	// add point on the map
	userPos = L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap)
	.bindPopup("<b>You were here</b>");
	
	mymap.setView([position.coords.latitude, position.coords.longitude], 13)

	}