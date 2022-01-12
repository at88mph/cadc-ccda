---
layout: cadc
lang: en
permalink: /en/megapipe/cfhtls/psf.html
title: Point Spread Functions
altLangPage: /fr/megapipe/cfhtls/psf.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/cfhtls/index.html
      title: CFHTLS
---
<p>
    This page describes the CFHTLS point spread function (PSF)
    service, how to access the service and how the PSFs were
    generated. The PSFs are available for both the Deep and Wide
    fields. Two sets of PSFs were generated, one set with DAOphot the
    other with PSFex.
</p>
<h2>How to access the PSF service</h2>
<p>
    The PSF service is intended to deliver PSF postage stamps relevant to
    a single location on a particular CFHTLS image. So far, the primary usage
    has been to model galaxy surface brightness profiles in batch
    mode. The URLs have the format:
</p>
<pre>
  https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=[image.fits]&amp;x=[x-pixel]&amp;y=[y-pixel]
</pre>
<p>
    For example, to get the PSF for the g-band image for the W1-1-1
    field at position x=12000, y=8000 the URL would be:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000</a>
</p>
<p>
    Remember that most browsers convert the plus character (+) into a
    space (&nbsp;).  Encode the plus character as "%2B". For example,
    for the W1+1+1 field, the URL would be:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1%2B1%2B1.G.fits&amp;x=12000&amp;y=8000">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1%2B1%2B1.G.fits&amp;x=12000&amp;y=8000</a>
</p>
<p>
    Typical usage is not via the browser, but via wget or curl. For example:
</p>
<pre>
  wget -O W1-1-1.G.12000.8000.fits 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fitss&amp;x=12000&amp;y=8000'
</pre>
<p>
    By default, the PSF service delivers a PSFs generated with
    DAOphot. To obtain PSFs generated with psfex, add "&amp;psfex=true" to
    the URLs above. For example:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000&amp;psfex=true">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cadcbin/megapipe/mkpsf.pl?image=W1-1-1.G.fits&amp;x=12000&amp;y=8000&amp;psfex=true</a>
</p>
<p>
    The PSFs are delivered as 31x31 pixel FITS images with the PSF
    centred on pixel (16,16).
</p>
<p>
    You can download the .psf file produced by DAOphot directly from URLs like:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W1-1-1.G.psf">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/W1-1-1.G.psf</a>
</p>
<p>
    or you can download the .psf file produced by PSFex with URLs like:
</p>
<p>
  <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/psfex.W1-1-1.G.psf">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/psfex.W1-1-1.G.psf</a>
</p>
<h2>How the PSFs were generated</h2>
<h3>DAOphot:</h3>
<p>
    The PSFs are generated with the standalone version of
    DAOphot. SExtractor and DAOphot are used to select PSF
    stars. SExtractor is run on the image. Stars are identified by
    comparing the 2-arcsecond aperture magnitude to the 3-arcsecond
    aperture magnitude.  Stars form a well defined locus in this
    parameter. Stars near other bright objects are discarded. Here, near
    means within 40 pixels and bright means brighter than 4 magnitudes
    fainter than the star in question. A second list of PSF stars is
    compiled using the routines find and pick. Only stars in both the
    SExtractor and DAOphot lists are used.  The DAOphot routine psf is
    then used to generate the PSF.
</p>
<p>
    The gain and readout noise are set using the effective gain and
    readout noise. The fitting radius is set to 1.5 times the average
    FWHM of the image.  The PSF radius is set to 15. A bivariate
    Gaussian model with a correction look-up table is used. The PSF is
    allowed to vary across the field with second order variations.
</p>
<p>
    Two passes are made. After the first pass, the images are searched
    for second sources lying in the wings of the PSF stars. These PSF
    stars are removed from the list and the PSF is recomputed in the
    second pass.
</p>
<p>
    Diagnostic images comprised entirely of postage stamps of the PSF
    star are generated an examined by eye. The images show 3 panels:
    the original PSF stars and the residuals after the first and
    second passes. For each CFHTLS image, two diagnostic images are
    generated. One shows the PSF star postage stamps arranged by
    magnitude, brightest to faintest, the other shows the PSF stars
    arranged by approximate location on the original CFHTLS image. The
    diagnostic images are visually examined for systematic variations
    of the PSF residuals as function of magnitude and position.
</p>
<p>
    Compared to DAOphot, PSFex has far fewer parameters to be
    adjusted. SExtractor version 2.5.0 was run on the images to extract
    vignettes around each source. PSFex version 3.9.1 was run on the
    resulting LDAC catalog. The PSF varies with x and y as a third
    order polynomial. The PSF is not over-sampled. The <a href="/static/files/megapipe/cfhtls_psf.psfc">PSFex configuration file</a> is available. The FWHM and ellipticity
    diagnostic plots and the residual image were examined for
    irregularities.
</p>
