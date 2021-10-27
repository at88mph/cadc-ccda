{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.meetings[i18nText-lang]['labels'] -%}
{%- assign current_year='now' | date: "%Y" | to_integer -%}
{%- assign current_month_index='now' | date: "%-m" | minus: 1 -%}
{%- assign next_month_index=current_month_index | plus: 1 -%}
{%- assign current_month_name=i18n-labels.dates.months[current_month_index] -%}
{%- assign next_month_name=i18n-labels.dates.months[next_month_index] -%}

<div class="wb-tabs">
        <div class="tabpanels">
                <details id="recent" open="open">
                        <summary>{{ i18n-labels.recent }}</summary>
                        <ul id="recent_meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?days=21", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meetings/listing-item.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="this_month">
                        <summary class="month_name">{{ current_month_name }}</summary>
                        <ul id="this_month_meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?month=this", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meetings/listing-item.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="next_month">
                        <summary class="month_name">{{ next_month_name }}</summary>
                        <ul id="next_month_meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?month=next", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meetings/listing-item.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="this_year">
                        <summary>{{ current_year }}</summary>
                        <ul id="this_year_meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?year={{ current_year }}", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meetings/listing-item.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="future_years">
                        {%- capture future_label -%}
                            {{ i18n-labels.after }} {{ current_year }}
                        {%- endcapture -%}
                        <summary>{{ future_label }}</summary>
                        <ul id="future_years_meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?year=future", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meetings/listing-item.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                {%- comment -%}
                <details id="archive_years">
                        {%- capture archive_label -%}
                            {{ i18n-labels.before }} {{ current_year }}
                        {%- endcapture -%}
                        <summary>{{ archive_label }}</summary>
                        <table id="archive_table" class="archive-table wb-tables table table-striped table-hover" data-wb-tables='{
                                                                                                        "serverSide": true,
                                                                                                        "pageLength": 25,
                                                                                                        "order": [[ 1, "desc" ]],
                                                                                                        "ajax": "/meetings/meetings?archive-search=true",
                                                                                                        "columns": [
                                                                                                                { "data": "title", "className": "wb-elps title" },
                                                                                                                { "data": "start" },
                                                                                                                { "data": "bibCode", "sortable": false },
                                                                                                                { "data": "meetingNumber", "sortable": false, "className": "edit text-info" }
                                                                                                        ]
                                                                                                        }'>
                                <thead>
                                        <tr>
                                                <th class="nowrap wb-elps" data-edit-endpoint="update">{{ i18n-labels.title }}</th>
                                                <th>{{ i18n-labels.date }}</th>
                                                <th>{{ i18n-labels.proceedings }}</th>
                                                <th></th>
                                        </tr>
                                </thead>
                        </table>
                </details>
                {%- endcomment -%}
        </div>
</div>