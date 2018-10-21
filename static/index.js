
var mymap = L.map('mapid').setView([41.79, 140.75], 10);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

let geojsonFeature = {"type": "FeatureCollection", "features": 
[{"type": "Feature", "geometry":
 {"type": "Point", "coordinates": [140.755422888, 41.7925528084]}, "properties": {"name": "\\u793e\\u4f1a\\u798f\\u7949\\u6cd5\\u4eba\\u3000\\u51fd\\u9928\\u539a\\u751f\\u9662\\u3000\\u51fd\\u9928\\u4e94\\u7a1c\\u90ed\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.751653992, 41.786752908]}, "properties": {"name": "\\u51fd\\u9928\\u4e2d\\u592e\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.740241772, 41.7781649312]}, "properties": {"name": "\\u51fd\\u9928\\u8d64\\u5341\\u5b57\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.712312967, 41.76512278]}, "properties": {"name": "\\u793e\\u4f1a\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u9ad8\\u6a4b\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.785401861, 41.7814798541]}, "properties": {"name": "\\u51fd\\u9928\\u6e21\\u8fba\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.735833751, 41.8074888543]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u540c\\u4ec1\\u4f1a\\u3000\\u4f50\\u3005\\u6728\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.77385577, 41.7848978791]}, "properties": {"name": "\\u7279\\u5b9a\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u5bcc\\u7530\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.740616935, 41.7853939569]}, "properties": {"name": "\\u5171\\u611b\\u4f1a\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.716024914, 41.762608923]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u5c1a\\u4ec1\\u4f1a\\u3000\\u7af9\\u7530\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.757966974, 41.8060319293]}, "properties": {"name": "\\u793e\\u4f1a\\u533b\\u7642\\u6cd5\\u4eba\\u4ec1\\u751f\\u4f1a\\u3000\\u897f\\u5800\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.76247081, 41.8123319561]}, "properties": {"name": "\\u9053\\u5357\\u52e4\\u533b\\u5354\\u3000\\u51fd\\u9928\\u7a1c\\u5317\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.753388915, 41.7775058332]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u656c\\u4ec1\\u4f1a\\u3000\\u51fd\\u9928\\u304a\\u3057\\u307e\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.752784877, 41.8069439244]}, "properties": {"name": "\\u51fd\\u9928\\u5e02\\u533b\\u5e2b\\u4f1a\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.743303798, 41.8362249332]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u4e80\\u7530\\u75c5\\u9662\\u5206\\u9662\\u4e80\\u7530\\u5317\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.763372819, 41.8130417954]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u793e\\u56e3\\u51fd\\u9928\\u8133\\u795e\\u7d4c\\u5916\\u79d1\\u3000\\u51fd\\u9928\\u8133\\u795e\\u7d4c\\u5916\\u79d1\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.778900758, 41.7919347354]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u51fd\\u9928\\u5faa\\u74b0\\u5668\\u79d1\\u5185\\u79d1\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.738499832, 41.8251249888]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u96c4\\u5fc3\\u4f1a\\u3000\\u51fd\\u9928\\u65b0\\u90fd\\u5e02\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.752743852, 41.8157289288]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u793e\\u56e3\\u3000\\u5354\\u7acb\\u6d88\\u5316\\u5668\\u5faa\\u74b0\\u5668\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.752328744, 41.8614258502]}, "properties": {"name": "\\u533b\\u7642\\u6cd5\\u4eba\\u3000\\u8056\\u4ec1\\u4f1a\\u3000\\u68ee\\u75c5\\u9662"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [140.719372765, 41.762965732]}, "properties": {"name": "\\u6c5f\\u53e3\\u773c\\u79d1\\u75c5\\u9662"}}]}

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

L.geoJSON(geojsonFeature,{
    onEachFeature: onEachFeature
}).addTo(mymap);

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
      });

})

