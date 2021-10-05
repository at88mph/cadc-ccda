---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
lang: en
title: International Astronomy Meetings (Next Month)
permalink: /en/meetings/next-month/
altLangPage: /fr/rencontres/mois-prochain/
dateModified: 2021-09-28
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: meetings

# Used for post label formatting (dates and links)
script: [/static/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2" data-wb-json='{ "url": "/meetings/meetings?month=next", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
	<template>
        <li>
        {%- include meeting.markdown -%}
        </li>
	</template>
</ul>
