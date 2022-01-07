{%- include variable-core.liquid -%}
{%- assign i18n-dss=site.data.dss[i18nText-lang] -%}

<form class="form-inline" action="/en/download" name="download" method="POST">
   <button type="button" class="btn btn-default" onclick="document.location.reload(true)" data-role="none">{{ i18n-dss.labels.refresh_button }}</button>
   <input type="submit" class="btn btn-default" value="{{ i18n-dss.labels.request_files }}" data-role="none" />

   <div id="dss_results" data-results-endpoint="{{ i18n-dss.results_backend_endpoint }}"></div>
</form>
