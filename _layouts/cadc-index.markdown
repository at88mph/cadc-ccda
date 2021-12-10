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
    <div class="row mrgn-tp-md mrgn-bttm-0">
        <div class="col-md-offset-3 col-md-6">
            <div class="well">
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
                {% assign link = l[1] %}
                {% if link.splash_image_url %}
                    <li>
                        <a href="{{ link.url }}">
                            <span class="small"><img class="img-thumbnail" width="60" height="60" src="{{ link.splash_image_url }}" /><br /><small>{{ link.short_name }}</small></span></a>
                    </li>
                {% else %}                    
                    {%- assign list_size_mod = list_size_mod | minus: 1 -%}
                {% endif %}
                {% endfor %}
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
                {% assign link = l[1] %}
                {% if link.splash_image_url %}
                    <li><a href="{{ link.url }}"><span class="small"><img class="img-thumbnail" width="60" height="60" src="{{ link.splash_image_url }}" /><br /><small>{{ link.short_name }}</small></span></a></li>
                {% else %}                    
                    {%- assign list_size_mod = list_size_mod | minus: 1 -%}
                {% endif %}
                {% endfor %}
                {%- if list_size_mod != 0 -%}
                <li style="height: 95px;"></li>
                {%- endif -%}
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-3 hght-inhrt">
            <div class="well hght-inhrt">
                {% comment %}
                    In order to facilitate the 2 column layout, there needs to be an even number of items,
                    so we'll pad that here if necessary.
                {% endcomment %}
                {%- assign list_size_mod = i18nText-nav.services.links.size | modulo: 2 | to_number -%}
                <h5 class="mrgn-tp-0">{{ i18nText-nav.services.title }}</h5>
                <ul class="list-unstyled colcount-sm-1 text-center colcount-md-2 colcount-lg-2">
                {% for l in i18nText-nav.services.links %}
                {% assign link = l[1] %}
                {% if link.splash_image_url %}
                    <li>
                        <a href="{{ link.url }}">
                            <span class="small"><img class="img-thumbnail" width="60" height="60" src="{{ link.splash_image_url }}" /><br /><small>{{ link.short_name }}</small></span></a>
                    </li>
                {% else %}                    
                    {%- assign list_size_mod = list_size_mod | minus: 1 -%}
                {% endif %}
                {% endfor %}
                {%- if list_size_mod != 0 -%}
                <li style="height: 95px;"></li>
                {%- endif -%}
                </ul>
            </div>
        </div>
    </div>
    {% include main-footer/inc-footer.html %}
</main>
