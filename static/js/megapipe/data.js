
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


// *** define the sky layer
// *** goes outside initialize
var skyTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    
    return "https://mw1.google.com/mw-planetary/sky/skytiles_v1/" +
    + normalizedCoord.x + "_" + normalizedCoord.y + "_" + zoom + ".jpg";
    
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 14,
  minZoom: 0,
  radius: 1738000,
  name: "Sky"
};
var skyMapType = new google.maps.ImageMapType(skyTypeOptions);
//************


// *** define the basic coord layer
// *** goes outside initialize
var cooTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    //document.getElementById("diag").innerHTML = "http://gwyn01.cadc.dao.nrc.ca/cadcbin/megapipe/mserve.pl?x="+ normalizedCoord.x + "&y=" + normalizedCoord.y + "&z=" +zoom + qpars();

    return "/cadcbin/megapipe/mserve.pl?x="+ normalizedCoord.x + "&y=" + normalizedCoord.y + "&z=" +zoom + qpars();
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 12,
  minZoom: 1,
  name: "Coords"
};
var cooMapType = new google.maps.ImageMapType(cooTypeOptions);
//************



// *** Megapipe/Strasbourg image layer
// *** goes outside initialize

var megaTypeOptions = {
  getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
      return null;
    }
    var bound = Math.pow(2, zoom);
    return 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/GSKY/M.'+normalizedCoord.x+'.'+normalizedCoord.y+'.'+zoom+'.png';
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 12,
  minZoom: 1,
  name: "Mega"
};
var megaMapType = new google.maps.ImageMapType(megaTypeOptions);
//************


// *** some variables that have to be outside initialize for some reason
var holdsearch;
var omarker;
var oinfowindow;

function initialize() {
  document.getElementById("map-canvas").style.width="1024px";
  document.getElementById("map-canvas").style.height="600px";

  var mapOptions = {
    center: new google.maps.LatLng(0,0),
    //center: new google.maps.LatLng(2.174,180-230.88),
    //center: new google.maps.LatLng(10.4,-7),
    zoom: 2,
    streetViewControl: false,
    minZoom: 1,
    mapTypeControl: false
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
				mapOptions);
  map.mapTypes.set('sky', skyMapType);
  map.setMapTypeId('sky');


  //*** add MegaPipe image overlay
  //overlaym = new google.maps.OverlayView();
  //overlaym.draw = function() {};
  //overlaym.setMap(map);
  //map.overlayMapTypes.insertAt(0, megaMapType );


  //*** add coordinate  overlay
  overlaym = new google.maps.OverlayView();
  overlaym.draw = function() {};
  overlaym.onAdd = function() {};
  overlaym.setMap(map);
  map.overlayMapTypes.insertAt(0, cooMapType );


  //*** Drag zoom button
  map.enableKeyDragZoom({
      visualEnabled: true,
 	visualPosition: google.maps.ControlPosition.LEFT,
 	visualPositionOffset: new google.maps.Size(35, 0),
 	visualPositionIndex: null,
 	//visualSprite: "dragzoom_btn.png",
 	//visualSize: new google.maps.Size(30, 30),
 	visualTips: {
 	off: "Turn on drag to zoom",
 	  on: "Turn off drag to zoom"
 	}
    });
  



  //*** Listener stuff for following the mouse.
//   google.maps.event.addListener(map, 'mousemove', function(pmm){ followmouse(pmm) });
//   function followmouse(pmm) {
//     var mra  = 180 - pmm.latLng.lng() ;
//     var mdec = pmm.latLng.lat();
//     document.getElementById("mouse").innerHTML = 
//                     '<table border>'+
// 		    '<tr><td>RA: </td>' +
// 		    '<td>'+ mra.toFixed(6) + '</td>' +
// 		    '<td>'+ dec2dms(mra/15) + '</td>' +
// 		    '</tr>' +
// 		    '<tr><td>Dec:</td>'+
// 		    '<td>'+mdec.toFixed(6) + '</td>' +
// 		    '<td>'       +dec2dms(mdec) + '</td>' +
// 		    '</tr>';
//    }
  //********************

  //*** Listener and function so moving maps changes form values
  google.maps.event.addListener(map, 'bounds_changed', function(){ 
    var center = map.getCenter();
    document.cent.cra.value= ((180- center.lng())%360).toFixed(6);
    document.cent.cdec.value= center.lat().toFixed(6);
    document.cent.czoom.value=map.getZoom();
  });
  //********************


  //*** Listener and function so changing form values moves map
   google.maps.event.addDomListener(document.cent.docent, "click", recent);
   function recent() {
     var hra=gen2dec(document.cent.cra.value,'RA');
     var hra=180-hra;
     var hdec=gen2dec(document.cent.cdec.value,'Dec');
     map.setZoom(Math.floor(document.cent.czoom.value));
     map.setCenter(new google.maps.LatLng(hdec,hra));						   
   }
  //********************

  //*** Listener and function for All filter button
   google.maps.event.addDomListener(document.cent.filall, "click", function() {
       for (i=0; i<document.cent.fil.length; i++)  { 
	 document.cent.fil[i].checked=document.cent.filall.checked;
       }
       document.getElementById("fil1").checked=document.cent.filall.checked;
       document.getElementById("fil2").checked=document.cent.filall.checked;
       document.getElementById("filN").checked=document.cent.filall.checked;
       regenmap();
     } );


  //*** Listener and function for first generation filter button
   var fil1list = ["u.MP9301","g.MP9401","r.MP9601","i.MP9701","i.MP9702","z.MP9801"];
   google.maps.event.addDomListener(document.getElementById("fil1"), "click", function() {
     for (i=0; i<document.cent.fil.length; i++)  { 
	 if (fil1list.indexOf(document.cent.fil[i].value)>-1) {
	     document.cent.fil[i].checked=document.getElementById("fil1").checked;
	 }
       }
       regenmap();
     } );


  //*** Listener and function for second generation filter button
   var fil2list = ["u.MP9302", "g.MP9402", "r.MP9602", "i.MP9703", "z.MP9901", "gri.MP9605"];
   google.maps.event.addDomListener(document.getElementById("fil2"), "click", function() {
     for (i=0; i<document.cent.fil.length; i++)  { 
	 if (fil2list.indexOf(document.cent.fil[i].value)>-1) {
	     document.cent.fil[i].checked=document.getElementById("fil2").checked;
	 }
       }
       regenmap();
     } );

  //*** Listener and function for narrow band filters
   var filNlist = ["CN.MP7803","CaHK.MP9303","Ha.MP7605","Ha.MP9603","HaOFF.MP7604","N393.MP1111","OIII.MP7504","OIII.MP9501","PHG.MP9999","TiO.MP7701"];
   google.maps.event.addDomListener(document.getElementById("filN"), "click", function() {
     for (i=0; i<document.cent.fil.length; i++)  { 
	 if (filNlist.indexOf(document.cent.fil[i].value)>-1) {
	     document.cent.fil[i].checked=document.getElementById("filN").checked;
	 }
       }
       regenmap();
     } );






   //*** Listeners and function for regenerating the map

   google.maps.event.addDomListener(document.cent.grid, 'click', regenmap);
   google.maps.event.addDomListener(document.cent.stacked, 'click', regenmap);
   google.maps.event.addDomListener(document.cent.single, 'click', regenmap);

   for (i=0; i<document.cent.fil.length; i++)  { google.maps.event.addDomListener(document.cent.fil[i],  'click', regenmap); }

  // ** regenerate the map
  function regenmap () {
    var zq=map.getZoom();

    // KLUDGE number 1
    //map.setZoom(zq+1);
    //map.setZoom(zq);
    
    // KLUDGE number 2
    //google.maps.event.trigger(mapq, 'resize');

    // KLUDGE number 3
    map.overlayMapTypes.removeAt(0);
    map.overlayMapTypes.insertAt(0, cooMapType );

    //overlaym.clearTileCache();
  }
  //********************




  //*** Listener and functions for search-by-name
  google.maps.event.addDomListener(document.cent.resolve, "click", function() {simpleSearch(document.cent.object.value)});
  google.maps.event.addDomListener(document.cent.clear, "click", function () {if (!(typeof(omarker)=='undefined')) {omarker.setMap(null)}});


  // function 1: check if it is CFHTLS, otherwise query resolver
  function simpleSearch(searchString) {
    holdsearch=searchString;
    var rdn=new Array;
    rdn=parseCFHTLS(holdsearch);
    //GLog.write(rdn[0]+"  "+rdn[1] + "  "+rdn[2]);
    if (rdn[0]!=0 && rdn[1]!=0) {
      GotoObject(rdn[0],rdn[1],rdn[2]);
      return;
    }
    if (location.hostname == 'gwyn01') {
      var url="/cadcbin/gsky/find.pl?format=xml&target="+escape(searchString);
    } else {
      var url="/cadc-target-resolver/find?format=xml&target="+escape(searchString);
    }
    if (window.XMLHttpRequest) {
      // code for Mozilla, etc.
      xmlhttpSearch=new XMLHttpRequest()
	if (xmlhttpSearch) {
	  xmlhttpSearch.onreadystatechange = onSearchXMLDocLoaded;
	  xmlhttpSearch.open("GET",url,true);
	  xmlhttpSearch.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
	  xmlhttpSearch.send(null);
	}
    } else if (window.ActiveXObject) {
      // code for IE
      xmlhttpSearch=new ActiveXObject("Microsoft.XMLHTTP");
      if (xmlhttpSearch) {
	xmlhttpSearch.onreadystatechange = onSearchXMLDocLoaded;
	xmlhttpSearch.open("GET",url,true);
	xmlhttpSearch.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
	xmlhttpSearch.send();
      }
    }
  }

  //*** function 2: parses what the name resolver returns
  function onSearchXMLDocLoaded() {
    if (xmlhttpSearch.readyState == 4) {
      if (xmlhttpSearch.status==200) {
        var xmlDocument = xmlhttpSearch.responseXML;
        var objects = xmlDocument.getElementsByTagName('result');
        if (objects.length>0) {
	  GotoObject(objects[0].getElementsByTagName('ra')[0].firstChild.data,objects[0].getElementsByTagName('dec')[0].firstChild.data,holdsearch);
	} else {
          window.alert('object: "'+document.cent.object.value+'" not found');
        }
      } else if (xmlhttpSearch.status==450 || xmlhttpSearch.status==425 ) {
	window.alert('object: "'+document.cent.object.value+'" not found');
      } else {
        alert("Search: Problem retrieving XML data:" + xmlhttpSearch.status+" ("+xmlhttpSearch.statusText+")");
      }
    }
  }

  //*** function 3: actually go to the object
  function GotoObject(ra,dec,name) { 
    document.cent.cra.value = ra;
    document.cent.cdec.value = dec;
    if (document.cent.czoom.value<5) {
      document.cent.czoom.value = 5;
    }
    recent();
    var info=name
      + "<BR>RA:"+dec2dms(document.cent.cra.value/15) 
      + "<BR>Dec:"+  dec2dms(document.cent.cdec.value);

    if (!(typeof(omarker)=='undefined')) {omarker.setMap(null)}
    omarker = new google.maps.Marker({
	position: new google.maps.LatLng( document.cent.cdec.value, 180-document.cent.cra.value),
	map: map,
    });
    oinfowindow = new google.maps.InfoWindow ({ content: info });
    oinfowindow.open(map,omarker);
  }
  //********************


  //*** Listeners for the list buttons and their functions
  google.maps.event.addDomListener(document.cent.getimages, "click", function() { listimages('CFHT');                return false;});
  google.maps.event.addDomListener(document.cent.getstacks, "click", function() { listimages('CFHTMEGAPIPE');        return false;});
  google.maps.event.addDomListener(document.cent.getboth,   "click", function() { listimages('CFHTMEGAPIPE','CFHT'); return false;});


  function listimages () {
    url='https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca';
    url=url + qlang();
    for (i=0; i<arguments.length; i++) {
      if (i>0) {url=url+'&'}
      url=url+ "collection="+arguments[i];
    }
    url=url+qbounds() + qpars('url');
    window.open(url);

  }
  //********************


  function qlang() {
    var url;
    if (location.href.search("/fr/")>0) {
      url='/fr/recherche/?';
    } else {
      url='/en/search/?';
    }
    return url;
  }
  //***********


//*** function to get the bounds to pass to the search pages
  function qbounds() {
    // **** FIX THIS BETTER **** 

    if (1<0 && document.cent.object.value.length>0) {
      return '&Plane.position.bounds='+document.cent.object.value
    } else {
      var bounds = map.getBounds();
      var southWest = bounds.getSouthWest();
      var northEast = bounds.getNorthEast();
      var ra1 = 180-northEast.lng(); 
      var ra2 = 180-southWest.lng();
      var dec1 = southWest.lat(); 
      var dec2 = northEast.lat(); 
      var ext = (Math.abs(dec2-dec1) > Math.abs(ra1-ra2)) ? Math.abs(dec2-dec1) : Math.abs(ra1-ra2);
      ext=ext/2;
      var rac = (ra1+ra2)/2;
      var decc = (dec1 + dec2)/2;
      //alert(rac+"\n"+decc+"\n"+ext);
      if (map.getZoom()<=2) {
 	return '';
      } else {
	return '&Plane.position.bounds='+rac.toFixed(4)+' '+decc.toFixed(4)+' '+ext.toFixed(4);
      }
    }
  }

  //*******************

}


//*** function to figure out all the image parameters
//*** needs to be outside initialize
  function qpars(whatfor) {
    var filstr=(whatfor == 'url') ? 'Plane.energy.bandpassName' : 'F';
    var box,nameq,value;
    var cgi = '';
    for (var i=0; i< document.cent.fil.length; i++)       { 
      if (document.cent.fil[i].checked) { cgi=cgi+"&"+filstr+"="+document.cent.fil[i].value} 
    }
    if (whatfor == 'url') {
      return cgi;
    } 
    cgi=cgi +"&grid="    +document.cent.grid.checked
      +"&stacked=" +document.cent.stacked.checked
      +"&single="  +document.cent.single.checked;

    return cgi;
  }

google.maps.event.addDomListener(window, 'load', initialize);
