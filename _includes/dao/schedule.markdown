{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.dao[i18nText-lang]['labels'] -%}

<div id="schedule_table_container" data-ajax-replace="/cadcbin/{{ i18nText-lang }}/{{ i18n-labels.path_acronym }}/schedule.pl"></div>
