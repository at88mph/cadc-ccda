var holdsearch;
function simpleSearch(searchString) {
  holdsearch=searchString;
  var rdn=new Array;
  rdn=parseCFHTLS(holdsearch);
  if (rdn[0]!=0 && rdn[1]!=0) {
    document.cutout.ra.value=rdn[0];
    document.cutout.dec.value=rdn[1];
    
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
	document.cutout.ra.value=objects[0].getElementsByTagName('ra')[0].firstChild.data;
	document.cutout.dec.value=objects[0].getElementsByTagName('dec')[0].firstChild.data;
      } else {
	window.alert('object: "'+document.cutout.object.value+'" not found');
      }
    } else if (xmlhttpSearch.status==450 || xmlhttpSearch.status==425 ) {
      window.alert('object: "'+document.cutout.object.value+'" not found');
    } else {
      alert("Search: Problem retrieving XML data:" + xmlhttpSearch.status+" ("+xmlhttpSearch.statusText+")");
    }
  }
}


function examplesingle() {
  document.cutout.object.value='NGC 4410';
  document.cutout.ra.value='186.62';
  document.cutout.dec.value='9.03';
}

function clearsingle() {
  document.cutout.object.value='';
  document.cutout.ra.value='';
  document.cutout.dec.value='';
}

function examplemultiple() {
  document.cutout.TextArea.value="187.70593 12.39112\n12:28:23.9 08:51:27.8\nM49\nNGC 4410\nVCC 1316\n";
}


function clearmultiple() {
document.cutout.TextArea.value="";
}




function resolveenter(e)
{
  var key;     
  if(window.event) {
    key = window.event.keyCode; //IE
  } else {
    key = e.which; //firefox     
  }
  if (key == 13) {
    simpleSearch(document.cutout.object.value);
  }
  return (key != 13);
}