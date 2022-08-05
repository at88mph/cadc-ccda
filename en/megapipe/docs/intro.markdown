---
layout: cadc
lang: en
permalink: /en/megapipe/docs/intro.html
title: Introduction to MegaPipe
altLangPage: /fr/megapipe/docs/intro.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
---

<h2>Motivation</h2>
<p>
  MegaPipe is a MegaCam image stacking pipeline. It takes multiple
  MegaCam images of a patch of sky, calibrates them, combines them into
  a single image and extracts a source catalogue. If input images in
  different filters are available for the same pointing, the resulting
  images are aligned to each other.
</p>
<p>
  The biggest barrier to using
  archival <a rel="external" href="http://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/">MegaCam</a>
  images is the effort required to process them. While the individual
  images are occasionally useful by themselves, more often the original
  scientific program called for multiple exposures on the same field in
  order to build up depth and get rid of image defects. Therefore, the
  images must be combined.
</p>
<p>
  A typical program calls for 5 or more exposures on a single
  field. Each MegaCam image is about 0.7Gb (in 16-bit integer format),
  making image retrieval over the web tedious. Because of the
  distortion of the MegaPrime focal plane, the images must be
  resampled. This involves substantial computational demands. During
  this processing, which is often done in a 32-bit format, copies of
  the images must be made, increasing the disk usage. In summary, the
  demands in terms of CPU and storage are non-trivial. While, in ten
  years, <a rel="external" href="http://en.wikipedia.org/wiki/Moore%27s_law">Moore's law</a>
  will presumably make these concerns negligible, if not laughable, at
  the moment they present a technological barrier to easy use of
  MegaCam data. 
</p>
<p>
  The Elixir pipeline at CFHT processes each MegaCam image. It does an
  excellent job of detrending (bias-subtracting, flat-fielding) the
  images. However, the astrometric solution Elixir provides is only good
  to about 1 arcsecond. To combine the images, they must be aligned to
  better than a pixel. One arcsecond accuracy is
  insufficient. Therefore, it is necessary for a user to devise some way
  of aligning the images to higher accuracy. This is not an easy task,
  and rendered more difficult by the distortion of the MegaPrime focal
  plane. The problem is not intractable and there do exist a number of
  software solutions to the problem, but it remains an obstacle to easy
  use of MegaCam data.
</p>
<p>
  In short, while the barriers to using archival MegaCam data are not
  insurmountable, they render using these data considerably less
  attractive. MegaPipe aims to increase usage of MegaCam data by
  removing these barriers. 
</p>
<h2>Goal and Scope</h2>
<p>
  The goal of the MegaPipe project is to combine all publicly
  available MegaCam images, from both PI programs and the CFHTLS, into
  stacks and extract catalogues. Since the input data is publicly
  available, the output is also public. 
</p>
<p>
 The data will be grouped in one square degree chunks, the size of a
 single MegaCam image. The most usual way of taking MegaCam data is to
 take multiple exposures at each pointing, with a dither pattern that
 is a small fraction of a degree. Some projects involve staggered
 images which only overlap slightly; this would require making mosaics
 larger than a degree. The resulting images files would be over the
 2Gb limit intrinsic to 32-bit computers, making them intractably
 large for many users. The other option is to work on a chip-by-chip
 basis. This has technical advantages: the image files are smaller
 and, in the case of glitches in the stacking procedure, jobs can be
 restarted with a smaller loss of time. It also has scientific
 advantages: some lensing studies require following the PSF from each
 chip of the input image to the stacked image, a task rendered much
 easier, if the stacked image only contains data from a single
 chip. However, the large dither pattern used in many projects
 precludes this approach. Too much data would be lost in the "gutters"
 between images. Also, the monolithic method means that there are a
 factor of 36 fewer files to deal with, simplifying some aspects of
 the stacking process.
</p>
<p>
  While MegaPipe is primarially built for processing public data, PI
  data is processed on request. Please <a href="/en/contact.html#email">contact the CADC</a>.
</p>
<p>
  There will be updates about every six months. As data becomes publicly
  available, it will be processed through the MegaPipe pipeline. In
  principle, this could be done on a daily basis, as the pipeline
  requires only minimal supervision. However, a substantial fraction
  of CFHT data is obtained during queue observing. These data become
  public one year after the end of the six month semester in which
  they are taken. This means that, in practice, it is more useful to
  produce updates semi-annually.
</p>
<h2>Definitions</h2>
  <ul>
    <li>
      A CCD or chip refers to a single 2k by 4k extension of a MegaCam multi-extension FITS file.
    </li>
    <li>
      An image or an exposure refers to the set of 36 MegaCam CCDs represented as a multi-extension FITS file.
    </li>
    <li>
      A stack is the aggregate of several exposures combined (added/averaged/medianed) together. Stacks are simple FITS file with dimensions around 20k by 20k
    </li>
    <li>
      A group is a set of several stacks, each in a separate passband, covering the exact same field.
    </li>
  </ul>
<p>
  Currently, the MegaPipe results include over 3000 groups. The coverage
  is shown in the following figure. The individual MegaCam exposures are
  shown in black. The stacked images are shown in red.<br/>
  <img src="/static/images/megapipe/centresweb_en.gif" class="full-width" alt="Individual MegaCam images and MegaPipe stacked images"/>
</p>
