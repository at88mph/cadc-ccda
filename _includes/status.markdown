{%- include variable-core.liquid -%}
{%- assign i18n-status=site.data.status[i18nText-lang] -%}

<table id="status" class="table table-bordered table-striped table-status loading">
    <thead>
        <tr>
            <th>{{ i18n-status.labels.service_name }}</th>
            <th>{{ i18n-status.labels.available }}</th>
            <th>{{ i18n-status.labels.availability_message }}</th>
            <th>{{ i18n-status.labels.last_check_time }}</th>
        </tr>
    </thead>
    <tbody>
        <tr></tr>
    </tbody>
</table>