{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.search[i18nText-lang] -%}
{%- assign obscore_utype = "DataID.Collection/Provenance.ObsConfig.Facility.name/Provenance.ObsConfig.Instrument.name/ObsDataset.calibLevel/ObsDataset.dataProductType" -%}

<div class="col-sm-12">
  <div class="panel panel-default">
    <div class="panel-heading">{{ i18nForm.labels['DATA_ACQUISITION_LABEL'] }}</div>
    <div class="panel-body">
      <div id="obscore_data_train"
           class="width-100 text-align advanced_search_data_train modelDataSource_obscore five-col small"
           data-utypes="{{ obscore_utype }}">
        <div class="hidden hierarchy_utype">{{ obscore_utype }}</div>
        <div id="{{ obscore_utype }}.building" class="loading hidden">
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
        <div class="obscore_dtTableDiv small"></div>
      </div>
    </div>
  </div>
</div>