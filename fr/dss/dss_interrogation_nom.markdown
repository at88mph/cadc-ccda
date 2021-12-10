---
layout: cadc
lang: fr
permalink: /fr/dss/dss_interrogation_nom.html
title: Interrogation par nom d'objet
altLangPage: /en/dss/dss_query_name.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /fr/dss/index.html
      title: DSS
    - link: /fr/dss/dss_interrogation_nom.html
      title: Interrogation par nom d'objet
---
<div class="form-content">
    <form action="/cadcbin/fr/dss/dss_interrogation_nom.pl" method="POST">
        <div class="form-group">
            <label for="object_name" class="control-label">Nom d'objet</label>
            <input type="text" name="object_name" id="object_name" class="form-control" />
        </div>
        <div class="form-group">
            <label for="ra_radius" class="control-label">Dimension boite AD (minute d'arc)</label>
            <input type="text" name = "ra_radius" id="ra_radius" value="10.0" class="form-control" />
        </div>
        <div class="form-group">
            <label for="dec_radius" class="control-label">Dimension boite DEC (minute d'arc)</label>
            <input type="text" id="dec_radius" name = "dec_radius" value="10.0" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" value="Interroger le DSS" />
    </form>
</div>
<p class="text-info">Note: Le r&eacute;sultat de l'interrogation retourne les images de tout les relev&eacute;s disponibles.</p>