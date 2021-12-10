---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/desc.html
title: Description des données
altLangPage: /en/wirwolf/docs/desc.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
    - link: /fr/wirwolf/docs/desc.html
      title: Description des données
---
<h2>Convention de nommage</h2>
<p>
    Le noms commencent par "GW"
    (pour "Groupe, WIRwolf") suivi d'un num&eacute;ro de g&eacute;n&eacute;ration (qui est
    incr&eacute;ment&eacute; tous les six mois), suivi par des nombres indiquant le
    RA et Dec du centre du groupe. Par exemple: GW002.003.844+33.133
    est et le groupe plus centr&eacute;e sur RA = 33.133 et Dec =
    3.844.
</p>
<p>
    Les noms de groupe sont suivi d'une caract&egrave;re indicatant le filtre JHK.
</p>
<h2>Images</h2>
<p>
    Ce sont de simples fichiers FITS (non pas des fichiers FITS
    multi-extension) mesurant environ 20000 pixels par 20000 pixels ou
    environ 1 degr&eacute; par 1 degr&eacute;, selon le mod&egrave;le d'entr&eacute;e de
    vibration, et sont environ 1.7 Gb. Ils ont un niveau du ciel de
    1. Ils sont &eacute;chelonn&eacute;es afin d'avoir une photom&eacute;trique du point
    z&eacute;ro de 30.000 en magnitudes AB. C'est-&agrave;-dire, pour chaque source:
</p>
<pre>
AB_magnitude = -2.5 * log10(ADU) + 30.000
</pre>
<p>
    Les conversions pour les magnitudes Vega, consultez la table suivante, reproduit
    du page des <a href="/fr/wirwolf/docs/filt.html">filtres de WIRCam</a>.
</p>
<h2>Images des ponderances</h2>
<p>
    Ceux-ci sont livr&eacute;s avec dans un <a rel="external" href="https://heasarc.gsfc.nasa.gov/docs/software/fitsio/compression.html">format
    compress&eacute;</a>. Pour les d&eacute;compresser, utilisez la commande <a rel="external" href="https://heasarc.gsfc.nasa.gov/docs/software/fitsio/cexamples.html">imcopy de
    CFITSIO</a>, par example:
</p>
<pre>
imcopy GW002.003.844+33.133.J.weight.fits.fz GW002.003.844+33.133.J.weight.fits
</pre>
<p>
    Les valeurs du poids d'une carte pixel est proportionnelle &agrave; l'inverse
    de la variance de ce pixel dans l'image principale.
</p>
<h2>Catalogues</h2>
<p>
Les catalogues ont un en-t&ecirc;te d&eacute;crivant les colonnes:
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
    Toutes les magnitudes sont sur le syst&egrave;me AB.  Le diam&egrave;tre
    d'ouverture est de 6.28 fois la FWHM de l'image. Il devrait &ecirc;tre (en
    moyenne) le m&ecirc;me que MAG_AUTO pour les sources ponctuelles, tel que
    discut&eacute; dans la 
    <a href="/fr/wirwolf/docs/proc.html#photcal">section de photometrie de la procedure de coadditionment</a>.
</p>
