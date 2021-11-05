{%- include variable-core.liquid -%}

{%- assign current_year = 'now' | date: "%Y" | to_integer -%}
{%- assign low_year     = current_year | minus: 2 -%}
{%- assign hi_year      = current_year | plus: 2 -%}
{%- assign i18n-labels=site.data.cadc[i18nText-lang]['labels'] -%}
{%- assign i18n-labels-dao=site.data.dao[i18nText-lang]['labels'] -%}
{%- assign current_month_index='now' | date: "%-m" | minus: 1 -%}
{%- assign current_day='now' | date: "%-d" | to_integer -%}
{%- assign next_month_index=current_month_index | plus: 1 -%}
{%- assign current_month_name=i18n-labels.dates.months[current_month_index] -%}
{%- assign next_month_name=i18n-labels.dates.months[next_month_index] -%}

<form method="post" action="/cadcbin/en/dao/airmass.pl" enctype="application/x-www-form-urlencoded">
    <div class="col-md-4 mrgn-tp-lg">
        <div class="form-group">
            <label class="control-label" for="year">{{ i18n-labels-dao.year }}:&nbsp;</label>
            <select id="year" class="form-control" name="year" data-role="none">
                {% for i in (low_year..hi_year) %}
                <option value="{{ i }}" {% if i == current_year %}selected="selected"{% endif %}>{{ i }}</option>
                {% endfor %}
            </select>
        </div>
        <div class="form-group">
            <label class="control-label" for="month">{{ i18n-labels-dao.month }}:&nbsp;</label>
            <select name="month" id="month" class="form-control mrgn-tp-sm">
            {% for i in (0..11) %}
                {% assign one_based_idx = i | plus: 1 %}
                {% assign month_name = i18n-labels.dates.months[i] %}
                <option value="{{ one_based_idx }}" {% if i == current_month_index %}selected="selected"{% endif %}>{{ month_name }}</option>
            {% endfor %}
            </select>
        </div>
        <div class="form-group">
            <label class="control-label" for="day">{{ i18n-labels-dao.day }}:&nbsp;</label>
            <select name="day" id="day" class="form-control mrgn-tp-sm">
            {% for i in (1..31) %}
                <option value="{{ i }}" {% if i == current_day %}selected="selected"{% endif %}>{{ i }}</option>
            {% endfor %}
            </select>
        </div>
        <input type="submit" class="btn btn-primary" value="{{ i18n-labels-dao.airmass_submit_button }}" />
    </div>
</form>