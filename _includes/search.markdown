{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.search[i18nText-lang] -%}

<div class="wb-tabs ignore-session">
    <div class="tabpanels small">
        <details id="queryFormTab" class="advancedsearch-tab" open="open">
            <summary>{{ i18nForm.labels['CAOM_QUERY_TAB_TITLE'] }}</summary>
            {% include search/caom2.markdown %}
        </details>
        <details id="obsCoreQueryFormTab" class="advancedsearch-tab">
            <summary>{{ i18nForm.labels['OBSCORE_QUERY_TAB_TITLE'] }}</summary>
            {% include search/obscore.markdown %}
        </details>
        <details id="resultTableTab" class="advancedsearch-tab">
            <summary>{{ i18nForm.labels['RESULTS_TAB_TITLE'] }}</summary>
            {% include search/results.markdown %}
        </details>
        <details id="queryTab" class="advancedsearch-tab">
            <summary>{{ i18nForm.labels['ADQL_QUERY_TAB_TITLE'] }}</summary>
            <div id="query_holder">
                <h3 class="wb-invisible">ADQL</h3>
                <pre class="prettyprint lang-sql"><code id="query" class="lang-sql"></code></pre>
            </div>
        </details>
    </div>
</div>

<!--  Modal to contain the bookmark link. -->
<div class="modal fade" id="bookmark_link" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <span id="bookmark_overlay_status">
                    <h4>{{ i18nForm.labels['RESULT_STATE_LINK_LABEL'] }}</h4>
                </span>
            </div>
            <div class="modal-body">
                <div id="bookmark_url_display" class="results-url-modal"></div>
            </div>
        </div>
    </div>
</div>

<div id="resolver_result_tooltip" class="col-sm-12 resolver-result-tooltip">
    <strong>{{ i18nForm.labels['RES_TARGET'] }}</strong><br>
    <p class="resolver-result-target"></p>
    <strong>{{ i18nForm.labels['RES_SERVICE'] }}</strong><br>
    <p class="resolver-result-service"></p>
    <strong>{{ i18nForm.labels['RES_COORDINATES'] }}</strong><br>
    <p class="resolver-result-coordinates"></p>
    <strong>{{ i18nForm.labels['RES_TYPE'] }}</strong><br>
    <p class="resolver-result-type"></p>
    <strong>{{ i18nForm.labels['RES_MORPHOLOGY'] }}</strong><br>
    <p class="resolver-result-morphology"></p>
    <strong>{{ i18nForm.labels['RES_TIME'] }}</strong><br>
    <p class="resolver-result-time"></p>
</div>

<!--  Modal to contain the column manager. -->
<div class="modal fade" id="column_manager" role="dialog">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" id="column_manager_close">&times;</button>
                <span id="overlay_status">
                    <h4>{{ i18nForm.labels['COLUMN_MANAGER_HEADING_TEXT'] }}</h4>
                </span>
            </div>
            <div class="modal-body">
                <span>{{ i18nForm.labels['COLUMN_MANAGER_HELP_TEXT'] }}</span>
                <div id="column_manager_container">
                    <div class="column_manager_columns"></div>
                    <!-- Text used to populate buttons -->
                    <span id="COLUMN_MANAGER_SHOW_ALL_BUTTON_TEXT" class="hidden i18n">
                        {{ i18nForm.labels['COLUMN_MANAGER_SHOW_ALL_BUTTON_TEXT'] }}
                    </span>
                    <span id="COLUMN_MANAGER_DEFAULT_COLUMNS_BUTTON_TEXT" class="hidden i18n">
                        {{ i18nForm.labels['COLUMN_MANAGER_DEFAULT_COLUMNS_BUTTON_TEXT'] }}
                    </span>
                    <span id="COLUMN_MANAGER_ORDER_ALPHABETICALLY_BUTTON_TEXT" class="hidden i18n">
                        {{ i18nForm.labels['COLUMN_MANAGER_ORDER_ALPHABETICALLY_BUTTON_TEXT'] }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

  <div class="modal fade" id="queryOverlay" role="dialog">
      <div class="modal-dialog modal-sm">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <span id="overlay_status">
                        <h4>{{ i18nForm.labels['EXECUTING_QUERY_LABEL'] }}</h4>
                  </span>
              </div>
              <div class="modal-body">
                  <img src="/static/images/search/queryoverlay.gif" class="query-overlay-loading" alt=""/>
              </div>
              <div class="modal-footer">
                  <button id="cancel_search" type="button" class="btn btn-default btn-sm" data-dismiss="modal">{{ i18nForm.labels['CANCEL_BUTTON_LABEL'] }}</button>
              </div>
          </div>
      </div>
  </div>

  <div class="hidden" id="preloadthumbnails"></div>
