

const buildMarker = require('./marker')
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWU2MTAiLCJhIjoiY2phOXRnYm5nMGJpMDJxcXB4MjR5N295MyJ9.XoJY8xER4S-wfLOKhgPZ6Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
console.log(buildMarker)

const marker = buildMarker('activity',[-74.009151, 40.705086])

marker.addTo(map);

