---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/ifilt.html
title: Filtre i
altLangPage: /en/megapipe/docs/ifilt.html
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
    Tel que discut&eacute; sur la
     <a  rel="external" href="https://www.cfht.hawaii.edu/News/MPJun07/">page de
     filtres MegaCam</a>, le filtre i de MegaCam a &eacute;clat&eacute; en Juin
     2007. la remplacement (i.MP9702) n'est pas identique &agrave; l'original
     (i.MP9701). Cette page d&eacute;rive les termes de couleurs pour le nouveau
     filtre i MegaCam.
  </p>
  <h2>Transmission du filtre</h2>
  <p>
    La figure ci-dessous montre les courbes de
    le nouveau filtre MegaCam i en noir
    l'ancien filtreMegaCam i en rouge,
    et le filtre SDSS i en bleu.
    Les courbes de filtrage de MegaCam comprennent la transmission de l'optique TCFH.
    Le nouveau filtre i est d&eacute;cal&eacute; vers la bleue, beaucoup plus proche de la SDSS i que l'ancienne.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/newicurve_fr.gif" alt="Plusieurs filtres i"/>
  <h2>Termes couleurs</h2>
  <p>
    La figure ci-dessous montre le terme de couleur pour le nouveau
    filtre i MegaCam par rapport au syst&egrave;me SDSS. Le terme de couleur
    meilleur ajustement est -0.003
    (r<sub>SDSS</sub>-i<sub>SDSS</sub>). Le vieux terme de couleur est
    manifestement pas valide.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/newiex_fr.gif" alt="Example d'un mesure des termes de couleur"/>
  <p>
    La dispersion dans la figure ci-dessus est grand (environ 0,05
    mags). &Agrave; fin d'am&eacute;liorer la pr&eacute;cision, ce test a &eacute;t&eacute; r&eacute;p&eacute;t&eacute;
    avec environ 300 images des archives du TCFH, tous pris dans le
    nouveau bande i, avec une exposition sup&eacute;rieur &agrave; 100 secondes et
    se trouvant dans la SDSS. Les r&eacute;sultats sont pr&eacute;sent&eacute;s dans la
    figure ci-dessous. Les points montrent les mesures de la termes de
    couleur en fonction de num&eacute;ro l'exposition TCFH. L'histogramme
    vertical montre la r&eacute;partition des valeurs. La ligne horizontale
    indique le terme de couleur m&eacute;diane de -0.003. La dispersion
    autour de cette valeur est 0.0005.
  </p>
  <img class="img-responsive" src="/static/images/megapipe/newi2_fr.gif" alt="Plusieurs mesures de termes de couleur"/>
