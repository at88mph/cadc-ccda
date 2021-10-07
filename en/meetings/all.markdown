---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
lang: en
title: International Astronomy Meetings
permalink: /en/meetings/
altLangPage: /fr/rencontres/
dateModified: 2021-10-01
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: meetings

headerHTML: <button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>&nbsp; RSS</button><button type="button" class="btn btn-default mrgn-lft-sm" aria-label="Left Align"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp; iCal</button>

# Used for post label formatting (dates and links)
script: [/static/meetings.js]
---

{%- include meetings-listing.markdown -%}
