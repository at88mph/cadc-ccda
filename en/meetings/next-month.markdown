---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
title: International Astronomy Meetings (Next Month)
lang: en
permalink: /en/meetings/next-month/
altLangPage: /fr/rencontres/mois-prochain/
dateModified: 2021-09-28
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav:
  - links:
      - name: Recently Added Meetings
        url: "/en/meetings/"
      - name: Meetings This Month
        url: "/en/meetings/this-month/"
      - name: Meetings Next Month
        url: "/en/meetings/next-month/"
      - name: 2023 Meetings
        url: "/en/meetings/year-2023/"
      - name: 2022 Meetings
        url: "/en/meetings/year-2022/"
      - name: 2021 Meetings
        url: "/en/meetings/year-2021/"
  - links:
      - name: Submit New Meeting
        url: "/en/submit-new-meeting/"

# Used for post label formatting (dates and links)
script: [/static/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2" data-wb-json='{ "url": "/meetings/meetings?month=next", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
	<template>
        <li>
        {%- include meeting-en.markdown -%}
        </li>
	</template>
</ul>
