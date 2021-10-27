{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.meetings[i18nText-lang]['labels'] -%}

<div class="container">
  <table id="archive_table" class="archive-table wb-tables table table-striped table-hover" data-wb-tables='{
    "serverSide": true,
    "pageLength": 25,
    "order": [[ 1, "desc" ]],
    "ajax": "/meetings/meetings?archive-search=true",
    "columns": [
      { "data": "title", "className": "wb-elps title" },
      { "data": "start" },
      { "data": "bibCode", "sortable": false },
      { "data": "meetingNumber", "name": "edit", "sortable": false, "className": "edit text-info" }
    ]
  }'>
      <thead>
          <tr>
              <th class="nowrap wb-elps" data-edit-endpoint="update">{{ i18n-labels.title }}</th>
              <th>{{ i18n-labels.date }}</th>
              <th>{{ i18n-labels.proceedings }}</th>
              <th></th>
          </tr>
      </thead>
  </table>
</div>
