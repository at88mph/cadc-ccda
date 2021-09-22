---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
title: International Astronomy Meetings
lang: en
permalink: /en/meetings/
altLangPage: /fr/rencontres/
dateModified: 2021-09-20

nav:
  - links:
      - name: New Meetings
        url: "/en/meetings"
      - name: Meetings This Month
        url: "#"
      - name: Meetings Next Month
        url: "#"
      - name: 2023 Meetings
        url: "#"
      - name: 2022 Meetings
        url: "#"
      - name: 2021 Meetings
        url: "#"

# Used for post label formatting (dates and links)
script: [/meetings/meetings/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2" data-wb-json='{ "url": "/meetings/meetings/two-weeks.json", "mapping": ["/title", "/start", "/end", "/location", "/web"], "queryall": ["summary", ".start", ".end", ".location", ".web"] }'>
	<template>
        <li>
            <details>
                <summary>Title not found</summary>
                <div class="well well-sm">
                    <dl class="dl-horizontal brdr-0">
                        <dt class="date-label">Date</dt>
                        <dd><span class="start date">Start Date not found</span>&nbsp;-&nbsp;<span class="end date">End Date not found</span></dd>
                        <dt class="location-label">Location</dt>
                        <dd class="location">Location not found</dd>
                        <dt class="web-label"></dt>
                        <dd><a target="_blank" rel="external" class="web" href="#">#</a></dd>
                    </dl>
                </div>
            </details>
        </li>
	</template>
</ul>
