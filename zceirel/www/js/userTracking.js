
// track user location
function trackLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	} else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
			}
	}

var userMarker;
// code to feed location onto map
function showPosition(position) {
	// check if marker exists
	if (userMarker) {
		mymap.removeLayer(userMarker);
	}
	// add point on the map
	userMarker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap)
	.bindPopup("<b>You were here</b>");

	mymap.setView([position.coords.latitude, position.coords.longitude], 5);

	}