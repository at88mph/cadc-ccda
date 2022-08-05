---
layout: cadc
lang: en
permalink: /en/hst/wfpc2_filenames.html
title: HST WFPC2 Filenames
altLangPage: /fr/hst/wfpc2_fichiers.html

dateModified: 2021-11-23

signing: layout.signing


nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Hubble Space Telescope WFPC2 filenames</h1>
 <h2 class="align-center">WFPC2 filenames</h2>
              


<p class="color-attention">Note: The WFPC2 files names are all starting with the letter 'U'</p>
<p class="color-attention">Note: Please consult the <a rel="external" href="http://documents.stsci.edu/hst/wfpc2/documents/handbooks/cycle17/wfpc2_cover.html" class="ui-link">full documentation</a>.</p>

<table class="table">
<tbody><tr>
   <th id="a"> CADC file names (proxy) </th>
   <th id="b">File Suffix</th>
   <th id="c">Description</th>
   <th id="d">Units</th>
   <th id="e">Type</th>
   <th id="f">Access Example</th>

   </tr><tr>
   <td headers="a">uxxxxxxxx_d0f.fits<br>uxxxxxxxx_d0m.fits</td>
   <td headers="b">_D0F.FITS<br>_D0M.FITS</td>
   <td headers="c">It contains the WF/PC-II image data with the readout from each CCD detector in each group. Hence from 1 to 4 groups may be present. The d0m is in multiextension format</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_d0f.fits" class="ui-link">u4vc0101r_d0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_q0f.fits</td>
   <td headers="b">_Q0F.FITS</td>
   <td headers="c">The DQF must consist of short integers which indicate the quality of the corresponding pixel in the Science Image file. Zero valued pixels indicate "good" pixels in the Science Image file and nonzero valued pixels flag various problems or potential problems with their corresponding pixels.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_q0f.fits" class="ui-link">u4vc0101r_q0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_x0f.fits<br>uxxxxxxxx_x0m.fits</td>
   <td headers="b">_X0F.FITS<br>_X0M.FITS</td>
   <td headers="c">It contains the two "engineering" column and, for FULL mode, the 12 columns of overclocked pixels. The x0m is in multiextension format</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_x0f.fits" class="ui-link">u4vc0101r_x0f.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_q1f.fits</td>
   <td headers="b">_Q1F.FITS</td>
   <td headers="c">The EED quality file must consist of short integers and have the same
   dimensions and number of groups as the EED file. Each pixel indicates the
   quality of the corresponding pixel in the EED file. Zero valued pixels
   are "good" pixels in the EED file and nonzero valued pixels flag various
   problems or potential problems with their corresponding pixels.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_q1f.fits" class="ui-link">u4vc0101r_q1f.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_shf.fits</td>
   <td headers="b">_SHF.FITS</td>
   <td headers="c">Telemetry values and spacecraft operation data. This file is not currently used by CALWP2.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_shf.fits" class="ui-link">u4vc0101r_shf.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_pdq.fits</td>
   <td headers="b">_PDQ.FITS</td>
   <td headers="c">Text file containing jitter statistics and other data quality information</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_pdq.fits" class="ui-link">u4vc0101r_pdq.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_c0f.fits<br>uxxxxxxxx_c0m.fits</td>
   <td headers="b">_C0F.FITS<br>_C0M.FITS</td>
   <td headers="c">It is in REAL format (although an option is available to provide FITS-like scaling to SHORT or LONG integers). Extreme values resulting from input data values outside of the range of the WF/PC-II AtoD converter (0 to 4095) are edited to limit the range of values in the output image. These pixels are set to the value of the keyword RSDPFILL and flagged in the DQF. The c0m is in multiextension format</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_c0f.fits" class="ui-link">u4vc0101r_c0f.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_c1f.fits<br>uxxxxxxxx_c1m.fits</td>
   <td headers="b">_C1F.FITS<br>_C1M.FITS</td>
   <td headers="c">The DQF for the Calibrated Science Image file follows the same conventions as the Science Image Data Quality file. This contains the result of bitwise ORing, the input DQF, and all DQFs associated with reference files used in the processing of the Science Image file. The c1m is in multiextension format</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_c1f.fits" class="ui-link">u4vc0101r_c1f.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_drz.fits</td>
   <td headers="b">_DRZ.FITS</td>
   <td headers="c">Multidrizzled calibrated science image file at WF scale</td>
   <td headers="d"><br></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_drz.fits" class="ui-link">u4vc0101r_drz.fits</a> </td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_drzpc.fits</td>
   <td headers="b">_DRZPC.FITS</td>
   <td headers="c">Multidrizzled calibrated science image for the PC chip only</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_drzpc.fits" class="ui-link">u4vc0101r_drzpc.fits</a></td>
   </tr>
   
   <tr>
   <td headers="a">uxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trailer file is a log file for the raw production step</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_trl.fits" class="ui-link">u4vc0101r_trl.fits</a></td>
   </tr>


</tbody></table>


</div>