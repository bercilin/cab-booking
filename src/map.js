// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("googleMap"), {
//     center: { lat: 13.027031208396691, lng: 77.60751218874147},
//     zoom: 24,
//   });
// }

// window.initMap = initMap;





var myLatLng = { lat: 13.027031208396691, lng: 77.60751218874147 };
var mapOptions = {
    center: myLatLng,
    zoom: 24,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);


// lat: 13.027031208396691, lng: 77.60751218874147