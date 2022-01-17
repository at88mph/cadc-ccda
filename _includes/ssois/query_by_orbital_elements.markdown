{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<h2 id="oe">{{ i18n-ssois-labels.query_by_orbital_elements_header }}</h2>
<p>{{ i18n-ssois-labels.query_by_orbital_elements_description }}</p>
{%- assign label-css-width = 3 -%}
{%- assign input-css-width = 12 | minus: label-css-width -%}
<form name="oeform" action="{{ i18n-ssois.query_form_action }}" method="get" id="oeform">
	<input type="hidden" name="lang" value="en"/>
	<input type="hidden" name="search" value="orbel"/>
	<div class="form-horizontal">
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oeepoch"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_epoch_field }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oeepoch" class="form-control" type="text" name="epoch" value=""/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oea"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_semi_major_axis }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oea" class="form-control" type="text" name="a" value=""/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oee"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_eccentricity }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oee" class="form-control col-sm-9" type="text" name="e" value=""/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oei"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_inclination }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oei" class="form-control col-sm-9" type="text" name="i" value=""/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oelongi"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_longitude_of_ascending_node }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oelongi" class="form-control" type="text" name="longi" value=""/> <br/>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oeperi"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_argument_of_perihelion }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oeperi" class="form-control" type="text" name="peri" value=""/> <br/>
			</div>
		</div>
		<div class="form-group">		
			<label class="control-label col-sm-{{ label-css-width }}" for="oeanom"><strong>{{ i18n-ssois-labels.query_by_orbital_elements_mean_anomaly_at_epoch }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input id="oeanom" class="form-control" type="text" name="anom" value=""/> <br/>
			</div>
		</div>
		<strong>{{ i18n-ssois-labels.date_range_search }}:</strong>
		<div class="form-group">
			<label class="control-label col-sm-{{ label-css-width }}" for="oeepoch1">{{ i18n-ssois-labels.from_date }}: </label>
			<div class="col-sm-{{ input-css-width }}">
				<input type="text" class="form-control" id="oeepoch1" name="epoch1" value=""/><br/>
			</div>
			<label class="control-label col-sm-{{ label-css-width }}" for="oeepoch2">{{ i18n-ssois-labels.to_date }}: </label>
			<div class="col-sm-{{ input-css-width }}">
				<input type="text" class="form-control" id="oeepoch2" name="epoch2" value=""/><br/>
			</div>
			<input type="button" class="btn btn-default" value="Set to full date range" onclick="oeform.epoch1.value='1990 01 01';  oeform.epoch2.value=today"/><br/>
		</div>
		<div class="form-group form-inline">
			<label class="control-label col-sm-{{ label-css-width }}" for="oeeellipse"><strong>{{ i18n-ssois-labels.position_uncertainty_header }}:</strong></label>
			<div class="col-sm-{{ input-css-width }}">
				<input type="text" class="form-control" id="oeeellipse" name="eellipse" value="" size="4" />
				<label class="control-label" for="oeeunits" class="hidden">{{ i18n-ssois-labels.error_units }}</label>
				<select id="oeeunits" name="eunits" class="form-control">
					<option value="arcseconds">{{ i18n-ssois-labels.arcseconds }}</option>
					<option value="arcminutes">{{ i18n-ssois-labels.arcminutes }}</option>
				</select>
			</div>
		</div>
	</div>
    <fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">{{ i18n-ssois-labels.resolve_to_image_extension }}:</legend>
			<strong>{{ i18n-ssois-labels.resolve_to_image_extension }}:</strong>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="oeextresyes" name="extres" value="yes"/>
				<label class="control-label" for="oeextresyes">{{ i18n-ssois-labels.yes }}</label>
			</div>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="oeextresno" name="extres" value="no" checked="checked" onclick="oeform.xyres[1].checked=true" />
				<label class="control-label" for="oeextresno">{{ i18n-ssois-labels.no }}</label>
			</div>
		</div>
    </fieldset>
    <fieldset>
		<div class="form-group form-inline">
			<legend class="hidden">{{ i18n-ssois-labels.resolve_to_x_y }}:</legend>
			<strong>{{ i18n-ssois-labels.resolve_to_x_y }}:</strong>
			<div class="radio-inline">
				<input type="radio" class="form-control" id="oexyresyes" name="xyres" value="yes" onclick="oeform.extres[0].checked=true" />
				<label class="control-label" for="oexyresyes">{{ i18n-ssois-labels.yes }}</label>
			</div>
			<div class="radio-inline">	
				<input type="radio" class="form-control" id="oexyresno" name="xyres" value="no" checked="checked" />
				<label class="control-label" for="oexyresno">{{ i18n-ssois-labels.no }}</label>
			</div>
		</div>
    </fieldset>
    <input type="button"
	     id="oetelinstsel:show"
	     name="showhide"
		 class="btn btn-default mrgn-bttm-sm"
	     value="{{ i18n-ssois-labels.show_telescope_instrument_list}}"
	     onclick="togglehide(oeform)"
	     />
    <div id="telinst_oeform" class="hidden"></div>
    <br/>
    <input type="submit" value="{{ i18n-ssois-labels.query_by_orbital_elements_header }}" class="btn btn-danger"/>
    <input type="button" value="{{ i18n-ssois-labels.clear_form }}" class="btn btn-default"
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
    <input type="button" value="{{ i18n-ssois-labels.show_example }}" class="btn btn-default"
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