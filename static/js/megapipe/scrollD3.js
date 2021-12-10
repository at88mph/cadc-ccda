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




var CCTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.chandra.colour.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Chandra_Col"
};
var CCMapType = new google.maps.ImageMapType(CCTypeOptions);

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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.galex.colour.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.2008B.IQ.x"+x+".y"+y+".z"+z+".jpg"
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

var HCTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.acs.colour.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "HST_Col"
};
var HCMapType = new google.maps.ImageMapType(HCTypeOptions);

var ICTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.irac.colour.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "IRAC_Col"
};
var ICMapType = new google.maps.ImageMapType(ICTypeOptions);

var MCTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.mips.colour.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "MIPS_Col"
};
var MCMapType = new google.maps.ImageMapType(MCTypeOptions);

var X1TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.chandra.uhrd.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Chandra_5.5_keV"
};
var X1MapType = new google.maps.ImageMapType(X1TypeOptions);

var X2TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.chandra.hard.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Chandra_4.5_keV"
};
var X2MapType = new google.maps.ImageMapType(X2TypeOptions);

var X3TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.chandra.soft.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Chandra_1.3_keV"
};
var X3MapType = new google.maps.ImageMapType(X3TypeOptions);

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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.galex.fd.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.galex.nd.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3U.2007A.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3G.2007A.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3R.2007A.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3I.2007A.x"+x+".y"+y+".z"+z+".jpg"
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
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3Z.2007A.x"+x+".y"+y+".z"+z+".jpg"
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

var HVTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.acs.v.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "HST_F606W"
};
var HVMapType = new google.maps.ImageMapType(HVTypeOptions);

var HITypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.acs.i.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "HST_F814W"
};
var HIMapType = new google.maps.ImageMapType(HITypeOptions);

var PJTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.palomar.J.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Palomar_J"
};
var PJMapType = new google.maps.ImageMapType(PJTypeOptions);

var PKTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.palomar.K.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "Palomar_K"
};
var PKMapType = new google.maps.ImageMapType(PKTypeOptions);

var I1TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.ch1.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "IRAC1_3.6um"
};
var I1MapType = new google.maps.ImageMapType(I1TypeOptions);

var I2TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.ch2.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "IRAC2_4.5um"
};
var I2MapType = new google.maps.ImageMapType(I2TypeOptions);

var I3TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.ch3.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "IRAC3_5.8um"
};
var I3MapType = new google.maps.ImageMapType(I3TypeOptions);

var I4TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.ch4.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "IRAC4_8.0um"
};
var I4MapType = new google.maps.ImageMapType(I4TypeOptions);

var M1TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.mips24.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "MIPS_24um"
};
var M1MapType = new google.maps.ImageMapType(M1TypeOptions);

var M2TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.mips70.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "MIPS_70um"
};
var M2MapType = new google.maps.ImageMapType(M2TypeOptions);

var M3TypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.spitzer.mips160.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "MIPS_160um"
};
var M3MapType = new google.maps.ImageMapType(M3TypeOptions);

var JCMTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.scuba.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "SCUBA_850um"
};
var JCMMapType = new google.maps.ImageMapType(JCMTypeOptions);

var VLATypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    var x=normalizedCoord.x;
    var y=normalizedCoord.y;
    var z=zoom;
    var url="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/D3.vla.6cm.x"+x+".y"+y+".z"+z+".jpg"
    //document.getElementById("diag").innerHTML = url;
    return url;
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 17,
  minZoom: 11,
  radius: 1738000,
  name: "VLA_6cm"
};
var VLAMapType = new google.maps.ImageMapType(VLATypeOptions);





function initialize() {
  //** set map size
  document.getElementById("map-canvas").style.width="800px";
  document.getElementById("map-canvas").style.height="800px";

  // ** set map options
  var mapOptions = {
    center: new google.maps.LatLng(85.04138066582611,-179.84809041023254),
    zoom: 17,
    streetViewControl:false,
    mapTypeControlOptions: {
      mapTypeIds: ["Chandra_Col","GALEX_Col","CFHT_Col","HST_Col","IRAC_Col","MIPS_Col","Chandra_5.5_keV","Chandra_4.5_keV","Chandra_1.3_keV","GALEX_FUV","GALEX_NUV","CFHT_u","CFHT_g","CFHT_r","CFHT_i","CFHT_z","HST_F606W","HST_F814W","Palomar_J","Palomar_K","IRAC1_3.6um","IRAC2_4.5um","IRAC3_5.8um","IRAC4_8.0um","MIPS_24um","MIPS_70um","MIPS_160um","SCUBA_850um","VLA_6cm"],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  };

  // ** actually add the map
  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
map.mapTypes.set('Chandra_Col', CCMapType);
map.mapTypes.set('GALEX_Col', GCMapType);
map.mapTypes.set('CFHT_Col', CMapType);
map.mapTypes.set('HST_Col', HCMapType);
map.mapTypes.set('IRAC_Col', ICMapType);
map.mapTypes.set('MIPS_Col', MCMapType);
map.mapTypes.set('Chandra_5.5_keV', X1MapType);
map.mapTypes.set('Chandra_4.5_keV', X2MapType);
map.mapTypes.set('Chandra_1.3_keV', X3MapType);
map.mapTypes.set('GALEX_FUV', GFMapType);
map.mapTypes.set('GALEX_NUV', GNMapType);
map.mapTypes.set('CFHT_u', UMapType);
map.mapTypes.set('CFHT_g', GMapType);
map.mapTypes.set('CFHT_r', RMapType);
map.mapTypes.set('CFHT_i', IMapType);
map.mapTypes.set('CFHT_z', ZMapType);
map.mapTypes.set('HST_F606W', HVMapType);
map.mapTypes.set('HST_F814W', HIMapType);
map.mapTypes.set('Palomar_J', PJMapType);
map.mapTypes.set('Palomar_K', PKMapType);
map.mapTypes.set('IRAC1_3.6um', I1MapType);
map.mapTypes.set('IRAC2_4.5um', I2MapType);
map.mapTypes.set('IRAC3_5.8um', I3MapType);
map.mapTypes.set('IRAC4_8.0um', I4MapType);
map.mapTypes.set('MIPS_24um', M1MapType);
map.mapTypes.set('MIPS_70um', M2MapType);
map.mapTypes.set('MIPS_160um', M3MapType);
map.mapTypes.set('SCUBA_850um', JCMMapType);
map.mapTypes.set('VLA_6cm', VLAMapType);
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

    var xmax = 20558;	
    var ymax = 21553;
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
      var url=url+'D3.'+filter+'.fits'+section;
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
