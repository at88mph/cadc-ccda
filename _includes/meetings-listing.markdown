{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.meetings[i18nText-lang]['labels'] -%}
{%- assign current_year='now' | date: "%Y" | to_integer -%}

<div class="wb-tabs">
        <div class="tabpanels">
                <details id="recent" open="open">
                        <summary>{{ i18n-labels.recent }}</summary>
                        <ul id="recent_meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?days=21", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meeting.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="this_month">
                        <summary>{{ i18n-labels.this_month }}</summary>
                        <ul id="this_month_meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?month=this", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meeting.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="next_month">
                        <summary>{{ i18n-labels.next_month }}</summary>
                        <ul id="next_month_meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?month=next", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meeting.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="this_year">
                        <summary>{{ i18n-labels.this_year }}</summary>
                        <ul id="this_year_meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?year={{ current_year }}", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meeting.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
                <details id="future_years">
                        {%- assign next_year=current_year | plus: 1 -%}
                        <summary>{{ i18n-labels.future_years }}</summary>
                        <ul id="future_years_meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?year={{ next_year }}", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
                                <template>
                                <li>
                                {%- include meeting.markdown -%}
                                </li>
                                </template>
                        </ul>
                </details>
        </div>
</div>