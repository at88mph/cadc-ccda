---
layout: cadc
lang: fr
permalink: /fr/scla/docs/desc.html
title: Description de données
altLangPage: /en/scla/docs/desc.html
dateModified: 2022-08-05
signing: layout.signing
nav: scla

breadcrumbs:
    - link: /fr/scla/
      title: SCLA
---

<h2>Images individuelles</h2>
<p>
  Chaque exposition est disponible sous forme de fichier FITS multi-extension
  contenant les 10 CCD. Les images sont enti&egrave;rement calibr&eacute;es. le
  l'&eacute;talonnage astrom&eacute;trique est exprim&eacute; dans l'en-t&ecirc;te &agrave; l'aide du CD
  mots-cl&eacute;s matrice et distorsion PV. L'&eacute;talonnage photom&eacute;trique est
  d&eacute;crit &agrave; l'aide du mot-cl&eacute; PHOTZP. PHOTZP est le point z&eacute;ro,
  y compris le temps d'exposition et les corrections d'extinction. le
  l'&eacute;talonnage photom&eacute;trique est l&eacute;g&egrave;rement diff&eacute;rent pour chaque CCD. 
</p>

<h2>Images empil&eacute;es</h2>
<p>
  Ce sont de simples fichiers FITS (non pas des fichiers FITS
  multi-extension) mesurant 10000 pixels par 10000 pixels (0.5 degr&eacute;
  par 0.5 degr&eacute;) ou d'un taille variable dans le cas des images
  group&eacute;es Ils ont un niveau du ciel de 0. Ils sont
  &eacute;chelonn&eacute;es afin d'avoir une photom&eacute;trique du point z&eacute;ro de 30.000
  en magnitudes AB. C'est-&agrave;-dire, pour chaque source:
</p>

<pre><code>AB_magnitude = -2.5 * log10(ADU) + 30.000</code></pre>

<p>  
  Chaque image a une image de poids associ&eacute;e.  Ceux-ci sont livr&eacute;s
  avec dans un <a rel="external"
  href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/compression.html">format
  compress&eacute;</a>. Pour les d&eacute;compresser, utilisez la
  commande <a rel="external"
  href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/cexamples.html"><code>imcopy</code>
  de CFITSIO</a>, par example:
</p>

<pre>imcopy G002.003.844+33.133.G.weight.fits.fz G002.003.844+33.133.G.weight.fits</pre>

<p>
    Les valeurs du poids d'une carte pixel est proportionnelle &agrave; l'inverse
    de la variance de ce pixel dans l'image principale.
</p>

<h2>Images brutes</h2>
<p>
  Les images brutes originales ne sont pas disponibles aupr&egrave;s le
  CCDA. Les images brutes de Suprime-Cam peuvent &ecirc;tre r&eacute;cup&eacute;r&eacute;es &agrave;
  partir de <a href="https://stars.naoj.org"
  rel="external">STARS</a> (Subaru Telescope ARchive System) pour
  les observateurs ou <a href="https://smoka.nao.ac.jp"
  rel="external">SMOKA</a> (archive science publique de donn&eacute;es par
  ADC, NAOJ) pour les utilisateurs g&eacute;n&eacute;rales.
</p>