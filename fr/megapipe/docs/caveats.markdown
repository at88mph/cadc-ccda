---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/caveats.html
title: Mises en gardes
altLangPage: /en/megapipe/docs/caveats.html
dateModified: 2021-12-08
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
---

<h2>Groupes manquants</h2>
<p>
    Certains groupes ne sont pas disponibles dans l'archive
    MegaPipe. Il peut appara&icirc;tre que si suffisamment de donn&eacute;es ont
    &eacute;t&eacute; prises par le TCFH pour justifier l'empilement, aucun groupe
    n'a &eacute;t&eacute; r&eacute;alis&eacute; avec MegaPipe. Les raisons possibles pour cela
    sont:
</p>
<ul>
  <li>
      CADC n'a pas encore la version Elixir trait&eacute; de certaines
      images. Actuellement, la CADC re&ccedil;oit du TCFH les versions brutes
      de chaque image MegaCam. Les versions pr&eacute;-trait&eacute;es Elixir de
      chaque image CFHTLS sont &eacute;galement transf&eacute;r&eacute;s. Pour les donn&eacute;es
      non-CFHTLS, &agrave; l'heure actuelle, seuls quelques-uns images sont
      transf&eacute;r&eacute;es de CFHT &agrave; CADC. TCFH est en train d'envoyer Elixir
      versions transform&eacute;s de toutes les images MegaCam disponibles,
      ainsi les g&eacute;n&eacute;rations futures de MegaPipe contiennent plusieurs
      groupes.
  </li>
  <li>
      Calibration photom&eacute;trique peut ne pas &ecirc;tre possible pour un
      groupe. Si le groupe ne r&eacute;side pas dans le SDSS, ou si aucune des
      images dans un filtre a &eacute;t&eacute; prise sur une nuit photom&eacute;trique (tel que
      d&eacute;termin&eacute; par <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/skyprobe/home.html">SkyProbe</a>)
      ce filtre de ce groupe ne seront pas trait&eacute;es.  
  </li>
  <li>
      Calibration astrom&eacute;trique peut ne pas &ecirc;tre possible pour un
      groupe. Le pipeline de calibration astrom&eacute;trique d&eacute;pend
      l'identification des sources compactes. S'il n'y a pas
      suffisamment de sources compactes visible dans l'image, il peut
      &eacute;chouer. Alternativement, le pipeline de astrom&eacute;trique peut &ecirc;tre
      confondu si il ya trop de sources. Ces deux cas sont discut&eacute;s
      dans les sections suivantes.
  </li>
</ul>
<h2>Champs encombr&eacute;s</h2>
<p>
    La calibration astrom&eacute;trique d&eacute;pend faire la correspondance
    catalogues observ&eacute;es pour aux catalogues de r&eacute;f&eacute;rence. Dans les
    champs encombr&eacute;s, l'algorithme d'appariement peut devenir confus
    et mal identifier les sources dans certains cas. Cela provoque le
    pipeline astrom&eacute;trique &agrave; faire l'&eacute;chec. Lorsque cela se produit,
    les images qui en r&eacute;sultent ont des &eacute;toiles visibles enduits et
    doubl&eacute;s. Ces images ont &eacute;t&eacute; retir&eacute;s de l'analyse.
</p>
<h2>Sources &eacute;tendues</h2>
<p>
    Plusieurs des outils compris dans MegaPipe (AstroGwyn, SExtractor,
    Swarp) ont &eacute;t&eacute; d&eacute;velopp&eacute; initialement pour une utilisation dans
    les champs de latitude galactique &eacute;lev&eacute;e. Ces champs contiennent
    un nombre mod&eacute;r&eacute; de sources compacts et isol&eacute;s. Lorsque les m&ecirc;mes
    outils sont appliqu&eacute;s d'autres champs, les r&eacute;sultats ne sont pas
    toujours optimales. C'est particuli&egrave;rement vrai des champs
    contenant des sources &eacute;tendues telles que des n&eacute;buleuses ou
    galaxies proches. Les n&eacute;buleuses qui contiennent peu de sources
    compactes ne peuvent pas &ecirc;tre calibr&eacute;s astrom&eacute;triquement. D'autres
    champs contiennent suffisamment de sources pour la calibration
    astrom&eacute;trique, mais des probl&egrave;mes se posent au stade de Swarp. Si
    l'&eacute;mission &eacute;tendue varie peu &agrave; peu (comme dans une
    grande n&eacute;buleuse) le fond de soustraction de Swarp supprime
    l'&eacute;mission &eacute;tendue en m&ecirc;me temps car il &eacute;limine le fond de ciel,
    laissant un champ vide. Si l'&eacute;mission &eacute;tendue a de fortes
    variations (comme le bras en spirale d'une galaxie voisine), la
    soustraction de fond Swarp peut produire des r&eacute;sultats 
    &eacute;tranges.
</p>
<p>
    Ces probl&egrave;mes touchent principalement les images prises dans le
    cadre du <a rel="external" href="https://www.cfht.hawaii.edu/HawaiianStarlight/trailer-FR.html">programme
      Starlight Hawa&iuml;enne</a>, mais il ya quelques images de la science
    touch&eacute;s aussi. Ils seront trait&eacute;s dans les futures versions de
    MegaPipe. En attendant, les utilisateurs doivent &ecirc;tre conscients que
    certains soustraction de fond est en cours, ce qui peut affecter
    sources &eacute;tendues.
</p>
<h2>Chevauchement de catalogues</h2>
<p>
    Certains de ces groupes MegaPipe se chevauchent, en g&eacute;n&eacute;ral par une
    petite marge, mais parfois de plus. Les catalogues des groupes en
    cheval seront doubl&eacute;s. C'est-&agrave;-dire, il y aura sources qui
    apparaissent dans deux catalogues diff&eacute;rents. Ce fait est exploit&eacute;
    &agrave; v&eacute;rifier la photom&eacute;trie (comme indiqu&eacute; dans la section sur les
    <a href="photo.html#intern">v&eacute;rifications internes du photometrie</a>), mais
    peut &ecirc;tre ind&eacute;sirable pour certains utilisateurs.
</p>
