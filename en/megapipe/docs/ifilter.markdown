---
layout: cadc
lang: en
permalink: /en/megapipe/docs/ifilt.html
title: i Filter
altLangPage: /fr/megapipe/docs/ifilt.html
dateModified: 2021-12-08

signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/docs/desc.html
      title: Data description
    - link: /en/megapipe/docs/filt.html
      title: Filter Set
    - link: /en/megapipe/docs/ifilt.html
      title: i Filter
---
  <p>
    As discussed on
    the <a rel="external"  href="https://www.cfht.hawaii.edu/News/MPJun07/">MegaCam
    filter page</a>, the MegaCam i filter broke in June 2007. The
    replacement (i.MP9702) is not identical to the original
    (i.MP9701). This page derives colour terms for the new MegaCam i
    filter.
  </p>
  <h2>Filter response</h2>
  <p>
  The figure below shows the filter curves of
  the new MegaCam i in black
  the old MegaCam i in red,
  and the SDSS i in blue. 
  The MegaCam filter curves include the response of the CFHT optics.
  The new i filter is shifted to the blue much closer to the SDSS i than the old one.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/newicurve_en.gif" alt="Several i filters"/>
  <h2>Colour terms</h2>
  <p>
    The figure below shows the colour term for the new MegaCam i
    filter with respect to the SDSS system. The best fit colour term is
    -0.003(r<sub>SDSS</sub>-i<sub>SDSS</sub>). The old colour term is
    clearly not valid.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/newiex_en.gif" alt="Example of a colour term measurement"/>
  <p>
    The scatter in the above plot is large (about 0.05 mags). To
    improve the accuracy, this test was repeated for about 300 images
    from the CFHT archive, all taken in the new i-band, with exposure
    times greater than 100 seconds and lying within in the SDSS. The
    results are shown in the figure below.  The points show
    measurements of the colour term as a function of CFHT exposure
    number. The vertical histogram shows the distribution of
    values. The horizontal line indicates the median colour term of
    -0.003. The scatter of about this value is 0.0005.

  </p>
  <img class="img-responsive" src="/static/images/megapipe/newi2_en.gif" alt="Multiple colour term measurement"/>
