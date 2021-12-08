---
layout: cadc
lang: en
permalink: /en/megapipe/access/cut.html
title: MegaPipe Cutout Service
altLangPage: /fr/megapipe/access/cut.html
dateModified: 2021-12-08

signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/access/cut.html
      title: Cutout Service

# This flag more than one script to be used.
script:
    first:

script:
    - /static/js/megapipe/cfhtls.js
    - /static/js/megapipe/resolve.js
---

<p>
    This page allows you to extract postage stamp cutout images from
    the MegaPipe images by specifying their coordinates. Links to
    cutouts from all available bands will be returned.
</p>

<p>
    Coordinates can be entered in sexigesmial format (hh:mm:ss or
    similar) or decimal format (dd.ddddd). A 2000.0 equinox is
    assumed.
</p>

{% include megapipe/cut-form.markdown %}
