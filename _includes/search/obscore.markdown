{%- include variable-core.liquid -%}
{%- assign i18nForm-search=site.data.search -%}
{%- assign i18nForm=i18nForm-search[i18nText-lang] -%}

  <form id="obscoreQueryForm" name="obscoreQueryForm" class="queryForm" method="post" action="{{ i18nForm.servlet_context_path }}/find" enctype="multipart/form-data">
    <!-- Used by VOView to sort the results. -->
    <input type="hidden" name="sort_column" value="t_min"/>
    <input type="hidden" name="sort_order" value="descending"/>
    <input type="hidden" name="formName" value="adsform"/>
    <!-- Used by AdvancedSearch to pass to TAP. -->
    <input type="hidden" name="SelectList" class="ObsCore_selectlist"/>
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
        {% comment %}
        Begin Observation Constraints
        {% endcomment %}
        <div class="col-md-3 search-category hght-inhrt">
            <div class="panel panel-default hght-inhrt">
                <div class="panel-heading">{{ i18nForm.labels['OBSERVATION_CONSTRAINT_LABEL'] }}</div>
                <div class="panel-body search-constraints small">
                    {%- assign obs_id_utype = "DataID.observationID" -%}
                    {%- capture obs_id_label_key -%}
                        {{ obs_id_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                        data-container="body"
                        data-utype="{{ obs_id_utype }}"
                        data-placement="right"
                        data-title="{{ i18nForm.labels[obs_id_label_key] }}"
                        style="float:right;"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                    <div id="{{ obs_id_utype }}_formgroup">
                        <details id="{{ obs_id_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obs_id_utype }}" class="control-label search_criteria_label">{{ i18nForm.labels[obs_id_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                            </summary>
                            <div id="{{ obs_id_utype }}_input_decorate">
                                <input type="text" class="form-control search_criteria_input" id="{{ obs_id_utype }}" name="{{ obs_id_utype }}" />
                            </div>
                            <input type="hidden" name="Form.name" value="{{ obs_id_utype }}@Text" />
                        </details>
                    </div>
                    {%- assign target_name_utype = "Target.Name" -%}
                    {%- capture target_name_label_key -%}
                        {{ target_name_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                        data-container="body"
                        data-utype="{{ target_name_utype }}"
                        data-placement="right"
                        data-title="{{ i18nForm.labels[target_name_label_key] }}"
                        style="float:right;"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                    <div id="{{ target_name_utype }}_formgroup">
                        <details id="{{ target_name_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ target_name_utype }}" class="control-label search_criteria_label">{{ i18nForm.labels[target_name_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                            </summary>
                            <div id="{{ target_name_utype }}_input_decorate">
                                <input type="text" class="form-control search_criteria_input" id="{{ target_name_utype }}" name="{{ target_name_utype }}" />
                            </div>
                            <input type="hidden" name="Form.name" value="{{ target_name_utype }}@Text" />
                        </details>
                    </div>
                    {%- assign data_release_utype = "Curation.releaseDate" -%}
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
                </div>
            </div>
        </div>
        {% comment %}
        End Observation Constraints
        {% endcomment %}
        {% comment %}
        Begin Spatial Constraints
        {% endcomment %}
        <div class="col-md-3 search-category hght-inhrt">
            <div class="panel panel-default hght-inhrt">
                <div class="panel-heading">{{ i18nForm.labels['SPATIAL_CONSTRAINT_LABEL'] }}</div>
                <div class="panel-body search-constraints small">
                    {%- assign obscore_spatial_target_utype = "Char.SpatialAxis.Coverage.Support.Area" -%}
                    {%- capture obscore_resolver_field_id -%}
                        {{ obscore_spatial_target_utype }}@Shape1Resolver.value
                    {%- endcapture -%}
                    {%- capture obscore_spatial_target_label_key -%}
                        {{ obscore_spatial_target_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div id="{{ obscore_spatial_target_utype }}_formgroup">
                        <div data-toggle="popover"
                            data-container="body"
                            data-utype="{{ obscore_spatial_target_utype }}"
                            data-placement="right"
                            style="float:right;"
                            data-title="{{ i18nForm.labels[obscore_spatial_target_label_key] }}"
                            class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                        </div>
                        <details id="{{ obscore_spatial_target_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obscore_spatial_target_utype }}"
                                    class="control-label">{{ i18nForm.labels[obscore_spatial_target_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
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
                                <input id="{{ obscore_spatial_target_utype }}"
                                        type="text"
                                        class="form-control search_criteria_input"
                                        size="28"
                                        name="{{ obscore_spatial_target_utype }}@Shape1.value" />
                                <span id="{{ obscore_spatial_target_utype }}_target_name_resolution_status"
                                        class="input-group-addon target_name_resolution_status"></span>
                            </div>
                            <div class="text-center">
                                <span><strong>- {{ i18nForm.labels['OR_LABEL'] }} -</strong></span>
                            </div>
                            <div class="form-group">
                                <div id="{{ obscore_spatial_target_utype }}_targetList_fileInputDiv" class="">
                                    <label for="{{ obscore_spatial_target_utype }}_targetList"
                                        class="disabled" disabled>{{ i18nForm.labels['TARGET_LIST_FORM_LABEL'] }}<span
                                                class="search_criteria_label_contents color-accent"></span></label>
                                    <div>
                                    <input type="file" class="form-control file-form-control target-list"
                                            id="{{ obscore_spatial_target_utype }}_targetList" name="targetList"
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
                {% for utype in i18nForm-search.form.obscore.spatial_constraints.number_utypes %}
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
                    {%- assign obscore_spatial_cutout_name = "Char.SpatialAxis.DOWNLOADCUTOUT" -%}
                    {%- capture obscore_spatial_cutout_name_label_key -%}
                        {{ obscore_spatial_cutout_name }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                        data-container="body"
                        data-utype="{{ obscore_spatial_cutout_name }}"
                        data-placement="right"
                        style="float:right;"
                        data-title="{{ i18nForm.labels[obscore_spatial_cutout_name_label_key] }}"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <div class="form-group">
                        <label for="{{ obscore_spatial_cutout_name }}" id="{{ obscore_spatial_cutout_name }}_LABEL" class="search_criteria_label control-label">
                            <input type="checkbox" disabled="disabled" name="{{ obscore_spatial_cutout_name }}" id="{{ obscore_spatial_cutout_name }}" />
                            {{ i18nForm.labels[obscore_spatial_cutout_name_label_key] }}
                        </label>
                        <input type="hidden" name="Form.name" disabled="disabled"/>
                    </div>
                </div>
            </div>
        </div>
        {% comment %}
        End Spatial Constraints
        {% endcomment %}
        {% comment %}
        Begin Temporal Constraints
        {% endcomment %}
        <div class="col-md-3 search-category hght-inhrt">
            <div class="panel panel-default hght-inhrt">
                <div class="panel-heading">{{ i18nForm.labels['TIME_POLARIZATION_CONSTRAINT_LABEL'] }}</div>
                <div class="panel-body search-constraints small">
                {%- assign obscore_date_utype = "Char.TimeAxis.Coverage.Bounds.Limits" -%}
                {%- capture obscore_date_label_key -%}
                    {{ obscore_date_utype }}_FORM_LABEL
                {%- endcapture -%}
                {%- capture obscore_date_preset_label_key -%}
                    {{ obscore_date_utype }}_PRESET_FORM_LABEL
                {%- endcapture -%}
                {%- capture obscore_date_24hour_preset_label_key -%}
                    {{ obscore_date_utype }}_PRESET_PAST_24_HOURS_FORM_LABEL
                {%- endcapture -%}
                {%- capture obscore_date_week_preset_label_key -%}
                    {{ obscore_date_utype }}_PRESET_PAST_WEEK_FORM_LABEL
                {%- endcapture -%}
                {%- capture obscore_date_month_preset_label_key -%}
                    {{ obscore_date_utype }}_PRESET_PAST_MONTH_FORM_LABEL
                {%- endcapture -%}
                    <div id="{{ obscore_date_utype }}_formgroup">
                        <div id="{{ obscore_date_utype }}_tooltip"
                            data-toggle="popover"
                            data-container="body"
                            data-placement="left"
                            style="float:right;"
                            data-utype="{{ obscore_date_utype }}"
                            data-title="{{ i18nForm.labels[obscore_date_label_key] }}"
                            class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                        <details id="{{ obscore_date_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obscore_date_utype }}" class="control-label">{{ i18nForm.labels[obscore_date_label_key] }}
                                    <span class="search_criteria_label_contents color-accent"></span></label>
                            </summary>
                            <div id="{{ obscore_date_utype }}_input_decorate">
                                <input id="{{ obscore_date_utype }}"
                                        name="{{ obscore_date_utype }}@Date.value" value="" size="20"
                                        type="text" data-assoc-field="{{ obscore_date_utype }}_PRESET"
                                        class="form-control search_criteria_input width-100
                                                ui-form-input-validate
                                                ui_unitconversion_input"/>
                            </div>
                            <div class="text-center">
                            <span><strong>- {{ i18nForm.labels["OR_LABEL"] }} -</strong></span>
                            </div>
                            <div class="form-group">
                            <label class="sub-label" for="{{ obscore_date_utype }}_PRESET">{{ i18nForm.labels[obscore_date_preset_label_key] }}
                                <span class="search_criteria_label_contents color-accent"></span>
                            </label>
                            <select id="{{ obscore_date_utype }}_PRESET"
                                    data-assoc-field="{{ obscore_date_utype }}" name="{{ obscore_date_utype }}_PRESET@Date.value"
                                    class="form-control search_criteria_input ui_unitconversion_input preset-date width-100">
                                <option value=""></option>
                                <option value="PAST_24_HOURS">{{ i18nForm.labels[obscore_date_24hour_preset_label_key] }}</option>
                                <option value="PAST_WEEK">{{ i18nForm.labels[obscore_date_week_preset_label_key] }}</option>
                                <option value="PAST_MONTH">{{ i18nForm.labels[obscore_date_month_preset_label_key] }}</option>
                            </select>
                            </div>
                            <input type="hidden" name="Form.name" value="{{ obscore_date_utype }}@Date"/>
                        </details>
                    </div>
                    {% for utype in i18nForm-search.form.obscore.time_constraints.number_utypes %}
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
                    {%- assign obscore_polstate_utype = "Char.PolarizationAxis.stateList" -%}
                    {%- capture obscore_polstate_label_key -%}
                        {{ obscore_polstate_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                        data-container="body"
                        data-utype="{{ obscore_polstate_utype }}"
                        data-placement="right"
                        data-title="{{ i18nForm.labels[obscore_polstate_label_key] }}"
                        style="float:right;"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info"></div>
                    <div id="{{ obscore_polstate_utype }}_formgroup">
                        <details id="{{ obscore_polstate_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obscore_polstate_utype }}" class="control-label search_criteria_label">{{ i18nForm.labels[obscore_polstate_label_key] }}<span class="search_criteria_label_contents color-accent"></span></label>
                            </summary>
                            <div id="{{ obscore_polstate_utype }}_input_decorate">
                                <input type="text" class="form-control search_criteria_input" id="{{ obscore_polstate_utype }}" name="{{ obscore_polstate_utype }}" />
                            </div>
                            <input type="hidden" name="Form.name" value="{{ obscore_polstate_utype }}@Text" />
                        </details>
                    </div>
                    {%- assign obscore_pixel_scale_utype = "Char.PolarizationAxis.numBins" -%}
                    {%- capture obscore_pixel_scale_label_key -%}
                        {{ obscore_pixel_scale_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div id="{{ obscore_pixel_scale_utype }}_formgroup">
                        <div data-utype="{{ obscore_pixel_scale_utype }}"
                            data-toggle="popover"
                            data-container="body"
                            data-placement="left"
                            data-title="{{ i18nForm.labels[obscore_pixel_scale_label_key] }}"
                            style="float:right;"
                            class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                        </div>
                        <details id="{{ obscore_pixel_scale_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obscore_pixel_scale_utype }}"
                                    class="control-label">{{ i18nForm.labels[obscore_pixel_scale_label_key] }}<span class="search_criteria_label_contents color-accent"></span>
                                </label>
                            </summary>
                            <div id="{{ obscore_pixel_scale_utype }}_input_decorate">
                                <input id="{{ obscore_pixel_scale_utype }}"
                                    name="{{ obscore_pixel_scale_utype }}" value="" size="15"
                                    type="text"
                                    class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input" />
                            </div>
                            <input type="hidden" name="Form.name" value="{{ obscore_pixel_scale_utype }}@Number"/>
                        </details>
                    </div>
                </div>
            </div>
        </div>
        {% comment %}
        End Temporal Constraints
        {% endcomment %}
        {% comment %}
        Begin Spectral Constraints
        {% endcomment %}
        <div class="col-md-3 search-category hght-inhrt">
            <div class="panel panel-default hght-inhrt">
                <div class="panel-heading">{{ i18nForm.labels['SPECTRAL_CONSTRAINT_LABEL'] }}</div>
                <div class="panel-body search-constraints small">
                    {%- assign obscore_spectral_coverage_utype = "Char.SpectralAxis.Coverage.Bounds.Limits" -%}
                    {%- capture obscore_spectral_coverage_label_key -%}
                        {{ obscore_spectral_coverage_utype }}_FORM_LABEL
                    {%- endcapture -%}
                    <div id="{{ obscore_spectral_coverage_utype }}_formgroup">
                        <div data-toggle="popover"
                            data-container="body"
                            data-utype="{{ obscore_spectral_coverage_utype }}"
                            data-placement="left"
                            style="float:right;"
                            data-title="{{ i18nForm.labels[obscore_spectral_coverage_label_key] }}"
                            class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                        </div>
                        <details id="{{ obscore_spectral_coverage_utype }}_details">
                            <summary class="search_criteria_label_container">
                                <label for="{{ obscore_spectral_coverage_utype }}"
                                    class="control-label search_criteria_label">{{ i18nForm.labels[obscore_spectral_coverage_label_key] }}
                                    <span class="search_criteria_label_contents color-accent"></span></label>
                            </summary>
                            <div id="{{ obscore_spectral_coverage_utype }}_input_decorate">
                                <input id="{{ obscore_spectral_coverage_utype }}"
                                        name="{{ obscore_spectral_coverage_utype }}@Energy.value" value="" size="20"
                                        type="text"
                                        class="form-control search_criteria_input width-100 ui-form-input-validate ui_unitconversion_input"/>
                            </div>
                            <input type="hidden" name="Form.name" value="{{ obscore_spectral_coverage_utype }}@Energy" />
                        </details>
                    </div>
                {% for utype in i18nForm-search.form.obscore.energy_constraints.number_utypes %}
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
                    {%- assign obscore_spectral_cutout_name = "Char.SpectralAxis.DOWNLOADCUTOUT" -%}
                    {%- capture obscore_spectral_cutout_name_label_key -%}
                        {{ obscore_spectral_cutout_name }}_FORM_LABEL
                    {%- endcapture -%}
                    <div data-toggle="popover"
                        data-container="body"
                        data-utype="{{ obscore_spectral_cutout_name }}"
                        data-placement="right"
                        style="float:right;"
                        data-title="{{ i18nForm.labels[obscore_spectral_cutout_name_label_key] }}"
                        class="advancedsearch-tooltip glyphicon glyphicon-question-sign text-info">
                    </div>
                    <div class="form-group">
                        <label for="{{ obscore_spectral_cutout_name }}" id="{{ obscore_spectral_cutout_name }}_LABEL" class="search_criteria_label control-label">
                            <input type="checkbox" disabled="disabled" name="{{ obscore_spectral_cutout_name }}" id="{{ obscore_spectral_cutout_name }}" />
                            {{ i18nForm.labels[obscore_spectral_cutout_name_label_key] }}
                        </label>
                        <input type="hidden" name="Form.name" disabled="disabled"/>
                    </div>
                </div>
            </div>
        </div>
        {% comment %}
        End Spectral Constraints
        {% endcomment %}
        {% include search/obscore_datatrain.markdown %}
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
