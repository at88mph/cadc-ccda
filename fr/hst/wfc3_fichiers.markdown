---
layout: cadc
lang: fr
permalink: /fr/hst/wfc3_fichiers
title: Télescope Spatial Hubble
altLangPage: /fr/hst/wfc3_filenames
headerimage: /static/images/hst.jpg
dateModified: 2021-11-01
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /en/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Télescope Spatial de Hubble(HST) Fichiers WFC3</h1>
 <h2 class="align-center">Fichiers WFC3</h2>
              


<p class="color-attention">Note: Note: Les noms de fichiers WFC3 débutent toujours par la lettre 'I'</p>
<p class="color-attention">Note: La 9ième lettre du nom de fichier est toujours '0' pour les observations composites</p>
<p class="color-attention">Note: Veuillez consulter la documentation complète disponible <a rel="external" href="http://www.stsci.edu/hst/wfc3/documents/handbooks/currentIHB/wfc3_cover.html" class="ui-link">ici</a></p>

<p class="color-attention"> Les suffixes et types de fichiers utilisés par WFC3 sont similaires à ceux d'ACS et de NICMOS.  </p>


<table class="table"> 
   <tbody><tr>
   <th id="a">Num de fichier</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="f">Type</th>
   <th id="e">Exemple</th>
   </tr>

   <tr>
   <td headers="a">ixxxxxxxx_raw.fits</td>
   <td headers="b">_RAW.FITS</td>
   <td headers="c">Données scientifiques brutes</td>
   <td headers="d">DN </td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_raw.fits" class="ui-link">i9zl53i0q_raw.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Données télémétrique et d'ingénérie</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_spt.fits" class="ui-link">i9zl53i0q_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du traitement</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_trl.fits" class="ui-link">i9zl53i0q_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">Calibré et corrigé pour l'illumination pour chaque exposition</td>
   <td headers="d">electrons (UVIS) / electrons/s (IR)</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_flt.fits" class="ui-link">i9zl53i0q_flt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxxx_flt_hlet.fits</td>
   <td headers="b">_FLT_HLET.FITS</td>
   <td headers="c">Fichier Headerlet contenant les distorsions géométrique</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_flt_hlet.fits" class="ui-link">i9zl53i0q_flt_hlet.fits</a></td>
   </tr>

   <tr>
   <td headers="a">ixxxxxxxx_ima.fits</td>
   <td headers="b">_IMA.FITS</td>
   <td headers="c">Fichier calibré intermédiaire pour le mode IR</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl53i0q_ima.fits" class="ui-link">i9zl53i0q_ima.fits</a></td>
   </tr>
</tbody></table>

<h2>For a composite observation (9th character is '0')</h2>
<table>
   <tbody><tr>
   <th id="a">Nom de fichier</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="f">Type
   </th><th id="e">Exemple</th>
   </tr>

   <tr>
   <td headers="a">ixxxxxxx0_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">Fichier descriptif pour l'observation composite</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl45010_asn.fits" class="ui-link">i9zl45010_asn.fits</a></td>
   </tr>
   <tr>
   <td headers="a">ixxxxxxx0_drz.fits</td>
   <td headers="b">_DRZ.FITS</td>
   <td headers="c">Calibré et corrigé des distorsions géométriques pour les observations composites</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/HST/product/i9zl45010_drz.fits" class="ui-link">i9zl45010_drz.fits</a></td>
   </tr>
</tbody></table>


</div>