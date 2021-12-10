---
layout: cadc
lang: fr
permalink: /fr/dss/dss_interrogation_nom_liste.html
title: Interrogation par liste d'objets
altLangPage: /en/dss/dss_query_name_list.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /fr/dss/index.html
      title: DSS
    - link: /fr/dss/dss_interrogation_nom_list.html
      title: Interrogation par liste d'objets'
---

<p>
Le format doit &ecirc;tre:  "ETIQUETTE&lt;TAB&gt;OBJET&lt;TAB&gt;Boite AD(minute d'arc)&lt;TAB&gt;Boite DEC minute d'arc)" sur une ligne unique (valeurs s&eacute;r&eacute;es par des tabs)
</p>
<p>
Exemple:
</p>
<pre>
object1&lt;TAB&gt;M31&lt;TAB&gt;10.0&lt;TAB&gt;12.0
object2&lt;TAB&gt;M101&lt;TAB&gt;12.0&lt;TAB&gt;5.0
</pre>
<div class="form-content">
  <form action="/cadcbin/fr/dss/dss_interrogation_nom_liste.pl" method="POST"  enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_object" class="control-label">Fichier contenant une liste d'objets?</label>
        <input type="file" name="uploaded_file_object" id="uploaded_file_object" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="Interroger le DSS" />
  </form>
</div>
<p class="text-info">Note: Le r&eacute;sultat de l'interrogation retourne les images de tout les relev&eacute;s disponibles.</p>
