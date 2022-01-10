---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/filtold.html
title: Le système de filtres ugriz
altLangPage: /en/megapipe/docs/filtold.html
dateModified: 2021-12-08

signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/docs/desc.html
      title: Description des données
    - link: /fr/megapipe/docs/filt.html
      title: Le système de filtres
---

<p>
    Cette page d&eacute;crit les filtres de ugriz MegaCam et les compare avec les
    filtres de ugriz SDSS.
</p>
<p>
    &Eacute;videment la plupart des informations pr&eacute;sent&eacute;es dans cette
    page est disponible ailleurs. Cependant, bien qu'il soit possible de
    trouver la fonction de transmission du filtre de MegaCam sans le
    t&eacute;lescope (miroirs, optique, d&eacute;tecteur) fonction de r&eacute;ponse, il est
    difficile de trouver des fichiers d&eacute;crivant les filtre apr&eacute;s
    multiplication par la transmission du syst&egrave;me (ce qui est n&eacute;cessaire pour
    un certain nombre de choses, notamment les redshifts photom&eacute;triques),
    elles sont pr&eacute;sent&eacute;es ici.
</p>
<p>
  La figure ci-dessous montre la jeu de filtres ugriz pour MegaCam .
  Les lignes color&eacute;es claires montrent les r&eacute;ponses des filtres
  comme d&eacute;crit dans les
  <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime/data.MegaPrime/MegaCam_Filters_data.txt">pages de filtre de CFHT</a>.
  Les lignes noires marqu&eacute;es indiquent la transmission 
  <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Al_coating.dat">du miroir primaire</a>,
  <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Optics_TR.dat">de l'optique</a> 
  et <a rel="external" href="https://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/QE_camera.dat">du rendement quantique CCD</a>
  obtenue &agrave; partir du site-web du TCFH.
</p>
<img class="img-responsive" src="/static/images/megapipe/cfhtlsugriznew_fr.gif" alt="Jeu de filtres MegaCam"/>
<p>
  Le transmission des filtres sont multipli&eacute;s par celles du t&eacute;lescope ( miroir + optiques + CCD ) 
  d'obtenir des transmissions totales pour l'ensemble du syst&egrave;me .
  Ces transmissions totales sont pr&eacute;sent&eacute;s comme les lignes color&eacute;es lourds
  La &eacute;tiquettes i1 et i2 se r&eacute;f&egrave;rent &agrave; l'ancien (avant Juin 2007) et les nouveaux (apr&egrave;s Octobre 2007) filtre i.
  Les courbes de r&eacute;ponse finaux sont donn&eacute;es au format texte ici:
</p>
<ul>
  <li> <a href="/static/files/megapipe/uMega.fil">u bande</a></li>
  <li> <a href="/static/files/megapipe/gMega.fil">g bande</a></li>
  <li> <a href="/static/files/megapipe/rMega.fil">r bande</a></li>
  <li> <a href="/static/files/megapipe/iMega.fil">i bande</a> (ancien: i.MP9701 )</li>
  <li> <a href="/static/files/megapipe/i2Mega.fil">i2 bande</a> ( nouveau : i.MP9702 )</li>
  <li> <a href="/static/files/megapipe/zMega.fil">z bande</a></li>
</ul>
<h2>Comparaison des jeu de filtre MegaCam et SDSS</h2>
<p>
  La figure ci-dessous montre les fonctions de transmission de
  filtre de MegaCam finales.  Les m&ecirc;mes donn&eacute;es pour le jeu de
  filtre ugriz SDSS sont repr&eacute;sent&eacute;s en traits plus lourds.  Notez
  que les filtre u et g de MegaCam sont l&eacute;g&egrave;rement plus rouge que
  leur homologues SDSS.  
</p>
<img class="img-responsive" src="/static/images/megapipe/megasdssnew.gif" alt="MegaCam vs SDSS"/>
<p>
  La transformation entre le syst&egrave;me de magnitude Vega et AB est
  diff&eacute;rente pour les filtres SDSS et MegaCam, en particulier pour le u.
  Ceci est illustr&eacute; dans le tableau suivant:
</p>
<table class="table">
  <thead>
    <tr><th scope="col">Filtre</th><th scope="col">SDSS-AB<br/>SDSS</th> <th scope="col">Vega-AB<br/>MegaCam</th></tr>
  </thead>
  <tbody>
    <tr><td>u          </td><td>-0.966</td><td>-0.338</td></tr>
    <tr><td>g          </td><td>+0.099</td><td>+0.093</td></tr>
    <tr><td>r          </td><td>-0.163</td><td>-0.164</td></tr>
    <tr><td>i (vieux)  </td><td>-0.387</td><td>-0.389</td></tr>
    <tr><td>i (nouveau)</td><td>-0.387</td><td>-0.376</td></tr>
    <tr><td>z          </td><td>-0.560</td><td>-0.551</td></tr>
  </tbody>
</table>
<p>
  Ces chiffres sont calcul&eacute;s pour la masse d'air z&eacute;ro.
</p>
<p>
  Les termes de couleur entre les deux jeux de filtres
  peut &ecirc;tre d&eacute;crit par les &eacute;quations suivantes:
</p>
<pre>
  u_Mega = u_SDSS - 0,241 ( u_SDSS - g_SDSS )
  g_Mega = g_SDSS - 0,153 ( g_SDSS - r_SDSS )
  r_Mega = r_SDSS - 0,024 ( g_SDSS - r_SDSS )
  i_Mega = i_SDSS - 0,085 ( r_SDSS - i_SDSS ) (ancien)
  i_Mega = i_SDSS - 0,003 ( r_SDSS - i_SDSS ) (nouveau)
  z_Mega = z_SDSS + 0,074 ( i_SDSS - z_SDSS )
</pre>
<p>
  Les relations pour les bandes griz (y compris l'ancien filtre i) proviennent de l'analyse de la
  <a rel="external" href="https://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">groupe SNLS</a>.
  La  relations pour la bande u vient des
  <a rel="external" href="https://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">pages web MegaPipe TCFH</a>.
  La <a href="ifilt.html">relation de la nouvelle filtre i</a> a &eacute;t&eacute; calcul&eacute; separement.
</p>
<p>
  Les transformations inverses (MegaCam &agrave; SDSS) ont &eacute;galement &eacute;t&eacute; calcul&eacute;:
</p>
<pre>
  u_SDSS=u_Mega +0.181 (u_Mega - g_Mega)
  g_SDSS=g_Mega +0.195 (g_Mega - r_Mega)
  g_SDSS=g_Mega +0.103 (g_Mega - i_Mega)
  r_SDSS=r_Mega +0.011 (g_Mega - r_Mega)
  i_SDSS=i_Mega +0.079 (r_Mega - i_Mega) (ancien)
  i_SDSS=i_Mega +0.044 (g_Mega - i_Mega) (ancien)
  i_SDSS=i_Mega +0.001 (r_Mega - i_Mega) (nouveau) 
  i_SDSS=i_Mega -0.003 (g_Mega - i_Mega) (nouveau)
  z_SDSS=z_Mega -0.099 (i_Mega - z_Mega)
</pre>
