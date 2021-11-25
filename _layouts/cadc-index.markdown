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
    <div class="row small wb-eqht mrgn-tp-md">
        <div class="col-md-6 col-sm-6 hght-inhrt">
            <div class="well hght-inhrt">
                {% comment %}
                    In order to facilitate the 4 column layout, there needs to be an odd number of items,
                    so we'll pad that here if necessary.
                {% endcomment %}
                {%- assign list_size_mod = i18nText-nav.telescope_data_products.links.size | modulo: 2 | to_number -%}
                <h5 class="mrgn-tp-0">{{ i18nText-nav.telescope_data_products.title }}</h5>
                <ul class="list-unstyled text-center colcount-sm-3 colcount-md-4 colcount-lg-4">
                {%- for l in i18nText-nav.telescope_data_products.links -%}
                <li>
                    <a href="{{ l.url }}">
                        <span class="small"><img class="img-thumbnail" width="60" height="60" src="{{ l.splash_image_url }}" /><br /><small>{{ l.short_name }}</small></span></a>
                </li>
                {%- endfor -%}
                {%- if list_size_mod == 0 -%}
                <li style="height: 95px;"></li>
                {%- endif -%}
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-3 hght-inhrt">
            <div class="well hght-inhrt">
                <h5 class="mrgn-tp-0">{{ i18nText-nav.advanced_data_products.title }}</h5>
                <ul class="list-unstyled colcount-sm-1 text-center colcount-md-2 colcount-lg-2">
                {%- for l in i18nText-nav.advanced_data_products.links -%}
                <li>
                    <a href="{{ l.url }}">
                        <span class="small"><img class="img-thumbnail" width="60" height="60" src="{{ l.splash_image_url }}" /><br /><small>{{ l.short_name }}</small></span></a>
                </li>
                {%- endfor -%}
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-3 hght-inhrt">
            <div class="well hght-inhrt">
                <h5 class="mrgn-tp-0">{{ i18nText-nav.services.title }}</h5>
                <ul class="list-unstyled colcount-sm-1 text-center colcount-md-2 colcount-lg-2">
                {%- for l in i18nText-nav.services.links -%}
                <li>
                    <a href="{{ l.url }}">
                        <span><img class="img-thumbnail" width="60" height="60" src="{{ l.splash_image_url }}" /><br /><small>{{ l.short_name }}</small></span></a>
                </li>
                {%- endfor -%}
                </ul>
            </div>
        </div>
    </div>
    {% include main-footer/inc-footer.html %}
</main>