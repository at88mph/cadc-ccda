---
layout: cadc
lang: en
permalink: /en/scla/docs/proc.html
title: Processing Pipeline
altLangPage: /fr/scla/docs/proc.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /en/scla/
      title: SCLA
---
<p>The pipeline can be broken down into the following steps:</p>

<ul>
  <li><a href="#select">Image selection</a></li>
  <li><a href="#detrend">Detrending with SDFRED</a></li>
  <li><a href="#astro">Astrometric calibration with GAIA</a></li>
  <li><a href="#photo">Photometric calibration with Pan-STARRS</a></li>
  <li><a href="#stacking">Stacking with SWarp</a></li>
</ul>

<h3 id="select">Image selection</h3>
<p>
    While the majority of the Suprime-Cam archive was processed by the
    SCLA, some images could not be processed. Images with obvious defects
    including bad tracking, electronic issues with the readout of one or
    more of the chips, odd illumination patterns caused by a nearby
    bright object, or bad seeing were rejected.
</p>
<p>
    For some filters, the filter transmission function were not
    available at the time of processing; these data could not be
    photometrically calibrated.  Most of the narrow band filters
    (except N-A-L656, N-B-L711, N-B-816 and N-B-L921) are in this
    category.
</p>
<p>
    For several images, the astrometric calibration failed. In some
    cases, this was due to a lack of usuable point sources, either because
    of a nebula or bright, extended galaxy in the image, or due to a
    short exposure time. Occasionally, the star-matching algorithm
    became confused, particularly in crowded fields. This last problem
    was exacerbated by the fact that many of the Suprime-Cam images are
    much deeper than the astrometric reference catalog from GAIA.
</p>

<h3 id="detrend">Detrending with SDFRED</h3>
<p>
    The individual images are retrieved from the STARS archive and
    stored in the CADC VOspace. The basic detrending is done using
    the
    <a rel="external"
      href="https://www.subarutelescope.org/Observing/Instruments/SCam/sdfred/sdfred2.html.en">sdfred
    tools</a> provided by Subaru.  The basic recipe prescribed by the
    sdfred user manual was followed, although wrapper scripts are used
    to automate the process. The data was grouped by observing run, and
    the different calibration products (biases, darks, flat-fields)
    built per run. In some cases this was not possible, because the
    relevant calibration images hadn't been taken, in which case
    calibration products from the previous or subsquent runs were used.
</p>
<p>
    Bias and dark frames were built using the standard recipe. For
    the flat-fields, three kinds were generated, in increasing order
    of preference: dome, twilight and night-sky. The last type, object
    flats, are built using the science images themselves. While
    testing has shown that the object flats are superiour in terms
    of photometric flatness and depth, there are not always a
    sufficient number of images taken during a run, in which case
    twilight or dome flats were used.
</p>
<p>
    The masking of the auto-guider shade was applied.
</p>
<p>
    The Suprime-Cam detectors were changed in 2008, with a
    corresponding change in SDFRED version.
</p>
  
<h3 id="astro">Astrometric calibration with GAIA</h3>
<p>
    The astrometric calibration uses GAIA DR2 as the reference. Each
    image is calibrated in two stages. The first stage operates
    chip-by-chip and models the distortion as a 2<sup>nd</sup> order
    polynomial in the chip positions, x and y. In the second stage,
    the distortion is modeled as a 5<sup>th</sup> order polynomial
    in r, the distance from the center of the mosaic, plus a
    1<sup>st</sup> order fit in x and y, equivalent to the CD
    matrix. This distortion fit is done over the entire mosaic
    simultaneously. Doing a global fit in this manner greatly
    reduces the number of parameters necessary. Only (6 parameters /
    chip) &times; 10 chips + 5 = 65 parameters are needed for the
    mosaic. Conversely (20 / chip) &times; 10 chips = 200
    parameters are needed for a 3<sup>rd</sup> order polynomial fit
    in x and y; given that there are typically ~1000 GAIA stars in a
    Suprime-Cam field-of-view for a typical high-galactic latitude
    field, which raises the possibility of over-fitting. The median
    astrometric residuals are 55 mas with respect to GAIA. Although
    the distortion is measured using this radial model, it is
    converted into a polynomial in x and y and stored using the FITS
    PV keywords for compatibility with other software. This software
    that performed this task was adapted from the MegaPipe pipeline.
</p>

<h3 id="photo">Photometric calibration with Pan-STARRS</h3>
<p>
    The photometric calibration is based on the Pan-STARRS DR1
    photometric catalog. The Pan-STARRS grizy photometry is
    converted into the Suprime Cam passbands. The full transmission
    functions of each Suprime-Cam filter is computed, including the
    filter itself, the quantum efficiency of the detectors the
    transmission of the camera, the reflectivity of the primary
    mirror and the transmission of the atmosphere at a nominal
      airmass of 1.25. The transmission functions of the PS1 filters
    are taken from
    <a href="https://ui.adsabs.harvard.edu/abs/2012ApJ...750...99T/abstract"
       rel="external">Tonry et al. (2012).</a>  Standard stellar
    spectra from <a rel="external"
		    href="https://ui.adsabs.harvard.edu/abs/1998PASP..110..863P/abstract">Pickles
      (1998)</a> and <a rel="external"
			href="https://www.stsci.edu/hst/instrumentation/reference-data-for-calibration-and-tools/astronomical-catalogs/calspec">CALSPEC</a>
    are multiplied by the filter transmission functions to
    produce synthetic photometry. This synthetic photometry is
    used to compute a polynomial conversion between the
    Pan-STARRS and Suprime-Cam photometric systems.
</p>
<p>
    This is relatively straightforward for the Suprime-Cam grizy
    passbands; the bands are fairly similar and consequently the color
    terms are fairly small. For the BVRI bands, the color terms are
    larger and typically only valid over a narrow range in color.
</p>
<p>
    The narrow- and intermediate-band filters can also be calibrated
    in this manner, athough again the transformation is valid only
    over a small color range. For a number of filters, the
    transmission functions are no longer available. These data were not
    processed.
</p>
<p>
    The details of the filter curves and transformation are given on
    the <a href="filt.html">Suprime-Cam filter page.</a>
</p>
  
<p>
    For each image, the Pan-STARRS photometry for that patch of sky is
    transformmed into that image's bandpass and used as in-field
    standards. This allows images taken under all conditions to be
    photometrically calibrated. The photometric calibration done in
    this manner is typically good to about 10-20 mmag with respect to
    Pan-STARRS, which itself is calibrated to slightly better than 10
    mmag.
</p>
<p>
    The photometric calibration proceeds in two stages. In the first,
    a relative photometric calibration is applied to correct the
    mosaic to single zero-point. This correction is computed for each
    observing run and applied to each image from that run.
    The second step computes. the global zero-point for the whole mosaic
    taking into acount the varying atmospheric transmission.
</p>

<h3 id="stacking">Stacking with SWarp</h3>
<p>
    For each observing run, a mask is generated to eliminate dead/hot
    pixels and bad columns. The mask changes only slightly between
    runs, but obviously changes significantly at the point where the
    Suprime-Cam detectors were replaced in 2008.
  <a href="https://www.astromatic.net/software/weightwatcher/" rel="external">WeightWatcher</a> is
  run on the images to mask cosmic rays.
</p>
<p>
    The Suprime-Cam images are stacked onto a series of tiles covering
    the sky. The tiles are the same set used by MegaPipe 2.0. The
    tiles are measure 10000&times;10000 pixels and are spaced by 0.5
    degrees in RA (with the appropriate cos(Dec) factor) and 0.5
    degrees in Dec. An example of part of the tiling scheme superimposed
    on the footprint of some Suprime-Cam images is shown in the figure
    below. The advantage of such a scheme is obvious in the upper half
    of this figure where multiple Suprime-Cam images partially overlap
    one another, but there is no clear footprint on which to stack.
</p>

<img src="/static/images/scla/supobjgrid.gif" alt="Example of stacking">
<p>
    Where possible, the Suprime-Cam images are also stacked in groups
    corresponding to the original observing pattern. A
    friends-of-friends algorithm is run on the image catalog, grouping
    together images whose centers are within 0.1 degrees of each. If
    the group contains 4 or more images in band, a stack is built on
    this footprint. If multiple bands are available in a group, all
    the bands will be stacked onto the same footprint.  On the bottom
    half of Figure 2, one can see two obvious concentrations of
    Suprime- Cam images, where the observing pattern was constrained
    to relatively small dithers.  Separate stacks are made for each of
    these two groups.
</p>
<p>
    The stacking is done using <a rel="external" href="https://www.astromatic.net/software/swarp/">SWarp</a>. The
    images are resampled according to the astrometric calibration,
    scaled according to the photometric calibration. The images are
    combined using a clipped mean. The resulting stacks and
    corresponding catalogs are made available for download. The
    individual fully detrended and calibrated Suprime-Cam images are
    also made available for astronomers interested in time-domain
    astronomy, such as variable sources and solar system objects.
</p>
