---
layout: cadc
lang: en
permalink: /en/cfht/extensions
title: Proprietary Data Access Management
altLangPage: /fr/tcfh/extensions
dateModified: 2021-11-02
signing: layout.signing

nav: cfht

breadcrumbs:
    - link: /en/cfht/
      title: CFHT
---

<p>
  For more details, please visit the <a rel="external" href="http://www.cfht.hawaii.edu/en/science/instruments.php" class="ui-link">CFHT instrumentation pages</a>.
</p>

<h2>All instruments</h2>
<ul>
  <li><strong>o:</strong> A RAW CFHT exposure</li>
</ul>

<h2>MegaCam</h2>

<ul>
  <li><strong>p:</strong> Elixir processed observation</li>
  <li><strong>b:</strong> bias</li>
  <li><strong>f:</strong> flat field exposure</li>
  <li><strong>d:</strong> dark</li>
  <li><strong>x:</strong> focus
</li></ul>

<h2>WIRCam</h2>

<ul>
  <li><strong>p:</strong> `I`iwi processed image</li>
  <li><strong>s:</strong> `I`iwi processed image without sky background subtraction</li>
  <li><strong>g:</strong> time-series data cubes containing image cutouts from the WIRCAM guider boxes</li>
  <li><strong>w:</strong> weight maps</li>
  <li><strong>m:</strong> mask file (a composite of several masks computed for each exposure including the guide-windows)</li>
  <li><strong>y:</strong> sky construct (ie: what was removed from a sky-subtracted image)</li>
  <li><strong>a:</strong> acquire (short image to acquire the correct field)
  </li><li><strong>d:</strong> dark
  </li><li><strong>f:</strong> flat field
  </li><li><strong>x:</strong> focus
</li></ul>

<h2>ESPaDOnS</h2>

<ul>
  <li><strong>p:</strong> polarization spectra (the combination of four individual exposures)
  </li><li><strong>i:</strong> individual intensity spectra
  </li><li><strong>a:</strong> align exposure (to line up target and fibre)
  </li><li><strong>b:</strong> bias
  </li><li><strong>c:</strong> comparison lamp
  </li><li><strong>f:</strong> flat field
  </li><li><strong>x:</strong> focus
</li></ul>

<h2>SITELLE</h2>

<ul>
  <li><strong>p:</strong> ORBS processed FITS cube
  </li><li><strong>z:</strong> ORBS processed HDF5 cube
  </li><li><strong>v:</strong> ORBS processed deep white-light image
  </li><li><strong>a:</strong> align
  </li><li><strong>b:</strong> bias
  </li><li><strong>d:</strong> dark
  </li><li><strong>c:</strong> comparison lamp
  </li><li><strong>f:</strong> flat field
</li></ul>

<h2>SPIRou</h2>

<ul>
  <li><strong>a:</strong> align
  </li><li><strong>d:</strong> dark
  </li><li><strong>c:</strong> comparison lamp
  </li><li><strong>e:</strong> 2D extracted spectra
  </li><li><strong>f:</strong> flat field
  </li><li><strong>p:</strong> polarimetric data (the combination of four individual exposures)    
  </li><li><strong>s:</strong> 1D extracted spectra, blaze corrected and rebinned (FITS table)
  </li><li><strong>t:</strong> 2D extracted spectra, telluric corrected
  </li><li><strong>v:</strong> radial velocity of the star (FITS table)
</li></ul>
