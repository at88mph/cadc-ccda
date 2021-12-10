---
layout: cadc
lang: en
permalink: /en/wirwolf/docs/filt.html
title: JHK WIRCam filters
altLangPage: /fr/wirwolf/docs/filt.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /en/wirwolf/
      title: WIRwolf
    - link: /en/wirwolf/docs/filt.html
      title: JHK WIRCam filters
---
<p>
    This page describes the WIRCam JHK filters and contrasts them with the 2MASS JHK filters.
    Colour terms with respect to 2MASS are derived.
</p>
<h2>The WIRCam filter set</h2>
<p>
    The figure below shows the WIRCam YJHK filter set. The
    light-coloured black lines show the filters' responses as obtained
    from the <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Filters/wircam.html">CFHT WIRCam
      filter page</a>.  The darker black lines show the final response after
    factoring in all of the following:
</p>
<ul>
  <li>
      The green line shows the <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Al_coating.dat">reflectivity of the  primary mirror</a>.
  </li>
  <li>
      The blue line shows the transmission of the <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/WIRCam/pics.WIRCam/WIRCamOpticsResponseCurve.xls">WIRCam optics</a>. 
  </li>
  <li>
      The red line shows the nominal QE of the HgCdTe HAWAII-2RG
      detectors. The curve is derived from Figure 1
      of <a rel="external" href="https://www.eso.org/~gfinger/marseille_08/AS08-AS12-9_H2RG_mosaic_gfi_final.pdf">Finger et al.</a> The response varies somewhat from detector to detector and with temperature. However, the response is (fairly)
      flat function of wavelength, so the effect on the shape of the
      final filter responses is small.
  </li>
  <li>
      The cyan line shows the transmission of the atmosphere. The
      curve was obtain from <a rel="external" href="https://www.gemini.edu/sciops/telescopes-and-sites/observing-condition-constraints/ir-transmission-spectra">Gemini website</a>; this curve shows the
      transmission for an water vapor column of 1.6 mm and an airmass
      of 1.5. The atmospheric transmission varies with changing
      airmass and water column. However it only substantially affects
      the red edge of the K filter. Since WIRCam uses a short K
      filter, the transmissions can be safely be neglected for most
      purposes.
  </li>
</ul>
<img class="img-responsive" src="/static/images/wirwolf/wirfil.gif" alt="WIRCam filter set"/>
<p>
    The final response curves taking to account all of the above
    factors are given in text format here:
</p>
<ul>
  <li><a href="/static/files/wirwolf/Ywircam.fil">Y band</a></li>
  <li><a href="/static/files/wirwolf/Jwircam.fil">J band</a></li>
  <li><a href="/static/files/wirwolf/Hwircam.fil">H band</a></li>
  <li><a href="/static/files/wirwolf/Kwircam.fil">K band</a></li>
</ul>
<h2>The WIRCam filters compared to the 2MASS filters</h2>
<p>
    The figure below shows the WIRCam and 2MASS JHK filters. The
    transmission curves for the 2MASS filters were retrieved from
    <a rel="external" href="http://www.ipac.caltech.edu/2mass/releases/allsky/doc/sec6_4a.html">2MASS photometry documentation</a>
    here. The filters are not identical. The WIRCam J filter is
    slightly redder than the 2MASS J, while the WIRCam H and Ks
    filters are slightly bluer.
</p>
<img class="img-responsive" src="/static/images/wirwolf/wir2mass.gif" alt="WIRCam and 2MASS filter sets"/>
<p>
    The differences between AB and Vega magnitudes for both filter
    sets is given in the following table:
</p>
<table>
<tr><th scope="col">Filter</th><th scope="col">Vega-AB<br/>2MASS</th><th scope="col">Vega-AB<br/>WIRCam</th></tr>
<tr><td>J</td><td>-0.932</td><td>-0.958</td></tr>
<tr><td>H</td><td>-1.418</td><td>-1.399</td></tr>
<tr><td>Ks</td><td>-1.885</td><td>-1.879</td></tr>
</table>
<p>
     Small colour terms exist between the two filter sets. These colour terms were measured two ways: 
</p>
<ul>
  <li>
       First, the filter responses described above were multiplied by
       the spectra of the <a rel="external" href="https://adsabs.harvard.edu/abs/1998PASP..110..863P">Pickles
       stars</a>. The resulting synthetic JHK photometry
       was used to measure colour terms. The main liability of this
       method is that, if either the spectra or the filter curves are
       not realistic, the derived colour terms will be erroneous.
  </li>
  <li>
      Second, colour terms were measured for several thousand WIRCam
      images by comparing the instrumental WIRCam magnitudes to the
      2MASS photometry. Note that even if the photometric zero-point
      is unknown, the colour term can still be measured. The
      disadvantage of this method is that the WIRCam images are much
      deeper than the 2MASS images. Only the faintest 2MASS stars are
      not saturated. Therefore their colours tend to be noisier than
      desirable, producing large uncertainties in the measured colour
      terms
  </li>
</ul>
<p>
</p>
<p>
    The results are shown below. The top panels show the results from
    synthetic photometry. The colour term equations shown are derived
    from linear fits to the synthetic photometry. The histograms on
    the lower panels show the distribution measured colour terms. The
    colour term equations shown represent the modal values of the
    colour term histograms.
</p>
<img class="img-responsive" src="/static/images/wirwolf/wirctcor.gif" alt="WIRCam/2MASS colour terms"/>
<p>
    The results are in close agreement, indicating that the filter
    responses are fairly realistic and that the measured colours,
    while noisy, have no systematic problems. The largest discrepancy
    is for the K band. Fortunately, the dispersion in stellar colours in H-K
    is fairly small (0.5 mags) so that a 0.009 shift in colour term
    only translates to a 0.0045 magnitude zero-point offset.
</p>
<p>
    The observed colour terms were adopted: 
</p>
<pre>
J_WIRcam = J_2MASS - 0.064 * (J-H)_2MASS
H_WIRcam = H_2MASS + 0.031 * (J-H)_2MASS
K_WIRcam = K_2MASS + 0.058 * (H-K)_2MASS
</pre>
