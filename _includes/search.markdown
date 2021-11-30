{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.search[i18nText-lang] -%}

<div class="wb-tabs">
    <div class="tabpanels small">
        <details id="queryFormTab" open="open">
            <summary>{{ i18nForm.labels['CAOM_QUERY_TAB_TITLE'] }}</summary>
            {% include search/caom2.markdown %}
        </details>
        <details id="results">
            <summary>{{ i18nForm.labels['RESULTS_TAB_TITLE'] }}</summary>
            {% include search/results.markdown %}
        </details>
        <details id="queryTab">
            <summary>{{ i18nForm.labels['ADQL_QUERY_TAB_TITLE'] }}</summary>
            <div id="query_holder">
                <h3 class="wb-invisible">ADQL</h3>
                <pre class="prettyprint lang-sql"><code id="query" class="lang-sql"></code></pre>
            </div>
        </details>
    </div>
</div>
