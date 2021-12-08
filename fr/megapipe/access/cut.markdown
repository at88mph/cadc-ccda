---
layout: cadc
lang: fr
permalink: /fr/megapipe/access/cut.html
title: Service de découpment d'images MegaPipe
altLangPage: /en/megapipe/access/cut.html
dateModified: 2021-12-08

signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/access/cut.html
      title: Service de découpment

# This flag more than one script to be used.
script:
    first:

script:
    - /static/js/megapipe/cfhtls.js
    - /static/js/megapipe/resolve.js
---

<p>
    Cette page vous permet d'extraire des images timbre postes d&eacute;coup&eacute;
    des images MegaPipe en pr&eacute;cisant leurs coordonn&eacute;es. Des liens vers
    des d&eacute;coupes de toutes les bandes disponibles seront retourn&eacute;s.
</p>

<p>
    Les coordonn&eacute;es peuvent &ecirc;tre saisies en format sexigesmial (hh:
    mm: ss ou similaire) ou au format d&eacute;cimal (dd.ddddd). Un 2000.0
    &eacute;quinoxe est suppos&eacute;.
</p>

{% include megapipe/cut-form.markdown %}
