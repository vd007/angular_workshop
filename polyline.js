var x=new google.maps.LatLng(28.542606, 77.127503);
var airport=new google.maps.LatLng(28.555393,77.100044);
var connaught= new google.maps.LatLng(28.631133, 77.221795);
var redfort= new google.maps.LatLng(28.655539, 77.241064);
var QutubMinar= new google.maps.LatLng(28.524630, 77.185296);
var Kingdom= new google.maps.LatLng(28.467848, 77.068684);

function initialize()
{
var mapProp = {
  center:x,
  zoom:11,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var myTrip=[airport,x];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);

var myTrip=[x,connaught];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);

var myTrip=[x,redfort];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);

var myTrip=[x, QutubMinar];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);

var myTrip=[x,Kingdom];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

flightPath.setMap(map);

}

