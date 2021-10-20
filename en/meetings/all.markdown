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

headerHTML: <a class="btn btn-primary btn-sm mrgn-lft-none mrgn-rght-lg" href="/en/meetings/submit-new/" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp; New</a><a class="btn btn-default btn-sm mrgn-lft-sm" href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/en/meetings/rss-meetings.py" aria-label="Left Align"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>&nbsp; RSS</a><a href="webcal://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/files/vault/dbohlender/CADC/astroMeetings.ics" class="btn btn-default btn-sm mrgn-lft-sm" aria-label="Left Align"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp; iCal</a>

# Used for post label formatting (dates and links)
script: [/static/js/meetings.js]

css: /static/css/meetings.css

nav: meetings
---

{%- include meetings/listing.markdown -%}
