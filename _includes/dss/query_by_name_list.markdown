{%- include variable-core.liquid -%}
{%- assign i18n-dss=site.data.dss[i18nText-lang] -%}

<p>{{ i18n-dss.labels.query_name_list_format_example }}</p>
<p>{{ i18n-dss.labels.example }}:</p>
<pre>
object1&lt;TAB&gt;M31&lt;TAB&gt;10.0&lt;TAB&gt;12.0
object2&lt;TAB&gt;M101&lt;TAB&gt;12.0&lt;TAB&gt;5.0
</pre>
<div class="form-content">
  <form id="query_form" name="dss_query_name_list" action="{{ i18n-dss.query_name_list_action }}" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_object" class="control-label">{{ i18n-dss.labels.query_list_file_name }}</label>
        <input type="file" name="uploaded_file_object" id="uploaded_file_object" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="{{ i18n-dss.labels.submit_button }}" />
  </form>
</div>
<span id="results_endpoint" class="hide">{{ i18n-dss.results_endpoint }}</span>
<section class="alert alert-info">
    <p class="text-info">{{ i18n-dss.labels.query_note }}</p>
</section>
