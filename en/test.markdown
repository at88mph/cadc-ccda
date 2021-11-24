---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
lang: en
title: Test Astronomy Meetings
permalink: /en/meetings/test/
altLangPage: /fr/rencontres/test/
dateModified: 2021-10-25

signing: layout.signing
nositesearch: layout.nositesearch

# Used for post label formatting (dates and links)
script: [/static/js/meetings.js]

css: /static/css/meetings.css

breadcrumbs:
    - link: /en/meetings/
      title: Meetings
---

<table id="archive_table" class="wb-tables table table-striped table-hover" data-wb-tables='{
  "serverSide": true,
  "pageLength": 25,
  "ajax": "/meetings/meetings?archive=true",
  "columns": [
    { "data": "title", "className": "wb-elps title" },
    { "data": "start" },
    { "data": "end" },
    { "data": "bibCode" },
    { "data": "meetingNumber" }
  ]
}'>
    <thead>
        <tr>
            <th>Title</th>
            <th>Start</th>
            <th>End</th>
            <th>Bibcode</th>
            <th>Meeting No.</th>
        </tr>
    </thead>
</table>
