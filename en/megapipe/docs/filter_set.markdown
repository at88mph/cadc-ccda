---
layout: cadc
lang: en
permalink: /en/megapipe/docs/filt.html
title: Filter Set
altLangPage: /fr/megapipe/docs/filt.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/docs/intro.html
      title: Data description
---

<p>
    This page describes the MegaCam broad-band filters and contrasts them with the SDSS and Pan-STARRS filters.
    The previous version of this page is available <a href="filtold.html">here</a>. 
</p>
<p>
    There have been three generations of filters broadband filters for MegaCam.
    The first set (installed in 2002) a replacement for the damaged i-band filter,
    (installed in 2007) and the most recent set which are larger, allowing
    the use of the 4 wing CCDs of MegaCam (installed in 2015). The three sets are shown
    below. Note the wide (gri) filter in the 3rd generation.
</p>
<img class="img-responsive" src="/static/images/megapipe/msp123.gif" alt="MegaCam filter set"/>
<p>
    The filter responses shown include the full telescope
    (mirror+optics+CCD) response. The response curves for the mirror,
    optics and CCD are taken from <a rel="external" href="http://adsabs.harvard.edu/abs/2013A%26A...552A.124B">Betoule
    et al. (2013)</a> and their <a rel="external" href="http://supernovae.in2p3.fr/snls_sdss/">detailed website</a>.
    The filter responses for the first and second generation of
    filters are also taken from that site. The filter responses for
    the third generation of filters is taken from
    the <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Filters/megaprime.html">CFHT
    filter page</a> The final response curves (filter+telescope+CCD)
    are given in text format below. The filter curves also include
    1.25 airmasses of atmospheric attenuation.  The filter
    transmissions have been measured at multiple locations accross the
    filter. The responses below are the average transmission.
</p>
<ul>
  <li>First generation:
    <ul>
      <li><a href="/static/files/megapipe/U.MP9301.fil">U.MP9301</a></li>
      <li><a href="/static/files/megapipe/G.MP9401.fil">G.MP9401</a></li>
      <li><a href="/static/files/megapipe/R.MP9601.fil">R.MP9601</a></li>
      <li><a href="/static/files/megapipe/I.MP9701.fil">I.MP9701</a></li>
      <li><a href="/static/files/megapipe/Z.MP9801.fil">Z.MP9801</a></li>
    </ul>
  </li>
  <li>Second generation:
    <ul>
      <li><a href="/static/files/megapipe/I.MP9702.fil">I.MP9702</a></li>
    </ul>
  </li>
  <li>Third generation:
      <ul>
        <li><a href="/static/files/megapipe/U.MP9302.fil">U.MP9302</a></li>
        <li><a href="/static/files/megapipe/G.MP9402.fil">G.MP9402</a></li>
        <li><a href="/static/files/megapipe/R.MP9602.fil">R.MP9602</a></li>
        <li><a href="/static/files/megapipe/I.MP9703.fil">I.MP9703</a></li>
        <li><a href="/static/files/megapipe/Z.MP9901.fil">Z.MP9901</a></li>
      </ul>
  </li>
</ul>
<h2>Comparing the MegaCam, SDSS and Pan-STARRS filter sets</h2>
<p>
    The figures below show the final MegaCam filter transmission
    functions, split by generation, together with the SDSS and Pan-STARRS
    filters.
</p>
<img class="img-responsive" src="/static/images/megapipe/msp1.gif" alt="MegaCam, SDSS and filter set"/>
<img class="img-responsive" src="/static/images/megapipe/msp2.gif" alt="MegaCam, SDSS and filter set"/>
<img class="img-responsive" src="/static/images/megapipe/msp3.gif" alt="MegaCam, SDSS and filter set"/>
<p>
    The transformations from SDSS and Pan-STARRS filter sets to the
    MegaCam filters, and from the MegaCam filters to the SDSS and
    Pan-STARRS filter sets are illustrated in the figures below. 
    In each plot the, coloured dots represents synthetic photometry,
    computed by multiplying the filter curves above with spectra from
    the <a rel="external" href="https://adsabs.harvard.edu/abs/1998PASP..110..863P">Pickles
    (1998) atlas</a>, (shown in blue) the <a rel="external" href="http://www.stsci.edu/hst/observatory/crds/calspec.html">CALSPEC
    standards</a> (shown in green) or a set of galaxy template spectra
    (shown in red).  The black dots indicate real photometry from
    various MegaCam fields.  The magenta line shows the fit, usually
    linear, but occasionally a polynomial. The coeffecients are given
    in magenta on each panel.  Vertical magenta lines indicate where
    the limits of validity of a transformation.
</p>
<h3>SDSS to MegaCam</h3>
<p>
    The relations for the older griz bands come from the analysis of the
    <a rel="external"  href="http://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">SNLS group</a>.
    The relation for the u band comes from the 
    <a rel="external"  href="http://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">CFHT MegaPipe web pages</a>.
    The <a href="ifilt.html">relation for the new i filter</a> was calculated separately.
</p>
<img class="img-responsive" src="/static/images/megapipe/sdss.sm.megaold.gif" alt="SDSS to MegaCam, old"/>
<p>
    The relations for the new filters is shown below. Note the
    expanded scale for the u-band transformation, which is a bit
    complicated. Also note that the u-band transformation does not go
    through 0,0. Finally, the gri/wide filter is not valid red-wards
    of g-i=1.75.
</p>
<img class="img-responsive" src="/static/images/megapipe/sdss.sm.meganew.gif" alt="SDSS to MegaCam, new"/>
<h3>Pan-STARRS to MegaCam</h3> 
<p>
    Following the Pan-STARRS convention, all the transfromations from
    Pan-STARRS to MegaCam are expressed in terms of a 3-rd order
    polynomial in g-i.  Note the extremely expanded scale for the
    u-band. The Pan-STARRS system does not have a u-band; this
    transformation is an extrapolation from the g-band. This
    transformation also depends on metalicity and therefore on
    galactic latitude. 
</p>

<img class="img-responsive" src="/static/images/megapipe/ps.sm.megaold.gif" alt="PS to MegaCam, old"/> 
<img class="img-responsive" src="/static/images/megapipe/ps.sm.meganew.gif" alt="PS to MegaCam, new"/>
<h3>MegaCam to SDSS</h3>
<p>
    First generation: One should be sceptical of the u-band transformation.
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen1.gif" alt="MegaCam -> SDSS gen1"/>
<p>
    Second generation
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen2.gif" alt="MegaCam -> SDSS gen2"/>
<p>
    Third generation: Again, one should be sceptical of the u-band transformation.
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen3.gif" alt="MegaCam -> SDSS gen3"/>
<h3>MegaCam to Pan-STARRS</h3>
<p>
    First generation: 
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen1.gif" alt="MegaCam -> PS gen1"/>
<p>
    Second generation:
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen2.gif" alt="MegaCam -> PS gen2"/>
<p>
    Third generation:
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen3.gif" alt="MegaCam -> PS gen3"/>
