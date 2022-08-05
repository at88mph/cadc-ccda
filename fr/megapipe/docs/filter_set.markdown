---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/filt.html
title: Le système de filtres
altLangPage: /en/megapipe/docs/filt.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/docs/desc.html
      title: Description des données
---

<p>
    Cette page d&eacute;crit les filtres &agrave; bande large de MegaCam et les contraste avec les filtres SDSS et Pan-STARRS
    La version pr&eacute;c&eacute;dente de cette page est disponible <a href="filtold.html">ici</a>.
</p>
<p>
    Il y a eu trois g&eacute;n&eacute;rations de filtres &agrave; large bande pour MegaCam.
    Le premier g&eacute;n&eacute;ration (install&eacute; en 2002), un remplacement pour le
    filtre i-band endommag&eacute;, (Install&eacute; en 2007) et l'ensemble le plus
    r&eacute;cent qui sont plus grand, permettant l'utilisation des 4 CCD,
    les "ailes", de MegaCam (install&eacute; en 2015). Les trois g&eacute;n&eacute;rations
    sont affich&eacute;s ci-bas. Notez la grande filtre (gri) du troisi&egrave;me
    g&eacute;n&eacute;ration.
</p>
<img class="img-responsive" src="/static/images/megapipe/msp123.gif" alt="MegaCam filter set"/>
<p>
    Les transmissions du filtre indiqu&eacute;es incluent la transmission du
    t&eacute;lescope complet (miroir + optique + CCD). Les courbes de
    reflectance/transmission du miroir, l'optique et le CCD sont tir&eacute;es de
    <a rel="external" href="https://adsabs.harvard.edu/abs/2013A%26A...552A.124B">Betoule et al. (2013)</a> et leur <a rel="external" href="http://supernovae.in2p3.fr/snls_sdss/">site web d&eacute;taill&eacute;</a>. Les transmissions du
    filtre pour la premi&egrave;re et la deuxi&egrave;me g&eacute;n&eacute;ration de filtres
    sont &eacute;galement prises &agrave; partir de ce site. Les r&eacute;ponses des
    filtres de la troisi&egrave;me g&eacute;n&eacute;ration de filtres sont prises &agrave;
    partir de 
    <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Filters/megaprime.html">la
    page de filtre CFHT</a>. Les courbes de r&eacute;ponse finale (filtre +
    t&eacute;lescope + CCD) sont donn&eacute;es au format texte ci-dessous. Les
    courbes de filtre incluent &eacute;galement 1.25 airmasses d'att&eacute;nuation
    atmosph&eacute;rique.  Les transmissions du filtre ont &eacute;t&eacute; mesur&eacute;es &agrave;
    plusieurs endroits &agrave; travers le filtre. Les r&eacute;ponses ci-dessous
    sont la transmission moyenne.
</p>
<ul>
  <li>Premi&egrave;re g&eacute;n&eacute;ration:
    <ul>
      <li><a href="/static/files/megapipe/U.MP9301.fil">U.MP9301</a></li>
      <li><a href="/static/files/megapipe/G.MP9401.fil">G.MP9401</a></li>
      <li><a href="/static/files/megapipe/R.MP9601.fil">R.MP9601</a></li>
      <li><a href="/static/files/megapipe/I.MP9701.fil">I.MP9701</a></li>
      <li><a href="/static/files/megapipe/Z.MP9801.fil">Z.MP9801</a></li>
    </ul>
  </li>
  
  <li>Deuxi&egrave;me g&eacute;n&eacute;ration:
    <ul>
      <li><a href="/static/files/megapipe/I.MP9702.fil">I.MP9702</a></li>
    </ul>
  </li>
  <li>Trois&egrave;me g&eacute;n&eacute;ration:
      <ul>
        <li><a href="/static/files/megapipe/U.MP9302.fil">U.MP9302</a></li>
        <li><a href="/static/files/megapipe/G.MP9402.fil">G.MP9402</a></li>
        <li><a href="/static/files/megapipe/R.MP9602.fil">R.MP9602</a></li>
        <li><a href="/static/files/megapipe/I.MP9703.fil">I.MP9703</a></li>
        <li><a href="/static/files/megapipe/Z.MP9901.fil">Z.MP9901</a></li>
      </ul>
  </li>
</ul>
<h2>Comparaison des ensembles des filtres MegaCam, SDSS et Pan-STARRS</h2>
<p>
    Les figures ci-dessous montrent les fonctions finales de
    transmission de filtre MegaCam, divis&eacute;es par g&eacute;n&eacute;ration, ainsi que les
      filtres SDSS et Pan-STARRS.
</p>
<img class="img-responsive" src="/static/images/megapipe/msp1.gif" alt="MegaCam, SDSS and filter set"/>
<img class="img-responsive" src="/static/images/megapipe/msp2.gif" alt="MegaCam, SDSS and filter set"/>
<img class="img-responsive" src="/static/images/megapipe/msp3.gif" alt="MegaCam, SDSS and filter set"/>
<p>
    Les transformations des ensembles de filtrage SDSS et Pan-STARRS
    vers les filtres MegaCam et des filtres MegaCam vers les ensembles
    de filtrage SDSS et Pan-STARRS sont illustr&eacute;es dans les figures
    ci-dessous. Dans chaque trac&eacute;, les points color&eacute;s repr&eacute;sentent la
    photom&eacute;trie synth&eacute;tique, calcul&eacute;s en multipliant les courbes de
    filtre ci-dessus par des spectres de l'atlas de <a rel="external" href="https://adsabs.harvard.edu/abs/1998PASP..110..863P">Pickles
    (1998)</a>, (en bleu) les standards <a rel="external" href="https://www.stsci.edu/hst/observatory/crds/calspec.html">CALSPEC</a>
    (montr&eacute;es en vert) ou un ensemble de spectres de galaxie (montr&eacute;es
    en rouge). Les points noirs indiquent une photom&eacute;trie r&eacute;elle &agrave;
    partir de diff&eacute;rents champs MegaCam.  La ligne magenta montre
    l'ajustement g&eacute;n&eacute;ralement lin&eacute;aire, mais de fois un polyn&ocirc;me. Les
    coefficients sont donn&eacute;s en magenta sur chaque panneau. Les lignes
    magenta verticales indiquent les limites de validit&eacute; d'une
    transformation.
</p>
<h3>De SDSS &agrave; MegaCam</h3>
<p>
    Les relations pour les bandes griz originales proviennent de l'analyse de la
    <a rel="external" href="https://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">groupe SNLS</a>.
    La  relations pour la bande u vient des
    <a  rel="external"  href="https://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">pages web MegaPipe TCFH</a>.
    La <a href="ifilt.html">relation de la nouvelle filtre i</a> a &eacute;t&eacute; calcul&eacute; separement.
</p>
<img class="img-responsive" src="/static/images/megapipe/sdss.sm.megaold.gif" alt="SDSS to MegaCam, old"/>
<p>
    Les relations pour les nouveaux filtres sont pr&eacute;sent&eacute;es
    ci-dessous. Notez l'&eacute;chelle &eacute;largie pour la transformation u-band,
    ce qui est un peu compliqu&eacute;. Notez &eacute;galement que la transformation
    de la u-band ne passe pas par 0,0. Enfin, le filtre gri/large
    n'est pas valable pour les du c&ocirc;t&eacute; rouge de g-i=1.75.
</p>
<img class="img-responsive" src="/static/images/megapipe/sdss.sm.meganew.gif" alt="SDSS to MegaCam, new"/>
<h3>De Pan-STARRS &agrave; MegaCam</h3> 
<p>
    Suivant la convention Pan-STARRS, toutes les transfromations de
    Pan-STARRS &agrave; MegaCam sont exprim&eacute;es en termes de polyn&ocirc;me de
    troisi&egrave;me ordre dans g-i. Notez l'&eacute;chelle extr&ecirc;mement &eacute;tendue
    pour la bande u. Le syst&egrave;me Pan-STARRS ne poss&egrave;de pas une bande u;
    Cette transformation est une extrapolation de la bande g. Cette
    transformation d&eacute;pend aussi de la m&eacute;tallicit&eacute;, donc elle depend du
    latitude galactique.
</p>
<img class="img-responsive" src="/static/images/megapipe/ps.sm.megaold.gif" alt="PS to MegaCam, old"/> 
<img class="img-responsive" src="/static/images/megapipe/ps.sm.meganew.gif" alt="PS to MegaCam, new"/>
<h3>De MegaCam &agrave; SDSS</h3>
<p>
    Premi&egrave;re g&eacute;n&eacute;ration: Il faut &ecirc;tre sceptique de la transformation u-band.
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen1.gif" alt="MegaCam -> SDSS gen1"/>
<p>
    Deuxi&egrave;me g&eacute;n&eacute;ration
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen2.gif" alt="MegaCam -> SDSS gen2"/>
<p>
    Trois&egrave;me g&eacute;n&eacute;ration: Encore une fois, on devrait &ecirc;tre sceptique de la transformation u-band.
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2sdss.gen3.gif" alt="MegaCam -> SDSS gen3"/>
<h3>De MegaCam &agrave; Pan-STARRS</h3>
<p>
    Premi&egrave;re g&eacute;n&eacute;ration: 
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen1.gif" alt="MegaCam -> PS gen1"/>
<p>
    Deuxi&egrave;me g&eacute;n&eacute;ration:
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen2.gif" alt="MegaCam -> PS gen2"/>
<p>
    Trois&egrave;me g&eacute;n&eacute;ration: 
</p>
<img class="img-responsive" src="/static/images/megapipe/mega2ps.gen3.gif" alt="MegaCam -> PS gen3"/>
