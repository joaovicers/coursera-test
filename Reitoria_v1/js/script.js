/*
$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});
*/

/*Mapa do Leaflet*/
var mymap = L.map("mapid").setView([-15.7539882,-47.8794432], 13
  );

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

var reitoria =L.marker([-15.7539882,-47.8794432]).addTo(mymap);
reitoria.bindPopup("<b>Você está aqui!!!</b><br>IFB - Campus Brasília<br> Reitoria").openPopup();
