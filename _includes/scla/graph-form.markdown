{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-scla=site.data.scla[i18nText-lang] -%}
{%- assign i18n-scla-labels=i18n-scla.labels -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<!-- centre by coordinate -->
<form name="cent" class="form-inline">
  <div class="form-group">
    <label for="cra">{{ i18n-cadc-labels.right_ascension }}</label>
    <input id="cra" class="form-control" name="cra" size="10" value="12.5"/>
    <label for="cdec">{{ i18n-cadc-labels.declination }}</label>
    <input id="cdec" class="form-control" name="cdec" size="10" value="187.5"/>
    <label for="czoom">Zoom</label>
    <input id="czoom" class="form-control" name="czoom" size="4" value="5"/>
    <input type="button" class="btn btn-default" id="docent" name="docent" value="{{ i18n-cadc-labels.button_go }}"/>
  </div>


  <!-- go to object  -->
  <div class="form-group mrgn-tp-sm">
    <label for="object">{{ i18n-cadc-labels.object }}</label>
    <input id="object" class="form-control" name="object" size="8" />
    <input type="submit" class="btn btn-primary" onclick="return false" id="resolve" name="resolve" value="{{ i18n-cadc-labels.button_go }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="clear" name="clear" value="{{ i18n-cadc-labels.button_clear }}"/>
  </div>
  <!-- background   -->

  <div class="form-group mrgn-tp-sm">
    <label for="grid" class="checkbox-inline"><input type="checkbox" name="grid" id="grid" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.coordinate_grid }}</label>
    <label for="single" class="checkbox-inline"><input type="checkbox" name="single" id="single" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.individual_images }}</label>
    <label for="stacked" class="checkbox-inline"><input type="checkbox" name="stacked" id="stacked" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.stacked_images }}</label>
  </div>

  <!-- filters -->
  <div class="mrgn-tp-sm">
    <fieldset class="legend-brdr-bttm">
      <legend>{{ i18n-cadc-labels.filters }}</legend>
      <div class="form-group">
        <label for="filall" class="checkbox-inline"><input type="checkbox" id="filall" name="filall" checked="checked" value="makesquasarhappy"/>{{ i18n-cadc-labels.all }}</label>
        <label for="filB" class="checkbox-inline"><input type="checkbox" id="filB" name="fil1" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.filters_broad_band }}</label>
        <label for="filI" class="checkbox-inline"><input type="checkbox" id="filI" name="fil2" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.filters_intermediate_band }}</label>
        <label for="filN" class="checkbox-inline"><input type="checkbox" id="filN" name="filN" checked="checked" value="makesquasarhappy"/>{{ i18n-scla-labels.filters_narrow_band }}</label>
      </div>
      <div class="form-group">
        <label for="filB" class="checkbox-inline"><input type="checkbox" id="filB" name="fil" value="B" checked="checked"/>B</label>
        <label for="filV" class="checkbox-inline"><input type="checkbox" id="filV" name="fil" value="V" checked="checked"/>V</label>
        <label for="filRC" class="checkbox-inline"><input type="checkbox" id="filRC" name="fil" value="RC" checked="checked"/>RC</label>
        <label for="filIC" class="checkbox-inline"><input type="checkbox" id="filIC" name="fil" value="IC" checked="checked"/>IC</label>
        <label for="fil" class="checkbox-inline"><input type="checkbox" id="filVR" name="fil" value="VR" checked="checked"/>VR</label>
      </div>
      <div class="form-group">
	      <label for="filg" class="checkbox-inline"><input type="checkbox" id="filg" name="fil" value="g" checked="checked"/>g</label>
	      <label for="filr" class="checkbox-inline"><input type="checkbox" id="filr" name="fil" value="r" checked="checked"/>r</label>
	      <label for="fili" class="checkbox-inline"><input type="checkbox" id="fili" name="fil" value="i" checked="checked"/>i</label>
	      <label for="filz" class="checkbox-inline"><input type="checkbox" id="filz" name="fil" value="z" checked="checked"/>z</label>
	      <label for="filY" class="checkbox-inline"><input type="checkbox" id="filY" name="fil" value="Y" checked="checked"/>Y</label>
      </div>
      <div class="form-group">
        <label for="filIA427" class="checkbox-inline"><input type="checkbox" id="filIA427" name="fil" value="IA427" checked="checked"/>IA427</label>
        <label for="filIA445" class="checkbox-inline"><input type="checkbox" id="filIA445" name="fil" value="IA445" checked="checked"/>IA445</label>
        <label for="filIA464" class="checkbox-inline"><input type="checkbox" id="filIA464" name="fil" value="IA464" checked="checked"/>IA464</label>
        <label for="filIA484" class="checkbox-inline"><input type="checkbox" id="filIA484" name="fil" value="IA484" checked="checked"/>IA484</label>
        <label for="filIA505" class="checkbox-inline"><input type="checkbox" id="filIA505" name="fil" value="IA505" checked="checked"/>IA505</label>
        <label for="filIA527" class="checkbox-inline"><input type="checkbox" id="filIA527" name="fil" value="IA527" checked="checked"/>IA527</label>
        <label for="filIA550" class="checkbox-inline"><input type="checkbox" id="filIA550" name="fil" value="IA550" checked="checked"/>IA550</label>
        <label for="filIA574" class="checkbox-inline"><input type="checkbox" id="filIA574" name="fil" value="IA574" checked="checked"/>IA574</label>
        <label for="filIA598" class="checkbox-inline"><input type="checkbox" id="filIA598" name="fil" value="IA598" checked="checked"/>IA598</label>
        <label for="filIA624" class="checkbox-inline"><input type="checkbox" id="filIA624" name="fil" value="IA624" checked="checked"/>IA624</label>
      </div>
      <div class="form-group">
        <label for="filIA651" class="checkbox-inline"><input type="checkbox" id="filIA651" name="fil" value="IA651" checked="checked"/>IA651</label>
        <label for="filIA679" class="checkbox-inline"><input type="checkbox" id="filIA679" name="fil" value="IA679" checked="checked"/>IA679</label>
        <label for="filIA709" class="checkbox-inline"><input type="checkbox" id="filIA709" name="fil" value="IA709" checked="checked"/>IA709</label>
        <label for="filIA738" class="checkbox-inline"><input type="checkbox" id="filIA738" name="fil" value="IA738" checked="checked"/>IA738</label>
        <label for="filIA767" class="checkbox-inline"><input type="checkbox" id="filIA767" name="fil" value="IA767" checked="checked"/>IA767</label>
        <label for="filIA797" class="checkbox-inline"><input type="checkbox" id="filIA797" name="fil" value="IA797" checked="checked"/>IA797</label>
        <label for="filIA827" class="checkbox-inline"><input type="checkbox" id="filIA827" name="fil" value="IA827" checked="checked"/>IA827</label>
        <label for="filIA856" class="checkbox-inline"><input type="checkbox" id="filIA856" name="fil" value="IA856" checked="checked"/>IA856</label>
        <label for="filIA907" class="checkbox-inline"><input type="checkbox" id="filIA907" name="fil" value="IA907" checked="checked"/>IA907</label>
      </div>
      <div class="form-group">
        <label for="filNA656" class="checkbox-inline"><input type="checkbox" id="filNA656" name="fil" value="NA656" checked="checked"/>NA656</label>
        <label for="filNB711" class="checkbox-inline"><input type="checkbox" id="filNB711" name="fil" value="NB711" checked="checked"/>NB711</label>
        <label for="filNB816" class="checkbox-inline"><input type="checkbox" id="filNB816" name="fil" value="NB816" checked="checked"/>NB816</label>
        <label for="filNB921" class="checkbox-inline"><input type="checkbox" id="filNB921" name="fil" value="NB921" checked="checked"/>NB921</label>
      </div>
    </fieldset>
  </div>

  <div>
    <input type="submit" class="btn btn-default" onclick="return false" id="getimages" name="getimages" value="{{ i18n-scla-labels.list_individual_image }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="getstacks" name="getstacks" value="{{ i18n-scla-labels.list_stacked_image }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="getboth" name="getboth" value="{{ i18n-scla-labels.list_individual_and_stacked_image }}"/>
  </div>
</form>

<div id="diag"></div>
<div id="map-canvas"></div>
<div>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDguHe66O5ep-Lqcla9a44wW_RkhB53KB4&amp;sensor=false"></script>
  <script type="text/javascript" src="/static/js/scla/data.js"></script>
  <script type="text/javascript" src="/static/js/scla/baseutils.js"></script>
  <script type="text/javascript" src="/static/js/scla/cfhtls.js"></script>
  <script type="text/javascript" src="/static/js/scla/keydragzoom.js"></script>  
</div>