{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-form=site.data.megapipe[i18nText-lang]['labels'] -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<!-- centre by coordinate -->
<form name="cent" class="form-inline">
  <div class="form-group">
    <label for="cra">{{ i18n-cadc-labels.right_ascension }}</label>
    <input id="cra" name="cra" type="text" value="12.5"/>
    <label for="cdec">{{ i18n-cadc-labels.declination }}</label>
    <input id="cdec" name="cdec"  type="text" size="12" value="187.5"/>
    <label for="czoom">Zoom</label>
    <input id="czoom" name="czoom"  type="text" size="12" value="5"/>
    <input type="button" class="btn btn-default" id="docent" name="docent" value="{{ i18n-cadc-labels.button_go }}" />
  </div>


  <!-- go to object  -->
  <div class="form-group">
    <label for="object">{{ i18n-cadc-labels.object }}</label>
    <input id="object" name="object" type="text" size="8" value="" />
    <input type="submit" class="btn btn-default" onclick="return false" id="resolve" name="resolve" value="{{ i18n-cadc-labels.button_go }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="clear"  name="clear" value="{{ i18n-cadc-labels.button_clear }}"/>
  </div>
  <!-- background   -->

  <div class="form-group">
    <input type="checkbox" name="grid" id="grid" checked="checked" value="makesquasarhappy"/>
    <label for="grid">{{ i18n-form.make_quasar_coordinate_grid }}</label>
    <input type="checkbox" name="single" id="single" checked="checked" value="makesquasarhappy"/>
    <label for="single">{{ i18n-form.make_quasar_individual_images }}</label>    
    <input type="checkbox" name="stacked" id="stacked" checked="checked" value="makesquasarhappy"/>
    <label for="stacked">{{ i18n-form.make_quasar_stacked_images }}</label>
  </div>

  <!-- filters -->
  <div>
    <fieldset>
      <div class="form-group brdr-bttm">
        <span class="filters">{{ i18n-cadc-labels.filters }}:</span>
        <input type="checkbox" id="filall" name="filall" checked="checked" value="makesquasarhappy"/>
        <label for="filall">{{ i18n-cadc-labels.all }}</label>
        <input type="checkbox" id="fil1" name="fil1" checked="checked" value="makesquasarhappy"/>
        <label for="fil1">{{ i18n-form.filters_first_generation }}</label>
        <input type="checkbox" id="fil2" name="fil2" checked="checked" value="makesquasarhappy"/>
        <label for="fil2">{{ i18n-form.filters_second_generation }}</label>
        <input type="checkbox" id="filN" name="filN" checked="checked" value="makesquasarhappy"/>
        <label for="filN">{{ i18n-form.filters_narrow_band }}</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="filu_MP9301" name="fil" value="u.MP9301" checked="checked"/>
        <label for="filu_MP9301">u.MP9301</label>
        <input type="checkbox" id="filg_MP9401" name="fil" value="g.MP9401" checked="checked"/>
        <label for="filg_MP9401">g.MP9401</label>
        <input type="checkbox" id="filr_MP9601" name="fil" value="r.MP9601" checked="checked"/>
        <label for="filr_MP9601">r.MP9601</label>
        <input type="checkbox" id="fili_MP9701" name="fil" value="i.MP9701" checked="checked"/>
        <label for="fili_MP9701">i.MP9701</label>
        <input type="checkbox" id="fili_MP9702" name="fil" value="i.MP9702" checked="checked"/>
        <label for="fili_MP9702">i.MP9702</label>
        <input type="checkbox" id="filz_MP9801" name="fil" value="z.MP9801" checked="checked"/>
        <label for="filz_MP9801">z.MP9801</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="filu_MP9302" name="fil" value="u.MP9302" checked="checked"/>
        <label for="filu_MP9302">u.MP9302</label>
        <input type="checkbox" id="filg_MP9402" name="fil" value="g.MP9402" checked="checked"/>
        <label for="filg_MP9402">g.MP9402</label>
        <input type="checkbox" id="filr_MP9602" name="fil" value="r.MP9602" checked="checked"/>
        <label for="filr_MP9602">r.MP9602</label>
        <input type="checkbox" id="fili_MP9703" name="fil" value="i.MP9703" checked="checked"/>
        <label for="fili_MP9703">i.MP9703</label>
        <input type="checkbox" id="filz_MP9901" name="fil" value="z.MP9901" checked="checked"/>
        <label for="filz_MP9901">z.MP9901</label>
        <input type="checkbox" id="filgri_MP9605" name="fil" value="gri.MP9605" checked="checked"/>
        <label for="filgri_MP9605">gri.MP9605</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="filCN_MP7803" name="fil" value="CN.MP7803" checked="checked"/>
        <label for="filCN_MP7803">CN.MP7803</label>
        <input type="checkbox" id="filCaHK_MP9303" name="fil" value="CaHK.MP9303" checked="checked"/>
        <label for="filCaHK_MP9303">CaHK.MP9303</label>
        <input type="checkbox" id="filHa_MP7605" name="fil" value="Ha.MP7605" checked="checked"/>
        <label for="filHa_MP7605">Ha.MP7605</label>
        <input type="checkbox" id="filHa_MP9603" name="fil" value="Ha.MP9603" checked="checked"/>
        <label for="filHa_MP9603">Ha.MP9603</label>
        <input type="checkbox" id="filHaOFF_MP7604" name="fil" value="HaOFF.MP7604" checked="checked"/>
        <label for="filHaOFF_MP7604">HaOFF.MP7604</label>
        <input type="checkbox" id="filHaOFF_MP9604" name="fil" value="HaOFF.MP9604" checked="checked"/>
        <label for="filHaOFF_MP9604">HaOFF.MP9604</label>
        <input type="checkbox" id="filN393_MP1111" name="fil" value="N393.MP1111" checked="checked"/>
        <label for="filN393_MP1111">N393.MP1111</label>
        <input type="checkbox" id="filOIII_MP7504" name="fil" value="OIII.MP7504" checked="checked"/>
        <label for="filOIII_MP7504">OIII.MP7504</label>
        <input type="checkbox" id="filOIII_MP9501" name="fil" value="OIII.MP9501" checked="checked"/>
        <label for="filOIII_MP9501">OIII.MP9501</label>
        <input type="checkbox" id="filOIIIOFF_MP9502" name="fil" value="OIIIOFF.MP9502" checked="checked"/>
        <label for="filOIIIOFF_MP9502">OIIIOFF.MP9502</label>
        <input type="checkbox" id="filPHG_MP9999" name="fil" value="PHG.MP9999" checked="checked"/>
        <label for="filPHG_MP9999">PHG.MP9999</label>
        <input type="checkbox" id="filTiO_MP7701" name="fil" value="TiO.MP7701" checked="checked"/>
        <label for="filTiO_MP7701">TiO.MP7701</label>
      </div>
    </fieldset>
  </div>
  <div>
    <input type="submit" class="btn btn-default" onclick="return false" id="getimages" name="getimages" value="{{ i18n-form.submit_individual_image_list }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="getstacks" name="getstacks" value="{{ i18n-form.submit_stacked_image_list }}"/>
    <input type="submit" class="btn btn-default" onclick="return false" id="getboth" name="getboth" value="{{ i18n-form.submit_individual_and_stacked_image_list }}"/>
  </div>
</form>

<div id="diag"></div>

<div id="map-canvas"></div>
