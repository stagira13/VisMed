
var mymap = L.map('mapid').setView([41.79, 140.75], 10);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

// ajax test

const local = window.location;
const url = local.origin;

$('#states_form').submit(function (e) {
  e.preventDefault();
  //let val = $(this).serialize()
  let val = $("select:first").val()
  console.log('test')
  console.log(val)
  $.getJSON(url + '/states',{states:val}, function(data) {
        //$("#result").text(data); 
        console.log(data);

        L.geoJSON(data,{
            onEachFeature: onEachFeature
        }).addTo(mymap);
        
      });

})

