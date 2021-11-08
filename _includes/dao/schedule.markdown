{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.dao[i18nText-lang]['labels'] -%}

<table id="schedule_table" class="table small">
    <caption>{{ i18n-labels.this_week }}</caption>
    <thead>
        <tr>
            <th rowspan="2">Date</th>
            <th colspan="3">1.2-m</th>
            <th colspan="3">1.8-m</th>
        </tr>
        <tr>
            <th>{{ i18n-labels.schedule_pi_name }}<br />({{ i18n-labels.schedule_pi_name_observer }})</th>
            <th>{{ i18n-labels.schedule_program }}</th>
            <th>Instr.<br />{{ i18n-labels.schedule_detector }}</th>
            <th>{{ i18n-labels.schedule_pi_name }}<br />({{ i18n-labels.schedule_pi_name_observer }})</th>
            <th>{{ i18n-labels.schedule_program }}</th>
            <th>Instr.<br />{{ i18n-labels.schedule_detector }}</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

{%- comment -%}
To be populated by JavaScript
{%- endcomment -%}
<table id="complete_schedule_table" class="table small mrgn-tp-md"></table>