
//CARREGAR EL MAPA I CENTRAR-LO EN LA LOCALITZACIÓ DE L'USUARI (NIVELL3)

let map = L.map('mapid').on('load', onMapLoad).locate({setView: true, maxZoom: 16});

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup();
let data_markers = [];
let kinds = [];
let newArr = [];
let uniqueArray = [];


function onMapLoad() {


		fetch("http://localhost/mapa/api/apiRestaurants.php")
		.then(response => response.json())
		.then(function (result) {

		  for (let i = 0; i < result.length; i++) {
			
			//PASSAR DE LA BASE DE DADES A L'ARRAY
			data_markers.push(result[i])

			//TIPUS: DIVIDIR ELS TIPUS QUE ESTAN DE DOS EN DOS
			let kind = result[i].kind_food_rest;
			kinds = kind.split(",");

			
			//FUSIONAR TOTS ELS ARRAYS
			push(kinds, newArr);

		}
		
		//ELIMINAR ELS DUPLICATS
		  let duplicates = new Set(newArr);
		  uniqueArray = [ ...duplicates ];


		//COL·LOCAR ELS TIPUS AL MENÚ
		  $.each(uniqueArray, function(key, value) {

			$('#kind_food_selector')
				 .append($('<option>', { value : key })
				 .text(value));

			   });
		})
		.catch(error => console.log('error', error));

		//FUNCIÓ PER CARREGAR TOTS ELS MARKERS AL MAPA

		render_to_map(data_markers, 'all');

}

//FUNCIÓ PER CARREGAR ELS QUE PASSEN EL FILTRE
$('#kind_food_selector').on('change', function() {
  render_to_map(data_markers, uniqueArray[this.value]);
});



function render_to_map(array,filter){
	
//ESBORRAR MARCADORS
	markers.clearLayers(markers);


	//VEURE SI PASSEN EL FILTRE

	fetch("http://localhost/mapa/api/apiRestaurants.php")
	.then(response => response.json())
	.then(function (result) {

			let lat; 
			let lng; 
			let name; 
			let kind;
			let img;
			let address;

	 	for (let i = 0; i < result.length; i++) {

			//VARIABLES
			 
			 kind = result[i].kind_food_rest; 
			 lat = result[i].lat_rest;
			 lng = result[i].long_rest;
			 name = result[i].name_rest;
			 img = result[i].photo;
			 address = result[i].address_rest;

			 if (filter == "all" ||  kind.split(",").includes(filter)  ) {

				//CREAR MARKER I INCLOURE TOTA LA INFO AL POPUP
					let newMarker =	L.marker([lat, lng]).bindPopup("<img src=\""+img+"\"><br>"+name+"<br>"+address+"<br>"+kind);

					markers.addLayer(newMarker);
					map.addLayer(markers);
				}
			}
	 	

	})
	.catch(error => console.log('error', error));

	
	}
	
	
	function push(fromArray, toArray) {     
	for(let i = 0, len = fromArray.length; i < len; i++) {
	toArray.push(fromArray[i]);
}      return toArray;
}

