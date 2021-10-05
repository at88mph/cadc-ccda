{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.meetings[i18nText-lang]['labels'] -%}

<details>
    <summary></summary>
    <div class="well well-sm">
        <dl class="dl-horizontal brdr-0">
            <dt class="web-label"></dt>
            <dd><a target="_blank" rel="external" class="web" href="#">#</a></dd>
            <dt class="date-label">{{ i18n-form.date }}</dt>
            <dd><span class="start date"></span>&nbsp;-&nbsp;<span class="end date"></span></dd>
            <dt class="contact-label">{{ i18n-form.contact }}</dt>
            <dd class="contact"></dd>
            <dt class="location-label">{{ i18n-form.location }}</dt>
            <dd class="location"></dd>
            <dt class="address-label">{{ i18n-form.address }}</dt>
            <dd class="address"></dd>
            <dt class="phone-label">{{ i18n-form.phone }}</dt>
            <dd class="phone"></dd>
            <dt class="email-label">{{ i18n-form.email }}</dt>
            <dd class="email"></dd>
            <dt class="proceedings-label">{{ i18n-form.proceeings }}</dt>
            <dd class="proceedings"></dd>
            <dt class="keywords-label">{{ i18n-form.keywords }}</dt>
            <dd class="keywords"></dd>
            <dt class="meeting-number-label">{{ i18n-form.number }}</dt>
            <dd class="meeting-number"></dd>
        </dl>
        <button class="btn btn-default">{{ i18n-form.edit }}</button>
    </div>
</details>