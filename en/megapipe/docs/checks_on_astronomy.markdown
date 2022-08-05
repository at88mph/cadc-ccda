---
layout: cadc
lang: en
permalink: /en/megapipe/docs/astro.html
title: Checks on Astrometry
altLangPage: /fr/megapipe/docs/astro.html
dateModified: 2021-12-08
signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
---

<p>
    The internal astrometric accuracy (between the stacked images of a
    group) is typically 0.04 arcseconds radially or 0.025 in any one
    direction. The repeatability (the residuals between two completely
    independent astrometric determinations), is about 0.06
    arcseconds. The external astrometric accuracy (between the stacks
    and the external reference frame) is typically 0.20 arcseconds
    radially or 0.14 in any one direction.
</p>
<ul>
  <li><a href="#int">Internal accuracy</a></li>
  <li><a href="#rep">Repeatability</a></li>
  <li><a href="#ext">External accuracy</a></li>
</ul>
<h2 id="int">Internal accuracy</h2>
<p>
    The internal accuracy is checked by running SExtractor on each
    stacked image in every band of each group and obtaining catalogues
    of object positions. The positional catalogues for each band are
    matched to each other and common objects identified. If the
    astrometry is perfect, then the position of an object in each band
    will be identical. In practice, there are astrometric
    residuals. Examining these residuals gives an idea of the
    astrometric uncertainties.
</p>  
<p>
    The figure below shows checks on the internal astrometry between
    two typical images in a group.  The top left quarter shows the
    direction and size (greatly enlarged) of the astrometric residuals as
    line segments. This plot is an important diagnostic of astrometry
    because, while the residuals are typically quite small, there are
    outliers in any distribution. As long as these outliers are relatively
    isolated from each other and pointing in random directions all is
    well. Conversely, if there are a number of large residuals in close
    proximity to each other, all pointing the same direction, this
    indicates a systematic misalignment between the two images in
    question. The figure shows no such misalignments.  The bottom left
    quarter shows the astrometric residuals in RA and Dec. The red
    histograms show the relative distribution of the residuals in both
    directions. The 68th percentile of the residuals is 0.060 arcseconds
    radially. The two right panels show the residuals in RA and Dec
    separately.
</p>  
<img src="/static/images/megapipe/astint.gif" alt="Internal astrometry check"/>
<p>
 Over all, the astrometric residuals are about 0.04 arcseconds (68th
 percentile) in a radial sense or about 0.025 in any one
 direction. Note that there should be a factor of &radic;2 between
 these two uncertainties.
</p>  
<h2 id="rep">Repeatability</h2>
<p>
    The test described above was applied to every pair of images
    within each of the groups with similar results. This of course
    might not be too surprising, since the images were registered to
    each other in the first place. For example, if there is g and i
    data in a group, the i image is made first and then the g data is
    astrometrically mapped to the i image as described
    in <a href="proc.html#astcal">astrometric calibration
    documentation</a>. Therefore, even if there are systematic errors in
    the i astrometry, the g data is mapped to the erroneous positions,
    and the residuals between the g and i image will still be small.
</p>  
<p>
    However, this test is also applied between images belonging to
    different groups. Since the astrometric calibration of one group is
    completely independent of that of another group, comparing the
    residuals between different groups is a more stringent test of the
    repeatability of the astrometry. The figure below shows the
    astrometric residuals between two groups. The different panels have
    the same significance as in the previous figure. Groups tend to
    overlap only at the edges, in a thin strip, as shown in the top left
    panel. Consequently, the number of common sources between two groups
    will be much smaller than between two stacks in the same group. The
    residuals in this case are 0.05 arcseconds. More typically, averaging
    over all the group overlaps, the repeatability is 0.06 arcseconds.
</p>  
<img src="/static/images/megapipe/edgeast.gif" alt="Internal astrometry check (Edges)"/>
<h2 id="ext">External accuracy</h2>
<p>
    This is checked by matching the catalogue for each field back to the
    astrometric reference catalogue. Again, the scatter in the astrometric
    residuals is a measure of the uncertainty, and the presence of any
    localized large residuals indicates a systematic shift.
</p>  
<p>
    The figure below shows checks on the external astrometry. The
    panels have the same significance as above. The only difference is
    that the residuals are larger. Note that there are uncertainties
    in the external astrometric catalogue as well. In this case, the
    SDSS is used as a reference. The astrometric uncertainties
    inherent in the SDSS are 0.05 to 0.10 arcseconds <a rel="external"
    href="https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2003AJ....125.1559P">(Pier,
    et al. 2003)</a>.
</p>  
<img src="/static/images/megapipe/astext.gif" alt="External astrometry check"/>
