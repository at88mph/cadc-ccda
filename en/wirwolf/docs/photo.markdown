---
layout: cadc
lang: en
permalink: /en/wirwolf/docs/photo.html
title: Checks on photometry
altLangPage: /fr/wirwolf/docs/photo.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /en/wirwolf/
      title: WIRwolf
---
<p>
    Checks are performed on the photometry to make sure that the
    photometry in the catalogs generated from the stacked images agrees
    with 2MASS and to ensure that the photometry is self-consistent
    bteween WIRwolf stacks.
</p>
<p>
   The catalogs for each image stack were compared to 2MASS. As
     noted before, only the faintest 2MASS are unsaturated in WIRcam
     images, so the comparisons are necessarily noisy, with a typical
     scatter of 0.2 mags. The plot below shows an better than average
</p>
<img src="/static/images/wirwolf/J2MASS.GW001.047.250+12.957.J.mag.gif" alt="Example of a comparison between 2MASS and WIRwolf"/>
<p>
    However the average offsets between 2MASS and WIRwolf stacks are
    typically good to about 0.02 mags, as shown by the plot below.
</p>
<img src="/static/images/wirwolf/wircat2mass.gif" alt="Photometric zero-point differences between WIRwolf and 2MASS"/>
<p>
    Many WIRwolf stacks overlap nearby stacks. The catalogs from
    these stacks were compared and the photometric residuals measured
    to determine the zero-point differences. The results are shown
    below. Not ethat only a very few H-band images overlap with
    neighbour H-band iamges. The results for H-band are not
    plotted. The typical zero-point error would appear to be about 2%,
    consistent with the residuals with respect to 2MASS.
</p>
<img src="/static/images/wirwolf/catfight.gif" alt="Photometric zero-point differences between adjacent WIRwolf stacks"/>
