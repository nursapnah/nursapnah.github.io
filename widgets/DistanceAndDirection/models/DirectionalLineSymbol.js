// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Stateful esri/geometry/screenUtils esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol esri/graphic esri/geometry/ScreenPoint esri/geometry/geometryEngine dojo/_base/fx dojo/fx dojo/on".split(" "),function(v,r,w,u,t,k,x,y,z,q,A,B){return v([t,w],{constructor:function(a){this.inherited(arguments);this.setStyle(a.style);this.setColor(a.color);this.setWidth(a.width);this.directionSymbols={arrow1:"m0.5,50.5c0,0 99.5,-41 99.5,-41c0,0 0.5,81.5 0.5,81.5c0,0 -100,-40.5 -100,-40.5z",
arrow2:"M1,50l99.5,-50c0,0 -40,49.5 -40,49.5c0,0 39.5,50 39.5,50c0,0 -99,-49.5 -99,-49.5z",arrow3:"m0.5,50.5l90,-50l9,9.5l-79.5,40.5l80,39.5l-10,10.5l-89.5,-50z",arrow4:"m55.4605,51.5754l43.0685,-48.2908l-43.3797,48.2908l43.8197,44.8899l-43.5085,-44.8899zm-6.0505,42.3899l-0.44,-88.1807l-43.37967,45.7908l43.81967,42.3899z"};this.directionColor=a.directionColor||this.color;this.directionSize=a.directionSize||12;this.directionPixelBuffer=a.directionPixelBuffer||40;this.animationRepeat=a.animationRepeat;
this.animationDuration=a.animationDuration||350;this.directionSymbol=a.directionSymbol||"arrow1";this.showDirectionalSymbols=a.showDirectionalSymbols||!0;this.showStartSymbol=a.showStartSymbol||!1;this.startSymbol=a.startSymbol||new k({color:[128,128,128,64],size:8,type:"esriSMS",style:"esriSMSCircle",outline:{color:[0,0,0,255],width:2,type:"esriSLS",style:"esriSLSSolid"}});this.showEndSymbol=a.showEndSymbol||!1;this.endSymbol=a.startSymbol||new k({color:[128,128,128,64],size:8,type:"esriSMS",style:"esriSMSX",
outline:{color:[0,0,0,255],width:2,type:"esriSLS",style:"esriSLSSolid"}});this.graphics=[];this.map=null;this.drawGraphicDirection=this._drawDirection;this.type="DirectionalLineSymbol"},getStroke:function(){var a=0<arguments.callee.caller.arguments.length?arguments.callee.caller.arguments[4]:arguments.callee.caller.caller.arguments[4];if(!a||a.dlsSymbolGroup)return this.inherited(arguments);this.graphics.push(a);var c=a.getLayer(),b=this.map=c.getMap();a.dlsSymbolGroup=c._div.createGroup();this._drawDirection(a,
c,b);c.dlsGraphicRemove||(c.dlsGraphicRemove=c.on("graphic-remove",function(a){a.graphic.dlsSymbolGroup&&(dojo.query(".dls-symbol",a.graphic.dlsSymbolGroup.rawNode).forEach(dojo.destroy),dojo.destroy(a.graphic.dlsSymbolGroup.rawNode),a.graphic.dlsSymbolGroup=null)}));var e=null,d=null;b.graphics.dlsGraphicDraw||(b.graphics.dlsGraphicDraw=b.graphics.on("graphic-draw",function(a){a.graphic.dlsSymbolGroup&&(e=a.graphic,(d="DirectionalLineSymbol"===e.symbol.type?e.symbol:e.symbol.outline&&"DirectionalLineSymbol"===
e.symbol.outline.type?e.symbol.outline:null)&&d.drawGraphicDirection(e,this,this.getMap()))}));b.dlsExtChanged||(b.dlsExtChanged=b.on("extent-change",function(){for(var a=0,b=this.graphics.graphics.length;a<b;a++)if(e=this.graphics.graphics[a],e.symbol)if(e.attributes&&e.attributes.isDirectionalGraphic)this.graphics.remove(e),a--,b--;else{var d="DirectionalLineSymbol"===e.symbol.type?e.symbol:e.symbol.outline&&"DirectionalLineSymbol"===e.symbol.outline.type?e.symbol.outline:null;d&&d.drawGraphicDirection(e,
c,this)}for(a=0;a<this.graphicsLayerIds.length;a++)if(c=this.getLayer(this.graphicsLayerIds[a]),c.dlsGraphicRemove)for(b=0,d=c.graphics.length;b<d;b++)e=c.graphics[b],e.symbol&&(e.attributes&&e.attributes.isDirectionalGraphic?(c.remove(e),b--,d--):e.symbol.drawGraphicDirection(e,c,this))}));return this.inherited(arguments)},_drawDirection:function(a,c,b){if(a.dlsSymbolGroup){var e=a.dlsSymbolGroup,d=a.geometry;d.spatialReference.wkid!==b.spatialReference.wkid&&(esri.geometry.canProject(d,b)?d=esri.geometry.project(d,
b):console.error("Can't project geometry wkid - "+d.spatialReference.wkid+" to map wkid "+b.spatialReference.wkid));a.directions=[];dojo.query(".dls-symbol",a.dlsSymbolGroup.rawNode).forEach(dojo.destroy);var f=u.toScreenGeometry(b.extent,b.width,b.height,d);b=u.toScreenGeometry(b.extent,b.width,b.height,b.extent);if(f="polyline"===d.type?f.paths:f.rings){if(this.showStartSymbol&&(d=this._getFirstItem(f),d=this._createGraphic(d,this.startSymbol),d.geometry)){c.add(d);var n=d.getShape();n?(e.add(n),
d.attr("class","dls-symbol"),a.directions.push(d),a.visible||d.hide(),d.origJson=d.toJson(),d.toJson=this.directionGraphicToJson):c.remove(d)}if(this.showDirectionalSymbols)for(d=0,n=f.length;d<n;d++)for(var p=f[d],l=0,k=p.length-1;l<k;l++)if(l!==p.length)for(var m=p[l],g=p[l+1],q=this._getAngle(m,g),m=this._getDirectionPoints(m,g,b),g=0,r=m.length;g<r;g++){var h=this._createGraphic(m[g],this._createSymbol(this.directionSymbol,q));c.add(h);var t=h.getShape();e.add(t);h.attr("class","dls-symbol");
a.directions.push(h);a.visible||h.hide();h.origJson=h.toJson();h.toJson=this.directionGraphicToJson}this.showEndSymbol&&(d=this._getSecondToLastItem(f))&&(b=this._getLastItem(f))&&!this._isEqual(d,b)&&(f=this._getAngle(d,b),f=this._createSymbol(this.endSymbol,f),b=this._createGraphic(b,f),b.geometry&&(c.add(b),(f=b.getShape())?(e.add(f),b.attr("class","dls-symbol"),a.directions.push(b),a.visible||b.hide(),b.origJson=b.toJson(),b.toJson=this.directionGraphicToJson):c.remove(b)));a.dlsAnimationRepeat&&
(1<a.dlsAnimationRepeat||Infinity===a.dlsAnimationRepeat)&&this._animateGraphic(a,a.dlsAnimationRepeat)}else console.error("Can't apply DirectionalLineSymbol to geometry "+d.type)}},_getLastItem:function(a){return a[a.length-1][a[a.length-1].length-1]},_getSecondToLastItem:function(a){return a[a.length-1][a[a.length-1].length-2]},_getFirstItem:function(a){return a[0][0]},_getAngle:function(a,c){return 180/Math.PI*Math.atan2(c[1]-a[1],c[0]-a[0])-180},_isEqual:function(a,c){var b=Object.getOwnPropertyNames(a),
e=Object.getOwnPropertyNames(c);if(b.length!==e.length)return!1;for(e=0;e<b.length;e++){var d=b[e];if(a[d]!==c[d])return!1}return!0},_createSymbol:function(a,c){var b;"simplemarkersymbol"===a.type||"picturemarkersymbol"===a.type?b=r.clone(a):"string"===typeof a?(b=new k,b.setSize(this.directionSize).setPath(this.directionSymbols[a]?this.directionSymbols[a]:a).setOutline(null).setColor(this.directionColor)):console.error("Symbol must be set to one of the pre-defined strings {'arrow1', 'arrow2', 'arrow3', 'arrow4'}, or a SimpleMarkerSymbol or PictureMarkerSymbol.");
b.setAngle(c);return b},_createGraphic:function(a,c){var b=new x;b.setSymbol(c);b.attributes={isDirectionalGraphic:!0};a=new y(a[0],a[1]);a=this.map.toMap(a);b.geometry=z.within(a,this.map.extent)?a:null;return b},_getDirectionPoints:function(a,c,b){var e=[],d=a[0]<c[0]?a[0]:c[0],f=a[0]>c[0]?a[0]:c[0],n=a[1]<c[1]?a[1]:c[1],p=a[1]>c[1]?a[1]:c[1],l=b.xmin<b.xmax?b.xmin:b.xmax,k=b.xmin>b.xmax?b.xmin:b.xmax,m=b.ymin<b.ymax?b.ymin:b.ymax;b=b.ymin>b.ymax?b.ymin:b.ymax;c=[c[0]-a[0],c[1]-a[1]];var g=Math.sqrt(c[0]*
c[0]+c[1]*c[1]);if(g<this.directionPixelBuffer)return e;c[0]=c[0]/g*this.directionPixelBuffer;c[1]=c[1]/g*this.directionPixelBuffer;for(a=[a[0]+c[0],a[1]+c[1]];a[0]>=d&&a[0]<=f&&a[1]>=n&&a[1]<=p;)a[0]>=l&&a[0]<=k&&a[1]>=m&&a[1]<=b&&e.push([a[0],a[1]]),a=[a[0]+c[0],a[1]+c[1]];return e},get:function(a){return this[a]?this[a]:null},_setDirectionSymbolAttr:function(a){this._set("directionSymbol",a);this._drawDirection()},_setStartSymbolAttr:function(a){this._set("startSymbol",a);this._drawDirection()},
_setEndSymbolAttr:function(a){this._set("endSymbol",a);this._drawDirection()},_setShowStartSymbolAttr:function(a){this._set("showStartSymbol",a);this._drawDirection()},_setShowEndSymbolAttr:function(a){this._set("showEndSymbol",a);this._drawDirection()},animateDirection:function(a,c){a&&(a=parseInt(a,10),isNaN(a)&&(a=Infinity),this.animationRepeat=a);if(!this.animationRepeat||1>this.animationRepeat)this.stopAnimation();else for(c&&(this.animationDuration=c),this.animationChain=null,this.animationEnd&&
this.animationEnd.remove(),c=0,a=this.graphics.length;c<a;c++){var b=this.graphics[c];b.dlsSymbolGroup&&this._animateGraphic(b,this.animationRepeat)}},_animateGraphic:function(a,c){var b=[],e=this.animationDuration;a.dlsAnimationChain&&a.dlsAnimationChain.stop();dojo.query(".dls-symbol",a.dlsSymbolGroup.rawNode).forEach(function(a){q.fadeOut({node:a,duration:10}).play();a=q.fadeIn({node:a,duration:e});b.push(a)});a.dlsAnimationRepeat=c;a.dlsAnimationChain=A.chain(b);a.dlsAnimationEnd=B(a.dlsAnimationChain,
"End",r.hitch(this,function(){!isNaN(c)&&1<c?(c--,this._animateGraphic(a,c)):Infinity===c&&this._animateGraphic(a,c)}));try{a.dlsAnimationChain.play()}catch(d){}},stopAnimation:function(){for(var a=0,c=this.graphics.length;a<c;a++){var b=this.graphics[a];b.dlsSymbolGroup&&(dojo.query(".dls-symbol",b.dlsSymbolGroup.rawNode).forEach(function(a){q.fadeIn({node:a,duration:10}).play()}),b.dlsAnimationRepeat=0,b.dlsAnimationChain&&b.dlsAnimationChain.stop(),b.dlsAnimationEnd&&b.dlsAnimationEnd.remove())}},
toJson:function(){return t.prototype.toJson.call(this)},directionGraphicToJson:function(){if(this.jsonUpdated||!this.origJson.symbol||!this.origJson.symbol.angle)return this.origJson;this.origJson.symbol.angle*=-1;this.jsonUpdated=!0;return this.origJson}})});