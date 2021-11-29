{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.search[i18nText-lang] -%}
{%- assign utype = "Plane.energy.emBand/Observation.collection/Observation.instrument.name/Plane.energy.bandpassName/Plane.calibrationLevel/Plane.dataProductType/Observation.type" -%}

<div class="col-sm-12">
  <div class="panel panel-default">
    <div class="panel-heading">{{ i18nForm.labels['DATA_ACQUISITION_LABEL'] }}</div>
    <div class="panel-body">
      <div id="caom2_data_train"
           class="width-100 text-align advanced_search_data_train modelDataSource_caom2 seven-col"
           data-utypes="{{ utype }}">
        <div class="hidden hierarchy_utype">{{ utype }}</div>
        <div id="{{ utype }}.building" class="loading hidden">
            <span class="spinner-span glyphicon glyphicon-refresh fast-right-spinner"></span>
            <span class="info-span">{{ i18nForm.labels['LOADING_MESSAGE'] }}</span>
        </div>
        <div class="reloadHierarchy hidden">
          <div class="dt-unavailable">
            {{ i18nForm.labels['DATATRAIN_UNAVAILABLE'] }}
            {{ i18nForm.labels['USE_UPPER_SEARCH_FORM'] }}
            <button type="button" class="btn btn-default btn-sm dt-unavailable reloadHierarchySubmit">{{ i18nForm.labels['RELOAD_CONSTRAINTS'] }}</button>
          </div>
        </div>
        <div class="caom2_dtTableDiv"></div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</div>