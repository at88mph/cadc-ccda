---
layout: cadc
lang: en
permalink: /en/hst/nicmos_filenames
title: Hubble Space Telescope
altLangPage: /fr/hst/nicmos_fichiers
headerimage: /static/images/hst.jpg
dateModified: 2021-11-01
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Hubble Space Telescope NICMOS filenames</h1>
 <h2 class="align-center">NICMOS filenames</h2>
              


<p class="color-attention">Note: The NICMOS files names are all starting with the letter 'N'</p>
<p class="color-attention">Note: The 9th character of an association of simple observation is always '0' at CADC  </p>
<p class="color-attention">Note: Please consult the full documentation <a rel="external" href="http://www.stsci.edu/hst/nicmos/documents/handbooks/current_NEW/cover.html" class="ui-link">Here</a></p>

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
   <td headers="a">nxxxxxxxx_jif.fits</td>
   <td headers="b">_JIF.FITS</td>
   <td headers="c">This FITS file contains the raw image data received from the spacecraft. One file per exposure is created (a MULTIACCUM exposure is considered a single exposure irrespective of the number of samples specified).</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_jif.fits" class="ui-link">n4rk020b0_jif.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">This FITS file contains supporting information about the observation, the spacecraft telemetry and engineering data from the instrument that was recorded at the time of the observation, including detector temperature measurements.</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_spt.fits" class="ui-link">n4rk020b0_spt.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">This file is a FITS binary table that contains the list of datasets making up an association.</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_asn.fits" class="ui-link">n4rk020b0_asn.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_mos.fits</td>
   <td headers="b">_MOS.FITS</td>
   <td headers="c">These FITS files contain the composite target and, for chopped pattern sequences, background region images constructed by the pipeline task calnicb for an associated set of observations. The input to calnicb are the calibrated _cal images from calnica and the _asn association table. Target images are co-added and background-subtracted. The value of the last character of the rootname is 0 for targets, and 1 to 8 for background images. These files are only produced for an associated set of observations.</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_mos.fits" class="ui-link">n4rk020b0_mos.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_asc.fits</td>
   <td headers="b">_ASC.FITS</td>
   <td headers="c">This table is produced by the pipeline calibration task calnicb, and is the same as the association table _asn, with the addition of new columns which report the offsets between different images of the mosaic or chop pattern as calculated by calnicb, and the background levels computed for each image. This file is only produced for an associated set of observations.</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_asc.fits" class="ui-link">n4rk020b0_asc.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">This FITS ASCII table contains a log of the pipeline calibration processing that was performed on individual datasets and mosaic products.</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_trl.fits" class="ui-link">n4rk020b0_trl.fits</a></td>
   </tr>


</tbody></table>


<p>
The data for an individual NICMOS science readout consist of five arrays,
each stored as a separate image extension in the FITS file. The five
data arrays represent:</p>

<ul>
   <li>The science (SCI) image from the detector.</li>
   <li>An error (ERR) array containing an estimate of the statistical uncertainties (in units of 1) of the science data.</li>
   <li>An array of bit-encoded data quality (DQ) flags representing known status or problem conditions of the science data.</li>
   <li>An array containing the number of data samples (SAMP) that were used to compute each science image pixel value.</li>
   <li>An array containing the effective integration time (TIME) for each science image pixel. </li>
</ul>


</div>