---
layout: cadc
lang: en
permalink: /en/megapipe/docs/filtold.html
title: Filter Set ugriz
altLangPage: /fr/megapipe/docs/filtold.html
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
    - link: /en/megapipe/docs/filtold.html
      title: Filter Set ugriz
---

<p>
    This page describes the MegaCam ugriz filters and contrasts them with the SDSS ugriz filters.
</p>
<p>
    Obviously, most of the information presented in this page is
    available elsewhere. However, although it is possible to find the
    MegaCam filter transmission function without the telescope (mirrors,
    optics, detector) response function, it is hard to find files
    describing the filter set after multiplication by the system response
    (which is necessary for a number of things, notably photometric
    redshifts), so they are presented here. 
</p>
<p>
  The figure below shows the MegaCam ugriz filter set.
  The light-coloured lines show the filters' responses
  as described in the  
  <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime/data.MegaPrime/MegaCam_Filters_data.txt"> CFHT filter pages</a>.
  The labeled black lines show the response of the 
  <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Al_coating.dat">primary mirror</a>,
  the <a  rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Optics_TR.dat">optics</a>
  and the <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/QE_camera.dat">QE of the CCD's</a>
  as obtained from the CFHT website.
</p>
<img class="img-responsive" src="/static/images/megapipe/cfhtlsugriznew_en.gif" alt="MegaCam filter set"/>
<p>
  The filter responses are multiplied by the telescope (mirror+optics+CCD) response
  to obtain total transmissions for the whole system.
  These total transmissions are shown as the heavy coloured lines 
  The labels i1 and i2 refer to the old (before June 2007) and new (after October 2007) i filters.
  The final response curves are given in text format here:
</p>
<ul>
  <li><a href="/static/files/megapipe/uMega.fil">u band</a></li>
  <li><a href="/static/files/megapipe/gMega.fil">g band</a></li>
  <li><a href="/static/files/megapipe/rMega.fil">r band</a></li>
  <li><a href="/static/files/megapipe/iMega.fil">i band</a> (old: i.MP9701)</li>
  <li><a href="/static/files/megapipe/i2Mega.fil">i2 band</a> (new: i.MP9702)</li>
  <li><a href="/static/files/megapipe/zMega.fil">z band</a></li>
</ul>
<h2>Comparing the MegaCam and SDSS filter sets</h2>
  <p>
    The figure below shows the final MegaCam filter transmission functions.
    The same data for the SDSS ugriz filter set are shown in heavier lines.
    Note the MegaCam u and g filters are slightly redder than their
    SDSS counterparts.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/megasdssnew.gif" alt="MegaCam vs SDSS"/>
  <p>
    The transformation between the Vega and AB magnitude system is
    different for the SDSS and MegaCam filters, particularly for the u.
    This is shown in the following table:
  </p>
  <table class="table">
    <thead>
      <tr><th scope="col">Filter</th><th scope="col">Vega-AB<br/>SDSS</th><th scope="col">Vega-AB<br/>MegaCam</th></tr>
    </thead>
    <tbody>
      <tr><td>u      </td><td>-0.966</td><td>-0.338</td></tr>
      <tr><td>g      </td><td>+0.099</td><td>+0.093</td></tr>
      <tr><td>r      </td><td>-0.163</td><td>-0.164</td></tr>
      <tr><td>i (old)</td><td>-0.387</td><td>-0.389</td></tr>
      <tr><td>i (new)</td><td>-0.387</td><td>-0.376</td></tr>
      <tr><td>z      </td><td>-0.560</td><td>-0.551</td></tr>
    </tbody>
  </table>
  <p>
    These numbers are computed for zero airmass.
  </p>
  <p>
    The colour terms between the two filter sets
    can be described by the following equations:
  </p>
  <pre>
    u_Mega = u_SDSS - 0.241 (u_SDSS - g_SDSS)
    g_Mega = g_SDSS - 0.153 (g_SDSS - r_SDSS)
    r_Mega = r_SDSS - 0.024 (g_SDSS - r_SDSS)
    i_Mega = i_SDSS - 0.085 (r_SDSS - i_SDSS) (old)
    i_Mega = i_SDSS - 0.003 (r_SDSS - i_SDSS) (new)
    z_Mega = z_SDSS + 0.074 (i_SDSS - z_SDSS)
  </pre>
  <p>
    The relations for the griz bands (including the old i-filter) come from the analysis of the
    <a rel="external"  href="https://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">SNLS group</a>.
    The relation for the u band comes from the 
    <a rel="external"  href="https://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">CFHT MegaPipe web pages</a>.
    The <a href="ifilt.html">relation for the new i filter</a> was calculated separately.
  </p>
  <p>
    The reverse transformations (MegaCam to SDSS) have also been calculated.
  </p>
  <pre>
    u_SDSS=u_Mega +0.181 (u_Mega - g_Mega)
    g_SDSS=g_Mega +0.195 (g_Mega - r_Mega)
    g_SDSS=g_Mega +0.103 (g_Mega - i_Mega)
    r_SDSS=r_Mega +0.011 (g_Mega - r_Mega)
    i_SDSS=i_Mega +0.079 (r_Mega - i_Mega) (old)
    i_SDSS=i_Mega +0.044 (g_Mega - i_Mega) (old)
    i_SDSS=i_Mega +0.001 (r_Mega - i_Mega) (new) 
    i_SDSS=i_Mega -0.003 (g_Mega - i_Mega) (new)
    z_SDSS=z_Mega -0.099 (i_Mega - z_Mega)
  </pre>
