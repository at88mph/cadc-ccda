---
layout: cadc
lang: fr
permalink: /fr/megapipe/access/graph.html
title: Outil de recherche graphique MegaCam
altLangPage: /en/megapipe/access/graph.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

# This flag more than one script to be used.
script:
    first:

script:
    - https://maps.googleapis.com/maps/api/js?key=AIzaSyDguHe66O5ep-Lqcla9a44wW_RkhB53KB4&amp;sensor=false
    - /static/js/megapipe/data.js
    - /static/js/megapipe/baseutils.js
    - /static/js/megapipe/cfhtls.js
    - /static/js/megapipe/keydragzoom.js

css:
  - /static/css/megapipe.css

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
---

{% include megapipe/graph-form.markdown %}
