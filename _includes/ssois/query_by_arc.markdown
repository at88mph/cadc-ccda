{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<h2 id="arc">{{ i18n-ssois-labels.query_by_arc_header }}</h2>
<form name="arcform" action="{{ i18n-ssois.query_form_action }}" method="get" id="arcform">
	<input type="hidden" name="lang" value="en"/>
	<div class="form-group">
  		<label class="control-label" for="arcobs"><strong>{{ i18n-ssois-labels.query_by_arc_observation_list }}</strong></label>
    	<textarea class="form-control" id="arcobs" name="obs" cols="80" rows="10" style="font-family: monospace">NNNNNPPPPPPPANNYYYY MM DD.ddddd HH MM SS.dd sDD MM SS.d          MM.M B      OOO</textarea>
	</div>
    <fieldset class="mrgn-bttm-md">
		<div class="form-group">
			<legend class="hidden">{{ i18n-ssois-labels.query_by_arc_orbit_field_header }}:</legend>
			<strong>{{ i18n-ssois-labels.query_by_arc_orbit_field_header }}:</strong>
			<div class="radio">
				<label class="control-label" for="arcbern">
					<input id="arcbern" type="radio" name="search" value="bern" checked="checked" onclick="errorlogic('bern')" />Bernstein (<a rel="external" href="http://www.iop.org/EJ/article/1538-3881/120/6/3323/200298.text.html">{{ i18n-ssois-labels.query_by_arc_bernstein_link }}</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="arcmpc">
					<input id="arcmpc" type="radio" name="search" value="mpc" onclick="errorlogic('mpc')" />Minor Planet Center (<a rel="external" href="https://minorplanetcenter.net/iau/MPEph/NewObjEphems.html">{{ i18n-ssois-labels.query_by_arc_minor_plane_center_link }}</a>)</label>
			</div>
		</div>
    </fieldset>
	<strong>{{ i18n-ssois-labels.date_range_search }}:</strong>
	<div class="form-group">
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="arcepoch1">{{ i18n-ssois-labels.from_date }}:&nbsp;</label>
			<input type="text" class="form-control" id="arcepoch1" name="epoch1" value=""/>
		</div>
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="arcepoch2">{{ i18n-ssois-labels.to_date }}:&nbsp;</label>
			<input type="text" class="form-control" id="arcepoch2" name="epoch2" value=""/>
		</div>
		<input type="button" class="btn btn-default" value="Set to full date range" onclick="arcform.epoch1.value='1990 01 01';  arcform.epoch2.value=today"/>
	</div>
	<div class="form-group form-inline">
    	<label class="control-label" for="arceellipse">
			<strong>{{ i18n-ssois-labels.position_uncertainty_header }}:</strong>
		</label>
    	<input type="text" class="form-control" id="arceellipse" name="eellipse" value="" size="4" />
    	<label class="control-label" for="arceunits" class="hidden">{{ i18n-ssois-labels.error_units }}</label>
		<select id="arceunits" name="eunits" class="form-control">
			<option value="arcseconds">{{ i18n-ssois-labels.arcseconds }}</option>
			<option value="arcminutes">{{ i18n-ssois-labels.arcminutes }}</option>
		</select>
	</div>
    <fieldset>
		<div class="form-group form-inline">
      		<legend class="hidden">{{ i18n-ssois-labels.resolve_to_image_extension }}:</legend>
      		<strong>{{ i18n-ssois-labels.resolve_to_image_extension }}:</strong>
			<div class="radio">
      			<label class="control-label" for="arcextresyes"><input type="radio" id="arcextresyes" name="extres" value="yes"/>&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
      			<label class="mrgn-lft-sm control-label" for="arcextresno"><input type="radio" id="arcextresno" name="extres" value="no" checked="checked" onclick="arcform.xyres[1].checked=true" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
			</div>
		</div>
    </fieldset>
    <fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">{{ i18n-ssois-labels.resolve_to_x_y }}:</legend>
      		<strong>{{ i18n-ssois-labels.resolve_to_x_y }}:</strong>
			<div class="radio">				
				<label class="control-label" for="arcxyresyes"><input type="radio" id="arcxyresyes" name="xyres" value="yes" onclick="arcform.extres[0].checked=true" />&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
				<label class="mrgn-lft-sm control-label" for="arcxyresno"><input type="radio" id="arcxyresno" name="xyres" value="no" checked="checked" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
			</div>
		</div>
    </fieldset>
    <input type="button" 
	     id="arctelinstsel:show" 
	     name="showhide"
	     value="{{ i18n-ssois-labels.show_telescope_instrument_list }}" 
		 class="btn btn-default mrgn-bttm-sm"
	     onclick="togglehide(arcform)" 
	     />  
    <div id="telinst_arcform" class="hidden"></div>
    <br/>
	<input type="submit" class="btn btn-danger" value="{{ i18n-ssois-labels.query_by_arc_header }}"/>
	<input type="button" class="btn btn-default" value="{{ i18n-ssois-labels.clear_form }}"
	onclick="
	arcform.obs.value='';
	arcform.epoch1.value='';
	arcform.epoch2.value='';
	arcform.eellipse.value='';
	arcform.search[0].checked=true;
	arcform.extres[1].checked=true;
	arcform.xyres[1].checked=true;
	"/><input type="button" class="btn btn-default" value="{{ i18n-ssois-labels.show_example }}"
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