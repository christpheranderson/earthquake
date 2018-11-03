// define globals
var endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
 $.ajax({
 	method: "GET",
 	url: endpoint,
 	success: success,
 	error: function(error){
 		console.log(error);
 	}
 });

 function success(response) {
 	console.log(response);

 	// Get Element to Append to
 	var results = document.getElementById('info');

    var map = new google.maps.Map(document.getElementById('map'), {
     	zoom:2,
     	center:{lat : 37.78, lng: -122.44}
     });


 	response.features.forEach(feature => {
 		console.log(feature.properties.title)
 		var p = document.createElement('p');
 		p.textContent = `${feature.properties.title}`;
 		results.append(p);
        // getting coordinates out of JSON response
        var cor = feature.geometry.coordinates;
        // parsing coordinate to get specific lagitude longitude
        var direction = new google.maps.LatLng(cor[1], cor[0]); 
        // give the coordinates to the marker 
        var marker = new google.maps.Marker({
        	position: direction,
        	map: map 
        }) 
 		
 	})
      

    
 }

 function initMap() {
	 var sf = {lat: 37.78, lng: -122.44};
	 var map = new google.maps.Map(document.getElementById('map'), {
	 	center: sf,
	    zoom: 8
	});
   }
 

   // var features =   ;
   // var geometry =
         


});

// var key = "key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";
// respponse.features.geometry.coordinates
//var mapsURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=



