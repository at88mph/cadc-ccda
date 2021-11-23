---
layout: core

nofooter: true
signing: true
nositesearch: true
---
{%- include variable-core.liquid -%}
{%- assign i18nText-nav = site.data[page.nav][i18nText-lang]['nav'] -%}

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
    <div class="row">
        <div class="container">
            <div class="col-md-6 col-sm-6">
                <section id="services">
                    <h3>{{ i18nText-nav.services.title }}</h3>
                    <ul class="list-style-none">
                        {%- for n in i18nText-nav.services.links -%}
                            <li><a href="{{ n.url }}">{{ n.name }}</a></li>
                        {%- endfor -%}
                    </ul>
                </section>
            </div>
            <div class="col-md-6 col-sm-6">
                <section id="advanced-data-products">
                    <h3>{{ i18nText-nav.advanced_data_products.title }}</h3>
                    <ul class="list-style-none">
                        {%- for n in i18nText-nav.advanced_data_products.links -%}
                        <li><a href="{{ n.url }}">{{ n.name }}</a></li>
                        {%- endfor -%}
                    </ul>
                </section>
            </div>
            <div class="col-md-12 col-sm-12">
            {%- assign tdp-links = i18nText-nav.telescope_data_products.links -%}
                <section id="telescope-data-products">
                    <h3>{{ i18nText-nav.telescope_data_products.title }}</h3>
                    <div class="col-md-6 col-sm-6">
                        <ul class="list-style-none">
                            {%- for l in i18nText-nav.telescope_data_products.links.left -%}
                            <li><a href="{{ l.url }}">{{ l.name }}</a></li>
                            {%- endfor -%}
                        </ul>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <ul class="list-style-none">
                            {%- for l in i18nText-nav.telescope_data_products.links.right -%}
                            <li><a href="{{ l.url }}">{{ l.name }}</a></li>
                            {%- endfor -%}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
    {% include main-footer/inc-footer.html %}
</main>