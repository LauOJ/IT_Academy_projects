
//NIVELL 1 FASE 1

let mymap1 = L.map('mapid1').setView([41.387308318, 2.16927], 16.5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap1);




//NIVELL 1 FASE 2

let mymap2 = L.map('mapid2').setView([41.387308318, 2.16927], 16,5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap2);

let marker2 = L.marker([41.38693238605568, 2.1659468933892287]).addTo(mymap2);


//NIVELL 1 FASE 3

let mymap3 = L.map('mapid3').setView([41.387308318, 2.16927], 16,5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap3);

let marker3 = L.marker([41.38693238605568, 2.1659468933892287]).addTo(mymap3);

let popupContent = "Carrer Balmes, 16, 08001, Barcelona";

marker3.bindPopup(popupContent);



//NIVELL 2 FASE 1

let mymap4 = L.map('mapid4').setView([41.387308318, 2.16927], 16,5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap4);

mymap4.on("click", function(e){
    let mp4 = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(mymap4);
    centerLeafletMapOnMarker(mymap4, mp4);
    let lt = String(e.latlng.lat), lg = String(e.latlng.lng);
     mp4.bindPopup("Lat: " + lt + " Long: " + lg).openPopup();
});



//NIVELL 2 FASE 2

let mymap5 = L.map('mapid5').setView([41.387308318, 2.16927], 16,5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap5);

let mp5 = null;

mymap5.on("click", function(e){
    
    if (mp5 !== null) {
        mymap5.removeLayer(mp5);
    }
    mp5 = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(mymap5);
    centerLeafletMapOnMarker(mymap5, mp5);
    let lt = String(e.latlng.lat), lg = String(e.latlng.lng);
     mp5.bindPopup("Lat: " + lt + " Long: " + lg).openPopup();
});


//NIVELL 3 FASE 1

let newIcon = L.icon({
   iconUrl: "push-pin-png-orange-map-pin-1566.png",
   iconSize: [38,50],
   iconAnchor: [22,94],
   popupAnchor: [5,-90]
})

let mymap6 = L.map('mapid6').setView([41.387308318, 2.16927], 16,5);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=OAxkgWc6itQYXPI4ZMwN', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap6);

let mp6 = null;

mymap6.on("click", function(e){
    
    if (mp6 !== null) {
        mymap6.removeLayer(mp6);
    }
    mp6 = new L.Marker([e.latlng.lat, e.latlng.lng],{icon:newIcon}).addTo(mymap6);
    centerLeafletMapOnMarker(mymap6, mp6);
    let lt = String(e.latlng.lat), lg = String(e.latlng.lng);
     mp6.bindPopup("Lat: " + lt + " Long: " + lg).openPopup();
});




//FUNCIONS GLOBALS

/* Centrar i zoom al marker */

function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [ marker.getLatLng() ];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
  }