---
layout: core

nofooter: true
signing: true
nositesearch: true
---
{%- include variable-core.liquid -%}
{%- assign i18nText-cadc = site.data.cadc[i18nText-lang] -%}
{%- assign i18nText = site.data[page.nav][i18nText-lang] -%}
{%- assign i18nText-nav = i18nText['nav'] -%}

<main class="container mrgn-tp-lg" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">    
    {%- if site.warning.enabled -%}
    <div class="row">
        <div class="full-width">
            <section class="alert alert-warning">
                <p>{{ site.warning[i18nText-lang] }}</p>
            </section>
        </div>
    </div>
    {%- endif -%}
    <div class="mrgn-bttm-lg">
        <div class="panel-pane pane-block pane-bean-homepage-banner">
            <div class="pane-content"></div>
        </div>
        <div class="panel-separator"></div>
        <div class="panel-pane pane-page-title">
            <div class="pane-content">
                <h1 id="wb-cont"><span class="wb-inv">Home page — </span>{{ page.title }}</h1>
            </div>
        </div>
    </div>
    <div class="row mrgn-tp-md mrgn-bttm-xl">
        <div class="col-md-offset-7 col-md-5">
            <div class="small">
                <form action="{{ i18nText-nav.services.links.search.url }}" class="form-inline form-horizontal" method="get">
                    <div class="medium text-left">
                        <label class="hide control-label">{{ i18nText-cadc.labels.quicksearch }}</label>
                        <input type="text" size="30" name="Plane.position.bounds" placeholder="{{ i18nText-cadc.labels.quicksearch_placeholder }}" class="search_criteria_input form-control" />
                        <input type="submit" class="btn btn-default" value="{{ i18nText-cadc.labels.quicksearch_submit_button }}" />
                        <br />
                        <a href="{{ i18nText-nav.services.links.search.url }}">{{ i18nText-nav.services.links.search.name }}</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row small wb-eqht">
        <div class="col-md-4 col-sm-4 hght-inhrt brdr-rght">
            <div class="hght-inhrt">
                <h2 class="mrgn-bttm-lg mrgn-tp-0">{{ i18nText-nav.telescope_data_products.title }}</h2>
                <dl class="mrgn-tp-md">
                {%- for l in i18nText-nav.telescope_data_products.links -%}
                {% assign link = l[1] %}
                    <dt><a href="{{ link.url }}">{{ link.short_name }}</a></dt>
                    <dd>{{ link.name }}</dd>
                {% endfor %}
                </dl>
            </div>
        </div>
        <div class="col-md-4 col-sm-4 hght-inhrt brdr-lft brdr-rght">
            <div class="hght-inhrt">
                <h2 class="mrgn-bttm-lg mrgn-tp-0">{{ i18nText-nav.advanced_data_products.title }}</h2>
                <dl class="mrgn-tp-md">
                {%- for l in i18nText-nav.advanced_data_products.links -%}
                {% assign link = l[1] %}
                    <dt><a href="{{ link.url }}">{{ link.short_name }}</a></dt>
                    <dd>{{ link.name }}</dd>
                {% endfor %}
                </dl>
            </div>
        </div>
        <div class="col-md-4 col-sm-4 hght-inhrt brdr-lft">
            <div class="hght-inhrt">
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
    </div>
    {% include main-footer/inc-footer.html %}
</main>
