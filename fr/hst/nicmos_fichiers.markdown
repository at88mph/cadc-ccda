---
layout: cadc
lang: fr
permalink: /fr/hst/nimcos_fichiers.html
title: HST Fichiers NICMOS
altLangPage: /fr/hst/nimcos_filenames.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23

signing: layout.signing
nositesearch: layout.nositesearch

nav: hst

breadcrumbs:
    - link: /fr/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Télescope Spatial de Hubble(HST) Fichiers NICMOS</h1>
 <h2 class="align-center">Fichiers NICMOS</h2>
              

<p class="color-attention">Note: Les noms de fichiers NICMOS débutent toujours par la lettre 'N'</p>
<p class="color-attention">Note: La 9ième lettre du nom de fichier est toujours '0' pour les observations composites</p>
<p class="color-attention">Note: Veuillez consulter la documentation complète disponible <a rel="external" href="http://www.stsci.edu/hst/nicmos/documents/handbooks/current_NEW/cover.html" class="ui-link">ici</a></p>

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
   <td headers="a">nxxxxxxxx_jif.fits</td>
   <td headers="b">_JIF.FITS</td>
   <td headers="c">Données brutes.</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_jif.fits" class="ui-link">n4rk020b0_jif.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_spt.fits</td>
   <td headers="b">_SPT.FITS</td>
   <td headers="c">Données télémétrique et d'ingénérie</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_spt.fits" class="ui-link">n4rk020b0_spt.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_asn.fits</td>
   <td headers="b">_ASN.FITS</td>
   <td headers="c">Fichier descriptif pour l'observation composite</td>
   <td headers="d"></td>
   <td headers="f">RAW</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_asn.fits" class="ui-link">n4rk020b0_asn.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_mos.fits</td>
   <td headers="b">_MOS.FITS</td>
   <td headers="c">Images co-additionnées</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_mos.fits" class="ui-link">n4rk020b0_mos.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_asc.fits</td>
   <td headers="b">_ASC.FITS</td>
   <td headers="c">Information requise pour la co-additions des images</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_asc.fits" class="ui-link">n4rk020b0_asc.fits</a></td>
   </tr>

   <tr>
   <td headers="a">nxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du processing</td>
   <td headers="d"></td>
   <td headers="f">CAL</td>
   <td headers="e"><a href="/data/pub/HST/product/n4rk020b0_trl.fits" class="ui-link">n4rk020b0_trl.fits</a></td>
   </tr>


</tbody></table>


<p>
Les données NICMOS contiennent 5 différentes extensions:</p>

<ul>
   <li>Les valeurs scientifiques (SCI).</li>
   <li>Les erreurs représentant les incertitudes statistiques.</li>
   <li>Un indicateur de qualité pour chaque pixel (DQ).</li>
   <li>Nombre d'échantillonnage pour chaque pixel (SAMP).</li>
   <li>Temps d'exposition équivalent pour chaque pixel (TIME). </li>
</ul>


</div>