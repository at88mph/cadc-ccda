{%- include variable-core.liquid -%}
{%- assign i18n-dss=site.data.dss[i18nText-lang] -%}

<div class="form-content">
    <form id="query_form" name="dss_query_name" action="{{ i18n-dss.query_name_action }}" method="POST">
        <div class="form-group">
            <label for="object_name" class="control-label">{{ i18n-dss.labels.object_name }}: </label>
            <input type="text" name="object_name" id="object_name" class="form-control" />
        </div>
        <div class="form-group">
            <label for="ra_radius" class="control-label">{{ i18n-dss.labels.ra_box_size }}: </label>
            <input type="text" name = "ra_radius" id="ra_radius" value="10.0" size="5" class="form-control" />
        </div>
        <div class="form-group">
            <label for="dec_radius" class="control-label">{{ i18n-dss.labels.dec_box_size }}: </label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" size="5" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="{{ i18n-dss.labels.submit_button }}" />
    </form>
</div>
<span id="results_endpoint" class="hide">{{ i18n-dss.results_endpoint }}</span>
<section class="alert alert-info">
    <p class="text-info">{{ i18n-dss.labels.query_note }}</p>
</section>
