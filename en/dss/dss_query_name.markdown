---
layout: cadc
lang: en
permalink: /en/dss/dss_query_name.html
title: Query By Name
altLangPage: /fr/dss/dss_interrogation_nom.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /en/dss/index.html
      title: DSS
    - link: /en/dss/dss_query_name.html
      title: Query By Name
---
<div class="form-content">
    <form action="/cadcbin/en/dss/dss_query_name.pl" method="POST">
        <div class="form-group">
            <label for="object_name" class="control-label">Object Name</label>
            <input type="text" name="object_name" id="object_name" class="width-70 form-control" />
        </div>
        <div class="form-group">
            <label for="ra_radius" class="control-label">RA Box size (arcmin)</label>
            <input type="text" name = "ra_radius" id="ra_radius" value="10.0" class="width-30 form-control" />
        </div>
        <div class="form-group">
            <label for="dec_radius" class="control-label">DEC Box size (arcmin)</label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" class="width-30 form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="Query DSS by object name" />
    </form>
</div>
<p class="text-info">Note: The query will return all the possible survey images.</p>