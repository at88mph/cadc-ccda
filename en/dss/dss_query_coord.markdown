---
layout: cadc
lang: en
permalink: /en/dss/dss_query_coord.html
title: Query By Coordinate
altLangPage: /fr/dss/dss_interrogation_coord.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /en/dss/index.html
      title: DSS
    - link: /en/dss/dss_query_coord.html
      title: Query By Coordinate
---
<div class="form-content">
    <form action="/cadcbin/en/dss/dss_query_coord.pl" method="POST">
        <div class="form-group">
            <label class="control-label" for="ra">Right Ascension (J2000) (HH:MM:SS.SS) </label>
            <input type="text" name="ra" id="ra" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="dec">Declination (J2000) (+DD:MM:SS.SS) </label>
            <input type="text" name = "dec" id="dec" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="ra_radius">RA Box size (arcmin)</label>
            <input type="text" id="ra_radius" name = "ra_radius" value="10.0" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label" for="dec_radius">DEC Box size (arcmin)</label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="Query DSS by coordinate" />
    </form>
</div>
<p class="text-info">Note: The query will return all the possible survey images.</p>
