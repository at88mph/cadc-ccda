{%- assign current_year         = 'now' | date: "%Y" | to_integer -%}
{%- assign year_before_last     = current_year | minus: 2 -%}

<ul id="meetings_list" class="list-unstyled mrgn-tp-lg lst-spcd-0 meetings" data-wb-json='{ "url": "/meetings/meetings?year={{ year_before_last }}", "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
        <template>
        <li>
        {%- include meetings/listing-item.markdown -%}
        </li>
        </template>
</ul>