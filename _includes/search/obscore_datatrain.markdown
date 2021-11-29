{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.search[i18nText-lang] -%}

<div class="col-sm-12">
  <div class="panel panel-default">
    <div class="panel-heading">{{ i18nForm.labels['DATA_ACQUISITION_LABEL'] }}</div>
    <div class="panel-body">
      <div id="${param.modelDataSource}_data_train"
           class="width-100 text-align advanced_search_data_train modelDataSource_${param.modelDataSource} ${param.colcount}"
           data-utypes="${param.utyifpe}">
        <div class="hidden hierarchy_utype">${param.utype}</div>
        <div id="${param.utype}.building" class="loading hidden">
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
        <div class="${param.modelDataSource}_dtTableDiv"></div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</div>