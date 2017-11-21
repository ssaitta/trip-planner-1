const mapboxgl = require("mapbox-gl");

//let mapElement = document.createElement('div');
// mapElement.style.height = "39px";
// mapElement.style.width = "32px";
// mapElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(mapElement).setLngLat([-74.009151, 40.705086]).addTo(map);

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, cordArray) => {
    let mapElement = document.createElement('div');
    mapElement.style.height = "39px";
    mapElement.style.width = "32px";
    mapElement.style.backgroundImage = iconURLs[type];

    return new mapboxgl.Marker(mapElement).setLngLat(cordArray);
}



module.exports = buildMarker
