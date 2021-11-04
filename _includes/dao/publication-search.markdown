{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.dao[i18nText-lang]['labels'] -%}
{%- assign current_year='now' | date: "%Y" | to_integer -%}
{%- assign earliest_year='1995' | to_integer -%}
{%- assign year_count = current_year | minus: earliest_year -%}
{%- assign year_range = (earliest_year..current_year) | reverse -%}
{%- assign form_host = 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca' -%}

<h2>{{ i18n-labels.search_publications }}</h2>
<div class="wb-tabs">
    <div class="tabpanels">
        <details id="by_year" open="open">
            <summary>{{ i18n-labels.by_year }}</summary>
            <form method="post" action="{{ form_host }}/cadcbin/en/dao/publications.pl" enctype="application/x-www-form-urlencoded">
                <div class="form-group">
                    <label class="control-label" for="pubyear">{{ i18n-labels.select_year }}:&nbsp;</label>
                    <select id="pubyear" class="form-control" name="pubyear" data-role="none">
                    {% for i in year_range %}
                        <option value="{{ i }}">{{ i }}</option>
                    {% endfor %}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary" name="list" value="Search" data-role="none">
            </form>
        </details>
        <details id="by_name_year">
            <summary>{{ i18n-labels.by_last_name_year }}</summary>
            <form method="post" role="form" action="{{ form_host }}/cadcbin/en/dao/publications.pl" enctype="application/x-www-form-urlencoded">
                <div class="form-group">
                    <label class="control-label" for="author">{{ i18n-labels.last_name }}:&nbsp;</label>
                    <input type="text" id="author" class="form-control" name="author" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="searchyear">{{ i18n-labels.select_year }}:&nbsp;</label>
                    <select name="searchyear" id="searchyear" class="form-control">
                    {% for i in year_range %}
                        <option value="{{ i }}">{{ i }}</option>
                    {% endfor %}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary form-control" name="search" value="Search" data-role="none">
            </form>
        </details>
        <details id="by_theses">
            <summary>{{ i18n-labels.by_theses }}</summary>
            <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/files/vault/DAO/Statistics/Publications/daoTheses.html" class="h5">{{ i18n-labels.theses_link }}</a>
        </details>
    </div>
</div>