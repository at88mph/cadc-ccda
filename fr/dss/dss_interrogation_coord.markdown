---
layout: cadc
lang: fr
permalink: /fr/dss/dss_interrogation_coord.html
title: Interrogation par coordonnées
altLangPage: /en/dss/dss_query_coord.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /fr/dss/index.html
      title: DSS
    - link: /fr/dss/dss_interrogation_coord.html
      title: Interrogation par coordonnées
---
<div class="form-content">
    <form action="/cadcbin/fr/dss/dss_interrogation_coord.pl" method="POST">
        <div class="form-group">
            <label for="ra" class="control-label">Ascention Droite (J2000) (HH:MM:SS.SS) </label>
            <input type="text" name="ra" id="ra" class="form-control" />
        </div>
        <div class="form-group">
            <label for="dec" class="control-label">Declination (J2000) (+DD:MM:SS.SS) </label>
            <input type="text" name = "dec" id="dec" class="form-control" />
        </div>
        <div class="form-group">
            <label for="ra_radius" class="control-label">Dimension Boite AD (minute d'arc)</label>
            <input type="text" id="ra_radius" name = "ra_radius" value="10.0" class="form-control" />
        </div>
        <div class="form-group">
            <label for="dec_radius" class="control-label">Dimension Boite DEC (minute d'arc)</label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="Interroger le DSS" />
    </form>
    <p class="text-info">Note: Le r&eacute;sultat de l'interrogation retourne les images de tout les relev&eacute;s disponibles.</p>
</div>
