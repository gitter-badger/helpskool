      
function valider() {
	document.getElementById("contenu").innerHTML=" Contenu Validé ";
}
function osmdiv(element) {
	if (element.tag == "DIV") {
		source = element.innerHTML;
	} else if (element.tag == "TEXTAREA") {
		source = element.value;
	} else {
		source = element.value;
	}
	var xmlhttp = new XMLHttpRequest();
	var urlosm = "http://nominatim.openstreetmap.org/search?email=jerome.avond@alolise.org&format=json&q=" + source ;
	var urlgmp = "https://maps.googleapis.com/maps/api/geocode/json?address=" + source + "&key=AIzaSyBV0jQvMpkmQ2QINkntL7liDvooxYt-WfQ";

$.getJSON(urlgmp, function(data) {
	//document.getElementById("contenu").innerHTML=data.results[0].formatted_address;
	glat=data.results[0].geometry.location.lat;
	glong=data.results[0].geometry.location.lng;
	document.getElementById("latdivgmap").innerHTML=glat;
	document.getElementById("longdivgmap").innerHTML=glong;
	traitement(glat,glong);
});
	

$.getJSON(urlosm, function(data) {
	olat=data[0].lat;
	olon=data[0].lon;
	bolon1=olon-0.005;
	bolat1=olat-0.005;
	bolon2=olon+0.005;
	bolat2=olat+0.005;
	
	document.getElementById("latdivosm").innerHTML=olat;
	document.getElementById("longdivosm").innerHTML=olon;
	maposm="http://www.openstreetmap.org/export/embed.html?bbox="+bolon1+","+bolat1+","+bolon2+","+bolat2+"&amp;layer=mapquest&amp;marker="+olat+","+olon;
	document.getElementById("carte").src=maposm;
	document.getElementById("contenu").innerHTML=maposm;
	document.getElementById("contenu").innerHTML=maposm;

    map = new OpenLayers.Map("demoMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();

});

}


