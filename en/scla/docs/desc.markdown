---
layout: cadc
lang: en
permalink: /en/scla/docs/desc.html
title: Data Description
altLangPage: /fr/scla/docs/desc.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /en/scla/
      title: SCLA
---

<h2>Individual images</h2>
<p>
    Each exposure is available as a multi-extension FITS file
    containing all 10 CCDs. The images are fully detrended.  The
    astrometric calibration is expressed in the header using the CD
    matrix and PV distortion keywords. The photometric calibration is
    described using the PHOTZP keyword. PHOTZP is the zero-point,
    including exposure time and extinction corrections. The
    photometric calibration is slightly different for each CCD.
</p>
<p>
    There is an associcated weight image for each image, which has the
    value 1 or 0, depending on whether the pixel is usable.  The
    masked pixels (value=0) include bad columns, hot pixels, areas
    covered by the auto-guider and cosmic rays.
</p>

<h2>Stacked images</h2>
<p>
    The images are simple FITS files (not multi-extension FITS files)
    measuring about 10000 pixels by 10000 pixels (0.5 degrees by 0.5
    degrees) in the case of the tiles and varying size (depending on
    the dither pattern) in the case of grouped images.  They have a
    sky level of 0 counts. They are scaled to have a photometric
    zero-point of 30.000 in AB magnitudes. That is to say, for each
    source:
</p>
<pre><code>AB_magnitude = -2.5 * log10(ADU) + 30.000</code></pre>
<p>
    Each stack has an associated weight image.  These are delivered
    with in a <a rel="external"
    href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/compression.html">compressed
    format</a>. To decompress them, use <a rel="external"
    href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/cexamples.html">CFITSIO's
    <code>imcopy</code></a>. For example:
</p>
<pre>imcopy G002.003.844+33.133.G.weight.fits.fz G002.003.844+33.133.G.weight.fits</pre>

<p>
    The values of a weight map pixel is proportional to the inverse of
    the variance of that pixel in the main image.
</p>

<h2>Raw images</h2>
<p>
  The original raw images are not available from the CADC.  Raw
  Suprime-Cam CCD frames can be retrieved from either <a href="https://stars.naoj.org" rel="external">STARS</a>) (Subaru
  Telescope ARchive System) for observers or <a href="https://smoka.nao.ac.jp" rel="external">SMOKA</a> (public science
  data archive by ADC, NAOJ) for general archive users.
</p>
