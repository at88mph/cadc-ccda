{%- include variable-core.liquid -%}
{%- assign i18n-services=site.data.services[i18nText-lang] -%}

<table class="table table-striped">
    <thead>
        <tr>
            <th>API</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
      {%- for service in i18n-services -%}
        <tr>
            <td><a href="{{ service.url }}">{{ service.label }}</a></td>
            <td>
                <ul>
                {%- for description in service.description -%}
                    <li>{{ description }}</li>
                {%- endfor -%}
                </ul>
            </td>
        </tr>
      {%- endfor -%}
    </tbody>
</table>
