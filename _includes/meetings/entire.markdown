{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.meetings[i18nText-lang]['labels'] -%}

<div class="container">
  <div class="text-right">
    <a class="btn btn-primary mrgn-rght-sm" href="/en/meetings/submit-new/" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;{{ i18n-labels.new }}</a>
    <a class="btn btn-default" href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/en/meetings/rss-meetings.py" aria-label="Left Align"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>&nbsp;RSS</a>
    <a class="btn btn-default" href="webcal://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/files/vault/dbohlender/CADC/astroMeetings.ics" aria-label="Left Align"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp;iCal</a>
  </div>
  <table id="entire_table" class="entire-table wb-tables table table-striped table-hover" data-wb-tables='{
      "serverSide": true,
      "pageLength": 25,
      "order": [[ 2, "desc" ]],
      "filterType": "or",
      "ajax": "/meetings/meetings?entire=true",
      "columns": [
        {
          "className":      "details-control",
          "orderable":      false,
          "sortable":       false,
          "data":           "details"
        },
        { "data": "title", "name": "title", "className": "title" },
        { "data": "dateRange", "name": "start" },
        { "data": "edit", "name": "edit", "sortable": false, "className": "edit text-info" }
      ]
    }'>
      <thead>
        <tr>
          <th></th>
          <th data-edit-endpoint="update">{{ i18n-labels.title }}</th>
          <th>{{ i18n-labels.date }}</th>
          <th></th>
        </tr>
      </thead>
  </table>
</div>
