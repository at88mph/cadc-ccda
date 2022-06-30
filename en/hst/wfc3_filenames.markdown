---
layout: cadc
lang: en
permalink: /en/hst/wfc3_filenames.html
title: HST WFC3 Filenames
altLangPage: /fr/hst/wfc3_fichiers.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23

signing: layout.signing


nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
   <h1 id="wb-cont" class="wb-invisible">Hubble Space Telescope WFC3 filenames</h1>
   <h2 class="align-center">WFC3 filenames</h2>
              

<p class="color-attention">Note: The WFC3 files names are all starting with the letter 'I'</p>
<p class="color-attention">Note: The 9th character of an association of simple observation is always '0' at CADC</p>
<p class="color-attention">Note: Please consult the <a rel="external" href="http://www.stsci.edu/hst/wfc3/documents/handbooks/currentIHB/wfc3_cover.html" class="ui-link">full documentation</a>.</p>

<p class="color-attention">The suffixes used for WFC3 raw and calibrated data products are described in the following and closely mimic those used by ACS and NICMOS.</p>

<h2>For a unique observation</h2>
<table class="table">
   <thead>
      <tr>
         <th id="a"> CADC file names (proxy) </th>
         <th id="b">File Suffix</th>
         <th id="c">Description</th>
         <th id="d">Units</th>
         <th id="f">Type</th>
         <th id="e">Access Example</th>
      </tr>
   </thead>
   <tbody>
   <tr>
   <td headers="a">ixxxxxxxx_raw.fits</td>
   <td headers="b">_RAW.FITS</td>
   <td headers="c">Raw data</td>
   <td headers="d">DN </td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_raw.fits" class="ui-link">i9zl53i0q_raw.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Telescope and WFC3 telemetry and engineering data</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_spt.fits" class="ui-link">i9zl53i0q_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_trl.fits</td>
   <td headers="b">_RAW.FITS</td>
   <td headers="c">Trailer file with processing log</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_trl.fits" class="ui-link">i9zl53i0q_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">Calibrated, flat-fielded individual exposure</td>
   <td headers="d">electrons (UVIS) / electrons/s (IR)</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_flt.fits" class="ui-link">i9zl53i0q_flt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_flt_hlet.fits</td>
   <td headers="b">_FLT_HLET.FITS</td>
   <td headers="c">Headerlet header for mapping geometric distorsion</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_flt_hlet.fits" class="ui-link">i9zl53i0q_flt_hlet.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_ima.fits</td>
   <td headers="b">_IMA.FITS</td>
   <td headers="c">Calibrated intermediate MultiAccum IR exposure</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl53i0q_ima.fits" class="ui-link">i9zl53i0q_ima.fits</a></td>
   </tr>
</tbody></table>

<h2>For a composite observation (9th character is '0')</h2>
<table class="table">
   <thead><tr>
   <th id="a"> CADC file names (proxy) </th>
   <th id="b">File Suffix</th>
   <th id="c">Description</th>
   <th id="d">Units</th>
   <th id="f">Type</th>
   <th id="e">Access Example</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td headers="a">ixxxxxxx0_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">Association file for observation set</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl45010_asn.fits" class="ui-link">i9zl45010_asn.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxx0_drz.fits</td>
   <td headers="b">_DRZ.FITS</td>
   <td headers="c">Calibrated, geometrically-corrected, dither-combined image</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/i9zl45010_drz.fits" class="ui-link">i9zl45010_drz.fits</a></td>
   </tr>
</tbody>
</table>

<p class="color-attention">
For more details, please consult the <a rel="external" href="http://www.stsci.edu/hst/wfc3/documents/handbooks/currentDHB/wfc3_cover.html" class="ui-link">WFC3 instrument handbook at STScI.</a>
</p>


</div>