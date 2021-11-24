---
layout: cadc
lang: en
permalink: /en/hst/cos_filenames.html
title: HST COS Filenames
altLangPage: /fr/hst/cos_fichiers.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23

signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
  <h1 id="wb-cont" class="wb-invisible">Hubble Space Telescope COS filenames</h1>
  <h2 class="align-center">COS filenames</h2>
              


<p class="color-attention">Note: The COS files names are all starting with the letter 'L'</p>
<p class="color-attention">Note: The 9th character of an association of simple observation is always '0' at CADC  </p>
<p class="color-attention">Note: Please consult the full documentation <a rel="external" href="http://www.stsci.edu/hst/cos/documents/handbooks/current/cos_cover.html" class="ui-link">Here</a></p>

<p>
COS data utilizes a modified naming convention from other HST
instruments. In, particular COS FUV files can have TWO suffixes. The
first suffix identifies the filetype and the second suffix if present
identifies the FUV detector segment. For the remainder of this document
the use of "suffix" will refer to the first suffix which identifies
the filetype and will always include filetypes with the additional FUV
segment suffix if they exist.
</p>

<table class="table">

   <tbody><tr>
   <th id="a">CADC file names</th>
   <th id="b">File Suffix</th>
   <th id="c">Description</th>
   <th id="d">Units</th>
   <th id="f">Type</th>
   <th id="e">Access Example</th>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_rawaccum.fits</td>
   <td headers="b"> _RAWACCUM.FITS </td>
   <td headers="c">Raw NUV ACCUM image</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_rawaccum.fits" class="ui-link">la8p01frq_rawaccum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">Association file</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_asn.fits" class="ui-link">lb2a13030_asn.fits</a></td>
   </tr>


   <tr>
   <td headers="a">lxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trailer file with a historical record of generic conversion processing</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_trl.fits" class="ui-link">lb2a13zgq_trl.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Support, planning and telemetry information</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_spt.fits" class="ui-link">lb2a13zgq_spt.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_rawtag_a.fits<br>lxxxxxxx_rawtag_b.fits</td>
   <td headers="b">_RAWTAG_A.FITS<br>_RAWTAG_B.FITS</td>
   <td headers="c">Raw FUV ACCUM image</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_rawtag_a.fits" class="ui-link">lb2a13zgq_rawtag_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_corrtag_a.fits<br>lxxxxxxx_corrtag_b.fits</td>
   <td headers="b">_CORRTAG_A.FITS<br>_CORRTAG_B.FITS</td>
   <td headers="c">FUV TIME-TAG events list with calibrated values</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_corrtag_a.fits" class="ui-link">lb2a13zgq_corrtag_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_corrtag.fits</td>
   <td headers="b">_CORRTAG.FITS</td>
   <td headers="c">NUV TIME-TAG events list with calibrated values</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_corrtag.fits" class="ui-link">la8p01frq_corrtag.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">NUV flat-fielded science image</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_rawaccum.fits" class="ui-link">la8p01frq_rawaccum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_flt_a.fits<br>lxxxxxxx_flt_b.fits</td>
   <td headers="b">_FLT_A.FITS<br>_FLT_B.FITS</td>
   <td headers="c">FUV flat-fielded science image</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_flt_a.fits" class="ui-link">lb2a13zgq_flt_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_fltsum.fits</td>
   <td headers="b">_FLTSUM.FITS</td>
   <td headers="c">Summed flat-fielded image (imaging only). Final calibrated association product for all COS imaging datasets</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p011p0_fltsum.fits" class="ui-link">la8p011p0_fltsum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_lampflash.fits</td>
   <td headers="b">_LAMPFLASH.FITS</td>
   <td headers="c">1-D extracted TAGFLASH (FLASH=yes) spectra</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_lampflash.fits" class="ui-link">lb2a13zgq_lampflash.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1dsum3.fits</td>
   <td headers="b">_X1DSUM3.FITS</td>
   <td headers="c">Averaged 1-D extracted spectra for multiple exposures with the same grating, central wavelength, aperture and FP-POS="n"</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_x1dsum3.fits" class="ui-link">lb2a13030_x1dsum3.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1dsum.fits</td>
   <td headers="b">_X1DSUM.FITS</td>
   <td headers="c">Final combined 1-D extracted spectra for multiple exposures with the same grating, central wavelength and aperture combining all FP-POS. Final calibrated association product for all COS spectroscopic datasets.</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_x1dsum.fits" class="ui-link">lb2a13030_x1dsum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1d.fits</td>
   <td headers="b">_X1D.FITS</td>
   <td headers="c">1-D extracted spectra for a single exposure</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_x1d.fits" class="ui-link">lb2a13zgq_x1d.fits</a></td>
   </tr>


</tbody></table>


</div>