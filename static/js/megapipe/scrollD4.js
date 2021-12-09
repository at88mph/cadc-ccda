// *** subroutine for coordinates used by the extra layers
// *** goes outside initialize
function getNormalizedCoord(coord, zoom) {
  var y = coord.y;
  var x = coord.x;

  // tile range in one direction range is dependent on zoom level
  // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
  var tileRange = 1 << zoom;

  // don't repeat across y-axis (vertically)
  if (y < 0 || y >= tileRange) {
    return null;
  }

  // repeat across x-axis
  if (x < 0 || x >= tileRange) {
    x = (x % tileRange + tileRange) % tileRange;
  }

  return {
    x: x,
    y: y
  };
}
//************




var GCTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D4.galex.colour.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "GALEX_Col"
};
var GCMapType = new google.maps.ImageMapType(GCTypeOptions);

var CTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D4.2008B.IQ.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_Col"
};
var CMapType = new google.maps.ImageMapType(CTypeOptions);

var GFTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D4.galex.fd.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "GALEX_FUV"
};
var GFMapType = new google.maps.ImageMapType(GFTypeOptions);

var GNTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D4.galex.nd.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "GALEX_NUV"
};
var GNMapType = new google.maps.ImageMapType(GNTypeOptions);

var UTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4U.2007A.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_u"
};
var UMapType = new google.maps.ImageMapType(UTypeOptions);

var GTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4G.2007A.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_g"
};
var GMapType = new google.maps.ImageMapType(GTypeOptions);

var RTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4R.2007A.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_r"
};
var RMapType = new google.maps.ImageMapType(RTypeOptions);

var ITypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4I.2007A.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_i"
};
var IMapType = new google.maps.ImageMapType(ITypeOptions);

var ZTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D4Z.2007A.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "CFHT_z"
};
var ZMapType = new google.maps.ImageMapType(ZTypeOptions);





function initialize() {
  //** set map size
  document.getElementById("map-canvas").style.width="800px";
  document.getElementById("map-canvas").style.height="800px";

  // ** set map options
  var mapOptions = {
    center: new google.maps.LatLng(85.0373942012684,-179.79987502098083),
    zoom: 17,
    streetViewControl:false,
    mapTypeControlOptions: {
      mapTypeIds: ["GALEX_Col","CFHT_Col","GALEX_FUV","GALEX_NUV","CFHT_u","CFHT_g","CFHT_r","CFHT_i","CFHT_z"],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  };

  // ** actually add the map
  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
map.mapTypes.set('GALEX_Col', GCMapType);
map.mapTypes.set('CFHT_Col', CMapType);
map.mapTypes.set('GALEX_FUV', GFMapType);
map.mapTypes.set('GALEX_NUV', GNMapType);
map.mapTypes.set('CFHT_u', UMapType);
map.mapTypes.set('CFHT_g', GMapType);
map.mapTypes.set('CFHT_r', RMapType);
map.mapTypes.set('CFHT_i', IMapType);
map.mapTypes.set('CFHT_z', ZMapType);
  map.setMapTypeId('CFHT_Col');

  google.maps.event.addListener(map, 'maptypeid_changed', function(){ getvs(); });

    //MapTypeRegistry()

  google.maps.event.addListener(map, 'bounds_changed', function(){ getvs(); });



  function getvs() {

    var mtype= map.getMapTypeId();
    var filter='';
    if (mtype == 'CFHT_Col') { filter='I' }
    if (mtype == 'CFHT_u') { filter='U' }
    if (mtype == 'CFHT_g') { filter='G' }
    if (mtype == 'CFHT_r') { filter='R' }
    if (mtype == 'CFHT_i') { filter='I' }
    if (mtype == 'CFHT_z') { filter='Z' }
    
    if (filter.length==0) {
      document.getElementById("fits").innerHTML='';
      return;
    }

    var xmax = 20382;	
    var ymax = 21469;
    var vs
    var lat = map.getCenter().lat();
    var lng = map.getCenter().lng();
    var xcen = (lng+180)*93206.755555555;
    var pi=4*Math.atan2(1,1);
    var ltmp = lat*pi/180;
    var ytmp = Math.log(Math.tan((ltmp+pi/2)/2))
    var ycen = ymax-(180-ytmp/pi*180)*93206.755555555;
    if (xcen>0 && ycen>0 && xcen<xmax && ycen<ymax) {
      var zoom=Math.pow(2,17-map.getZoom());
      var x1=Math.min(Math.max(Math.ceil (xcen-350*zoom),1),xmax);
      var x2=Math.min(Math.max(Math.floor(xcen+350*zoom),1),xmax);
      var y1=Math.min(Math.max(Math.ceil (ycen-350*zoom),1),ymax);
      var y2=Math.min(Math.max(Math.floor(ycen+350*zoom),1),ymax);
      section="["+x1+":"+x2+","+y1+":"+y2+"]";
      var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/";
      var url=url+'D4.'+filter+'.fits'+section;
      var lang=document.getElementsByTagName('html')[0].lang;
      var rtext='Link to image cutout: '
      if (lang == 'fr') {
	rtext='Lien au image d&eacute;coup&eacute;e: ';
      }
      
      document.getElementById("fits").innerHTML='<p>'+rtext+'<a href='+url+'>'+url+'</a></p>'
    } else {
      document.getElementById("fits").innerHTML='';
      return;
    }
  }

}
google.maps.event.addDomListener(window, 'load', initialize);
