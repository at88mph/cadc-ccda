---
layout: cadc
lang: en
permalink: /en/wirwolf/docs/desc.html
title: Data Description
altLangPage: /fr/wirwolf/docs/desc.html
dateModified: 2021-12-09
signing: layout.signing

nav: wirwolf
breadcrumbs:
    - link: /en/wirwolf/
      title: WIRwolf
---
<h2>Naming Convention</h2>
<p>
    The names start with "GW" (for
    "Group, WIRwolf") followed by a generation number (which is incremented every
    six months), followed by numbers indicating the RA and Dec of the
    group centre. For example: GW002.003.844+33.133 is and older group
    centred on RA=33.133 and Dec=3.844. 
</p>
<p>
    The group names are followed by a character(s) indicating the JHK filter.
</p>
<h2>Images</h2>
<p>
     These are simple FITS files (not multi-extension FITS files)
     measuring about 20000 pixels by 20000 pixels or about 1 degree by
     1 degree, depending on the input dither pattern, and are about
     1.7 Gb in size. They have a sky level of 0 counts. They are
     scaled to have a photometric zero-point of 30.000 in AB
     magnitudes. That is to say, for each source:
</p>
<pre>
AB_magnitude = -2.5 * log10(ADU) + 30.000
</pre>
<p>
    If you need Vega magnitudes, consult the following table, reproduced from the
    <a href="/en/wirwolf/docs/filt.html">WIRCam filter set</a> page.
</p>
<h2>Weight images</h2>
<p>
    These are delivered with in a <a rel="external" href="https://heasarc.gsfc.nasa.gov/docs/software/fitsio/compression.html">compressed format</a>. To uncompress
    them, use <a rel="external" href="https://heasarc.gsfc.nasa.gov/docs/software/fitsio/cexamples.html">CFITSIO's imcopy</a>. For example:
</p>
<pre>
imcopy GW002.003.844+33.133.J.weight.fits.fz GW002.003.844+33.133.J.weight.fits
</pre>
<p>
    The values of a weight map pixel is proportional to the inverse of
    the variance of that pixel in the main image.
</p>
<h2>Catalogues</h2>
<p>
The catalogues have a header describing the columns:
</p>
<pre>
#   1 NUMBER          Running object number
#   2 X_IMAGE         Object position along x                         [pixel]
#   3 Y_IMAGE         Object position along y                         [pixel]
#   4 ALPHA_J2000     Right ascension of barycenter (J2000)           [deg]
#   5 DELTA_J2000     Declination of barycenter (J2000)               [deg]
#   6 MAG_AUTO        Kron-like elliptical aperture magnitude         [mag]
#   7 MAGERR_AUTO     RMS error for AUTO magnitude                    [mag]
#   8 MAG_BEST        Best of MAG_AUTO and MAG_ISOCOR                 [mag]
#   9 MAGERR_BEST     RMS error for MAG_BEST                          [mag]
#  10 MAG_APER        Fixed aperture magnitude vector                 [mag]
#  11 MAGERR_APER     RMS error vector for fixed aperture mag.        [mag]
#  12 A_WORLD         Profile RMS along major axis (world units)      [deg]
#  13 ERRA_WORLD      World RMS position error along major axis       [pixel]
#  14 B_WORLD         Profile RMS along minor axis (world units)      [deg]
#  15 ERRB_WORLD      World RMS position error along minor axis       [pixel]
#  16 THETA_J2000     Position angle (east of north) (J2000)          [deg]
#  17 ERRTHETA_J2000  J2000 error ellipse pos. angle (east of north)  [deg]
#  18 ISOAREA_IMAGE   Isophotal area above Analysis threshold         [pixel**2]
#  19 MU_MAX          Peak surface brightness above background        [mag * arcsec**(-2)]
#  20 FLUX_RADIUS     Fraction-of-light radii                         [pixel]
#  21 FLAGS           Extraction flags
</pre>
<p>
    All magnitudes are on the AB system. The aperture diameter for
    MAG_APER is 6.28 times the FWHM of the image. It should be (on
    average) the same as MAG_AUTO for point sources, as discussed in 
    the <a href="/en/wirwolf/docs/proc.html#photcal">photometry section of the stacking procedure</a>.
</p>
