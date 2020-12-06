// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/Deferred esri/tasks/query esri/tasks/QueryTask jimu/LayerInfos/LayerInfos esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/graphic esri/tasks/FeatureSet jimu/FilterManager".split(" "),function(h,k,l,m,n,p,q,r,t,u){var e={queryBarriers:function(a){var b=[];if(!e.havePresetBarrierLayers(a))return b;var c=a.barrierLayers.pointLayers,d=a.barrierLayers.polylineLayers;a=a.barrierLayers.polygonLayers;this.layerInfosObj=m.getInstanceSync();e.getQueryDef(c,e.isBarrierLayerInWebmap(c,
this.layerInfosObj),this.layerInfosObj,"point",b);e.getQueryDef(d,e.isBarrierLayerInWebmap(d,this.layerInfosObj),this.layerInfosObj,"polyline",b);e.getQueryDef(a,e.isBarrierLayerInWebmap(a,this.layerInfosObj),this.layerInfosObj,"polygon",b);return b},isBarrierLayerInWebmap:function(a,b){var c=!1,d=a[0];b.traversal(function(a){a.layerObject.id===d&&(c=!0)});return c},getQueryDef:function(a,b,c,d,g){if((a=a[0])&&b){c=c.getLayerInfoById(a);var f=c.layerObject;(b=f.url)?(d=u.getInstance().getFilterExp(a),
g.push(e.query(b,d))):!b&&"undefined"!==f.toJson&&f.toJson().featureSet&&f.toJson().featureSet.features?(a=c.layerObject.toJson().featureSet.features,b=new t,"point"===d?b.features=e._getFeatures(a,n):"polyline"===d?b.features=e._getFeatures(a,p):"polygon"===d&&(b.features=e._getFeatures(a,q)),g.push((new h).resolve(b))):g.push((new h).resolve(null))}else g.push((new h).resolve(null))},_getFeatures:function(a,b){for(var c=[],d=0,e=a.length;d<e;d++){var f=new r(new b(a[d].geometry),null,{BarrierType:0});
c.push(f)}return c},query:function(a,b){a=new l(a);var c=new k,d="1\x3d1";b&&(d=b);c.where=d;c.returnGeometry=!0;c.outFields=["*"];return a.execute(c)},havePresetBarrierLayers:function(a){return a&&a.barrierLayers?a.barrierLayers.pointLayers&&""===a.barrierLayers.pointLayers[0]&&a.barrierLayers.polylineLayers&&""===a.barrierLayers.polylineLayers[0]&&a.barrierLayers.polygonLayers&&""===a.barrierLayers.polygonLayers[0]?!1:!0:!1},findBarrierLayer:function(a,b){var c=!1;if(!1===e.havePresetBarrierLayers(b))return c;
for(var d=0,g=a.length;d<g;d++){var f=a[0];if(f&&f.id&&(b.barrierLayers.pointLayers[0]===f.id||b.barrierLayers.polylineLayers[0]===f.id||b.barrierLayers.polygonLayers[0]===f.id)){c=!0;break}}return c}};return e});