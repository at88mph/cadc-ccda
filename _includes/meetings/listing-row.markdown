{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.meetings[i18nText-lang]['labels'] -%}

<tr>
        <td><a class="edit" href=""><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
        <td><a class="btn btn-primary web" href="#"><span class="title"></span></a></td>
        <td><span class="start date"></span>&nbsp;-&nbsp;<span class="end date"></span></td>
        <td class="contact"></td>
        <td class="address"></td>
        <td class="phone"></td>
        <td class="email"></td>
        <td class="proceedings"></td>
        <td class="keywords"></td>
        <td class="meeting-number"></td>
</tr>