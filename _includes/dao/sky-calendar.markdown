{%- include variable-core.liquid -%}

{%- assign current_year = 'now' | date: "%Y" | to_integer -%}
{%- assign low_year     = current_year | minus: 2 -%}
{%- assign hi_year      = current_year | plus: 2 -%}
{%- assign i18n-labels=site.data.cadc[i18nText-lang]['labels'] -%}
{%- assign i18n-labels-dao=site.data.dao[i18nText-lang]['labels'] -%}
{%- assign current_month_index='now' | date: "%-m" | minus: 1 -%}
{%- assign next_month_index=current_month_index | plus: 1 -%}
{%- assign current_month_name=i18n-labels.dates.months[current_month_index] -%}
{%- assign next_month_name=i18n-labels.dates.months[next_month_index] -%}

<div class="col-md-offset-3">
    <form action="http://www.briancasey.org/artifacts/astro/skycalendar.cgi" method="query" class="form-horizontal" target="skycalendar">
        <input type="hidden" name="observatory" value="d" data-role="none">
        <input type="hidden" name="command" value="display" data-role="none">
        <div class="form-group">
            <label class="col-sm-4 control-label" for="year">{{ i18n-labels-dao.year }}: &nbsp;</label>
            <div class="col-sm-8">
                <select name="year" id="year" class="form-control mrgn-tp-sm">
                {% for i in (low_year..hi_year) %}
                    <option value="{{ i }}" {% if i == current_year %}selected="selected"{% endif %}>{{ i }}</option>
                {% endfor %}
                </select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="month1">{{ i18n-labels-dao.start_month }}: &nbsp;</label>
            <div class="col-sm-8">
                <select name="month1" id="month1" class="form-control mrgn-tp-sm">
                {% for i in (0..11) %}
                    {% assign one_based_idx = i | plus: 1 %}
                    {% assign month_name = i18n-labels.dates.months[i] %}
                    <option value="{{ one_based_idx }}" {% if i == current_month_index %}selected="selected"{% endif %}>{{ month_name }}</option>
                {% endfor %}
                </select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="month2">{{ i18n-labels-dao.end_month }}: &nbsp;</label>
            <div class="col-sm-8">
                <select name="month2" id="month2" class="form-control mrgn-tp-sm">
                {% for i in (0..11) %}
                    {% assign one_based_idx = i | plus: 1 %}
                    {% assign month_name = i18n-labels.dates.months[i] %}
                    <option value="{{ one_based_idx }}" {% if i == next_month_index %}selected="selected"{% endif %}>{{ month_name }}</option>
                {% endfor %}
                </select>
            </div>
        </div>
        <input type="submit" class="btn btn-primary" name=".submit" value="Get Calendar" data-role="none">
    </form>
</div>
