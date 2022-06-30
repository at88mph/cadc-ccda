---
layout: core

nofooter: true
signing: true

---
{%- include variable-core.liquid -%}
{%- assign i18nText-cadc = site.data.cadc[i18nText-lang] -%}
{%- assign i18nText = site.data[page.nav][i18nText-lang] -%}
{%- assign i18nText-nav = i18nText['nav'] -%}

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
    <div class="mrgn-bttm-xl">
        <div class="panel-pane pane-block pane-bean-homepage-banner">
            <div class="pane-content"></div>
        </div>
        <div class="panel-separator"></div>
        <div class="panel-pane pane-page-title">
            <div class="pane-content">
                <h1 id="wb-cont">{{ i18nText-home }}</h1>
            </div>
        </div>
        <p class="lead">{{ i18nText-cadc.labels.landing_page_lead }}</p>
        <p class="mrgn-bttm-xl">{{ i18nText-cadc.labels.landing_page_description }}</p>
    </div>
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <h2 class="mrgn-bttm-lg mrgn-tp-0">{{ i18nText-nav.telescope_data_products.title }}</h2>
            <dl class="mrgn-tp-md">
            {%- for l in i18nText-nav.telescope_data_products.links -%}
            {% assign link = l[1] %}
                <dt><a href="{{ link.url }}">{{ link.short_name }}</a></dt>
                <dd>{{ link.name }}</dd>
            {% endfor %}
            </dl>
        </div>
        <div class="col-md-4 col-sm-6 brdr-lft">
            <h2 class="mrgn-bttm-lg mrgn-tp-0">{{ i18nText-nav.advanced_data_products.title }}</h2>
            <dl class="mrgn-tp-md">
            {%- for l in i18nText-nav.advanced_data_products.links -%}
            {% assign link = l[1] %}
                <dt><a href="{{ link.url }}">{{ link.short_name }}</a></dt>
                <dd>{{ link.name }}</dd>
            {% endfor %}
            </dl>
        </div>
        <div class="col-md-4 col-sm-6 brdr-lft">
            <h2 class="mrgn-bttm-lg mrgn-tp-0">{{ i18nText-nav.services.title }}</h2>
            <dl class="mrgn-tp-md">
            {%- for l in i18nText-nav.services.links -%}
            {% assign link = l[1] %}
                <dt><a href="{{ link.url }}">{{ link.short_name }}</a></dt>
                <dd>{{ link.name }}</dd>
            {% endfor %}
            </dl>
        </div>
    </div>
    <section class="alert alert-info mrgn-tp-xl mrgn-bttm-0">
        <h2 class="h3">{{ i18nText-cadc.labels.landing_page_disclaimer_notice }}</h2>
        <p>{{ i18nText-cadc.labels.landing_page_disclaimer }}</p>
    </section>
    {% include main-footer/inc-footer.html %}
</main>
