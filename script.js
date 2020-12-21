
navigator.geolocation.getCurrentPosition(successCall , errorCall , {
    enableHighAccuracy : true , 
}) ; 

function successCall(position){
    console.log(position) ; 
    setMap([position.coords.longitude,position.coords.latitude]) ; 
}

function errorCall(){
    console.log(err) ; 
}

function setMap(center) {
    

    mapboxgl.accessToken = 'pk.eyJ1Ijoibi1tLW4iLCJhIjoiY2tnb2w4NXFmMDNiYTJyb2hmMm1hZ25scyJ9.CCwar4Gu1qOfhf4J2nBMag';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: center, 
    zoom: 16 
    
});

 map.addControl(new mapboxgl.NavigationControl() , 'top-left');

//  var mapboxgl = require('mapbox-gl');
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');

var directions = new MapboxDirections({
  accessToken: 'pk.eyJ1Ijoibi1tLW4iLCJhIjoiY2tnb2w4NXFmMDNiYTJyb2hmMm1hZ25scyJ9.CCwar4Gu1qOfhf4J2nBMag',
  unit: 'metric',
  profile: 'mapbox/cycling'
});


map.addControl(directions, 'top-left');
}

