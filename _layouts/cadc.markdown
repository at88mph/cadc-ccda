---
layout: core

nofooter: true
signing: true

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

<main class="{%- if page.fluid -%}container-fluid{%- else -%}container{%- endif -%}" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
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
        {% comment %}
        {%- if page.headerimage -%}
        <div class="row">
            <div class="col-md-9">
                <h1 id="wb-cont" class="mrgn-tp-lg" property="name">{{ page-title }} {{ header-html }}</h1>
            </div>
            <div class="col-md-3 margin-top-medium hidden-sm hidden-xs">
                <img class="pull-right img-responsive thumbnail mrgn-bttm-sm" src="{{ page.headerimage }}" />
            </div>
        </div>
        {%- else -%}
        <h1 id="wb-cont" class="mrgn-tp-lg" property="name">{{ page-title }} {{ header-html }}</h1>
        {%- endif -%}
        {% endcomment %}
        <h1 id="wb-cont" class="mrgn-tp-lg" property="name">{{ page-title }} {{ header-html }}</h1>
    </div>
    {%- unless page.fluid -%}
    <div class="row">
    {%- endunless -%}
        {%- if page.nav -%}
            {%- capture nav_size -%}
            {%- if page.nav_size -%}
            {{ page.nav_size }}
            {%- else -%}
            3
            {%- endif -%}
            {%- endcapture -%}
            {%- assign main_size = 12 | minus: nav_size -%}
            <div class="col-md-{{ nav_size }}">
                <nav role="navigation" id="wb-sec" typeof="SiteNavigationElement" class="small visible-md visible-lg">
                    <h2>Section menu</h2>
                    <ul class="list-group menu list-unstyled mrgn-lft-0">
                        {% for n in site.data[page.nav][i18nText-lang]['nav'] %}
                        <li>
                            {%- if n.title -%}
                            <h3>{{ n.title }}</h3>
                            {%- endif -%}
                            {%- if n.links -%}
                            <ul class="list-group menu list-unstyled">
                                {% for link in n.links %}
                                {%- if link.html -%}
                                <li>{{ link.html }}</li>
                                {%- elsif link.links -%}
                                {% comment %}
                                Sub links.  This shouldn't happen often, but if another links field is found, expect 
                                them to have the url and name fields.
                                {% endcomment %}
                                <li>
                                    {%- if link.title -%}
                                    <h4>{{ link.title }}</h4>
                                    {%- endif -%}
                                    <ul class="list-group menu list-unstyled">
                                    {% for nl in link.links %}
                                        <li><a class="list-group-item" href="{{ nl.url }}">{{ nl.name }}</a></li>
                                    {% endfor %}
                                    </ul>
                                </li>
                                {%- else -%}
                                <li><a class="list-group-item" href="{{ link.url }}">{{ link.name }}</a></li>
                                {%- endif -%}
                                {%- endfor -%}
                            </ul>
                            {%- elsif n.html_include -%}
                            {%- include {{ n.html_include }} -%}
                            {%- endif -%}
                        </li>
                        {% endfor %}
                    </ul>
                </nav>
            </div>
            <div class="col-md-{{ main_size }}">
                {{ content }}
            </div>
        {%- else -%}
            {{ content }}
        {%- endif -%}
    {%- unless page.fluid -%}
    </div>
    {%- endunless -%}
    {% include main-footer/inc-footer.html %}
</main>
