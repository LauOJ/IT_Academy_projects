
//CARREGAR EL MAPA I CENTRAR-LO EN LA LOCALITZACIÓ DE L'USUARI (NIVELL3)

let map = L.map('mapid').on('load', fetchDB, onMapLoad).locate({setView: true, maxZoom: 16});

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup();
let data_markers = [];
let kinds = [];
let newArr = [];
let uniqueArray = [];
let result;

function fetchDB(){

fetch("http://localhost/mapa/api/apiRestaurants.php")
		.then(response => response.json())
		.then(function (result) {
			data_markers = result;
			onMapLoad(result);
	
		});

	}

function onMapLoad(result) {


		 for (let i = 0; i < result.length; i++) {
			

			//TIPUS: DIVIDIR ELS TIPUS QUE ESTAN DE DOS EN DOS
			let kind = result[i].kind_food;
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

		// .catch(error => console.log('error', error));

		//FUNCIÓ PER CARREGAR TOTS ELS MARKERS AL MAPA

		render_to_map(data_markers, 'all');

}

//FUNCIÓ PER CARREGAR ELS QUE PASSEN EL FILTRE
$('#kind_food_selector').on('change', function() {
  render_to_map(data_markers, uniqueArray[this.value]);
});



function render_to_map(array,filter){
	
//ESBORRAR MARCADORS
	markers.clearLayers();


	//VEURE SI PASSEN EL FILTRE


			let lat; 
			let lng; 
			let name; 
			let kind;
			let img;
			let address;

	 	for (let i = 0; i < array.length; i++) {

			//VARIABLES
			 
			 kind = array[i].kind_food; 
			 lat = array[i].lat;
			 lng = array[i].lng;
			 name = array[i].name;
			 img = array[i].photo;
			 address = array[i].address;

			 if (filter == "all" ||  kind.split(",").includes(filter)  ) {

				//CREAR MARKER I INCLOURE TOTA LA INFO AL POPUP
					let newMarker =	L.marker([lat, lng]).bindPopup("<img src=\""+img+"\"><br>"+name+"<br>"+address+"<br>"+kind);

					markers.addLayer(newMarker);
					map.addLayer(markers);
				}
			}
	 		
	}
	
	
	function push(fromArray, toArray) {     
	for(let i = 0, len = fromArray.length; i < len; i++) {
	toArray.push(fromArray[i]);
}      return toArray;
}


