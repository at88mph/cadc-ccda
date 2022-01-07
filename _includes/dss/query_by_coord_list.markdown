{%- include variable-core.liquid -%}
{%- assign i18n-dss=site.data.dss[i18nText-lang] -%}

<p>{{ i18n-dss.labels.query_coord_list_format_label_1 }} </p>
<pre>{{ i18n-dss.labels.query_coord_list_pre_label_1 }}</pre>
<p> {{ i18n-dss.labels.query_coord_list_format_label_2 }}</p>
<pre>{{ i18n-dss.labels.query_coord_list_pre_label_2 }}</pre>

<div class="form-content">
  <form action="{{ i18n-dss.query_coord_list_action }}" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_coord" class="control-label">{{ i18n-dss.labels.query_list_coordinate }}</label>
        <input type="file" name="uploaded_file_coord" id="uploaded_file_coord" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="{{ i18n-dss.labels.submit_button }}" />
  </form>
</div>
<span id="results_endpoint" class="hide">{{ i18n-dss.results_endpoint }}</span>
<section class="alert alert-info">
    <p class="text-info">{{ i18n-dss.labels.query_note }}</p>
</section>
