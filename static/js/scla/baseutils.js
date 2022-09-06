
  //*** decimal to dd:mm:ss
function dec2dms(d) {
  var d;
  var sig=(d<0) ? '-' : '';
  d=Math.abs(d);
  var deg=Math.floor(d);                               
  var min=Math.floor((d-deg)*60);                      
  var sec=(d-deg-min/60)*3600
    sec=sec.toFixed(1)
    if (sec>=60) {sec=sec-60; min=min+1}
  if (min>=60) {min=min-60; deg=deg+1}
  if (deg<10) {deg='0'+deg}
  if (min<10) {min='0'+min}
  if (sec<10) {sec='0'+sec}
  
  return  sig + deg + ':' + min + ':' + sec;
}

//*** convert any kind of coordinates to dd.dddddd
function gen2dec(val,type) {
  val=val.replace(/^\s*/,'');
  val=val.replace(/\s*$/,'');
  if (val.search(/[^\d\.-]/)<0) {
    fval= val; 
  } else if (val.search(/([-\d]+)([hd:\s]+)(\d+)([m:\s]+)([\d\.]+)/)>=0) {
    a=val.match(/([-\d]+)([hd:\s]+)(\d+)([m:\s]+)([\d\.]+)/)
      s=(a[1].search(/-/)>-1) ? -1 : 1;
    fval= 0+parseFloat(a[1]) + parseFloat(s*a[3]/60) + parseFloat(s*a[5]/3600);
    if (type == 'RA') {fval=fval*15;}
  } else if (val.search(/([-\d]+)([hd:\s]+)([\d\.]+)/)>=0) {
    a=val.match(/([-\d]+)([hd:\s]+)([\d\.]+)/)
      s=(a[1].search(/-/)>-1) ? -1 : 1;
    fval= 0+parseFloat(a[1]) + parseFloat(s*a[3]/60);
    if (type == 'RA') {fval=fval*15;}
  } else {
    fval=0;
  }
  return fval;
}


var holdsearch;
function simpleSearch(searchString) {
  holdsearch=searchString;
  var rdn=new Array;
  rdn=parseCFHTLS(holdsearch);
  //GLog.write(rdn[0]+"  "+rdn[1] + "  "+rdn[2]);
  if (rdn[0]!=0 && rdn[1]!=0) {
    GotoObject(rdn[0],rdn[1],rdn[2]);
    return;
  }
  var url="/cadc-target-resolver/find?format=xml&target="+escape(searchString);
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
    xmlhttpSearch=new ActiveXObject("Microsoft.XMLHTTP")
      if (xmlhttpSearch) {
        xmlhttpSearch.onreadystatechange = onSearchXMLDocLoaded;
        xmlhttpSearch.open("GET",url,true);
        xmlhttpSearch.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
        xmlhttpSearch.send();
      }
  }
}

//*** parses what the name resolver returns
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
