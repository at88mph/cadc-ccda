---
layout: cadc
lang: fr
permalink: /fr/dss/dss_interrogation_coord_liste.html
title: Interrogation par liste de coordonnées
altLangPage: /en/dss/dss_query_coord_list.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /fr/dss/index.html
      title: DSS
    - link: /fr/dss/dss_interrogation_coord_list.html
      title: Interrogation par liste de coordonnées
---
<p>
Le format doit &ecirc;tre: </p>
<pre>
"ETIQUETTE&lt;TAB&gt;HH:MM:SS.ss&lt;TAB&gt;(S)DD:MM:SS.ss&lt;TAB&gt;BOITE AD(minute d'arc)&lt;TAB&gt;BOITE DEC(minute d'arc)"
</pre>
<p> sur une ligne unique (valeurs s&eacute;par&eacute;es par des tabs), exemple:</p>
<pre>
objet1\t07:42:29.0\t49:48:33.4\t4.\t4. 
</pre>

<div class="form-content">
  <form action="/cadcbin/fr/dss/dss_interrogation_coord_liste.pl" method="POST"  enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_coord" class="control-label">Fichier contenant une liste de coordonn&eacute;es?</label>
        <input type="file" name="uploaded_file_coord" id="uploaded_file_coord" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="Interroger le DSS" />
  </form>
</div>
<p class="text-info">Note: Le r&eacute;sultat de l'interrogation retourne les images de tout les relev&eacute;s disponibles.</p>
