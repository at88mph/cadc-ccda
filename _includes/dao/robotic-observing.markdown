{%- include variable-core.liquid -%}

{%- assign i18n-labels-dao=site.data.dao[i18nText-lang]['labels'] -%}
{%- assign i18n-labels=site.data.cadc[i18nText-lang]['labels'] -%}
{%- assign current_year = 'now' | date: "%Y" | to_integer -%}
{%- assign current_month_index='now' | date: "%-m" | minus: 1 -%}
{%- assign current_day='now' | date: "%-d" | to_integer -%}
{%- assign low_year     = current_year | minus: 1 -%}
{%- assign hi_year      = current_year | plus: 1 -%}

<form method="post" action="/cadcbin/en/dao/robotic.pl" enctype="multipart/form-data" class="mrgn-tp-md">
    <div class="form-group">
        <label class="control-label" for="email">{{ i18n-labels.email }}</label>
        <input type="email" name="email" id="email" class="form-control" />
    </div>
    <div class="mrgn-bttm-md form-inline">
        <fieldset class="legend-brdr-bttm">
            <legend>{{ i18n-labels-dao.robotic_obs_run_date }}</legend>
            <div class="form-group">
                <label class="control-label" for="year">{{ i18n-labels-dao.year }}:&nbsp;</label>
                <select id="year" class="form-control" name="year" data-role="none">
                    {% for i in (low_year..hi_year) %}
                    <option value="{{ i }}" {% if i == current_year %}selected="selected"{% endif %}>{{ i }}</option>
                    {% endfor %}
                </select>
            </div>
            <div class="form-group mrgn-lft-sm">
                <label class="control-label" for="month">{{ i18n-labels-dao.month }}:&nbsp;</label>
                <select name="month" id="month" class="form-control mrgn-tp-sm">
                {% for i in (0..11) %}
                    {% assign one_based_idx = i | plus: 1 %}
                    {% assign month_name = i18n-labels.dates.months[i] %}
                    <option value="{{ one_based_idx }}" {% if i == current_month_index %}selected="selected"{% endif %}>{{ month_name }}</option>
                {% endfor %}
                </select>
            </div>
            <div class="form-group mrgn-lft-sm">
                <label class="control-label" for="day">{{ i18n-labels-dao.day }}:&nbsp;</label>
                <select name="day" id="day" class="form-control mrgn-tp-sm">
                {% for i in (1..31) %}
                    <option value="{{ i }}" {% if i == current_day %}selected="selected"{% endif %}>{{ i }}</option>
                {% endfor %}
                </select>
            </div>
        </fieldset>
    </div>
    <div class="form-group mrgn-tp-lg">
        <label class="control-label" for="targetList">{{ i18n-labels-dao.robotic_target_list }}:&nbsp;</label>
        <input type="file" id="targetList" name="targetList" class="form-control" value="select target list file" />
    </div>
    <input type="submit" class="btn btn-primary" value="{{ i18n-labels-dao.continue }}" />
</form>