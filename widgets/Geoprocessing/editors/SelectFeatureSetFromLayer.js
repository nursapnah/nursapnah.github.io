// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromLayer.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Deferred dijit/_TemplatedMixin jimu/dijit/SpatialFilterByFeatures jimu/utils ./BaseFeatureSetEditor dojo/text!./SelectFeatureSetFromLayer.html esri/dijit/analysis/utils esri/tasks/query".split(" "),function(e,f,g,h,d,k,l,m,n){var p=e(null,{constructor:function(b){this.layerObject=b},layerObject:0,toJson:function(){return this.layerObject}});return e([k,g],{templateString:l,editorName:"SelectFeatureSetFromLayer",postCreate:function(){this.inherited(arguments);this.spatialFilterByFeatures=
new h({map:this.map,types:this.param.defaultValue&&this.param.defaultValue.geometryType?[d.getTypeByGeometryType(this.param.defaultValue.geometryType)]:["point","polyline","polygon"]});this.spatialFilterByFeatures.placeAt(this.layerChooseNode);this.spatialFilterByFeatures.startup()},getGPValue:function(){if(0===this.activeViewIndex){var b=new f,a=this.spatialFilterByFeatures.getSelectedLayer();if(a){var c=this.spatialFilterByFeatures.featureSetChooserForSingleLayer.syncGetFeatures();c&&0<c.length?
(a=d.getFeatureSetByLayerAndFeatures(a,c),b.resolve(a)):this.param.useFeatureCollection?a.url?(c=new n,c.where="1\x3d1",a.queryFeatures(c).then(lang.hitch(this,function(a){b.resolve(a)}),lang.hitch(this,function(a){b.reject(a)}))):(a=d.getFeatureSetByLayerAndFeatures(a,a.graphics),b.resolve(a)):b.resolve(new p(m.constructAnalysisInputLyrObj(a)))}else b.resolve(null);return b}return this.wrapValueToDeferred(this.getFeatureSet())}})});