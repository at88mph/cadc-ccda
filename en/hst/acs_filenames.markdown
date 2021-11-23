---
layout: cadc
lang: en
permalink: /en/hst/acs_filenames.html
title: HST ACS Filenames
altLangPage: /fr/hst/acs_fichiers.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Hubble Space Telescope ACS filenames</h1>
 <h2 class="align-center">ACS filenames</h2>
              


<p class="color-attention">Note: The ACS files names are all starting with the letter 'J'</p>
<p class="color-attention">Note: The 9th character of an association of simple observation is always '0' at CADC  </p>
<p class="color-attention">Note: Please consult the full documentation <a rel="external" href="http://www.stsci.edu/hst/acs/documents/handbooks/current/cover.html" class="ui-link">Here</a></p>

<h2>For a unique observation</h2>
<table class="table">
   <tbody><tr>
   <th id="a"> CADC file names (proxy) </th>
   <th id="b">File Suffix</th>
   <th id="c">Description</th>
   <th id="d">Units</th>
   <th id="f">Type</th>
   <th id="e">Access Example</th>
   </tr>

   <tr>
   <td headers="a">jxxxxxxxx_raw.fits</td>
   <td headers="b">_RAW.FITS</td>
   <td headers="c">Raw data</td>
   <td headers="d">DN</td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_raw.fits" class="ui-link">j8c032xuq_raw.fits</a></td>
   </tr>

   <tr>
   <td headers="a">jxxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Telemetry and engineering data</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_spt.fits" class="ui-link">j8c032xuq_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trailer File with processing comments</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_trl.fits" class="ui-link">j8c032xuq_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">Calibrated, Flat fielded individual exposure</td>
   <td headers="d">electrons </td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_flt.fits" class="ui-link">j8c032xuq_flt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flt_hlet.fits</td>
   <td headers="b">_FLT_HLET.FITS</td>
   <td headers="c">Headerlet file for geometric distorsion mapping</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_flt_hlet.fits" class="ui-link">j8c032xuq_flt_hlet.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flc.fits</td>
   <td headers="b">_FLC.FITS</td>
   <td headers="c">Calibrated, Flat fielded individual exposure, CTE corrected</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j8c032xuq_flc.fits" class="ui-link">j8c032xuq_flc.fits</a></td>
   </tr>

</tbody></table>

<h2>For a composite observation (9th character is '0')</h2>
<table class="table">
   <tbody><tr>
   <th id="a">CADC file names (proxy)</th>
   <th id="b">File Suffix</th>
   <th id="c">Description</th>
   <th id="d">Units</th>
   <th id="f">Type</th>
   <th id="e">Access Example</th>
   </tr>
   <tr>
   <td headers="a">j6fl5c030_asn.fits</td>
   <td headers="b">_ASN</td>
   <td headers="c">Association file for observation set</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/pub/HST/product/j6fl5c030_asn.fits" class="ui-link">j6fl5c030_asn.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Telemetry and engineering data</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j6fl5c030_spt.fits" class="ui-link">j6fl5c030_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trailer File with processing comments</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j6fl5c030_trl.fits" class="ui-link">j6fl5c030_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxx0_drz.fits</td>
   <td headers="b">_DRZ</td>
   <td headers="c">Calibrated, Geometrically Corrected, Dither-Combined image</td>
   <td headers="d">electrons/sec</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j6fl5c030_drz.fits" class="ui-link">j6fl5c030_drz.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxx0_drc.fits</td>
   <td headers="b">_DRC</td>
   <td headers="c">Calibrated, Geometrically Corrected, Dither-Combined image, CTE corrected</td>
   <td headers="d">electrons/sec</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/pub/HST/product/j6fl5c030_drc.fits" class="ui-link">j6fl5c030_drc.fits</a></td>
   </tr>

</tbody></table>

<p class="color-attention">
General access method: <a href="/pub/HST/product/j8c032xuq_drz.fits" class="ui-link">/pub/HST/product/j8c032xuq_drz.fits</a>
</p>


</div>
