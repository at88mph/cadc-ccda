---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/astro.html
title: Vérifications de l'astrometrie
altLangPage: /en/megapipe/docs/astro.html
dateModified: 2021-12-08
signing: layout.signing
nositesearch: layout.nositesearch

nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/docs/astro.html
      title: Vérifications de l'astrometrie
---

<p>
    La pr&eacute;cision astrom&eacute;trique interne (entre les images empil&eacute;es d'un
    seule groupe) est g&eacute;n&eacute;ralement 0.04 secondes d'arc radialement ou
    0.025 dans une direction simple. La r&eacute;p&eacute;tabilit&eacute; (les r&eacute;sidus de
    deux d&eacute;terminations astrom&eacute;triques compl&egrave;tement ind&eacute;pendants), est
    d'environ 0.06 secondes d'arc. La pr&eacute;cision astrom&eacute;trique externe
    (entre les piles et le cadre de r&eacute;f&eacute;rence externe) est
    g&eacute;n&eacute;ralement 0.20 arcseconds radialement ou 0.14 dans une
    direction simple.
</p>
<ul>
  <li><a href="#int">Pr&eacute;cision interne</a></li>
  <li><a href="#rep">R&eacute;p&eacute;tabilit&eacute;</a></li>
  <li><a href="#ext">Pr&eacute;cision externe</a></li>
</ul>
<h2 id="int">Pr&eacute;cision interne</h2>
<p>
   La pr&eacute;cision interne est v&eacute;rifi&eacute; en ex&eacute;cutant SExtractor sur
    chaque image empil&eacute;s dans chaque bande de chaque groupe et
    l'obtentant des catalogues de positions d'objet. Les catalogues de
    position pour chaque bande sont jumel&eacute;s les uns aux autres et les
    objets communes identifi&eacute;s. Si l'astrom&eacute;trie est parfait, alors la
    position d'un objet dans chaque bande sera identique. Dans la
    pratique, il ya des r&eacute;sidus astrom&eacute;triques. L'examen de ces
    r&eacute;sidus donne une id&eacute;e des incertitudes astrom&eacute;triques.
</p>  
<p>
    La figure ci-dessous montre les contr&ocirc;les interne sur
    l'astrom&eacute;trie entre deux images typiques d'un groupe.  Le quart
    sup&eacute;rieur gauche indique la direction et la taille ( fortement
    agrandie ) des r&eacute;sidus astrom&eacute;triques par des segments de
    ligne. Cette graphique est un important de diagnostic de
    l'astrom&eacute;trie parce que, tandis que les r&eacute;sidus sont g&eacute;n&eacute;ralement
    tr&egrave;s petit, il y a des valeurs aberrantes dans toute distribution
    . Tant que ces valeurs aberrantes sont relativement isol&eacute;es les
    unes des autres et pointent dans des directions al&eacute;atoires tout va
    bien. Inversement, si il existe un certain nombre de grands
    r&eacute;sidus &agrave; proximit&eacute; imm&eacute;diate, tous pointant dans la m&ecirc;me
    direction, cela indique un d&eacute;faut d'alignement syst&eacute;matique entre
    les deux images en question . La figure ne montre pas de telles
    distorsions. Le quart inf&eacute;rieur gauche montre les r&eacute;sidus
    astrom&eacute;triques en RA et Dec Les histogrammes rouges montrent la
    r&eacute;partition relative des r&eacute;sidus dans les deux sens . Le
    percentile 68e des r&eacute;sidus est 0.060 secondes d'arc
    radialement. Les deux panneaux de droite montre les r&eacute;sidus dans
    RA et Dec s&eacute;par&eacute;ment .
</p>  
<img src="/static/images/megapipe/astint.gif" alt="Contr&ocirc;le de l'astrom&eacute;trie interne"/>
<p>
    Dans l'ensemble, les r&eacute;sidus de astrom&eacute;triques sont d'environ 0.04
    secondes d'arc (68e percentile) dans un sens radial ou environ
    0.025 dans une direction simple. Notez qu'il devrait y avoir un
    facteur de &radic;2 entre ces deux incertitudes .
</p>  
<h2 id="rep">R&eacute;p&eacute;tabilit&eacute;</h2>
<p>
    Le test d&eacute;crit ci-dessus a &eacute;t&eacute; appliqu&eacute;e &agrave; chaque paire d'images &agrave;
    l'int&eacute;rieur de chacun des groupes avec des r&eacute;sultats
    similaires. Bien s&ucirc;r, cela pourrait ne pas &ecirc;tre trop surprenant,
    puisque les images ont &eacute;t&eacute; enregistr&eacute;es &agrave; l'autre en premier
    lieu. Par exemple, s'il n'y a g i et les donn&eacute;es d'un groupe,
    l'image i est faite en premier et ensuite les donn&eacute;es de g est
    mapp&eacute; astrom&eacute;triquement &agrave; l'image de i comme d&eacute;crit dans
    la <a href="proc.html#astcal">documentation de la calibration
    astrometrique</a>. Par cons&eacute;quent, m&ecirc;me si il ya des erreurs
    syst&eacute;matiques dans l'astrom&eacute;trie i, les donn&eacute;es de g soit appliqu&eacute;
    aux positions erron&eacute;es, et les r&eacute;sidus entre le g et i l'image
    seront toujours petit.
</p>  
<p>
    Cependant, ce test est &eacute;galement appliqu&eacute; entre les images appartenant
    &agrave; des groupes diff&eacute;rents. Puisque la calibration astrom&eacute;trique d'un
    groupe est compl&egrave;tement ind&eacute;pendant de celui d'un autre groupe, en
    comparant les r&eacute;sidus entre les diff&eacute;rents groupes est un crit&egrave;re plus
    strict de la r&eacute;p&eacute;tabilit&eacute; de l'astrom&eacute;trie. La figure ci-dessout montre
    les r&eacute;sidus astrom&eacute;triques entre deux groupes. Les diff&eacute;rents panneaux
    ont la m&ecirc;me signification que dans la figure pr&eacute;c&eacute;dente. Les groupes
    ont tendance &agrave; se chevaucher uniquement sur les bords, dans une mince
    bande, comme indiqu&eacute; dans le panneau en haut &agrave; gauche. Par cons&eacute;quent,
    le nombre de sources communes entre les deux groupes sera beaucoup
    plus petite que entre deux piles d'un m&ecirc;me groupe. Les r&eacute;sidus sont
    dans ce cas 0.05 secondes d'arc. Plus g&eacute;n&eacute;ralement, en moyenne sur
    toute la chevauche groupe, la r&eacute;p&eacute;titivit&eacute; est de 0.06 secondes d'arc.
</p>  
<img src="/static/images/megapipe/edgeast.gif" alt="Contr&ocirc;le de l'astrom&eacute;trie interne (bords)"/>
<h2 id="ext">Pr&eacute;cision externe</h2>
<p>
    Cela est v&eacute;rifi&eacute; par correspondance dans le catalogue pour chaque
    champ par rapport au catalogue de r&eacute;f&eacute;rence astrom&eacute;trique. Encore
    une fois, la dispersion des r&eacute;sidus astrom&eacute;triques est une mesure
    de l'incertitude, et la pr&eacute;sence de grands r&eacute;sidus localis&eacute;s
    indique un d&eacute;calage  syst&eacute;matique.
</p>  
<p>
    La figure ci-dessous montre les contr&ocirc;les sur l'astrom&eacute;trie
    externe. Les panneaux ont la m&ecirc;me signification que ci-dessus. La
    seule diff&eacute;rence est que les r&eacute;sidus sont plus grandes.  Notez
    qu'il existe des incertitudes dans le catalogue astrom&eacute;trique
    externe ainsi. Dans ce cas, le SDSS est utilis&eacute; comme
    r&eacute;f&eacute;rence. Les incertitudes inh&eacute;rentes &agrave; l'astrom&eacute;trie SDSS sont
    0.05 &agrave; 0.10 secondes d'arc <a rel="external"
    href="https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2003AJ....125.1559P">(Pier,
    et al. 2003)</a>.
</p>  
<img src="/static/images/megapipe/astext.gif" alt="Contr&ocirc;le de l'astrom&eacute;trie externe"/>
