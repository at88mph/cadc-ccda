{%- include variable-core.liquid -%}
{%- assign i18n-dss=site.data.dss[i18nText-lang] -%}

<div class="form-content">
    <form id="query_form" name="dss_query_coord" action="{{ i18n-dss.query_coord_action }}" method="POST">
        <div class="form-group">
            <label class="control-label" for="ra">{{ i18n-dss.labels.ra_coord }}&nbsp;</label>
            <input type="text" name="ra" id="ra" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="dec">{{ i18n-dss.labels.dec_coord }}&nbsp;</label>
            <input type="text" name = "dec" id="dec" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="ra_radius">{{ i18n-dss.labels.ra_box_size }}</label>
            <input type="text" id="ra_radius" name = "ra_radius" value="10.0" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="dec_radius">{{ i18n-dss.labels.dec_box_size }}</label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="{{ i18n-dss.labels.submit_button }}" />
    </form>
</div>

<span id="results_endpoint" class="hide">{{ i18n-dss.results_endpoint }}</span>
<section class="alert alert-info">
    <p class="text-info">{{ i18n-dss.labels.query_note }}</p>
</section>
