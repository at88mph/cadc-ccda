---
layout: cadc
lang: fr
permalink: /fr/hst/wfpc2_fichiers.html
title: HST Fichiers WFPC2
altLangPage: /fr/hst/wfpc2_filenames.html
headerimage: /static/images/archive-info/hst.jpg
dateModified: 2021-11-23

signing: layout.signing


nav: hst

breadcrumbs:
    - link: /fr/hst/
      title: HST
---

<div class="span-6">
 <h1 id="wb-cont" class="wb-invisible">Télescope Spatial de Hubble(HST) Fichiers WFPC2</h1>
 <h2 class="align-center">Fichiers WFPC2</h2>
              
<p class="color-attention">Note: Les noms de fichiers WFPC2 débutent toujours par la lettre 'U'</p>
<p class="color-attention">Note: Veuillez consulter la documentation complète disponible <a rel="external" href="http://documents.stsci.edu/hst/wfpc2/documents/handbooks/cycle17/wfpc2_cover.html" class="ui-link">ici</a></p>

<table class="table">
   <tbody><tr>
   <th id="a">Nom de fichier</th>
   <th id="b">Suffixe</th>
   <th id="c">Description</th>
   <th id="d">Unités</th>
   <th id="e">Type</th>
   <th id="e">Exemple</th>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_d0f.fits<br>uxxxxxxxx_d0m.fits</td>
   <td headers="b">_D0F.FITS<br>_D0M.FITS</td>
   <td headers="c">Données scientifiques brutes. Le fichier D0F est en format STSDAS groupe tandis que le D0M est en mode multi-extension</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_d0f.fits" class="ui-link">u4vc0101r_d0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_q0f.fits</td>
   <td headers="b">_Q0F.FITS</td>
   <td headers="c">Qualité de chaque pixels de l'image brute. Lorsque les valeurs sont '0', ce sont de bons pixels.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_q0f.fits" class="ui-link">u4vc0101r_q0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_x0f.fits<br>uxxxxxxxx_x0m.fits</td>
   <td headers="b">_X0F.FITS<br>_X0M.FITS</td>
   <td headers="c">Valeurs des paramètres d'ingénirie.Le fichier X0M est en format multi-extension.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_x0f.fits" class="ui-link">u4vc0101r_x0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_q1f.fits</td>
   <td headers="b">_Q1F.FITS</td>
   <td headers="c">Qualité des valeurs d'ingénirie.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_q1f.fits" class="ui-link">u4vc0101r_q1f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_shf.fits</td>
   <td headers="b">_SHF.FITS</td>
   <td headers="c">Valeurs télémétriques.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_shf.fits" class="ui-link">u4vc0101r_shf.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_pdq.fits</td>
   <td headers="b">_PDQ.FITS</td>
   <td headers="c">Valeur JITTER pendant l'exposition.</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_pdq.fits" class="ui-link">u4vc0101r_pdq.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_c0f.fits<br>uxxxxxxxx_c0m.fits</td>
   <td headers="b">_C0F.FITS<br>_C0M.FITS</td>
   <td headers="c">Données scientifiques calibrées. Le fichier C0M est en format multi-extension.</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_c0f.fits" class="ui-link">u4vc0101r_c0f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_c1f.fits<br>uxxxxxxxx_c1m.fits</td>
   <td headers="b">_C1F.FITS<br>_C1M.FITS</td>
   <td headers="c">Indicateur de la qualité des valeurs scientifiques calibrées.</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_c1f.fits" class="ui-link">u4vc0101r_c1f.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_drz.fits</td>
   <td headers="b">_DRZ.FITS</td>
   <td headers="c">Données scientifiques calibrées dont les quatre détecteurs ont été assemblées avec le logiciel "multidrizzle" à l'échelle de la caméra WF.</td>
   <td headers="d"><br></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_drz.fits" class="ui-link">u4vc0101r_drz.fits</a> </td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_drzpc.fits</td>
   <td headers="b">_DRZPC.FITS</td>
   <td headers="c">Données scientifiques calibrées pour le détecteur PC seulement.</td>
   <td headers="d"></td>
   <td headers="e">CAL</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_drzpc.fits" class="ui-link">u4vc0101r_drzpc.fits</a></td>
   </tr>

   <tr>
   <td headers="a">uxxxxxxxx_trl.fits</td>
   <td headers="b">_TRL.FITS</td>
   <td headers="c">Trace du processing</td>
   <td headers="d"></td>
   <td headers="e">RAW</td>
   <td headers="f"><a href="/data/pub/HST/product/u4vc0101r_trl.fits" class="ui-link">u4vc0101r_trl.fits</a></td>
   </tr>


</tbody></table>



</div>