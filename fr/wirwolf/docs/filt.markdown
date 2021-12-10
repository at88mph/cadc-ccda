---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/filt.html
title: Filtres WIRCam JHK
altLangPage: /en/wirwolf/docs/filt.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
    - link: /fr/wirwolf/docs/filt.html
      title: Filtres WIRCam JHK
---
<p>
    Cette page d&eacute;crit les filtres JHK de WIRCam et les compare avec les filtres JHK de 2MASS.
    Les termes de couleur par rapport &agrave; 2MASS sont d&eacute;riv&eacute;es.
</p>
<h2>Le syst&eacute;me de filtres de WIRCam</h2>
<p>
    La figure ci-dessous montre le jeu de filtres WIRCam YJHK. Les lignes
    noires claires montrent les r&eacute;ponses des filtres obtenue de
    <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Filters/wircam.html">page des filtres TCFH WIRCam</a>.
    Les lignes noires plus fonc&eacute;es montrent la r&eacute;ponse finale apr&egrave;s prise en
    compte des &eacute;l&eacute;ments suivants:
</p>
<ul>
  <li>
     La ligne verte repr&eacute;sente <a rel="external" href="http://www.cfht.hawaii.edu/Science/CFHTLS-OLD/MSWG/Al_coating.dat">la r&eacute;flectivit&eacute; de la miroir primaire</a>.
  </li>
  <li>
      La ligne bleue repr&eacute;sente la transmission des <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/WIRCam/pics.WIRCam/WIRCamOpticsResponseCurve.xls">optiques de WIRCam</a>.
  </li>
  <li>
      La ligne rouge indique le QE nominale des d&eacute;tecteurs HgCdTe
      HAWAII-2RG. La courbe est d&eacute;riv&eacute;e de la figure 1
      de <a rel="external" href="http://www.eso.org/~gfinger/marseille_08/AS08-AS12-9_H2RG_mosaic_gfi_final.pdf">Finger
      et al</a>. La r&eacute;ponse varie quelque peu d'd&eacute;tecteur de d&eacute;tecteur
      et de la temp&eacute;rature. Cependant, la r&eacute;ponse est (assez)
      appartement de fonction de la longueur d'onde, donc l'effet sur
      la forme des r&eacute;ponses finales du filtre est faible.
  </li>
  <li>
      La ligne de cyan repr&eacute;sente la transmission de l'atmosph&egrave;re. La
      courbe &eacute;tait d'obtenir &agrave; partir du <a rel="external" href="http://www.gemini.edu/sciops/telescopes-and-sites/observing-condition-constraints/ir-transmission-spectra">site
      Gemini</a>, cette courbe montre la transmission pour une colonne
      de vapeur d'eau de 1.6 mm et d'une masse d'air de 1.5. La
      transmission atmosph&eacute;rique varie en fonction de la masse d'air
      et de la colonne d'eau. Cependant, il ne concerne
      que le bord sensiblement rouge du filtre de K. Depuis WIRCam
      utilise un filtre K court, les transmissions peuvent &ecirc;tre en
      toute s&eacute;curit&eacute; &ecirc;tre n&eacute;glig&eacute;es pour la plupart des usages.
  </li>
</ul>
<img class="img-responsive" src="/static/images/wirwolf/wirfil.gif" alt="syst&eacute;me de filtres WIRCam"/>
<p>
    Les courbes de r&eacute;ponse finaux prenant en compte de tous les
    facteurs ci-dessus sont donn&eacute;s en format texte ici:
</p>
<ul>
  <li><a href="/static/files/wirwolf/Ywircam.fil">bande-Y</a></li>
  <li><a href="/static/files/wirwolf/Jwircam.fil">bande-J</a></li>
  <li><a href="/static/files/wirwolf/Hwircam.fil">bande-H</a></li>
  <li><a href="/static/files/wirwolf/Kwircam.fil">bande-K</a></li>
</ul>
<h2>Les filtres de WIRCam compar&eacute;s aux filtres 2MASS</h2>
<p>
    La figure ci-dessous montre les filtres WIRCam et 2MASS JHK. Les
    courbes de transmission des filtres 2MASS ont &eacute;t&eacute; r&eacute;cup&eacute;r&eacute;s &agrave;
    partir de la
    <a rel="external" href="http://www.ipac.caltech.edu/2mass/releases/allsky/doc/sec6_4a.html">documentation
    du photometrie 2MASS</a>. Les filtres ne sont pas identiques. Le
    filtre WIRCam J est l&eacute;g&egrave;rement plus rouge que le 2MASS J, tandis
    que les filtres WIRCam H et Ks sont l&eacute;g&egrave;rement plus bleu.
</p>
<img class="img-responsive" src="/static/images/wirwolf/wir2mass.gif" alt="syst&eacute;me de filtres WIRCam et 2MASS"/>
<p>
    Les diff&eacute;rences entre les magnitudes AB et Vega pour les deux
    syst&eacute;me de filtres est donn&eacute; dans le table suivant:
</p>
<table>
<tr><th scope="col">Filtre</th><th scope="col">Vega-AB<br/>2MASS</th><th scope="col">Vega-AB<br/>WIRCam</th></tr>
<tr><td>J</td><td>-0.932</td><td>-0.958</td></tr>
<tr><td>H</td><td>-1.418</td><td>-1.399</td></tr>
<tr><td>Ks</td><td>-1.885</td><td>-1.879</td></tr>
</table>
<p>
    Des petites termes de couleurs existent entre les deux syst&eacute;me de filtres. Ces termes de couleurs ont &eacute;t&eacute; mesur&eacute;s de deux fa&ccedil;ons:
</p>
<ul>
  <li>
      Tout d'abord, les r&eacute;ponses des filtres d&eacute;crits ci-dessus ont &eacute;t&eacute;
      multipli&eacute;s par les spectres des <a rel="external" href="http://adsabs.harvard.edu/abs/1998PASP..110..863P">&eacute;toiles
      Pickles</a>. La photom&eacute;trie synth&eacute;tique JHK 
      r&eacute;sultant a &eacute;t&eacute; utilis&eacute; pour mesurer les termes de couleurs. La
      lacune principale de cette m&eacute;thode est que, si l'un des
      spectres ou les courbes des filtres ne sont pas r&eacute;alistes, les
      termes de couleurs d&eacute;riv&eacute;es seront erron&eacute;es.
  </li>
  <li>
      Deuxi&egrave;mement, les termes de couleurs ont &eacute;t&eacute; mesur&eacute;es pour
      plusieurs milliers d'images WIRCam en comparant les magnitudes
      de WIRCam instrumentales &agrave; la photom&eacute;trie 2MASS. Notez que m&ecirc;me
      si le point z&eacute;ro  photom&eacute;trique est inconnue, la terme de
      couleur peut toujours &ecirc;tre mesur&eacute;. L'inconv&eacute;nient de cette m&eacute;thode
      est que les images WIRCam sont beaucoup plus profonde que les
      images 2MASS. Seuls les plus faibles &eacute;toiles 2MASS ne sont pas
      satur&eacute;s. Par cons&eacute;quent leurs couleurs ont tendance &agrave; &ecirc;tre plus
      bruyant que souhaitable, produisant de grandes incertitudes dans
      les termes de couleur mesur&eacute;es.
  </li>
</ul>
<p>
</p>
<p>
    Les r&eacute;sultats sont pr&eacute;sent&eacute;s ci-dessous. Les panneaux sup&eacute;rieurs
    montrent les r&eacute;sultats de la photom&eacute;trie synth&eacute;tique. Les
    &eacute;quations terme de couleur affich&eacute;s proviennent des r&eacute;gression
    lin&eacute;aire &agrave; la photom&eacute;trie synth&eacute;tique. Les histogrammes sur les
    panneaux inf&eacute;rieurs montrent la r&eacute;partition mesur&eacute;e des termes de
    couleurs. Les &eacute;quations terme de couleur indiqu&eacute;s repr&eacute;sentent la
    mode des valeurs des histogrammes terme de couleur .
</p>
<img class="img-responsive" src="/static/images/wirwolf/wirctcor.gif" alt="termes de couleurs WIRCam/2MASS"/>
<p>
    Les r&eacute;sultats sont en accord &eacute;troit, ce qui indique que les
    r&eacute;ponses des filtres sont assez r&eacute;alistes et que les couleurs
    mesur&eacute;es, tandis que bruyant, n'ont pas de probl&egrave;mes syst&eacute;matiques. La
    plus grande diff&eacute;rence est pour la bande K. Heureusement, la
    dispersion dans couleurs stellaires en H-K est relativement faible (0.5
    mags) de sorte qu'un changement 0.009 en terme de couleur ne se
    traduit que pour un 0.0045 grandeur de d&eacute;calage du point z&eacute;ro.
</p>
<p>
    Les termes de couleurs observ&eacute;es ont &eacute;t&eacute; adopt&eacute;es:
</p>
<pre>
J_WIRcam = J_2MASS - 0.064 * (J-H)_2MASS
H_WIRcam = H_2MASS + 0.031 * (J-H)_2MASS
K_WIRcam = K_2MASS + 0.058 * (H-K)_2MASS
</pre>
