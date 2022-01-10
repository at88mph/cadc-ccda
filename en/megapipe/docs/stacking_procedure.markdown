---
layout: cadc
lang: en
permalink: /en/megapipe/docs/proc.html
title: Stacking Procedure
altLangPage: /fr/megapipe/docs/proc.html
dateModified: 2021-12-08

signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
---

<p>
  This page describes the procedures used to generate the
  stacked images and catalogues for the MegaCam image stacking pipeline.
  In short, the procedure is to calibrate each CCD from each exposure of
  the <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime/">MegaCam
    mosaic camera</a> to high precision astrometrically and
  photometrically, and then add the images together.
</p>
<ul>
  <li><a href="#groups">Image grouping</a></li>
  <li><a href="#quality">Quality control</a></li>
  <li><a href="#astcal">Astrometric calibration</a></li>
  <li><a href="#photcal">Photometric calibration</a></li>
  <li><a href="#coadd">Coaddition</a></li>
  <li><a href="#photcat">Photometric catalogue</a></li>
</ul>

<h2 id="groups">Image grouping</h2>
  <p>
    The images are grouped according to the following criteria:
  </p>
  <ul>
    <li>The centres of the images in a group must be at most 0.1 degrees apart.</li>
    <li>There must be at least 4 images taken in a single filter. </li>
    <li>Images taken in other filters are included in the group if there
      are more than 4 images taken in each filter.</li>
  </ul>
  <p>
    Each image in a group must
  </p>
  <ul>
    <li>have an exposure time of 50 seconds or more.
This is so that there are enough objects to do the calibration
    </li>
    <li>be photometrically calibratable.
    This means the image must meet one of the following criteria:
      <ul>
        <li>It lies within the <a rel="external" href="https://www.sdss.org">SDSS</a>, and thus may be directly
          calibrated</li>
        <li>It was taken on a photometric night, so that the Elixir photometric
          calibration is valid</li>
        <li>It overlaps an image that is calibratable by one of the preceding methods</li>
      </ul>
    </li>
    <li>Be public, as defined by the <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Queue/#prop">CFHT
  propritary policy period</a>.
    </li>
    <li>
Be free from major problems that preclude good calibration
as discussed in the following section.
    </li>
  </ul>
  <h2 id="quality">Quality control</h2>
  <p>
    The data are retrieved from the CADC archive.  
    The images have already been detrended with the
    <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/">Elixir
    pipeline</a>.  The images come with a fairly accurate (0.5-1.0
    arcsecond) astrometric solution and a photometric calibration.
    One CCD of each exposure is inspected visually.  Exposures with
    obviously asymmetric PSF's (due to loss of telescope tracking) or
    other major defects such as terrible seeing, bad focus, or poor
    atmospherique transparency are discarded.  In some images, one or
    more of the CCD's in the mosaic are dead. These images are also
    discarded.
  </p>
<h2 id="astcal">Astrometric calibration</h2>
<p>
    The AstroGwyn astrometric calibration pipeline is run on the
    images.  The first step is to run <a rel="external" href="https://www.astromatic.net/software/sextractor">SExtractor</a> on
    each image.  The parameters are set so as to extract only the most
    reliable objects (5 sigma detections in at least 5 pixels).  This
    catalogue is further cleaned of cosmic rays and extended
    objects. This leaves only real objects with well defined centres:
    stars and (to some degree) compact galaxies.
</p>
<p>
  This observed catalogue is matched to the astrometric reference
  catalogue.  
  The (x,y) coordinates of the observed catalogue are
  converted to (RA, Dec) using the initial Elixir WCS.  The catalogues
  are shifted in RA and Dec with respect to one another until the best
  match between the two catalogues is found. If there is no good match
  for a particular CCD (for example when the initial WCS is 
  erroneous), its WCS is replaced with a default WCS and the matching
  procedure is restarted. Once the matching is complete, the
  astrometric fitting can begin. Typically 20 to 50 sources per CCD
  are found with this initial matching.
</p>
<p>
    Elixir provides a first order solution for the WCS with typical
    errors on the order of 1 arcsecond.  AstroGwyn improves on this to
    provide a higher order solution with an accuracy of typically 0.1
    arcseconds.  As the accuracy of the WCS improves, the observed and
    reference catalogues are compared again to increase the number of
    matching sources. A larger number of matching sources makes the
    astrometric solution more robust against possible errors (proper
    motions, spurious detections, etc.)  in either catalogue.
</p>
<p>
    The higher order terms are determined on the scale of the entire
    mosaic. That is to say, the distortion of the entire focal plane is
    measured.  This distortion is well described by a polynomial with
    second and fourth order terms in radius measured from the centre of
    the mosaic.  The distortion appears to be stable over time, even when
    some of the MegaPrime optics are flipped.  Determining the distortion
    in this way means that only 2 parameters need to be determined (the
    coefficients of r<sup>2</sup> and r<sup>4</sup>) with typically (20-50
    stars per chip) * (36 chips) =~ 1000 observations. If the analysis is
    done chip-by-chip, a third order solution requires (20 parameters per
    chip)*(36 chips)= 720 parameters. This is less satisfactory.
</p>
<p>
    From the global distortion, the distortion local to each CCD is
    determined.  The local distortion is translated into a linear part
    (described by the CD matrix) and a higher order part (described by
    the PV keywords). The <a href="/static/files/megapipe/CD_PV_keywords.pdf">CD/PV
    transformation</a> was described in detail in an appendix that was
    removed from first draft of <a rel="external" href="https://adsabs.harvard.edu/abs/2008PASP..120..212G">the MegaPipe paper</a>.
    The higher order part is 3rd order as well, but the coefficients
    depend directly and uniquely on the 2 parameter global radial
    distortion. The error introduced by this translation is less than
    0.001 arcseconds.  
</p>
<p> 
    For the first band to be reduced (the <em>i</em>-band, if it
    exists, otherwise the order of preference is <em>r, g, z, u</em>),
    these source catalogues are matched with the an external
    astrometric catalogue to provide the initial astrometric solution.
    If available, the <a rel="external" href="https://www.sdss.org">SDSS catalogue</a> is used, otherwise
    the <a rel="external" href="https://www.ipac.caltech.edu/2mass/">2MASS catalog</a> is
    used.
</p>
<p> 
    For the other bands, the observed catalogues are first matched to
    the external catalogue and then matched to a catalogue generated
    using the first image in order to precisely register the images in
    the different bands.  The final astrometric calibration has an
    internal uncertainty of about 0.03 arcseconds and an external
    uncertainty of about 0.1 arcseconds, as
    discussed on the <a href="/en/megapipe/docs/astro.html">checks on astrometry</a> page.
</p>
<h2 id="photcal">Photometric calibration</h2>
<p>
    The <a rel="external" href="https://www.sdss3.org/dr9/">Sloan Digital Sky Survey DR9</a> serves
    as the basis of the photometric calibration.
    The Sloan ugriz filters are not identical to the <a href="filt.html">MegaCam filters</a>.
    The colour terms between the two filter sets
    can be described by the following equations:
</p>
<pre>
  u_Mega = u_SDSS - 0.241 (u_SDSS - g_SDSS)
  g_Mega = g_SDSS - 0.153 (g_SDSS - r_SDSS)
  r_Mega = r_SDSS - 0.024 (g_SDSS - r_SDSS)
  i_Mega = i_SDSS - 0.085 (r_SDSS - i_SDSS)
  z_Mega = z_SDSS + 0.074 (i_SDSS - z_SDSS)
</pre>
<p>
    The relations for the griz bands come from the analysis of the
    <a rel="external" href="https://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">SNLS group.</a>
    The relation for the u band comes from the 
    <a  rel="external" href="https://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">CFHT web pages.</a>
</p>
<p>
All images lying in the SDSS can be directly calibrated without
referring to other standard stars such
as <a href="https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2002AJ....123.2121S" rel="external">Smith standards</a>. The systematic uncertainties in the SDSS
photometry are about 0.02 magnitudes
(<a href="https://xxx.lanl.gov/pdf/astro-ph/0410195" rel="external">Ivezic, et al., 2004</a>).
The presence of at least 1000 usable sources in each
square degree reduces the random error to effectively zero. It is
possible to calibrate the individual CCDs of the mosaic individually
with about 30 standards in each. 
</p>
<p>
For each MegaCam image, the observed 
catalogue is matched to the SDSS catalogue for that patch
of sky.
</p>
<p>
 The difference between the instrumental MegaCam magnitudes
and the SDSS magnitudes (transferred to MegaCam system using the equations
above) gives the zero-point for that exposure
or that CCD. The zero-point is determined by median, not mean.
There are about 10000 SDSS sources per square degree, but
when one cuts by stellarity and magnitude this number drops to
around 1000.
It is best to only use the stars (the above colour
terms are more appropriate to stars than galaxies) and to only use the objects
with 17&lt;mag&lt;20 (the brighter objects are usually saturated
in the MegaCam image and including the fainter objects 
only increases the noise in the median).
This process can used for data from any night. It is not necessary for the
night to be photometric.
</p>
<p>
    For objects outside the SDSS, the Elixir photometric keywords are
    used, with modifications.  The Elixir zero-points were compared to
    those determined from the SDSS using the procedure above for a large
    number of images. There are systematic offsets between the two sets of
    zero-points, particularly for the <em>u</em> band. These offsets show
    variations with epoch, which are caused by modifications to Elixir
    pipeline.  There also differential offsets between the CCDs of a
    single image.  For MegaPipe, the offsets are applied from the Elixir
    zero-points to bring them in line with the SDSS zero-points.  A
    <a href="elixphot.html">detailed analysis of these offsets</a> has been made.
</p>
<p>
    The Elixir photometric keywords are only valid on photometric
    nights.  Archival data from the <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/skyprobe/home.html">SkyProbe</a>
    real-time sky-transparency monitor is used to determine if a night
    was photometric or not.  Data taken on photometric nights is
    processed first through the astrometric and photometric pipelines
    to generate a catalogue of in-field standards. These standards are
    then used to calibrate any non-photometric data in a group. If
    none of the exposures in a group was taken on a photometric night,
    that group cannot be processed.
</p>
<h2 id="coadd">Coaddition</h2>
<p>
  The calibrated images were coadded using the program
  <a rel="external" href="https://www.astromatic.net/software/swarp">SWarp</a>. Here
  is the <a href="/static/files/megapipe/megapipe.swarp">SWarp configuration file</a>.
  The resulting stacks are simple FITS files
  (not multi-extension FITS files) measuring about 20000 pixels by 20000 pixels
  or about 1 degree by 1 degree, depending on the input dither pattern,
  and are about 1.7 Gb in size.
  They have a sky level of 0 ADU. They are scaled to have a photometric
  zero-point of 30.000 in AB magnitudes - that is to say, for each source:
</p>
<pre>
  AB_magnitude = -2.5 * log10(ADU) + 30.000
</pre>
<p>
  A weight map (inverse variance) of the same size is also produced. 
</p>
<h2 id="photcat">Photometric catalogue</h2>
<p>
  SExtractor is run on each stack using the weight map.
  Here is the <a href="/static/files/megapipe/megapipe.sex">SExtractor configuration file</a>.
  The resulting catalogues only pertain to a single band image; no
  multi-band catalogues have been generated.
  While this fairly simple approach works well in many cases,
  it is probably not optimal in some situations.
  Depending on the application,
  some users may wish to run their own catalogue generation
  software on the stacks.
</p>
