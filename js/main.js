"use strict";



let bestSlider = $('.ba-best-slider'); 

bestSlider.slick({
	slide: '.ba-intro', 	
	infinite: false,
	fade: true,
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	arrows: false

});




// Initialize and add the map
function initBaMap() {
	// The location of Uluru
	let cities = {
		poltava : {
			coords : { lat: 49.589100, lng: 34.557851 },
			address : 'Котляревского 2'
		},
		kyiv : {
			coords : {lat: 50.449189, lng: 30.516672},
			address : 'ул. Прорезная 18/1Г'
		},
		odessa : {
			coords : {lat: 46.478298, lng: 30.723602},
			address : 'ул. Асташкина, 29'
		}
	}

	let mapCenter = cities.poltava.coords;
	// The map, centered at Uluru
	let mapEl = document.getElementById('map');

	let mapOptions = {
		zoom: 17,
		center: mapCenter,
		disableDefaultUI: true,
		styles:
		[
			{
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#f5f5f5"
				 }
			  ]
			},
			{
			  "elementType": "labels.icon",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#616161"
				 }
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				 {
					"color": "#f5f5f5"
				 }
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#bdbdbd"
				 }
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#eeeeee"
				 }
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#757575"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#e5e5e5"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#ffffff"
				 }
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#757575"
				 }
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#dadada"
				 }
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#616161"
				 }
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#e5e5e5"
				 }
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#eeeeee"
				 }
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#c9c9c9"
				 }
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			}
		 ]
	};

   let $baMap = new google.maps.Map( mapEl, mapOptions ); //Create map

	for (const city in cities) {
	
	// The marker, positioned at mapCenter

	let marker = new google.maps.Marker(
		{
			position: cities[city].coords,
		  	map: $baMap,
			icon: "img/marker.svg",				 
		}
		);
	}
}

document.addEventListener('DOMContentLoaded', initBaMap);

//Show mob menu
let menuToggleBtn = $('.ba-menu-toggle, .ba-overlay');

menuToggleBtn.on('click', () =>{
	$('.ba-mob-nav').toggleClass('ba-open');
})
