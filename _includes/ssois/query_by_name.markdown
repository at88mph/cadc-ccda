{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<h2 id="name">{{ i18n-ssois-labels.query_by_name_header }}</h2>
<form name="nameform" action="{{ i18n-ssois.query_form_action }}" id="nameform">
	<input type="hidden" name="lang" value="{{ i18nText-lang }}"/>
	<div class="form-group">
		<label class="control-label" for="object"><strong>{{ i18n-ssois-labels.query_by_name_object_field_strong }}</strong> {{ i18n-ssois-labels.query_by_name_object_field }}</label>
		<textarea class="form-control" id="object" name="object" cols="20" rows="5"></textarea>
	</div>
	<fieldset class="mrgn-bttm-md">
		<div class="form-group">
			<legend class="hidden">{{ i18n-ssois-labels.query_by_name_ephemeric_field }}:</legend>
			<strong>{{ i18n-ssois-labels.query_by_name_ephemeric_field }}:</strong>
			<div class="radio">
				<label class="control-label" for="bynameCADC">
					<input type="radio" name="search" value="bynameCADC" id="bynameCADC" /> {{ i18n-ssois-labels.query_by_name_ephemeric_cadc_only }}</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameHorizons">
					<input type="radio" name="search" value="bynameHorizons" id="bynameHorizons" /> {{ i18n-ssois-labels.query_by_name_ephemeric_jpl_horizons }} (<a rel="external" href="http://ssd.jpl.nasa.gov/horizons.cgi">{{ i18n-ssois-labels.query_by_name_ephemeric_jpl_horizons_link }}</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameMPC">
					<input type="radio" name="search" value="bynameMPC" id="bynameMPC"/> {{ i18n-ssois-labels.query_by_name_ephemeric_minor_planet }} (<a rel="external" href="https://minorplanetcenter.net/iau/MPEph/MPEph.html">{{ i18n-ssois-labels.query_by_name_ephemeric_minor_planet_link }}</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameLowell">
					<input type="radio" name="search" value="bynameLowell" id="bynameLowell" /> {{ i18n-ssois-labels.query_by_name_ephemeric_lowell_observatory }} (<a rel="external" href="http://asteroid.lowell.edu/asteph">{{ i18n-ssois-labels.query_by_name_ephemeric_lowell_observatory_link }}</a>)</label>
			</div>
			<div class="radio">
				<label class="control-label" for="bynameall">
					<input type="radio" name="search" value="bynameall" id="bynameall" checked="checked" /> {{ i18n-ssois-labels.query_by_name_ephemeric_all_of_the_above }}</label>
			</div>
		</div>
	</fieldset>
	<strong>{{ i18n-ssois-labels.date_range_search }}:</strong>
	<div class="form-group">
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="nameepoch1">{{ i18n-ssois-labels.from_date }}:&nbsp;</label>
			<input type="text" class="form-control" id="nameepoch1" name="epoch1" value=""/>
		</div>
		<div class="form-inline mrgn-bttm-sm">
			<label class="control-label" for="nameepoch2">{{ i18n-ssois-labels.to_date }}:&nbsp;</label>
			<input type="text" class="form-control" id="nameepoch2" name="epoch2" value=""/>
		</div>
		<input type="button" class="btn btn-default" value="{{ i18n-ssois-labels.button_full_date_range }}" onclick="nameform.epoch1.value='1990 01 01';  nameform.epoch2.value=today"/>
	</div>
	<div class="form-group form-inline">
		<label class="control-label" for="nameeellipse"><strong>{{ i18n-ssois-labels.position_uncertainty_header }}:</strong></label>
		<input type="text" class="form-control" id="nameeellipse" name="eellipse" value="" size="4" />
		<label class="control-label" for="nameeunits" class="hidden">{{ i18n-ssois-labels.error_units }}</label>
		<select class="form-control" id="nameeunits" name="eunits">
			<option value="arcseconds">{{ i18n-ssois-labels.arcseconds }}</option>
			<option value="arcminutes">{{ i18n-ssois-labels.arcminutes }}</option>
		</select>
	</div>
	<fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">{{ i18n-ssois-labels.resolve_to_image_extension }}:</legend>
			<strong>{{ i18n-ssois-labels.resolve_to_image_extension }}:&nbsp;</strong>
			<div class="radio">
				<label class="control-label" for="nameextresyes"><input type="radio" id="nameextresyes" name="extres" value="yes"/>&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
				<label class="mrgn-lft-sm control-label" for="nameextresno"><input type="radio" id="nameextresno" name="extres" value="no" checked="checked" onclick="nameform.xyres[1].checked=true" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
			</div>
		</div>
	</fieldset>
	<fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">{{ i18n-ssois-labels.resolve_to_x_y }}:</legend>
			<strong>{{ i18n-ssois-labels.resolve_to_x_y }}:&nbsp;</strong>
			<div class="radio">
				<label class="control-label" for="namexyresyes"><input type="radio" id="namexyresyes" name="xyres" value="yes" onclick="nameform.extres[0].checked=true" />&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
				<label class="mrgn-lft-sm control-label" for="namexyresno"><input type="radio" id="namexyresno" name="xyres" value="no" checked="checked" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
			</div>
		</div>
	</fieldset>
	<input type="button" 
			id="nametelinstsel:show" 
			name="showhide"
			value="{{ i18n-ssois-labels.show_telescope_instrument_list }}" 
			onclick="togglehide(nameform)" 
			class="btn btn-default mrgn-bttm-sm" />
	<div id="telinst_nameform" class="hidden"></div><br/>
	<input type="submit" value="{{ i18n-ssois-labels.query_by_name_submit_button }}" class="btn btn-danger" />
	<input type="button" value="{{ i18n-ssois-labels.clear_form }}" class="btn btn-default"
			onclick="
			nameform.object.value='';
			nameform.epoch1.value='';
			nameform.epoch2.value='';
			nameform.eellipse.value='';
			nameform.search[0].checked=true;
			nameform.extres[1].checked=true;
			nameform.xyres[1].checked=true;" />
	<input type="button" value="{{ i18n-ssois-labels.show_example }}" class="btn btn-default"
			onclick="
			nameform.object.value='Yasutani\n2006 RJ43\n45302\n6641 P-L';
			nameform.epoch1.value='2006 09 01';
			nameform.epoch2.value='2006 09 30';
			nameform.eellipse.value='';
			nameform.search[0].checked=true;
			nameform.extres[1].checked=true;
			nameform.xyres[1].checked=true; "/>
</form>
