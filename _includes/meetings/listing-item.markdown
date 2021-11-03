{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.meetings[i18nText-lang]['labels'] -%}

<div class="panel panel-default meeting-panel">
    <div class="panel-body small">
        <h3 class="title mrgn-tp-sm"></h3>
        <div>
            <time class="start date" datetime=""></time>&nbsp;-&nbsp;<span class="end date"></span>
        </div>
        <details class="col-sm-9 col-md-9">
            <summary>{{ i18n-labels.details }}</summary>
            <div class="well">
                <ul class="lst-none small">
                    <li><a target="_blank" rel="external" class="web web1" href="#"></a></li>
                    <li><a target="_blank" rel="external" class="web web2" href="#"></a></li>
                </ul>
                <dl class="dl-horizontal brdr-0">
                    <dt class="contact-label">{{ i18n-labels.contact }}</dt>
                    <dd class="contact"></dd>
                    <dt class="location-label">{{ i18n-labels.location }}</dt>
                    <dd class="location"></dd>
                    <dt class="address-label">{{ i18n-labels.address }}</dt>
                    <dd class="address"></dd>
                    <dt class="phone-label">{{ i18n-labels.phone }}</dt>
                    <dd class="phone"></dd>
                    <dt class="email-label">{{ i18n-labels.email }}</dt>
                    <dd class="email"></dd>
                    <dt class="proceedings-label">{{ i18n-labels.proceedings }}</dt>
                    <dd class="proceedings"></dd>
                    <dt class="keywords-label">{{ i18n-labels.keywords }}</dt>
                    <dd class="keywords"></dd>
                    <dt class="meeting-number-label">{{ i18n-labels.number }}</dt>
                    <dd class="meeting-number"></dd>
                </dl>
            </div>
        </details>
        <a class="btn btn-default edit col-sm-offset-1 col-sm-2 col-md-offset-1 col-md-2" href="{{ i18n-labels.edit_url }}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp; {{ i18n-labels.edit }}</a>       
    </div>
</div>
