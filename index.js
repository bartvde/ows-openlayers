var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('w3c-schemas/lib/XLink_1_0').XLink_1_0;
var OWS_1_1_0 = require('ogc-schemas/lib/OWS_1_1_0').OWS_1_1_0;
var WMS_1_3_0 = require('ogc-schemas/lib/WMS_1_3_0').WMS_1_3_0;

var context = new Jsonix.Context([XLink_1_0, OWS_1_1_0, WMS_1_3_0], {
    mappingStyle : 'simplified',
    namespacePrefixes: {
        'http://www.w3.org/1999/xlink': 'xlink',
        'http://www.opengis.net/wms': 'wms',
        'http://www.opengis.net/ows/1.1': 'ows'
    }
});

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalURL('/geoserver/wms?service=WMS&request=GetCapabilities', function(result) {
    console.log(JSON.stringify(result, null, 2));
});

var ol = require('openlayers');

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 0
  })
});
