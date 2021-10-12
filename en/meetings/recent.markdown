---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
lang: en
title: International Astronomy Meetings (Recently Added)
permalink: /en/meetings/recent/
altLangPage: /fr/rencontres/recente/
dateModified: 2021-09-28
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: meetings

headerHTML: <button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>&nbsp; RSS</button><button type="button" class="btn btn-default mrgn-lft-sm" aria-label="Left Align"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp; iCal</button>

# Used for post label formatting (dates and links)
script: [/static/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2 meetings" data-wb-json='{ "url": "/meetings/meetings?days=21", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
	<template>
        <li>
        {%- include meetings/listing-item.markdown -%}
        </li>
	</template>
</ul>
