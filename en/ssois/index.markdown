---
layout: cadc
lang: en
permalink: /en/ssois/index.html
title: Solar System Object Image Search
altLangPage: /fr/rioss/index.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: ssois

breadcrumbs:
    - link: /en/ssois/index.html
      title: SSOIS
---

<p>
This page allows you to search for images of
solar system objects. There are several search methods:
</p>
<ul>
	<li><a href="#name">Search by object name</a></li>
	<li><a href="#arc">Search by extrapolating from an arc</a></li>
	<li><a href="#oe">Search from a set of orbital elements</a></li>
	<li><a href="#ephem">Search from a ephemeris you supply</a></li>
</ul>
<p>
Please read the <a href="/en/ssois/documentation.html">Documentation</a>. 
For more details read the following paper: <a rel="external" href="https://adsabs.harvard.edu/abs/2012PASP..124..579G">Gwyn, Hill and Kavelaars (2012)</a>.
Please cite this paper in your publications.
</p>
<hr/>
<a id="name"></a>
<h2>Search by object name</h2>
<form name="nameform" action="/cadcbin/ssos/ssosclf.pl" id="nameform">
	<input type="hidden" name="lang" value="en"/>
	<div class="form-group">
		<label class="control-label" for="object"><strong>Enter object name(s)</strong> one per row</label>
		<textarea class="form-control" id="object" name="object" cols="20" rows="5"></textarea>
	</div>
	<fieldset class="mrgn-bttm-md">
		<div class="form-group">
			<legend class="hidden">Select emphemeris generator:</legend>
			<strong>Select emphemeris generator:</strong>
			<div class="radio">
				<label class="control-label" for="bynameCADC">
					<input type="radio" class="form-control" name="search" value="bynameCADC" id="bynameCADC" /> CADC only</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameHorizons">
					<input type="radio" class="form-control" name="search" value="bynameHorizons" id="bynameHorizons" /> JPL Horizons (<a rel="external" href="http://ssd.jpl.nasa.gov/horizons.cgi">Link to the JPL Horizons ephemeris generator</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameMPC">
					<input type="radio" class="form-control" name="search" value="bynameMPC" id="bynameMPC"/> Minor Planet Center (<a rel="external" href="https://minorplanetcenter.net/iau/MPEph/MPEph.html">Link to the Minor Planet Center ephemeris generator</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameLowell">
					<input type="radio" class="form-control" name="search" value="bynameLowell" id="bynameLowell" /> Lowell Observtory (<a rel="external" href="http://asteroid.lowell.edu/asteph">Link to the Lowell Observtory ephemeris generator</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameall">
					<input type="radio" class="form-control" name="search" value="bynameall" id="bynameall" checked="checked" /> All of the above</label>
			</div>
		</div>
	</fieldset>
	<strong>Date range for search:</strong>
	<div class="form-group">
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="nameepoch1">from Date 1:&nbsp;</label>
			<input type="text" class="form-control" id="nameepoch1" name="epoch1" value=""/>
		</div>
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="nameepoch2">to Date 2:&nbsp;</label>
			<input type="text" class="form-control" id="nameepoch2" name="epoch2" value=""/>
		</div>
		<input type="button" class="btn btn-default" value="Set to full date range" onclick="nameform.epoch1.value='1990 01 01';  nameform.epoch2.value=today"/>
	</div>
	<div class="form-group form-inline">
		<label class="control-label" for="nameeellipse"><strong>Positional uncertainty:</strong></label>
		<input type="text" class="form-control" id="nameeellipse" name="eellipse" value="" size="4" />
		<label class="control-label" for="nameeunits" class="hidden">Error units</label>
		<select class="form-control" id="nameeunits" name="eunits">
			<option value="arcseconds">Arcseconds</option>
			<option value="arcminutes">Arcminutes</option>
		</select>
	</div>
	<fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">Resolve to image extension?:</legend>
			<strong>Resolve to image extension?:&nbsp;</strong>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="nameextresyes" name="extres" value="yes"/>
				<label class="control-label" for="nameextresyes">Yes</label>
			</div>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="nameextresno" name="extres" value="no" checked="checked" onclick="nameform.xyres[1].checked=true" />
				<label class="control-label" for="nameextresno">No</label>
			</div>
		</div>
	</fieldset>
	<fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">Resolve to X,Y?:</legend>
			<strong>Resolve to X,Y?:&nbsp;</strong>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="namexyresyes" name="xyres" value="yes" onclick="nameform.extres[0].checked=true" />
				<label class="control-label" for="namexyresyes">Yes</label>
			</div>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="namexyresno" name="xyres" value="no" checked="checked" />
				<label class="control-label" for="namexyresno">No</label>
			</div>
		</div>
	</fieldset>
	<input type="button" 
			id="nametelinstsel:show" 
			name="showhide"
			value="Show telescope/instrument list" 
			onclick="togglehide(nameform)" 
			class="btn btn-default mrgn-bttm-sm" />
	<div id="telinst_nameform" class="hidden"></div><br/>
	<input type="submit" value="Search by name" class="btn btn-danger" />
	<input type="button" value="Clear form" class="btn btn-default"
			onclick="
			nameform.object.value='';
			nameform.epoch1.value='';
			nameform.epoch2.value='';
			nameform.eellipse.value='';
			nameform.search[0].checked=true;
			nameform.extres[1].checked=true;
			nameform.xyres[1].checked=true;" />
	<input type="button" value="Show example" class="btn btn-default"
			onclick="
			nameform.object.value='Yasutani\n2006 RJ43\n45302\n6641 P-L';
			nameform.epoch1.value='2006 09 01';
			nameform.epoch2.value='2006 09 30';
			nameform.eellipse.value='';
			nameform.search[0].checked=true;
			nameform.extres[1].checked=true;
			nameform.xyres[1].checked=true; "/>
</form>
<hr/>
<a id="arc"></a>
<h2>Search by arc</h2>
<form name="arcform" action="/cadcbin/ssos/ssosclf.pl" method="get" class="form-inline" id="arcform">
	<input type="hidden" name="lang" value="en"/>
	<div class="form-group">
  		<label class="control-label" for="arcobs"><strong>Enter observations (in MPC format)</strong></label>
    	<textarea class="form-control" id="arcobs" name="obs" cols="80" rows="10" style="font-family: monospace">NNNNNPPPPPPPANNYYYY MM DD.ddddd HH MM SS.dd sDD MM SS.d          MM.M B      OOO</textarea>
	</div>
    <fieldset>
		<legend class="hidden">Select orbit fitter:</legend>
		<strong>Select orbit fitter:</strong>
		<div class="form-group">
			<div class="radio">
				<input class="form-control" id="arcbern" type="radio" name="search" value="bern" checked="checked" onclick="errorlogic('bern')" />
				<label class="control-label" for="arcbern">Bernstein (<a rel="external" href="http://www.iop.org/EJ/article/1538-3881/120/6/3323/200298.text.html">Read Bernstein and Khushalani (2000)</a>)</label>
			</div>
			<div class="radio">
				<input class="form-control" id="arcmpc" type="radio" name="search" value="mpc" onclick="errorlogic('mpc')" />
				<label class="control-label" for="arcmpc">Minor Planet Center (<a rel="external" href="https://minorplanetcenter.net/iau/MPEph/NewObjEphems.html">Go to the Minor Planet Center new object ephemeris generator</a>)</label>
			</div>
		</div>
    </fieldset>
	<div class="form-group">
		<strong>Date range for search:</strong>
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="arcepoch1">from Date 1: </label>
			<input type="text" class="form-control" id="arcepoch1" name="epoch1" value="" />
		</div>
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="arcepoch2">to Date 2: </label>
			<input type="text" class="form-control" id="arcepoch2" name="epoch2" value="" />
		</div>
    	<input type="button" value="Set to full date range" onclick="arcform.epoch1.value='1990 01 01';  arcform.epoch2.value=today"/>
	</div>    
    <label class="control-label" for="arceellipse">
      <strong>Positional uncertainty:</strong>
    </label>
    <input type="text" class="form-control" id="arceellipse" name="eellipse" value="" size="4" />
    <label class="control-label" for="arceunits" class="hidden">Error units</label>
    <select id="arceunits" name="eunits">
      <option value="arcseconds">Arcseconds</option>
      <option value="arcminutes">Arcminutes</option>
    </select>
    <fieldset class="form-horizontal">
      <legend class="hidden">Resolve to image extension?:</legend>
      <strong>Resolve to image extension?:</strong>
      <input type="radio" class="form-control" id="arcextresyes" name="extres" value="yes"/>
      <label class="control-label" for="arcextresyes">Yes</label>
      <input type="radio" class="form-control"  id="arcextresno" name="extres" value="no" checked="checked" onclick="arcform.xyres[1].checked=true" />
      <label class="control-label" for="arcextresno">No</label>
    </fieldset>
    <fieldset class="form-horizontal">
      <legend class="hidden">Resolve to X,Y?:</legend>
      <strong>Resolve to X,Y?:</strong>
      <input type="radio" class="form-control" id="arcxyresyes" name="xyres" value="yes" onclick="arcform.extres[0].checked=true" />
      <label class="control-label" for="arcxyresyes">Yes</label>
      <input type="radio" class="form-control"  id="arcxyresno" name="xyres" value="no" checked="checked" />
      <label class="control-label" for="arcxyresno">No</label>
    </fieldset>
    <input type="button" 
	     id="arctelinstsel:show" 
	     name="showhide"
	     value="Show telescope/instrument list" 
	     onclick="togglehide(arcform)" 
	     />  
    <div id="telinst_arcform" class="hidden">
    </div>
    <br/>
<input type="submit" class="btn btn-primary" value="Search by arc" style="background-color: #ff1d1d"/>
<input type="button" class="btn btn-default" value="Clear form"
onclick="
arcform.obs.value='';
arcform.epoch1.value='';
arcform.epoch2.value='';
arcform.eellipse.value='';
arcform.search[0].checked=true;
arcform.extres[1].checked=true;
arcform.xyres[1].checked=true;
"/><input type="button" class="btn btn-default" value="Show example"
onclick="
arcform.obs.value='NNNNNPPPPPPPANNYYYY MM DD.ddddd HH MM SS.dd sDD MM SS.d          MM.M B      OOO\n     C000010  C2007 10 09.55962 04 55 18.95 +03 28 13.4          21.6 r      568\n     C000010  C2007 10 09.56087 04 55 18.96 +03 28 12.9          21.4 r      568\n     C000010  C2007 10 09.56214 04 55 18.95 +03 28 12.5          21.5 r      568\n     C000010  C2007 10 09.56340 04 55 18.95 +03 28 11.9          21.5 r      568\n     C000010  C2007 10 09.56465 04 55 18.95 +03 28 11.5          21.6 r      568\n     C000010  C2007 10 09.56590 04 55 18.95 +03 28 11.0          21.6 r      568\n     C000010  C2007 10 09.56716 04 55 18.95 +03 28 10.5          21.6 r      568\n     C000010  C2007 10 09.56844 04 55 18.95 +03 28 09.8          21.6 r      568\n     C000010  C2007 10 09.56970 04 55 18.95 +03 28 09.6          23.3 r      568\n     C000010  C2007 10 09.57095 04 55 18.95 +03 28 08.9          21.5 r      568\n     C000010  C2007 10 09.57220 04 55 18.95 +03 28 08.4          21.5 r      568\n     C000010  C2007 10 09.57349 04 55 18.95 +03 28 08.0          21.6 r      568\n     C000010  C2007 10 09.57474 04 55 18.95 +03 28 07.5          21.6 r      568\n     C000010  C2007 10 09.57600 04 55 18.95 +03 28 07.0          21.6 r      568\n     C000010  C2007 10 09.57725 04 55 18.95 +03 28 06.4          21.5 r      568\n     C000010  C2007 10 09.57850 04 55 18.95 +03 28 05.9          21.6 r      568\n     C000010  C2007 10 09.57975 04 55 18.95 +03 28 05.4          21.7 r      568\n     C000010  C2007 10 09.58101 04 55 18.95 +03 28 05.0          21.7 r      568\n     C000010  C2007 10 09.58227 04 55 18.95 +03 28 04.4          21.5 r      568\n     C000010  C2007 10 09.58352 04 55 18.95 +03 28 03.9          21.4 r      568\n     C000010  C2007 10 10.59292 04 55 19.42 +03 21 22.6          20.6 r      568\n     C000010  C2007 10 10.59417 04 55 19.41 +03 21 22.1          20.8 r      568\n     C000010  C2007 10 10.59542 04 55 19.41 +03 21 21.6          21.1 r      568\n     C000010  C2007 10 10.59667 04 55 19.41 +03 21 21.2          21.2 r      568\n     C000010  C2007 10 10.59793 04 55 19.40 +03 21 20.7          21.5 r      568\n     C000010  C2007 10 10.59918 04 55 19.40 +03 21 20.1          21.5 r      568\n     C000010  C2007 10 10.60043 04 55 19.41 +03 21 19.6          21.5 r      568\n     C000010  C2007 10 10.60169 04 55 19.40 +03 21 19.2          21.6 r      568\n     C000010  C2007 10 10.60297 04 55 19.40 +03 21 18.5          21.7 r      568\n     C000010  C2007 10 10.60422 04 55 19.40 +03 21 18.1          21.7 r      568\n     C000010  C2007 10 11.63344 04 55 18.45 +03 14 27.3          21.9 g      568\n     C000010  C2007 10 11.63470 04 55 18.44 +03 14 26.8          21.9 g      568\n     C000010  C2007 10 11.63597 04 55 18.43 +03 14 26.2          22.1 g      568\n     C000010  C2007 10 11.63722 04 55 18.43 +03 14 25.6          22.2 g      568\n     C000010  C2007 10 11.63848 04 55 18.42 +03 14 25.2          22.1 g      568\n     C000010  C2007 10 11.63973 04 55 18.42 +03 14 24.7          22.1 g      568\n     C000010  C2007 10 12.62684 04 55 16.24 +03 07 49.5          22.0 g      568\n     C000010  C2007 10 12.62810 04 55 16.23 +03 07 49.0          22.0 g      568\n     C000010  C2007 10 12.62935 04 55 16.23 +03 07 48.5          22.0 g      568\n     C000010  C2007 10 12.63060 04 55 16.22 +03 07 48.0          22.1 g      568\n     C000010  C2007 10 12.63185 04 55 16.22 +03 07 47.5          22.1 g      568\n     C000010  C2007 10 12.63311 04 55 16.21 +03 07 47.0          21.9 g      568\n     C000010  C2007 10 12.63437 04 55 16.21 +03 07 46.4          22.1 g      568\n     C000010  C2007 10 12.63562 04 55 16.20 +03 07 46.0          21.9 g      568\n     C000010  C2007 10 12.63687 04 55 16.20 +03 07 45.5          22.0 g      568\n     C000010  C2007 10 12.63813 04 55 16.19 +03 07 45.0          21.9 g      568\n     C000010  C2007 10 14.54423 04 55 08.38 +02 54 58.7          22.2 g      568\n     C000010  C2007 10 14.54548 04 55 08.37 +02 54 58.4          22.0 g      568\n     C000010  C2007 10 14.54674 04 55 08.36 +02 54 57.7          22.1 g      568\n     C000010  C2007 10 14.54799 04 55 08.36 +02 54 57.2          22.1 g      568\n     C000010  C2007 10 14.54925 04 55 08.35 +02 54 56.6          22.1 g      568\n     C000010  C2007 10 14.55061 04 55 08.34 +02 54 56.3          22.0 g      568\n     C000010  C2007 10 14.55186 04 55 08.33 +02 54 55.7          22.0 g      568\n     C000010  C2007 10 14.55311 04 55 08.32 +02 54 55.2          22.0 g      568\n     C000010  C2007 10 14.55436 04 55 08.31 +02 54 54.7          22.0 g      568\n     C000010  C2007 10 14.55562 04 55 08.30 +02 54 54.2          22.1 g      568\n     C000010  C2007 10 14.55687 04 55 08.29 +02 54 53.7          22.1 g      568\n     C000010  C2007 10 14.55812 04 55 08.28 +02 54 53.2          22.1 g      568\n     C000010  C2007 10 14.55937 04 55 08.27 +02 54 52.7          22.0 g      568\n     C000010  C2007 10 14.56062 04 55 08.28 +02 54 52.1          22.0 g      568\n     C000010  C2007 10 14.56187 04 55 08.26 +02 54 51.7          21.9 g      568\n     C000010  C2007 10 14.58888 04 55 08.08 +02 54 40.8          21.5 r      568\n     C000010  C2007 10 14.59013 04 55 08.07 +02 54 40.4          21.4 r      568\n     C000010  C2007 10 14.59138 04 55 08.06 +02 54 39.8          21.4 r      568\n     C000010  C2007 10 14.59263 04 55 08.05 +02 54 39.3          21.5 r      568\n     C000010  C2007 10 14.59388 04 55 08.04 +02 54 38.8          21.4 r      568\n     C000010  C2007 10 14.59515 04 55 08.03 +02 54 38.1          21.4 r      568\n     C000010  C2007 10 14.60571 04 55 07.96 +02 54 34.0          21.4 r      568\n     C000010  C2007 10 14.60704 04 55 07.95 +02 54 33.4          21.6 r      568\n     C000010  C2007 10 14.60830 04 55 07.94 +02 54 33.0          21.3 r      568\n     C000010  C2007 10 14.60955 04 55 07.93 +02 54 32.6          21.5 r      568\n     C000010  C2007 10 14.61080 04 55 07.92 +02 54 31.9          21.3 r      568\n     C000010  C2007 10 14.61205 04 55 07.91 +02 54 31.4          21.5 r      568\n     C000010  C2007 10 14.61330 04 55 07.91 +02 54 31.0          21.5 r      568\n     C000010  C2007 10 14.61455 04 55 07.89 +02 54 30.5          21.3 r      568\n     C000010  C2007 10 14.61581 04 55 07.89 +02 54 30.0          21.5 r      568\n     C000010  C2007 10 14.61706 04 55 07.88 +02 54 29.4          21.5 r      568\n     C000010  C2007 10 14.61833 04 55 07.88 +02 54 29.0          21.4 r      568\n     C000010  C2007 10 14.61958 04 55 07.86 +02 54 28.3          21.4 r      568\n     C000010  C2007 10 14.62083 04 55 07.85 +02 54 27.9          21.4 r      568\n     C000010  C2007 10 14.62208 04 55 07.84 +02 54 27.4          21.4 r      568\n';
arcform.epoch1.value='2007 10 01';
arcform.epoch2.value='2007 10 30';
arcform.eellipse.value='';
arcform.search[0].checked=true;
arcform.extres[1].checked=true;
arcform.xyres[1].checked=true;
"/>
</form>
<hr/>
<a id="oe"></a>
<h2>Search by orbital elements</h2>
<p>
  Orbital elements should be in heliocentric J2000.0 coordinates.
</p>
<form name="oeform" action="/cadcbin/ssos/ssosclf.pl" method="get" class="form-inline" id="oeform">
  <input type="hidden" name="lang" value="en"/>
  <input type="hidden" name="search" value="orbel"/>
  <label class="control-label" for="oeepoch"><strong>Epoch:</strong></label><input id="oeepoch" type="text" name="epoch" value=""/> <br/>
  <label class="control-label" for="oea"><strong>Semi-major axis:</strong></label><input id="oea" type="text" name="a" value=""/> <br/>
  <label class="control-label" for="oee"><strong>Eccentricity:</strong></label><input id="oee" type="text" name="e" value=""/> <br/>
  <label class="control-label" for="oei"><strong>Inclination:</strong></label><input id="oei" type="text" name="i" value=""/> <br/>
  <label class="control-label" for="oelongi"><strong>Longitude of the ascending node:</strong></label><input id="oelongi" type="text" name="longi" value=""/> <br/>
  <label class="control-label" for="oeperi"><strong>Argument of perihelion:</strong></label><input id="oeperi" type="text" name="peri" value=""/> <br/>
  <label class="control-label" for="oeanom"><strong>Mean anomaly at epoch:</strong></label><input id="oeanom" type="text" name="anom" value=""/> <br/>
  <strong>Date range for search:</strong><br/>
  <label class="control-label" for="oeepoch1">from Date 1:</label><input type="text" class="form-control" id="oeepoch1" name="epoch1" value=""/><br/>
  <label class="control-label" for="oeepoch2">to Date 2:  </label><input type="text" class="form-control" id="oeepoch2" name="epoch2" value=""/><br/>
  <input type="button" value="Set to full date range" onclick="oeform.epoch1.value='1990 01 01';  oeform.epoch2.value=today"/><br/>
  <label class="control-label" for="oeeellipse">
    <strong>Positional uncertainty:</strong>
    </label>
  <input type="text" class="form-control" id="oeeellipse" name="eellipse" value="" size="4" />
    <label class="control-label" for="oeeunits" class="hidden">Error units</label>
    <select id="oeeunits" name="eunits">
      <option value="arcseconds">Arcseconds</option>
      <option value="arcminutes">Arcminutes</option>
    </select>
    <fieldset class="form-horizontal">
      <legend class="hidden">R&eacute;soudre &agrave; l'extension d'image?:</legend>
      <strong>Resolve to image extension?:</strong>
       <input type="radio" class="form-control" id="oeextresyes" name="extres" value="yes"/>
       <label class="control-label" for="oeextresyes">Yes</label>
      <input type="radio" class="form-control"  id="oeextresno" name="extres" value="no" checked="checked" onclick="oeform.xyres[1].checked=true" />
      <label class="control-label" for="oeextresno">No</label>
    </fieldset>
    <fieldset class="form-horizontal">
      <legend class="hidden">Resolve to X,Y?:</legend>
      <strong>Resolve to image X,Y?:</strong>
	<input type="radio" class="form-control" id="oexyresyes" name="xyres" value="yes" onclick="oeform.extres[0].checked=true" />
	<label class="control-label" for="oexyresyes">Yes</label>
	<input type="radio" class="form-control"  id="oexyresno" name="xyres" value="no" checked="checked" />
	<label class="control-label" for="oexyresno">No</label>
    </fieldset>
    <input type="button" 
	     id="oetelinstsel:show" 
	     name="showhide"
	     value="Show telescope/instrument list" 
	     onclick="togglehide(oeform)" 
	     />  
    <div id="telinst_oeform" class="hidden">
    </div>
    <br/>
    <input type="submit" value="Search by orbital elements" style="background-color: #ff1d1d"/>
    <input type="button" value="Clear form"
	   onclick="
		    oeform.longi.value='';
		    oeform.epoch.value='';
		    oeform.a.value='';
		    oeform.e.value='';
		    oeform.i.value='';
		    oeform.peri.value='';
		    oeform.anom.value='';
		    oeform.epoch1.value='';
		    oeform.epoch2.value='';
		    oeform.eellipse.value='';
		    oeform.extres[1].checked=true;
		    oeform.xyres[1].checked=true;
		    "/>
    <input type="button" value="Show example"
	   onclick="
		    oeform.longi.value='43.05408';
		    oeform.epoch.value='2010-01-04';
		    oeform.a.value='2.7413806';
		    oeform.e.value='0.0855139';
		    oeform.i.value='6.98707';
		    oeform.peri.value='120.67443';
		    oeform.anom.value='206.88213';
		    oeform.epoch1.value='2003 01 01';
		    oeform.epoch2.value='2004 01 30';
		    oeform.eellipse.value='';
		    oeform.extres[1].checked=true;
		    oeform.xyres[1].checked=true;
		    "/>
  </form>
<hr/>
<a id="ephem"></a>
<h2>Search by ephemeris</h2>
  <form name="ephemform" action="/cadcbin/ssos/ssosclf.pl" method="post" class="form-inline" id="ephemform">
   <input type="hidden" name="lang" value="en"/>
    <input type="hidden" name="search" value="userephem"/>
    <label class="control-label" for="ephemtext">
      <strong>Enter a series of date/time, RA and Dec values:</strong>
    </label> 
    <br/>
    (<a href="/en/ssois/documentation.html#ephem">See the documentation for a list of accepted formats</a>)
    <br/>
    <textarea class="form-control" id="ephemtext" name="ephem" cols="80" rows="10" style="font-family: monospace">date time RA Dec</textarea>
    <br/>
    <label class="control-label" for="ephemeellipse">
      <strong>Positional uncertainty:</strong>
    </label>
    <input type="text" class="form-control" id="ephemeellipse" name="eellipse" value="" size="4" />
    <label class="control-label" for="ephemeunits" class="hidden">Error units</label>
    <select id="ephemeunits" name="eunits">
      <option value="arcseconds">Arcseconds</option>
      <option value="arcminutes">Arcminutes</option>
    </select>
    <fieldset class="form-horizontal">
      <legend class="hidden">R&eacute;soudre &agrave; l'extension d'image?:</legend>
      <strong>Resolve to image extension?:</strong>
      <input type="radio" class="form-control" id="ephemextresyes" name="extres" value="yes"/>
      <label class="control-label" for="ephemextresyes">Yes</label>
      <input type="radio" class="form-control"  id="ephemextresno" name="extres" value="no" checked="checked" onclick="ephemform.xyres[1].checked=true" />
      <label class="control-label" for="ephemextresno">No</label>
    </fieldset>
    <fieldset class="form-horizontal">
      <legend class="hidden">Resolve to X,Y?:</legend>
      <strong>Resolve to image X,Y?:</strong>
	<input type="radio" class="form-control" id="ephemxyresyes" name="xyres" value="yes" onclick="ephemform.extres[0].checked=true" />
	<label class="control-label" for="ephemxyresyes">Yes</label>
	<input type="radio" class="form-control"  id="ephemxyresno" name="xyres" value="no" checked="checked" />
	<label class="control-label" for="ephemxyresno">No</label>
    </fieldset>
    <input type="button" 
	     id="ephemtelinstsel:show" 
	     name="showhide"
	     value="Show telescope/instrument list" 
	     onclick="togglehide(ephemform)" 
	     />  
    <div id="telinst_ephemform" class="hidden">
    </div>
    <br/>
      <input type="submit" value="Search by ephemeris" style="background-color: #ff1d1d"/>      
      <input type="button" value="Clear form"
	     onclick="
		      ephemform.ephem.value='';
		      ephemform.eellipse.value='';
		      ephemform.extres[1].checked=true;
		      ephemform.xyres[1].checked=true;
		      "/>
      <input type="button" value="Show example"
	     onclick="ephemform.ephem.value='2003-06-01  00:00:00  22:06:59.7  -17:46:23\n2003-06-02  00:00:00  22:07:38.0  -17:45:29\n2003-06-03  00:00:00  22:08:15.2  -17:44:43\n2003-06-04  00:00:00  22:08:51.1  -17:44:03\n2003-06-05  00:00:00  22:09:25.8  -17:43:32\n2003-06-06  00:00:00  22:09:59.2  -17:43:07\n2003-06-07  00:00:00  22:10:31.4  -17:42:50\n2003-06-08  00:00:00  22:11:02.2  -17:42:41\n2003-06-09  00:00:00  22:11:31.8  -17:42:39\n2003-06-10  00:00:00  22:12:00.1  -17:42:45\n2003-06-11  00:00:00  22:12:27.1  -17:42:58\n2003-06-12  00:00:00  22:12:52.7  -17:43:20\n2003-06-13  00:00:00  22:13:17.0  -17:43:49\n2003-06-14  00:00:00  22:13:39.9  -17:44:26\n2003-06-15  00:00:00  22:14:01.5  -17:45:11\n2003-06-16  00:00:00  22:14:21.6  -17:46:05\n2003-06-17  00:00:00  22:14:40.4  -17:47:06\n2003-06-18  00:00:00  22:14:57.7  -17:48:16\n2003-06-19  00:00:00  22:15:13.5  -17:49:33\n2003-06-20  00:00:00  22:15:27.9  -17:51:00\n2003-06-21  00:00:00  22:15:40.9  -17:52:34\n2003-06-22  00:00:00  22:15:52.3  -17:54:17\n2003-06-23  00:00:00  22:16:02.2  -17:56:08\n2003-06-24  00:00:00  22:16:10.6  -17:58:07\n2003-06-25  00:00:00  22:16:17.5  -18:00:15\n2003-06-26  00:00:00  22:16:22.8  -18:02:32\n2003-06-27  00:00:00  22:16:26.6  -18:04:56\n2003-06-28  00:00:00  22:16:28.7  -18:07:29\n2003-06-29  00:00:00  22:16:29.3  -18:10:10\n2003-06-30  00:00:00  22:16:28.3  -18:13:00\n2003-07-01  00:00:00  22:16:25.8  -18:15:57\n2003-07-02  00:00:00  22:16:21.6  -18:19:03\n2003-07-03  00:00:00  22:16:15.8  -18:22:16\n2003-07-04  00:00:00  22:16:08.4  -18:25:38\n2003-07-05  00:00:00  22:15:59.4  -18:29:07\n2003-07-06  00:00:00  22:15:48.7  -18:32:44\n2003-07-07  00:00:00  22:15:36.5  -18:36:28\n2003-07-08  00:00:00  22:15:22.6  -18:40:20\n2003-07-09  00:00:00  22:15:07.2  -18:44:19\n2003-07-10  00:00:00  22:14:50.1  -18:48:24\n2003-07-11  00:00:00  22:14:31.5  -18:52:37\n2003-07-12  00:00:00  22:14:11.2  -18:56:56\n2003-07-13  00:00:00  22:13:49.4  -19:01:21\n2003-07-14  00:00:00  22:13:26.0  -19:05:53\n2003-07-15  00:00:00  22:13:01.0  -19:10:31\n2003-07-16  00:00:00  22:12:34.5  -19:15:14\n2003-07-17  00:00:00  22:12:06.4  -19:20:03\n2003-07-18  00:00:00  22:11:36.8  -19:24:57\n2003-07-19  00:00:00  22:11:05.6  -19:29:56\n2003-07-20  00:00:00  22:10:32.9  -19:35:00\n2003-07-21  00:00:00  22:09:58.7  -19:40:09\n2003-07-22  00:00:00  22:09:23.1  -19:45:21\n2003-07-23  00:00:00  22:08:46.0  -19:50:37\n2003-07-24  00:00:00  22:08:07.5  -19:55:57\n2003-07-25  00:00:00  22:07:27.7  -20:01:19\n2003-07-26  00:00:00  22:06:46.4  -20:06:45\n2003-07-27  00:00:00  22:06:03.9  -20:12:12\n2003-07-28  00:00:00  22:05:20.0  -20:17:42\n2003-07-29  00:00:00  22:04:34.9  -20:23:13\n2003-07-30  00:00:00  22:03:48.7  -20:28:45\n2003-07-31  00:00:00  22:03:01.2  -20:34:18\n2003-08-01  00:00:00  22:02:12.7  -20:39:51\n2003-08-02  00:00:00  22:01:23.1  -20:45:24\n2003-08-03  00:00:00  22:00:32.5  -20:50:57\n2003-08-04  00:00:00  21:59:41.0  -20:56:28\n2003-08-05  00:00:00  21:58:48.6  -21:01:58\n2003-08-06  00:00:00  21:57:55.3  -21:07:26\n2003-08-07  00:00:00  21:57:01.3  -21:12:51\n2003-08-08  00:00:00  21:56:06.6  -21:18:14\n2003-08-09  00:00:00  21:55:11.2  -21:23:34\n2003-08-10  00:00:00  21:54:15.2  -21:28:50\n2003-08-11  00:00:00  21:53:18.7  -21:34:03\n2003-08-12  00:00:00  21:52:21.7  -21:39:11\n2003-08-13  00:00:00  21:51:24.3  -21:44:14\n2003-08-14  00:00:00  21:50:26.5  -21:49:12\n2003-08-15  00:00:00  21:49:28.5  -21:54:05\n2003-08-16  00:00:00  21:48:30.3  -21:58:52\n2003-08-17  00:00:00  21:47:31.9  -22:03:33\n2003-08-18  00:00:00  21:46:33.4  -22:08:08\n2003-08-19  00:00:00  21:45:34.9  -22:12:36\n2003-08-20  00:00:00  21:44:36.5  -22:16:56\n2003-08-21  00:00:00  21:43:38.2  -22:21:10\n2003-08-22  00:00:00  21:42:40.1  -22:25:15\n2003-08-23  00:00:00  21:41:42.3  -22:29:13\n2003-08-24  00:00:00  21:40:44.8  -22:33:03\n2003-08-25  00:00:00  21:39:47.8  -22:36:44\n2003-08-26  00:00:00  21:38:51.2  -22:40:16\n2003-08-27  00:00:00  21:37:55.2  -22:43:40\n2003-08-28  00:00:00  21:36:59.7  -22:46:54\n2003-08-29  00:00:00  21:36:05.0  -22:49:59\n2003-08-30  00:00:00  21:35:11.1  -22:52:55\n2003-08-31  00:00:00  21:34:17.9  -22:55:41\n2003-09-01  00:00:00  21:33:25.6  -22:58:17\n2003-09-02  00:00:00  21:32:34.3  -23:00:44\n2003-09-03  00:00:00  21:31:44.0  -23:03:00\n2003-09-04  00:00:00  21:30:54.7  -23:05:07\n2003-09-05  00:00:00  21:30:06.6  -23:07:03\n2003-09-06  00:00:00  21:29:19.6  -23:08:50\n2003-09-07  00:00:00  21:28:33.8  -23:10:26\n2003-09-08  00:00:00  21:27:49.2  -23:11:52\n';
		      ephemform.eellipse.value='';
		      ephemform.extres[1].checked=true;
		      ephemform.xyres[1].checked=true;
		      "/>
  </form>
<div>
<script type="text/javascript">
  var today;
  function onLoad() {
  now=new Date();
  year=now.getYear()+1900;
  month=now.getMonth()+1;
  day=now.getDate();
  today=year + ' ' + month + ' '+day
  errorlogic('bern')
  var ttags  
  }
  function telinstreset(aform,amatch) {
    var inputs = aform.getElementsByTagName('input');
    for (i = 0; i < inputs.length; ++i) {
	if (inputs[i].name == 'telinst') {
	    inputs[i].checked=(amatch=="all");
	}
    }
}
function telinstselfunc(aform) {
    var inputs = aform.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].name == 'telinst') {
	    // default is off
	    inputs[i].checked=false;
	    // turn it on if one of the wavelength buttons matches
	    if (inputs[i].tt.search(/optical/i)>-1 && aform.optical.checked) { inputs[i].checked=true;}
	    if (inputs[i].tt.search(/ir/i)>-1 && aform.ir.checked)           { inputs[i].checked=true;}
	    if (inputs[i].tt.search(/submm/i)>-1 && aform.submm.checked)     { inputs[i].checked=true;}
	    // turn it off if the big button is checked and it isn't big
	    if (aform.big.checked &&  inputs[i].tt.search(/big/i)<0) { inputs[i].checked=false; }
	}
    }
}
function togglehide(aform) {
    // delete all existing nodes
    var show=aform.showhide.value.match(/Show/);
    var formlist = ["name","arc","oe","ephem"];
    for (var i=0; i<formlist.length; i++) {
	document.getElementById(formlist[i]+'form').showhide='Show telescope/instrument list';
	aform.showhide.value='Show telescope/instrument list';
	var divrel=document.getElementById('telinst_'+formlist[i]+'form');
	while (divrel.hasChildNodes()) {
	    divrel.removeChild(divrel.lastChild);
	}
	divrel.className='hidden';
    }
    // maybe create some new ones
    if (show) {
	var divrel=document.getElementById('telinst_'+aform.name);
	aform.showhide.value='Hide';
	divrel.className='form-horizontal';
	// add the all button
	var all = document.createElement("input");
	all.type = "button";
	all.value = "Check all";
	all.id = "telinstsel:all";
	all.addEventListener("click",function() {telinstreset(divrel,'all')});
	divrel.appendChild(all);
	var text=document.createElement('strong'); text.innerHTML="&nbsp;&nbsp;"; divrel.appendChild(text);
	// add the none button
	var none = document.createElement("input");
	none.type = "button";
	none.value = "Check none";
	none.id = "telinstsel:none";
	none.addEventListener("click",function() {telinstreset(divrel,'none')});
	divrel.appendChild(none);
	divrel.appendChild(document.createElement("br"));
	// add the big checkbox
	var text=document.createElement('strong'); text.innerHTML="Telescope size:  "; divrel.appendChild(text);
	var big = document.createElement("input");
	big.type = "checkbox";
	big.name = "big";
	big.id = "telinstsel:big";
	big.addEventListener("click",function() {telinstselfunc(aform)});
	divrel.appendChild(big);
	var bigl = document.createElement("label");
	bigl.setAttribute("for",big.id);
	bigl.innerHTML="Big aperture only";
	divrel.appendChild(bigl);
	divrel.appendChild(document.createElement("br"));
	// add the wavelengths checkboxes
	var text=document.createElement('strong'); text.innerHTML="Wavelengths:  "; divrel.appendChild(text);
	var optical = document.createElement("input");
	optical.type = "checkbox";
	optical.id = "telinstsel:optical";
	optical.name = "optical";
	optical.addEventListener("click",function() {telinstselfunc(aform)});
	divrel.appendChild(optical);
	optical.setAttribute("checked",true);
	var opticall = document.createElement("label");
	opticall.setAttribute("for",optical.id);
	opticall.innerHTML="Optical&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(opticall);
	var ir = document.createElement("input");
	ir.type = "checkbox";
	ir.id = "telinstsel:ir";
	ir.name = "ir";
	ir.checked=true;
	ir.addEventListener("click",function() {telinstselfunc(aform)});
	divrel.appendChild(ir);
	ir.setAttribute("checked",true);
	var irl = document.createElement("label");
	irl.setAttribute("for",ir.id);
	irl.innerHTML="IR&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(irl);
	var submm = document.createElement("input");
	submm.type = "checkbox";
	submm.id = "telinstsel:submm";
	submm.name = "submm";
	submm.checked=true;
	submm.addEventListener("click",function() {telinstselfunc(aform)});
	divrel.appendChild(submm);
	submm.setAttribute("checked",true);
	var submml = document.createElement("label");
	submml.setAttribute("for",submm.id);
	submml.innerHTML="Sub-mm   ";
	divrel.appendChild(submml);
	divrel.appendChild(document.createElement("br"));
	var text=document.createElement('strong'); text.innerHTML="List of telescopes/instruments:"; divrel.appendChild(text);
	divrel.appendChild(document.createElement("br"));
		var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CFHT/MegaCam";
	tinput.checked=true;
        tinput.value="CFHT/MegaCam";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CFHT/MegaCam").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CFHT/MegaCam"));
	tinputl.innerHTML="CFHT/MegaCam&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CFHT/CFH12K";
	tinput.checked=true;
        tinput.value="CFHT/CFH12K";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CFHT/CFH12K").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CFHT/CFH12K"));
	tinputl.innerHTML="CFHT/CFH12K&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CFHT/WIRCam";
	tinput.checked=true;
        tinput.value="CFHT/WIRCam";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CFHT/WIRCam").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CFHT/WIRCam"));
	tinputl.innerHTML="CFHT/WIRCam&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Pan-STARRS1";
	tinput.checked=true;
        tinput.value="Pan-STARRS1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Pan-STARRS1").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Pan-STARRS1"));
	tinputl.innerHTML="Pan-STARRS1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:NEOSSat";
	tinput.checked=true;
        tinput.value="NEOSSat";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:NEOSSat").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:NEOSSat"));
	tinputl.innerHTML="NEOSSat&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/ACS";
	tinput.checked=true;
        tinput.value="HST/ACS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/ACS").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/ACS"));
	tinputl.innerHTML="HST/ACS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/WFC3";
	tinput.checked=true;
        tinput.value="HST/WFC3";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/WFC3").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/WFC3"));
	tinputl.innerHTML="HST/WFC3&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/WFPC2";
	tinput.checked=true;
        tinput.value="HST/WFPC2";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/WFPC2").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/WFPC2"));
	tinputl.innerHTML="HST/WFPC2&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/WFPC";
	tinput.checked=true;
        tinput.value="HST/WFPC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/WFPC").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/WFPC"));
	tinputl.innerHTML="HST/WFPC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/STIS";
	tinput.checked=true;
        tinput.value="HST/STIS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/STIS").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/STIS"));
	tinputl.innerHTML="HST/STIS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:HST/NICMOS";
	tinput.checked=true;
        tinput.value="HST/NICMOS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:HST/NICMOS").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:HST/NICMOS"));
	tinputl.innerHTML="HST/NICMOS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Subaru/SuprimeCam";
	tinput.checked=true;
        tinput.value="Subaru/SuprimeCam";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Subaru/SuprimeCam").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Subaru/SuprimeCam"));
	tinputl.innerHTML="Subaru/SuprimeCam&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Subaru/HSC";
	tinput.checked=true;
        tinput.value="Subaru/HSC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Subaru/HSC").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Subaru/HSC"));
	tinputl.innerHTML="Subaru/HSC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-LaSilla_2.2m/WFI";
	tinput.checked=true;
        tinput.value="ESO-LaSilla_2.2m/WFI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-LaSilla_2.2m/WFI").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-LaSilla_2.2m/WFI"));
	tinputl.innerHTML="ESO-LaSilla_2.2m/WFI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-LaSilla_2.2m/GRO";
	tinput.checked=true;
        tinput.value="ESO-LaSilla_2.2m/GRO";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-LaSilla_2.2m/GRO").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-LaSilla_2.2m/GRO"));
	tinputl.innerHTML="ESO-LaSilla_2.2m/GRO&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-NTT/EFOSC";
	tinput.checked=true;
        tinput.value="ESO-NTT/EFOSC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-NTT/EFOSC").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-NTT/EFOSC"));
	tinputl.innerHTML="ESO-NTT/EFOSC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-NTT/EMMI";
	tinput.checked=true;
        tinput.value="ESO-NTT/EMMI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-NTT/EMMI").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-NTT/EMMI"));
	tinputl.innerHTML="ESO-NTT/EMMI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-NTT/SOFI";
	tinput.checked=true;
        tinput.value="ESO-NTT/SOFI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-NTT/SOFI").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-NTT/SOFI"));
	tinputl.innerHTML="ESO-NTT/SOFI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-NTT/SUSI";
	tinput.checked=true;
        tinput.value="ESO-NTT/SUSI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-NTT/SUSI").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-NTT/SUSI"));
	tinputl.innerHTML="ESO-NTT/SUSI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-NTT/SUSI2";
	tinput.checked=true;
        tinput.value="ESO-NTT/SUSI2";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-NTT/SUSI2").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-NTT/SUSI2"));
	tinputl.innerHTML="ESO-NTT/SUSI2&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VISTA/VIRCAM";
	tinput.checked=true;
        tinput.value="ESO-VISTA/VIRCAM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VISTA/VIRCAM").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VISTA/VIRCAM"));
	tinputl.innerHTML="ESO-VISTA/VIRCAM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/FORS1";
	tinput.checked=true;
        tinput.value="ESO-VLT/FORS1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/FORS1").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/FORS1"));
	tinputl.innerHTML="ESO-VLT/FORS1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/FORS2";
	tinput.checked=true;
        tinput.value="ESO-VLT/FORS2";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/FORS2").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/FORS2"));
	tinputl.innerHTML="ESO-VLT/FORS2&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/HAWKI";
	tinput.checked=true;
        tinput.value="ESO-VLT/HAWKI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/HAWKI").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/HAWKI"));
	tinputl.innerHTML="ESO-VLT/HAWKI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/ISAAC";
	tinput.checked=true;
        tinput.value="ESO-VLT/ISAAC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/ISAAC").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/ISAAC"));
	tinputl.innerHTML="ESO-VLT/ISAAC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/NAOS-CONICA";
	tinput.checked=true;
        tinput.value="ESO-VLT/NAOS-CONICA";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/NAOS-CONICA").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/NAOS-CONICA"));
	tinputl.innerHTML="ESO-VLT/NAOS-CONICA&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VLT/VIMOS";
	tinput.checked=true;
        tinput.value="ESO-VLT/VIMOS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VLT/VIMOS").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VLT/VIMOS"));
	tinputl.innerHTML="ESO-VLT/VIMOS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ESO-VST/OMEGACAM";
	tinput.checked=true;
        tinput.value="ESO-VST/OMEGACAM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ESO-VST/OMEGACAM").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ESO-VST/OMEGACAM"));
	tinputl.innerHTML="ESO-VST/OMEGACAM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/GMOS";
	tinput.checked=true;
        tinput.value="Gemini/GMOS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/GMOS").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/GMOS"));
	tinputl.innerHTML="Gemini/GMOS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/FLAMINGOS";
	tinput.checked=true;
        tinput.value="Gemini/FLAMINGOS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/FLAMINGOS").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/FLAMINGOS"));
	tinputl.innerHTML="Gemini/FLAMINGOS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/FLAMINGOS2";
	tinput.checked=true;
        tinput.value="Gemini/FLAMINGOS2";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/FLAMINGOS2").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/FLAMINGOS2"));
	tinputl.innerHTML="Gemini/FLAMINGOS2&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/GNIRS";
	tinput.checked=true;
        tinput.value="Gemini/GNIRS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/GNIRS").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/GNIRS"));
	tinputl.innerHTML="Gemini/GNIRS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/GPI";
	tinput.checked=true;
        tinput.value="Gemini/GPI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/GPI").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/GPI"));
	tinputl.innerHTML="Gemini/GPI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/GSAOI";
	tinput.checked=true;
        tinput.value="Gemini/GSAOI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/GSAOI").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/GSAOI"));
	tinputl.innerHTML="Gemini/GSAOI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/NICI";
	tinput.checked=true;
        tinput.value="Gemini/NICI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/NICI").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/NICI"));
	tinputl.innerHTML="Gemini/NICI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/NIFS";
	tinput.checked=true;
        tinput.value="Gemini/NIFS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/NIFS").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/NIFS"));
	tinputl.innerHTML="Gemini/NIFS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/NIRI";
	tinput.checked=true;
        tinput.value="Gemini/NIRI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/NIRI").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/NIRI"));
	tinputl.innerHTML="Gemini/NIRI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/OSCIR";
	tinput.checked=true;
        tinput.value="Gemini/OSCIR";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/OSCIR").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/OSCIR"));
	tinputl.innerHTML="Gemini/OSCIR&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/TReCS";
	tinput.checked=true;
        tinput.value="Gemini/TReCS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/TReCS").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/TReCS"));
	tinputl.innerHTML="Gemini/TReCS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:Gemini/michelle";
	tinput.checked=true;
        tinput.value="Gemini/michelle";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:Gemini/michelle").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:Gemini/michelle"));
	tinputl.innerHTML="Gemini/michelle&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-0.9m/Imager";
	tinput.checked=true;
        tinput.value="KPNO-0.9m/Imager";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-0.9m/Imager").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-0.9m/Imager"));
	tinputl.innerHTML="KPNO-0.9m/Imager&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-0.9m/Mosaic1";
	tinput.checked=true;
        tinput.value="KPNO-0.9m/Mosaic1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-0.9m/Mosaic1").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-0.9m/Mosaic1"));
	tinputl.innerHTML="KPNO-0.9m/Mosaic1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-0.9m/Mosaic1.1";
	tinput.checked=true;
        tinput.value="KPNO-0.9m/Mosaic1.1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-0.9m/Mosaic1.1").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-0.9m/Mosaic1.1"));
	tinputl.innerHTML="KPNO-0.9m/Mosaic1.1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-2.1m/Imager";
	tinput.checked=true;
        tinput.value="KPNO-2.1m/Imager";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-2.1m/Imager").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-2.1m/Imager"));
	tinputl.innerHTML="KPNO-2.1m/Imager&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-2.3m/90prime";
	tinput.checked=true;
        tinput.value="KPNO-2.3m/90prime";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-2.3m/90prime").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-2.3m/90prime"));
	tinputl.innerHTML="KPNO-2.3m/90prime&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-4m/Mosaic1";
	tinput.checked=true;
        tinput.value="KPNO-4m/Mosaic1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-4m/Mosaic1").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-4m/Mosaic1"));
	tinputl.innerHTML="KPNO-4m/Mosaic1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-4m/Mosaic1.1";
	tinput.checked=true;
        tinput.value="KPNO-4m/Mosaic1.1";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-4m/Mosaic1.1").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-4m/Mosaic1.1"));
	tinputl.innerHTML="KPNO-4m/Mosaic1.1&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-4m/Mosaic3";
	tinput.checked=true;
        tinput.value="KPNO-4m/Mosaic3";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-4m/Mosaic3").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-4m/Mosaic3"));
	tinputl.innerHTML="KPNO-4m/Mosaic3&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:KPNO-4m/NEWFIRM";
	tinput.checked=true;
        tinput.value="KPNO-4m/NEWFIRM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:KPNO-4m/NEWFIRM").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:KPNO-4m/NEWFIRM"));
	tinputl.innerHTML="KPNO-4m/NEWFIRM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-0.9m/Imager";
	tinput.checked=true;
        tinput.value="CTIO-0.9m/Imager";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-0.9m/Imager").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-0.9m/Imager"));
	tinputl.innerHTML="CTIO-0.9m/Imager&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-1.0m/Y4KCam";
	tinput.checked=true;
        tinput.value="CTIO-1.0m/Y4KCam";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-1.0m/Y4KCam").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-1.0m/Y4KCam"));
	tinputl.innerHTML="CTIO-1.0m/Y4KCam&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-1.3m/ANDICAM";
	tinput.checked=true;
        tinput.value="CTIO-1.3m/ANDICAM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-1.3m/ANDICAM").tt="optical IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-1.3m/ANDICAM"));
	tinputl.innerHTML="CTIO-1.3m/ANDICAM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-3.5m/ISPI";
	tinput.checked=true;
        tinput.value="CTIO-3.5m/ISPI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-3.5m/ISPI").tt="IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-3.5m/ISPI"));
	tinputl.innerHTML="CTIO-3.5m/ISPI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-4m/DECam";
	tinput.checked=true;
        tinput.value="CTIO-4m/DECam";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-4m/DECam").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-4m/DECam"));
	tinputl.innerHTML="CTIO-4m/DECam&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-4m/Mosaic2";
	tinput.checked=true;
        tinput.value="CTIO-4m/Mosaic2";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-4m/Mosaic2").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-4m/Mosaic2"));
	tinputl.innerHTML="CTIO-4m/Mosaic2&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:CTIO-4m/NEWFIRM";
	tinput.checked=true;
        tinput.value="CTIO-4m/NEWFIRM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:CTIO-4m/NEWFIRM").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:CTIO-4m/NEWFIRM"));
	tinputl.innerHTML="CTIO-4m/NEWFIRM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:SOAR/Goodman";
	tinput.checked=true;
        tinput.value="SOAR/Goodman";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:SOAR/Goodman").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:SOAR/Goodman"));
	tinputl.innerHTML="SOAR/Goodman&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:SOAR/SAMI";
	tinput.checked=true;
        tinput.value="SOAR/SAMI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:SOAR/SAMI").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:SOAR/SAMI"));
	tinputl.innerHTML="SOAR/SAMI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:SOAR/SOI";
	tinput.checked=true;
        tinput.value="SOAR/SOI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:SOAR/SOI").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:SOAR/SOI"));
	tinputl.innerHTML="SOAR/SOI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:SOAR/SPARTAN";
	tinput.checked=true;
        tinput.value="SOAR/SPARTAN";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:SOAR/SPARTAN").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:SOAR/SPARTAN"));
	tinputl.innerHTML="SOAR/SPARTAN&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:OLS-Cent1/STL-11K";
	tinput.checked=true;
        tinput.value="OLS-Cent1/STL-11K";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:OLS-Cent1/STL-11K").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:OLS-Cent1/STL-11K"));
	tinputl.innerHTML="OLS-Cent1/STL-11K&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:OLS-Cent2/Apogee";
	tinput.checked=true;
        tinput.value="OLS-Cent2/Apogee";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:OLS-Cent2/Apogee").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:OLS-Cent2/Apogee"));
	tinputl.innerHTML="OLS-Cent2/Apogee&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:OLS-Cent3/STL-11K";
	tinput.checked=true;
        tinput.value="OLS-Cent3/STL-11K";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:OLS-Cent3/STL-11K").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:OLS-Cent3/STL-11K"));
	tinputl.innerHTML="OLS-Cent3/STL-11K&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WIYN/MiniMo";
	tinput.checked=true;
        tinput.value="WIYN/MiniMo";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WIYN/MiniMo").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WIYN/MiniMo"));
	tinputl.innerHTML="WIYN/MiniMo&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WIYN/ODI";
	tinput.checked=true;
        tinput.value="WIYN/ODI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WIYN/ODI").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WIYN/ODI"));
	tinputl.innerHTML="WIYN/ODI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WIYN/WHIRC";
	tinput.checked=true;
        tinput.value="WIYN/WHIRC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WIYN/WHIRC").tt="big IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WIYN/WHIRC"));
	tinputl.innerHTML="WIYN/WHIRC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WHT/AUXCAM";
	tinput.checked=true;
        tinput.value="WHT/AUXCAM";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WHT/AUXCAM").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WHT/AUXCAM"));
	tinputl.innerHTML="WHT/AUXCAM&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WHT/INGRID";
	tinput.checked=true;
        tinput.value="WHT/INGRID";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WHT/INGRID").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WHT/INGRID"));
	tinputl.innerHTML="WHT/INGRID&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WHT/LIRIS";
	tinput.checked=true;
        tinput.value="WHT/LIRIS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WHT/LIRIS").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WHT/LIRIS"));
	tinputl.innerHTML="WHT/LIRIS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WHT/Prime";
	tinput.checked=true;
        tinput.value="WHT/Prime";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WHT/Prime").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WHT/Prime"));
	tinputl.innerHTML="WHT/Prime&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:INT/WFC";
	tinput.checked=true;
        tinput.value="INT/WFC";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:INT/WFC").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:INT/WFC"));
	tinputl.innerHTML="INT/WFC&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:JKT/JAG-CCD";
	tinput.checked=true;
        tinput.value="JKT/JAG-CCD";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:JKT/JAG-CCD").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:JKT/JAG-CCD"));
	tinputl.innerHTML="JKT/JAG-CCD&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:NEAT-GEODSS-Maui";
	tinput.checked=true;
        tinput.value="NEAT-GEODSS-Maui";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:NEAT-GEODSS-Maui").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:NEAT-GEODSS-Maui"));
	tinputl.innerHTML="NEAT-GEODSS-Maui&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:SDSS";
	tinput.checked=true;
        tinput.value="SDSS";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:SDSS").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:SDSS"));
	tinputl.innerHTML="SDSS&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:WISE";
	tinput.checked=true;
        tinput.value="WISE";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:WISE").tt="IR";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:WISE"));
	tinputl.innerHTML="WISE&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:AAT/WFI";
	tinput.checked=true;
        tinput.value="AAT/WFI";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:AAT/WFI").tt="big optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:AAT/WFI"));
	tinputl.innerHTML="AAT/WFI&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ALMA";
	tinput.checked=true;
        tinput.value="ALMA";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ALMA").tt="big submm";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ALMA"));
	tinputl.innerHTML="ALMA&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
	var tinput = document.createElement("input");
	tinput.type = "checkbox";
	tinput.name = "telinst";
	tinput.id = "telinst:ZTF";
	tinput.checked=true;
        tinput.value="ZTF";
	divrel.appendChild(tinput);
	tinput.setAttribute("checked",true);
        document.getElementById("telinst:ZTF").tt="optical";
	var tinputl = document.createElement("label");
	tinputl.setAttribute("for",document.getElementById("telinst:ZTF"));
	tinputl.innerHTML="ZTF&nbsp;&nbsp;&nbsp;";
	divrel.appendChild(tinputl);
divrel.appendChild(document.createElement("br"));
    }	    
}
  function errorlogic (opt) {
  document.arcform.eunits.options.length=0
  if (opt=='bern') {
  document.arcform.eunits.options[1]=new Option("None","none",true,false);
  document.arcform.eunits.options[0]=new Option("Bernstein error ellipse","bern",true,false);
  document.arcform.eellipse.disabled=true;
  } else {
  document.arcform.eunits.options[0]=new Option("Arcseconds","arcseconds",true,false);
  document.arcform.eunits.options[1]=new Option("Arcminutes","arcminutes",true,false);
  document.arcform.eellipse.disabled=false;
  }
  }
  window.onload=function(){onLoad()};
</script>
</div>
