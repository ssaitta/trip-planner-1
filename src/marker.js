const mapboxgl = require("mapbox-gl");

//let mapElement = document.createElement('div');
// mapElement.style.height = "39px";
// mapElement.style.width = "32px";
// mapElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(mapElement).setLngLat([-74.009151, 40.705086]).addTo(map);

function markerType(type){
    if(type==="activity"){
        return `url(http://i.imgur.com/WbMOfMl.png)`

    }
    if(type==="hotel"){
        return `url(http://i.imgur.com/D9574Cu.png)`
            }
    if(type==="restaurant"){
        return `url(http://i.imgur.com/cqR6pUI.png)`
            }
}

function buildMarker(type, cordArray){
    let mapElement = document.createElement('div');
    mapElement.style.height = "39px";
    mapElement.style.width = "32px";
    mapElement.style.backgroundImage = markerType(type);
    
    new mapboxgl.Marker(mapElement).setLngLat(cordArray); 
}



module.exports = buildMarker