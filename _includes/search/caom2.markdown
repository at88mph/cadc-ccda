{%- include variable-core.liquid -%}
{%- assign i18nForm-search=site.data.search -%}
{%- assign i18nForm=i18nForm-search[i18nText-lang] -%}

<form id="queryForm" name="queryForm" class="queryForm" method="post" action="{{ i18nForm.servlet_context_path }}/find" enctype="multipart/form-data">
    <!-- Used by VOView to sort the results. -->
    <input type="hidden" name="sort_column" value="Start Date"/>
    <input type="hidden" name="sort_order" value="descending"/>
    <input type="hidden" name="formName" value="adsform"/>
    <!-- Used by AdvancedSearch to pass to TAP. -->
    <input type="hidden" name="SelectList" class="CAOM2_selectlist"/>
    <input type="hidden" name="MaxRecords" value="30000"/>
    <input type="hidden" name="format" value="csv"/>
    <!-- Used by AdvancedSearch to pass to VOTV. -->
    <input type="hidden" id="max_row_limit_warning" value="{{ i18nForm.labels['MAX_ROW_LIMIT_WARNING'] }}"/>
    <div class="col-sm-12 mrgn-tp-md mrgn-bttm-md">
        <button disabled 
                type="submit"
                class="btn btn-primary submit-query"
                value="{{ i18nForm.labels['SEARCH_BUTTON_LABEL'] }}">{{ i18nForm.labels['SEARCH_BUTTON_LABEL'] }}</button>
        <button type="reset"
                class="btn btn-default reset-query-form"
                value="{{ i18nForm.labels['RESET_BUTTON_LABEL'] }}">{{ i18nForm.labels['RESET_BUTTON_LABEL'] }}</button>
    </div>
    <div class="col-sm-12">
        {{ i18nForm.labels['TOOLTIP_CLARIFICATION_MESSAGE_PREFIX'] }}&nbsp;<span class="glyphicon glyphicon-question-sign text-info"></span>&nbsp;{{ i18nForm.labels['TOOLTIP_CLARIFICATION_MESSAGE_SUFFIX'] }}
    </div>
<div class="wb-eqht">
    <div class="col-md-3 search-category hght-inhrt">
        <div class="panel panel-default hght-inhrt">
            <div class="panel-heading">{{ i18nForm.labels['OBSERVATION_CONSTRAINT_LABEL'] }}</div>
            <div class="panel-body search-constraints small">
            {% for utype in i18nForm-search.form.caom2.observation_constraints.text_utypes %}
            {%- capture label_key -%}
                {{ utype }}_FORM_LABEL
            {%- endcapture -%}
            {%- capture form_name -%}
                {{ utype }}@Text
            {%- endcapture -%}
                <div data-toggle="popover"
                     data-container="body"
                     data-utype="{{ utype }}"
                     data-placement="right"
                     data-title="{{ i18nForm.labels[label_key] }}"
                     style="float:right;"
                     class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                <div id="{{ utype }}_formgroup">
                    <details id="{{ utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ utype }}" class="control-label search_criteria_label">{{ i18nForm.labels[label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                        </summary>
                        <div id="{{ utype }}_input_decorate">
                            <input type="text" class="form-control search_criteria_input" id="{{ utype }}" name="{{ utype }}" />
                        </div>
                        <input type="hidden" name="Form.name" value="{{ form_name }}" />
                    </details>
                </div>
            {% endfor %}
            {%- assign data_release_utype = "Plane.dataRelease" -%}
            {%- capture data_release_label_key -%}
                {{ data_release_utype }}_FORM_LABEL
            {%- endcapture -%}
                <div data-toggle="popover"
                     data-container="body"
                     data-utype="{{ data_release_utype }}"
                     data-placement="right"
                     style="float:right;"
                     data-title="{{ i18nForm.labels[data_release_label_key] }}"
                     class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                <div id="{{ data_release_utype }}_formgroup" class="form-group data_release_date_panel">
                    <details id="{{ data_release_utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ data_release_utype }}"
                                class="control-label">{{ i18nForm.labels[data_release_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                        </summary>
                        <label for="{{ data_release_utype }}@PublicTimestampFormConstraint.value" id="{{ data_release_utype }}@PublicTimestampFormConstraint.value_LABEL" class="search_criteria_label control-label">
                            <input type="checkbox" class="col-md-2 align-top form-control" 
                                data-disable-to="{{ data_release_utype }}" id="{{ data_release_utype }}@PublicTimestampFormConstraint.value" name="{{ data_release_utype }}@PublicTimestampFormConstraint.value">
                                <span class="mrgn-lft-sm">{{ i18nForm.labels['PUBLIC_DATA_FLAG_FORM_LABEL'] }}</span><span class="search_criteria_label_contents color-accent"></span></label>
                        <div id="{{ data_release_utype }}_input_decorate">
                            <input id="{{ data_release_utype }}" name="{{ data_release_utype }}" value="" type="text"
                                class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input" /></div>
                        <input type="hidden" name="Form.name" value="{{ data_release_utype }}@TimestampFormConstraint" />
                        <input type="hidden" name="Form.name" value="{{ data_release_utype }}@PublicTimestampFormConstraint" />
                    </details>
                </div>
                {%- assign intent_utype = "Observation.intent" -%}
                {%- capture intent_label_key -%}
                    {{ intent_utype }}_FORM_LABEL
                {%- endcapture -%}
                <div id="{{ intent_utype }}_details" style="margin-bottom:0px; margin-top:10px;">
                    <label for="{{ intent_utype }}" id="{{ intent_utype }}_LABEL" class="hidden search_criteria_label">{{ i18nForm.labels[intent_label_key] }}</label>
                    <select id="{{ intent_utype }}" name="{{ intent_utype }}" class="form-control search_criteria_input">
                        <option value="calibration">Calibration only</option>
                        <option value="" selected="selected">Science and Calibration</option>
                        <option value="science">Science only</option>
                    </select>
                    <input type="hidden" name="Form.name" value="{{ intent_utype }}@Text" />
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 search-category hght-inhrt">
        <div class="panel panel-default hght-inhrt">
            <div class="panel-heading">{{ i18nForm.labels['SPATIAL_CONSTRAINT_LABEL'] }}</div>
            <div class="panel-body search-constraints small">
                {%- assign spatial_target_utype = "Plane.position.bounds" -%}
                {%- capture resolver_field_id -%}
                    {{ spatial_target_utype }}@Shape1Resolver.value
                {%- endcapture -%}
                {%- capture spatial_target_label_key -%}
                    {{ spatial_target_utype }}_FORM_LABEL
                {%- endcapture -%}
                <div id="{{ spatial_target_utype }}_formgroup">
                    <div data-toggle="popover"
                         data-container="body"
                         data-utype="{{ spatial_target_utype }}"
                         data-placement="right"
                         style="float:right;"
                         data-title="{{ i18nForm.labels[spatial_target_label_key] }}"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <details id="{{ spatial_target_utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ spatial_target_utype }}"
                                class="control-label">{{ i18nForm.labels[spatial_target_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                        </summary>
                        <div class="form-group">
                            <div>
                                <label for="{{ resolver_field_id }}"
                                    class="sub-label">{{ i18nForm.labels['RESOLVER_FORM_LABEL'] }}<span class="search_criteria_label_contents color-accent"></span>
                                    <span class="italic margin-left-small">{{ i18nForm.labels['RESOLVER_FORM_LABEL_ADDENDUM'] }}</span>
                                </label>
                            </div>
                            <select size="1" name="{{ resolver_field_id }}" title="{{ i18nForm.labels['RESOLVER_FORM_LABEL'] }}"
                                    id="{{ resolver_field_id }}" class="resolver-select form-control">
                                <option value="ALL">
                                    {{ i18nForm.labels['ANY_RESOLVER_FORM_LABEL'] }}
                                </option>
                                <option value="SIMBAD">SIMBAD</option>
                                <option value="NED">NED</option>
                                <option value="VIZIER">VIZIER</option>
                                <option value="NONE">
                                    {{ i18nForm.labels['NO_RESOLVER_FORM_LABEL'] }}
                                </option>
                            </select>
                        </div>
                        <div class="input-group">
                            <input id="{{ spatial_target_utype }}"
                                    type="text"
                                    class="form-control search_criteria_input"
                                    size="28"
                                    name="{{ spatial_target_utype }}@Shape1.value" />
                            <span id="{{ spatial_target_utype }}_target_name_resolution_status"
                                    class="input-group-addon target_name_resolution_status"></span>
                        </div>
                        <div class="text-center">
                            <span><strong>- {{ i18nForm.labels['OR_LABEL'] }} -</strong></span>
                        </div>
                        <div class="form-group">
                            <div id="{{ spatial_target_utype }}_targetList_fileInputDiv" class="">
                                <label for="{{ spatial_target_utype }}_targetList"
                                    class="disabled" disabled>{{ i18nForm.labels['TARGET_LIST_FORM_LABEL'] }}<span
                                            class="search_criteria_label_contents color-accent"></span></label>
                                <div>
                                <input type="file" class="form-control file-form-control target-list"
                                        id="{{ spatial_target_utype }}_targetList" name="targetList"
                                        title="{{ i18nForm.labels['TARGET_LIST_TOOLTIP'] }}" />
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <span><strong>- {{ i18nForm.labels['OR_LABEL'] }} -</strong></span>
                        </div>
                        <div class="form-group">
                            <a id="ssois_link" href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ssois" target="ssois_window">
                            {{ i18nForm.labels['SSOIS_MOBILE_OBJECTS'] }}</a>
                        </div>
                        <input type="hidden" name="Form.name" value="targetList.targetList" />
                        <input type="hidden" name="Form.name" value="{{ spatial_target_utype }}@Shape1" />
                    </details>
                </div>
                {%- assign pixel_scale_utype = "Plane.position.sampleSize" -%}
                {%- capture pixel_scale_label_key -%}
                    {{ pixel_scale_utype }}_FORM_LABEL
                {%- endcapture -%}
                <div id="{{ pixel_scale_utype }}_formgroup">
                    <div data-utype="{{ pixel_scale_utype }}"
                         data-toggle="popover"
                         data-container="body"
                         data-placement="left"
                         data-title="{{ i18nForm.labels[pixel_scale_label_key] }}"
                         style="float:right;"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <details id="{{ pixel_scale_utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ pixel_scale_utype }}"
                                class="control-label">{{ i18nForm.labels[pixel_scale_label_key] }}<span class="search_criteria_label_contents color-accent"></span>
                            </label>
                        </summary>
                        <div id="{{ pixel_scale_utype }}_input_decorate">
                            <input id="{{ pixel_scale_utype }}"
                                name="{{ pixel_scale_utype }}" value="" size="15"
                                type="text"
                                class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input" />
                        </div>
                        <input type="hidden" name="Form.name" value="{{ pixel_scale_utype }}@Number"/>
                    </details>
                </div>
                <div class="label_tooltip_right">
                    {%- assign spatial_cutout_name = "Plane.position.DOWNLOADCUTOUT" -%}
                    {%- capture spatial_cutout_name_label_key -%}
                        {{ spatial_cutout_name }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                         data-container="body"
                         data-utype="{{ spatial_cutout_name }}"
                         data-placement="right"
                         style="float:right;"
                         data-title="{{ i18nForm.labels[spatial_cutout_name_label_key] }}"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <div class="form-group">
                        <label for="{{ spatial_cutout_name }}" id="{{ spatial_cutout_name }}_LABEL" class="search_criteria_label control-label">
                            <input type="checkbox" disabled="disabled" name="{{ spatial_cutout_name }}" id="{{ spatial_cutout_name }}" />
                            {{ i18nForm.labels[spatial_cutout_name_label_key] }}
                        </label>
                        <input type="hidden" name="Form.name" disabled="disabled"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 search-category hght-inhrt">
        <div class="panel panel-default hght-inhrt">
            <div class="panel-heading">{{ i18nForm.labels['TIME_CONSTRAINT_LABEL'] }}</div>
            <div class="panel-body search-constraints small">
            {%- assign date_utype = "Plane.time.bounds.samples" -%}
            {%- capture date_label_key -%}
                {{ date_utype }}_FORM_LABEL
            {%- endcapture -%}
            {%- capture date_preset_label_key -%}
                {{ date_utype }}_PRESET_FORM_LABEL
            {%- endcapture -%}
            {%- capture date_24hour_preset_label_key -%}
                {{ date_utype }}_PRESET_PAST_24_HOURS_FORM_LABEL
            {%- endcapture -%}
            {%- capture date_week_preset_label_key -%}
                {{ date_utype }}_PRESET_PAST_WEEK_FORM_LABEL
            {%- endcapture -%}
            {%- capture date_month_preset_label_key -%}
                {{ date_utype }}_PRESET_PAST_MONTH_FORM_LABEL
            {%- endcapture -%}
                <div id="{{ date_utype }}_formgroup">
                    <div id="{{ date_utype }}_tooltip"
                        data-toggle="popover"
                        data-container="body"
                        data-placement="left"
                        style="float:right;"
                        data-utype="{{ date_utype }}"
                        data-title="{{ i18nForm.labels[date_label_key] }}"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                    <details id="{{ date_utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ date_utype }}" class="control-label">{{ i18nForm.labels[date_label_key] }}
                                <span class="search_criteria_label_contents color-accent"></span></label>
                        </summary>
                        <div id="{{ date_utype }}_input_decorate">
                            <input id="{{ date_utype }}"
                                    name="{{ date_utype }}@Date.value" value="" size="20"
                                    type="text" data-assoc-field="{{ date_utype }}_PRESET"
                                    class="form-control search_criteria_input width-100
                                            ui-form-input-validate
                                            ui_unitconversion_input"/>
                        </div>
                        <div class="text-center">
                        <span><strong>- {{ i18nForm.labels["OR_LABEL"] }} -</strong></span>
                        </div>
                        <div class="form-group">
                        <label class="sub-label" for="{{ date_utype }}_PRESET">{{ i18nForm.labels[date_preset_label_key] }}
                            <span class="search_criteria_label_contents color-accent"></span>
                        </label>
                        <select id="{{ date_utype }}_PRESET"
                                data-assoc-field="{{ date_utype }}" name="{{ date_utype }}_PRESET@Date.value"
                                class="form-control search_criteria_input ui_unitconversion_input preset-date width-100">
                            <option value=""></option>
                            <option value="PAST_24_HOURS">{{ i18nForm.labels[date_24hour_preset_label_key] }}</option>
                            <option value="PAST_WEEK">{{ i18nForm.labels[date_week_preset_label_key] }}</option>
                            <option value="PAST_MONTH">{{ i18nForm.labels[date_month_preset_label_key] }}</option>
                        </select>
                        </div>
                        <input type="hidden" name="Form.name" value="{{ date_utype }}@Date"/>
                    </details>
                </div>
            {% for utype in i18nForm-search.form.caom2.time_constraints.number_utypes %}
                {%- capture label_key -%}
                    {{ utype }}_FORM_LABEL
                {%- endcapture -%}
                {%- capture form_name -%}
                    {{ utype }}@Number
                {%- endcapture -%}
                <div id="{{ utype }}_formgroup">
                    <div data-utype="{{ utype }}"
                         data-container="body"
                         data-toggle="popover"
                         data-placement="left"
                         data-title="{{ i18nForm.labels[label_key] }}"
                         style="float:right;"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <details id="{{ utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ utype }}"
                                class="control-label">{{ i18nForm.labels[label_key] }}<span class="search_criteria_label_contents color-accent"></span>
                            </label>
                        </summary>
                        <div id="{{ utype }}_input_decorate">
                            <input id="{{ utype }}"
                                name="{{ utype }}" value="" size="15"
                                type="text"
                                class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input" />
                        </div>
                        <input type="hidden" name="Form.name" value="{{ form_name }}"/>
                    </details>
                </div>
            {%- endfor -%}
            </div>
        </div>
    </div>
    <div class="col-md-3 search-category hght-inhrt">
        <div class="panel panel-default hght-inhrt">
            <div class="panel-heading">{{ i18nForm.labels['SPECTRAL_CONSTRAINT_LABEL'] }}</div>
            <div class="panel-body search-constraints small">
                {%- assign spectral_coverage_utype = "Plane.energy.bounds.samples" -%}
                {%- capture spectral_coverage_label_key -%}
                    {{ spectral_coverage_utype }}_FORM_LABEL
                {%- endcapture -%}
                <div id="{{ spectral_coverage_utype }}_formgroup">
                    <div data-toggle="popover"
                         data-container="body"
                         data-utype="{{ spectral_coverage_utype }}"
                         data-placement="left"
                         style="float:right;"
                         data-title="{{ i18nForm.labels[spectral_coverage_label_key] }}"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <details id="{{ spectral_coverage_utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ spectral_coverage_utype }}"
                                class="control-label search_criteria_label">{{ i18nForm.labels[spectral_coverage_label_key] }}
                                <span class="search_criteria_label_contents color-accent"></span></label>
                        </summary>
                        <div id="{{ spectral_coverage_utype }}_input_decorate">
                            <input id="{{ spectral_coverage_utype }}"
                                    name="{{ spectral_coverage_utype }}@Energy.value" value="" size="20"
                                    type="text"
                                    class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input"/>
                        </div>
                        <input type="hidden" name="Form.name" value="{{ spectral_coverage_utype }}@Energy" />
                    </details>
                </div>
            {% for utype in i18nForm-search.form.caom2.energy_constraints.number_utypes %}
                {%- capture label_key -%}
                    {{ utype }}_FORM_LABEL
                {%- endcapture -%}
                {%- capture form_name -%}
                    {{ utype }}@Number
                {%- endcapture -%}
                <div id="{{ utype }}_formgroup">
                    <div data-utype="{{ utype }}"
                         data-container="body"
                         data-toggle="popover"
                         data-placement="left"
                         data-title="{{ i18nForm.labels[label_key] }}"
                         style="float:right;"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <details id="{{ utype }}_details">
                        <summary class="search_criteria_label_container">
                            <label for="{{ utype }}"
                                class="control-label">{{ i18nForm.labels[label_key] }}<span class="search_criteria_label_contents color-accent"></span>
                            </label>
                        </summary>
                        <div id="{{ utype }}_input_decorate">
                            <input id="{{ utype }}"
                                name="{{ utype }}" value="" size="15"
                                type="text"
                                class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input" />
                        </div>
                        <input type="hidden" name="Form.name" value="{{ form_name }}"/>
                    </details>
                </div>
            {%- endfor -%}
                <div class="label_tooltip_left">
                    {%- assign energy_cutout_name = "Plane.energy.DOWNLOADCUTOUT" -%}
                    {%- capture energy_cutout_name_label_key -%}
                        {{ energy_cutout_name }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                         data-container="body"
                         data-utype="{{ energy_cutout_name }}"
                         style="float:right;"
                         data-placement="left"
                         data-title="{{ i18nForm.labels[energy_cutout_name_label_key] }}"
                         class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <div class="form-group">
                        <label for="{{ energy_cutout_name }}" id="{{ energy_cutout_name }}_LABEL" class="search_criteria_label control-label">
                            <input type="checkbox" disabled="disabled" name="{{ energy_cutout_name }}" id="{{ energy_cutout_name }}" />
                            {{ i18nForm.labels[energy_cutout_name_label_key] }}
                        </label>
                        <input type="hidden" name="Form.name" disabled="disabled"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {% include search/caom2_datatrain.markdown %}
</div>
<div class="col-sm-12 mrgn-tp-md mrgn-bttm-md">
    <button disabled
            type="submit"
            class="btn btn-primary submit-query"
            value="{{ i18nForm.labels['SEARCH_BUTTON_LABEL'] }}">
    {{ i18nForm.labels['SEARCH_BUTTON_LABEL'] }}
    </button>
    <button type="reset"
            class="btn btn-default reset-query-form"
            value="reset">
    {{ i18nForm.labels['RESET_BUTTON_LABEL'] }}
    </button>
</div>
</form>
