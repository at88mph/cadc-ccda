{%- include variable-core.liquid -%}
{%- assign i18nForm-search=site.data.search -%}
{%- assign i18nForm=i18nForm-search[i18nText-lang] -%}

<span class="votable_link_label">
    {{ i18nForm.labels['FULL_VOTABLE_LINK_LABEL'] }}</span>
<a href="#" class="votable_link_votable link_idle">VOTable</a>
<a href="#" class="votable_link_csv link_idle">CSV</a>
<a href="#" class="votable_link_tsv link_idle">TSV</a>

<span class="result-state">
    <a href="#" id="results_bookmark" class="result-state-link link_idle">{{ i18nForm.labels['RESULT_STATE_LINK_LABEL'] }}</a>
</span>

{% comment %}
Aladin Lite container
{% endcomment %}
<div id="aladin-lite" style="height: 250px;width: 1180px;"></div>

<div class="grid-container small">
    <div id="cadcvotv-empty-results-message" class="cadcvotv-empty-results-message">
        <strong>{{ i18nForm.labels['NO_RESULTS_RETURNED'] }}</strong>
    </div>
    <div id="results-grid-header" class="grid-header small">
        <form id="downloadForm" name="downloadForm" class="form-horizontal"
            action="<%= downloadLink %>" method="POST" target="DOWNLOAD">
            <input type="hidden" name="runid" id="runid" value=""/>
            <span id="NO_OBSERVATIONS_SELECTED_MESSAGE" class="hidden">{{ i18nForm.labels['NO_OBSERVATIONS_SELECTED_MESSAGE'] }}</span>
            <span class="grid-header-icon-span">
                <img class="margin-bottom-none margin-left-none margin-right-none align-middle grid-header-icon" src="/static/images/cadcVOTV/transparent-20.png"/>
            </span>
            <span>
                <button type="submit"
                        id="downloadFormSubmit"
                        form="downloadForm"
                        class="btn btn-sm btn-primary">
                    {{ i18nForm.labels['DOWNLOAD_BUTTON_LABEL'] }}
                </button>
            </span>
            <span class="grid-header-label"></span>
            <button id="change_column_button"
                    type="button"
                    class="btn btn-sm btn-default"
                    data-toggle="modal"
                    data-focus="true"
                    data-target="#column_manager">{{ i18nForm.labels['COLUMN_MANAGER_BUTTON_LABEL'] }}</button>
            <!-- The Visualize button to enable AladinLite. -->
            <button id="slick-visualize"
                    class="btn btn-sm btn-default"
                    type="button"
                    data-open="{{ i18nForm.labels['RESULTS_VISUALIZE_BUTTON_LABEL'] }}"
                    data-close="{{ i18nForm.labels['CLOSE_BUTTON_LABEL'] }}">
                {{ i18nForm.labels['RESULTS_VISUALIZE_BUTTON_LABEL'] }}
            </button>
        </form>
    </div>
    <div id="resultTable"></div>
</div>

{% comment %}
Used to calculate pixel lengths of strings.
{% endcomment %}
<div id="lengthFinder"></div>