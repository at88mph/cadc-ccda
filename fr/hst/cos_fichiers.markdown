---
layout: cadc
lang: fr
permalink: /fr/hst/cos_fichiers.html
title: HST Fichiers COS
altLangPage: /en/hst/cos_filenames.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /fr/hst/
      title: HST
---

<div class="span-6">
  <h1 id="wb-cont" class="wb-invisible">Télescope Spatial de Hubble HST) Fichiers COS</h1>
  <h2 class="align-center">Fichiers COS</h2>
              

<p class="color-attention">Note: Les noms de fichiers COS débutent toujours par la lettre L</p>
<p class="color-attention">Note: La 9ième lettre du nom de fichier est toujours '0' pour les observations composites</p>
<p class="color-attention">Note: Veuillez consulter la documentation complète disponible <a rel="external" href="https://www.stsci.edu/hst/cos/documents/handbooks/current/cos_cover.html" class="ui-link">ici</a></p>

<p>
Les fichiers COS utilisent une convention différente des autres instruments HST. En particulier, les observations en mode FUV ont deux suffixes différents. Le premier suffixe identifie le type de fichier tandis que le deuxième indique le numéro de segment du détecteur.
</p>

<table class="table">
   <tbody><tr>
   <th id="a">Nom de fichiers</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="f">Type</th>
   <th id="e">Exemple</th>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_rawaccum.fits</td>
   <td headers="b"> _RAWACCUM.FITS </td>
   <td headers="c">Fichier NUV ACCUM brut</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_rawaccum.fits" class="ui-link">la8p01frq_rawaccum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">Fichier descriptif pour une observation composite</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_asn.fits" class="ui-link">lb2a13030_asn.fits</a></td>
   </tr>


   <tr>
   <td headers="a">lxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du traitement</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_trl.fits" class="ui-link">lb2a13zgq_trl.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Données télémétrique et d'ingénérie</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_spt.fits" class="ui-link">lb2a13zgq_spt.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_rawtag_a.fits<br>lxxxxxxx_rawtag_b.fits</td>
   <td headers="b">_RAWTAG_A.FITS<br>_RAWTAG_B.FITS</td>
   <td headers="c">Fichier NUV ACCUM (image)</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_rawtag_a.fits" class="ui-link">lb2a13zgq_rawtag_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_corrtag_a.fits<br>lxxxxxxx_corrtag_b.fits</td>
   <td headers="b">_CORRTAG_A.FITS<br>_CORRTAG_B.FITS</td>
   <td headers="c">Fichiers d'évènements (TIME-TAG) pour le mode FUV</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_corrtag_a.fits" class="ui-link">lb2a13zgq_corrtag_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_corrtag.fits</td>
   <td headers="b">_CORRTAG.FITS</td>
   <td headers="c">Fichiers d'évènements (TIME-TAG) pour le mode NUV</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_corrtag.fits" class="ui-link">la8p01frq_corrtag.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">Image calibré. pour le mode NUV</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p01frq_rawaccum.fits" class="ui-link">la8p01frq_rawaccum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_flt_a.fits<br>lxxxxxxx_flt_b.fits</td>
   <td headers="b">_FLT_A.FITS<br>_FLT_B.FITS</td>
   <td headers="c">Image calibré pour le mode FUV</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_flt_a.fits" class="ui-link">lb2a13zgq_flt_a.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxx_fltsum.fits</td>
   <td headers="b">_FLTSUM.FITS</td>
   <td headers="c">coaddition desimages calibr&amp;eacte;es. C'est le fichier final pour toutes observations COS en mode image</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/la8p011p0_fltsum.fits" class="ui-link">la8p011p0_fltsum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_lampflash.fits</td>
   <td headers="b">_LAMPFLASH.FITS</td>
   <td headers="c">Extraction spectrale 1D pour le mode (FLASH=oui)</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_lampflash.fits" class="ui-link">lb2a13zgq_lampflash.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1dsum3.fits</td>
   <td headers="b">_X1DSUM3.FITS</td>
   <td headers="c">Extraction spectrale moyenne pour des observations multiples</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_x1dsum3.fits" class="ui-link">lb2a13030_x1dsum3.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1dsum.fits</td>
   <td headers="b">_X1DSUM.FITS</td>
   <td headers="c">Extraction spectrale finale 1D pour des observations multiples. C'est le fichier final pour toutes les observations spectroscopiques pour COS.</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13030_x1dsum.fits" class="ui-link">lb2a13030_x1dsum.fits</a></td>
   </tr>

   <tr>
   <td headers="a">lxxxxxxxx_x1d.fits</td>
   <td headers="b">_X1D.FITS</td>
   <td headers="c">Extraction spectrale 1D pour une observation simple</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/lb2a13zgq_x1d.fits" class="ui-link">lb2a13zgq_x1d.fits</a></td>
   </tr>

</tbody></table>

</div>