---
layout: core

nofooter: true
signing: true
nositesearch: true
---
{%- include variable-core.liquid -%}
{%- capture page-title -%}
	{%- if page.titleH1 -%}
		{{ page.titleH1 }}
	{%- elsif page.title -%}
		{{ page.title }}
	{%- else -%}
		Page untitled
	{%- endif -%}
{%- endcapture -%}

{%- capture header-html -%}
    {%- if page.headerHTML -%}
        {{ page.headerHTML }}
    {%- else -%}
        {{ "" }}
    {%- endif -%}
{%- endcapture -%}

<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    {%- if site.warning.enabled -%}
    <div class="row">
        <div class="full-width">
            <section class="alert alert-warning">
                <p>{{ site.warning[i18nText-lang] }}</p>
            </section>
        </div>
    </div>
    {%- endif -%}
    <div class="mwscolumns section">
        {%- if page.headerimage -%}
        <div class="row">
            <div class="col-md-9">
                <h1 id="wb-cont" property="name">{{ page-title }} {{ header-html }}</h1>
            </div>
            <div class="col-md-3 margin-top-medium hidden-sm hidden-xs">
                <img class="pull-right img-responsive thumbnail" src="{{ page.headerimage }}" />
            </div>
        </div>
        {%- else -%}
        <h1 id="wb-cont" property="name">{{ page-title }} {{ header-html }}</h1>
        {%- endif -%}
    </div>
    <div class="row">
        {%- if page.nav -%}
        {%- capture nav_size -%}
        {%- if page.nav_size -%}
          {{ page.nav_size }}
        {%- else -%}
          4
        {%- endif -%}
        {%- endcapture -%}

        {%- assign main_size = 12 | minus: nav_size -%}

        <div class="col-md-{{ main_size }}">
            {{ content }}
        </div>
        <div class="col-md-{{ nav_size }} margin-tp-0">
            {% for n in site.data[page.nav][i18nText-lang]['nav'] %}
            <section class="well well-sm">
                {%- if n.title -%}
                <h2 class="mrgn-tp-sm h3">{{ n.title }}</h2>
                {%- endif -%}
                {%- if n.links -%}
                <ul class="lst-spcd">
                    {% for link in n.links %}
                    {%- if link.html -%}
                    <li>{{ link.html }}</li>
                    {%- else -%}
                    <li><a href="{{ link.url }}">{{ link.name }}</a></li>
                    {%- endif -%}
                    {%- endfor -%}
                </ul>
                {%- elsif n.html_include -%}
                  {%- include {{ n.html_include }} -%}
                {%- endif -%}
            </section>
            {% endfor %}
        </div>
        {%- else -%}
            {{ content }}
        {%- endif -%}
    </div>
    {% include main-footer/inc-footer.html %}
</main>