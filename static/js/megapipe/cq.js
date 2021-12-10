
function reclick(par) {
  var onoff
    for (i=0 ; i< document.formtab.colall.length ; i++) {
      if (document.formtab.colall[i].value==par) {onoff=document.formtab.colall[i].checked}
    }
  for (i=0 ; i< document.formtab.col.length ; i++) {
    if (document.formtab.col[i].value.substr(0,document.formtab.col[i].value.length-2)==par) {document.formtab.col[i].checked=onoff}
  }
  refreshquery()
}
//******

function hclick(tcheck,list) {
  var lista=list.split(",")
    
    for (j=0; j< lista.length; j++) {
      par=lista[j]
      for (i=0 ; i< document.formtab.col.length ; i++) {
	if (document.formtab.col[i].value==par) {document.formtab.col[i].checked=tcheck}
      }
    }
  refreshquery();
}
//******


function refreshmethod() { 

  document.formmain.format.options.length=0
    if (document.formmain.meth.value == 'sync') {
      document.formmain.format.options[0] = new Option("ASCII","ascii",false,false);
      document.formmain.format.options[1] = new Option("HTML","html",false,false);
      document.formmain.format.options[2] = new Option("Tab Separated Values","tsv",false,false);
      document.formmain.format.options[3] = new Option("Comma Separated Values","csv",false,false);
      document.formmain.format.options[4] = new Option("VOTable","votable",false,false);
    } else {
      document.formmain.format.options[0] = new Option("Tab Separated Values","tsv",false,false);
      document.formmain.format.options[1] = new Option("Comma Separated Values","csv",false,false);
      document.formmain.format.options[2] = new Option("VOTable","votable",false,false);
    }
  refreshaction();
}
//******


function refreshaction() {
  if (document.formmain.meth.value == 'sync') {
    if ( (document.formmain.format.value == 'tsv') ||
         (document.formmain.format.value == 'csv') ||
         (document.formmain.format.value == 'votable') 
        ) {
      document.formmain.action='https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cat/sync'
        } else {
      document.formmain.action='/cadcbin/megapipe/queryt.pl';
        }
  } else { 
    document.formmain.action='/cadcbin/megapipe/querya.pl';
  }
}
//******



function refreshfield() {
  var i;
  var f=(document.formpre.survey.value == 'deep') ? 'D' : 'W';
  for (i=1; i<=4; i++) { 
    if (document.getElementById('submit1').value.match(/submit/i)) {
      document.formpre.ofield.options[i]=new Option(f+i+' field only',f+i);
    } else {
      document.formpre.ofield.options[i]=new Option('champs '+f+i+' seulement',f+i);
    }
  }
  refreshquery();
}
//*****


function refreshquery() {
  var limit='';
  var cols='';
  var table='';
  var wheres='';
  var coluse=new Array;
  var where=new Array;
  var iuse=-1;
  var i;
  var filter= document.formpre.filter.value;
  var survey= document.formpre.survey.value;


  // ** which filter
  table="cfht."+survey+filter;


  //** sort out limit
  if (document.formpre.rows.value!=0) {
    limit="TOP "+document.formpre.rows.value+"\n";
  }


  //** position where condition
  if (
      (document.forms["formpre"].elements["srad"].value.length>0)
      && (document.forms["formpre"].elements["sra"].value.length>0)
      && (document.forms["formpre"].elements["sdec"].value.length>0)
      ){
    var rad=parseFloat(document.forms["formpre"].elements["srad"].value);
    if (document.forms["formpre"].elements["sunits"].value == 'arcsec') {rad=rad/3600}
    if (document.forms["formpre"].elements["sunits"].value == 'arcmin') {rad=rad/60}
    var racen =gen2dec(document.forms["formpre"].elements["sra"].value ,'RA');
    var deccen=gen2dec(document.forms["formpre"].elements["sdec"].value,'Dec');
    rad=rad.toFixed(4);
    where.push("contains(pos,circle('ICRS GEOCENTER'," +racen +","+deccen+","+rad+"))=1");
  }


  //** some pre-cooked where conditions

  if (document.formpre.bright.value=="no") {
    where.push(filter+'_MAG_AUTO <= '+filter+'_maglimit');
  }

  if (document.formpre.masked.value=="no") {
    where.push(filter+'_dubious =0');
  }

  if (document.formpre.ofield.value != 'all') {
    where.push("field = '"+document.formpre.ofield.value+"'");
  }

  //** sort out the columns and the lt,gt
  var els=document.getElementById("formtab");

  for (var i=0 ; i< els.length ; i++) {
    
    //** add columns to the select
    if (els.elements[i].name.substr(0,3) == 'col') {
      if (els.elements[i].checked) {
	coluse.push(els.elements[i].name.substr(3));
      }
    }

    //** add where conditions <
    if (els.elements[i].name.substr(0,2) == 'lt') {
      if (els.elements[i].value.length>0) { 
	where.push(els.elements[i].name.substr(2)+'<='+els.elements[i].value) 
      }
    }

    //** add where conditions >
    if (els.elements[i].name.substr(0,2) == 'gt') {
      if (els.elements[i].value.length>0) { 
	where.push(els.elements[i].name.substr(2)+'>='+els.elements[i].value) 
      }
    }
  }

  //** put it all together
  cols=coluse.join(',');
  if (where.length>0) {
    wheres="WHERE\n   "+where.join('\n   AND ')+"\n";
  } else {
    wheres='';
  }

  document.formmain.query.value="SELECT\n"
    +limit
    +'   '+cols
    +"\nFROM\n   "+table+"\n"
    +wheres;

  refreshaction();
  return;

}
//******

function gen2dec(val,type) {
  val=val.replace(/^\s*/g,'');
  val=val.replace(/\s*$/g,'');
  
  if (val.search(/[^\d\.\-\+]/)<0) {
    fval= val; 
  } else if (val.search(/([-\d]+)([hd:\s]+)(\d+)([m:\s]+)([\d\.]+)/)>=0) {
    a=val.match(/([-\d]+)([hd:\s]+)(\d+)([m:\s]+)([\d\.]+)/);
    s=(a[1].search(/-/)>-1) ? -1 : 1;
    fval= 0+parseFloat(a[1]) + parseFloat(s*a[3]/60) + parseFloat(s*a[5]/3600);
    if (type == 'RA') {fval=fval*15;}
  } else if (val.search(/([-\d]+)([hd:\s]+)([\d\.]+)/)>=0) {
    a=val.match(/([-\d]+)([hd:\s]+)([\d\.]+)/);
    s=(a[1].search(/-/)>-1) ? -1 : 1;
    fval= 0+parseFloat(a[1]) + parseFloat(s*a[3]/60);
    if (type == 'RA') {fval=fval*15;}
  } else {
    fval=0;
  }
  fval=parseFloat(fval);
  fval=fval.toFixed(6);
  return fval;
}
// ******

function addchange(fname) {
  var els=document.getElementById(fname);
  for (var i=0 ; i< els.length ; i++) {
    var el=els.elements[i];
    if (el.id != 'query') {
      if (el.type == 'select-one') { el.onchange=function(){refreshquery()} }
      if (el.type == 'textarea')   { el.onchange=function(){refreshquery()} }
      if (el.type == 'text')       { el.onchange=function(){refreshquery()} }
    }
  }
}
// ******

function listchange(fname) {
 var els=document.getElementById(fname);
  var fred=new Array;
  for (var i=0 ; i< els.length ; i++) {
    fred.push(els.elements[i].id+' '+els.elements[i].type+' '+els.elements[i].onchange);
  }
  document.getElementById('diag').innerHTML=fred.join('<BR>\n');
}
// ******

//**** stuff to do when the page loads
function init() {
  addchange('formpre');
  addchange('formtab');

  document.getElementById('survey').onchange=function() {refreshquery(); refreshfield();}
  document.getElementById('meth').onchange=function() {refreshmethod()}
  document.getElementById('format').onchange=function() {refreshaction()}
  document.getElementById('reset1').onclick=function() {refreshquery()}
  document.getElementById('reset2').onclick=function() {refreshquery()}
  refreshmethod();
  refreshquery();
}



window.onload=function(){init()};