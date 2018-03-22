var loadGoogleMapsApi = require("load-google-maps-api");

loadGoogleMapsApi().then(function(googleMaps) {
  let map = new googleMaps.Map(document.getElementById("map"), {
    center: {
      lat: 52.12773,
      lng: 11.62916
    },
    zoom: 12,
    gestureHandling: "cooperative",
    key: "AIzaSyDCT7ActGMfasrqz0B7cNo-uHTJShYQMIg"
  });
  let marker = new googleMaps.Marker({
    position: {
      lat: 52.12773,
      lng: 11.62916
    },
    map: map
  });
}).catch(function(error) {
  console.error(error)
});
