
// code to get the Earthquakes data using an XMLHttpRequest
var client;
var mymap;


function addPointLinePoly() {
	//add a point
	L.marker([60.5,-0.09]).addTo(mymap);

	//add a circle
	L.circle([51.5,-0.09],5000, {
		color:'red',
		fillColor:'#f03',
		fillOpacity: 0.5
		}).addTo(mymap);


	//add a polygon with 3 end points (i.e. a triangle)
	var myLine = L.polygon([
		[55.7,-21.81],
		[58.51,13.32]
		],{

		color:'red',
		fillColor:'#f06',
		fillOpacity: '0.5'

		}).addTo(mymap);

}

// Retrieve the Earthquake data layer 
function getEarthquakes() {
   client = new XMLHttpRequest();
   client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
   client.onreadystatechange = earthquakeResponse;  
   client.send();
}


// Wait for the response from data server
// process the response once received
function earthquakeResponse() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // once the data is ready, process the data
    var earthquakedata = client.responseText;
    loadGeoJSONLayer(earthquakedata);
    }
}

// convert the received data (text) to JSON format 
// add it to the map
function loadGeoJSONLayer(earthquakedata) {
    // convert the text to JSON
    var earthquakejson = JSON.parse(earthquakedata);

    // add the JSON layer onto the map - it will appear using the default icons
    geojsonLayer = L.geoJson(earthquakejson).addTo(mymap);

    // change the map zoom so that all the data is shown
    mymap.fitBounds(geojsonLayer.getBounds());
}