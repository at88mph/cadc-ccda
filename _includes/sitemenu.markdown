<li role="presentation"> <a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-svc" aria-expanded="false" href="#">{{ i18nText-nav.services.title }}</a>
    <ul id="gc-mnu-svc" role="menu" aria-orientation="vertical">
      <li role="presentation"> <a role="menuitem" tabindex="-1" href="#">{{ i18nText-nav.services.title }}<span class="visible-xs-inline visible-sm-inline">{{ i18nText-nav.services.title }} : home</span></a> </li>
      <li role="separator"></li>
      {%- for n in i18nText-nav.services.links -%}
        <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ n.url }}" {% if n.external %} rel="external"{% endif %}>{{ n.short_name }}</a></li>
      {%- endfor -%}
    </ul>
</li>
<li role="presentation"> <a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-tdp" aria-expanded="false" href="#">{{ i18nText-nav.advanced_data_products.title }}</a>
  <ul id="gc-mnu-tdp" role="menu" aria-orientation="vertical">
    <li role="presentation"> <a role="menuitem" tabindex="-1" href="#">{{ i18nText-nav.advanced_data_products.title }}<span class="visible-xs-inline visible-sm-inline">{{ i18nText-nav.advanced_data_products.title }} : home</span></a> </li>
    <li role="separator"></li>
    {%- for n in i18nText-nav.advanced_data_products.links -%}
      <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ n.url }}" {% if n.external %} rel="external"{% endif %}>{{ n.short_name }}</a></li>
    {%- endfor -%}
  </ul>
</li>
<li role="presentation"> <a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-adp" aria-expanded="false" href="#">{{ i18nText-nav.telescope_data_products.title }}</a>
  <ul id="gc-mnu-adp" role="menu" aria-orientation="vertical">
    <li role="presentation"> <a role="menuitem" tabindex="-1" href="#">{{ i18nText-nav.telescope_data_products.title }}<span class="visible-xs-inline visible-sm-inline">{{ i18nText-nav.telescope_data_products.title }} : home</span></a> </li>
    <li role="separator"></li>
    {%- for n in i18nText-nav.telescope_data_products.links.left -%}
      <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ n.url }}" {% if n.external %} rel="external"{% endif %}>{{ n.short_name }}</a></li>
    {%- endfor -%}
    {%- for n in i18nText-nav.telescope_data_products.links.right -%}
      <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ n.url }}" {% if n.external %} rel="external"{% endif %}>{{ n.short_name }}</a></li>
    {%- endfor -%}
  </ul>
</li>