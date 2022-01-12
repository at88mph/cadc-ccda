---
layout: cadc
lang: en
permalink: /en/megapipe/cfhtls/scrollD1.html
title: D1 multi-wavelength scrollable image
altLangPage: /fr/megapipe/cfhtls/scrollD1.html
dateModified: 2021-12-08
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/cfhtls/index.html
      title: CFHTLS

# Allow several scripts
script:
  first:

script: 
  - https://maps.googleapis.com/maps/api/js?key=AIzaSyDguHe66O5ep-Lqcla9a44wW_RkhB53KB4&amp;sensor=false
  - /static/js/megapipe/scrollD1.js
---

<div id="diag"></div>
<div id="map-canvas"></div>
<p>
    The image above is the CFHTLS D1 field. You can zoom in and out
    and scroll around the image the using your mouse much like Google
    Maps.  You can change the map to view the field at different
    wavelengths.
</p>
<p>
    The non-CFHTLS images were produced by taking publicly available
    images ( see the list of <a href="/en/megapipe/cfhtls/cov.html">Data at other wavelengths</a>) and resampling them to the scale of the
    CFHTLS images. In some cases, this causes the images to be drastically
    over-sampled (the Spitzer MIPS data, for example) or under-sampled
    (the HST images). The colour images for the CFHTLS data are produced
    from the <em>gri</em> images.
</p>
<p>
    You can also get a science image in FITS format (for the CFHTLS
    images only).  Pan and zoom to the position and resolution you want,
    pick the filter, then click on link below (if visible).
</p>
<div id="fits"></div>
