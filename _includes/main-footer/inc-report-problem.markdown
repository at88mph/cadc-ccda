{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.cadc[i18nText-lang]['labels'] -%}

<a class="btn btn-default" href="{{ site.support_form_submit }}">{{ i18n-labels.report_problem_link_text }}</a>
