---
layout: cadc
lang: fr
permalink: /fr/hst/acs_fichiers.html
title: HST Fichiers ACS
altLangPage: /en/hst/acs_filenames.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23

signing: layout.signing


nav: hst

breadcrumbs:
    - link: /fr/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Télescope Spatial de Hubble(HST) Fichiers ACS</h1>
 <h2 class="align-center">Fichiers ACS</h2>

<p class="color-attention">Note: Les noms de fichiers ACS débutent toujours par la lettre 'J' </p>
<p class="color-attention">Note: La 9ième lettre du nom de fichier est toujours '0' pour les observations composites</p>
<p class="color-attention">Note: Veuillez consulter la documentation complète disponible <a rel="external" href="https://www.stsci.edu/hst/acs/documents/handbooks/current/cover.html" class="ui-link"> ici</a></p>

<h2>Pour une observation simple</h2>
<table class="table">
   <tbody><tr>
   <th id="a">Nom de fichier</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="f">Type
   </th><th id="e">Exemple</th>
   </tr>

   <tr>
   <td headers="a">jxxxxxxxx_raw.fits</td>
   <td headers="b">_RAW.FITS</td>
   <td headers="c">Données scientifiques brutes</td>
   <td headers="d">DN</td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_raw.fits" class="ui-link">j8c032xuq_raw.fits</a></td>
   </tr>

   <tr>
   <td headers="a">jxxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Données télémétrique et d'ingénérie </td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_spt.fits" class="ui-link">j8c032xuq_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du traitement</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_trl.fits" class="ui-link">j8c032xuq_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flt.fits</td>
   <td headers="b">_FLT.FITS</td>
   <td headers="c">Données calibré et corrigé pour l'illumination pour chaque exposition</td>
   <td headers="d">electrons </td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_flt.fits" class="ui-link">j8c032xuq_flt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flt_hlet.fits</td>
   <td headers="b">_FLT_HLET.FITS</td>
   <td headers="c">Fichier Headerlet contenant les distorsions géométrique</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_flt_hlet.fits" class="ui-link">j8c032xuq_flt_hlet.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx_flc.fits</td>
   <td headers="b">_FLC.FITS</td>
   <td headers="c">Calibré et corrigé pour l'illumination et corrigé pour les effets CTE</td>
   <td headers="d">electrons</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j8c032xuq_flc.fits" class="ui-link">j8c032xuq_flc.fits</a></td>
   </tr>

</tbody></table>
<h2>Pour un observation composite (la La 9ième lettre est '0')</h2>
<table class="table">
   <tbody><tr>
   <th id="a">Nom de fichier</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="f">Type
   </th><th id="e">Exemple</th>
   </tr>
   <tr>
   <td headers="a">j6fl5c030_asn.fits</td>
   <td headers="b">_ASN</td>
   <td headers="c">Fichier descriptif pour l'observation composite</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/j6fl5c030_asn.fits" class="ui-link">j6fl5c030_asn.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx0_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Données télémétrique et d'ingénérie </td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j6fl5c030_spt.fits" class="ui-link">j6fl5c030_spt.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxxx0_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du traitement</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j6fl5c030_trl.fits" class="ui-link">j6fl5c030j8c032xuq_spt.fits_trl.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxx0_drz.fits</td>
   <td headers="b">_DRZ</td>
   <td headers="c">Calibré et corrigé des distorsions géométriques pour les observations composites</td>
   <td headers="d">electrons/sec</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j6fl5c030_drz.fits" class="ui-link">j6fl5c030_drz.fits</a></td>
   </tr>
   <tr>
   <td headers="a">jxxxxxxx0_drc.fits</td>
   <td headers="b">_DRC</td>
   <td headers="c">Calibré et corrigé des distorsions géométriques et corrigé pour les effets CTE pour les observations composites</td>
   <td headers="d">electrons/sec</td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/j6fl5c030_drc.fits" class="ui-link">j6fl5c030_drc.fits</a></td>
   </tr>


</tbody></table>
<p class="color-attention">
Méthode d'accès générale: <a href="/data/pub/HST/product/j8c032xuq_drz.fits" class="ui-link">/data/pub/HST/product/j8c032xuq_drz.fits</a>
</p>


</div>