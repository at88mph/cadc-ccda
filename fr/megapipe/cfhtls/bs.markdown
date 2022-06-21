---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/bs.html
title: Sélection des images de meilleur seeing
altLangPage: /en/megapipe/cfhtls/bs.html
dateModified: 2021-12-09
signing: layout.signing

nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/cfhtls/index.html
      title: CFHTLS
    - link: /fr/megapipe/cfhtls/dfiq.html
      title: Champs Profonds (meilleur seeing)
---
<p>
    Lors de la construction des image empil&eacute;s, il faut d&eacute;cider combien
    d'images d'entr&eacute;e &agrave; inclure et combien &agrave; jeter. C'est un compromis
    entre la magnitude limite et la qualit&eacute; de l'image (IQ). Quand on
    inclut d'autres images avec de plus en plus mauvaise qualit&eacute; d'image,
    la qualit&eacute; d'image de sortie se d&eacute;grade alors que la profondeur
    augmente.
</p>
<p>
    Quantitativement, le QI d'une pile est tr&egrave;s bien estim&eacute;e par la
    m&eacute;dian du QI de ses images d'entr&eacute;e, c'est &agrave; dire, le IQ de
    l'image d'entr&eacute;e N/2-i&egrave;me.  Pour estimer la magnitude limite, deux
    hypoth&egrave;ses ont &eacute;t&eacute; formul&eacute;es: 1) les effets de IQ sur la
    profondeur ne sont pas importantes (pas tout &agrave; fait vrai) et 2)
    toutes les images d'entr&eacute;e ont le m&ecirc;me temps d'exposition (pour
    les Champ Profonds du CFHTLS, c'est tout &agrave; fait vrai). Dans ce cas
    simplifi&eacute;, l'ampleur de la limitation d'un empilement de N images
    va d'environ 1.25&nbsp;log<sub>10</sub>N.
</p>
<p>
    Ces deux mesures ont &eacute;t&eacute; appliqu&eacute;es aux images d'entr&eacute;e des Champs
    Profonds du CFHTLS.  Les images ont &eacute;t&eacute; class&eacute;s par ordre de
    qualit&eacute; d'image: meilleure seeing premi&egrave;re, pire seeing
    dernier. Comme les images d'entr&eacute;e de nombre augmente, la qualit&eacute;
    de la pile de l'image sera pire, mais la magnitude limite sera
    plus profonde. Les r&eacute;sultats sont pr&eacute;sent&eacute;s dans la grille de
    graphiques ci-dessous. La qualit&eacute; d'image pr&eacute;vue est trac&eacute;e contre
    magnitude limite pr&eacute;vue pour chacun des 5 filtres et les 4 Champs
    Profonds. Les lignes noires montrent &agrave; la fois le IQ et la
    magnitude limite augmente avec le nombre d'images. Les points
    rouges repr&eacute;sentent le lieu g&eacute;om&eacute;trique des empilements complets
</p>
<img src="/static/images/megapipe/fiq.gif" alt="IQ vs. magnitude limite"/>
<p>
    La question est: il y &agrave;-t-il un point favorable sur les
    graphiques, o&ugrave; une am&eacute;lioration de la qualit&eacute; de l'image est &agrave;
    seulement un petit co&ucirc;t dans la magnitude limite? Certains des
    graphiques ont des points o&ugrave; la pente de la ligne
    change. &Eacute;videmment, il est pr&eacute;f&eacute;rable d'&ecirc;tre au niveau ou en
    dessous de ces noeuds.  Id&eacute;alement, tous les images de sortie
    auraient le m&ecirc;me IQ, pour augmenter la pr&eacute;cision de la photom&eacute;trie
    d'ouverture identifi&eacute;.
</p>
<p>
    Au lieu de choisir un seuil unique (par exemple l'empilement le
    meilleur 25% des images, ou empiler que des images avec IQ = 0.7''
    ou mieux) images ont &eacute;t&eacute; inclus afin de produire une qualit&eacute;
    d'image de sortie d&eacute;sir&eacute;e. Cela est possible parce que, comme
    indiqu&eacute; par les points rouges sur la figure ci-dessus, le IQ
    m&eacute;diane d'entr&eacute;e est un excellent indicateur de la IQ de
    sortie. Par cons&eacute;quent, lors du choix d'images d'entr&eacute;e, on
    commence par faire le trie des images en augmentant IQ. Ensuite,
    on descend la liste ordonn&eacute;e jusqu'&agrave; une image d'entr&eacute;e avec le QI
    cible est trouv&eacute;, et puis on continue jusqu' &agrave; deux fois ce nombre
    d'images. Par exemple, si l'on veut un 0.65'' de voir la pile, et
    il ya 41 images voir mieux que 0,65'', il faut empiler les 82
    meilleures images.
</p>
<p>
    La qualit&eacute; de l'image cible choisie &eacute;tait de 0.65'' pour les
    filtres GRIZ et 0.8'' pour le filtre U. La diminution de la seeing
    limits en-dessous 0.8 devient rapidement prohibitif pour la bande
    U.  De m&ecirc;me, les profondeurs de la bande Z et la bande G en
    particulier diminuent rapidement si le IQ cible diminue m&ecirc;me
    l&eacute;g&egrave;rement. La cible U-bande est diff&eacute;rente de celle des autres
    groupes parce que le ciblage IQ=0.65'' comprendrait pas d'images,
    et en ciblant IQ=0.8'' dans les autres groupes permettrait
    d'am&eacute;liorer la seeing l&eacute;g&egrave;rement par rapport aux piles complets. Les
    lignes horizontales bleues de la figure ci-dessus montrent que les
    qualit&eacute;s de l'image cible.
</p>
<p>
    Ces crit&egrave;res ont &eacute;t&eacute; appliqu&eacute; aux images d'entr&eacute;e des Champs
    Profonds CFHTLS et les images choisies ont &eacute;t&eacute; empil&eacute;s. Les
    qualit&eacute; d'image et magnitudes limites r&eacute;sultantes sont
    repr&eacute;sent&eacute;es en forme de points bleus sur la figure ci-dessus. La
    qualit&eacute; d'image est se trouve sur (ou tr&egrave;s l&eacute;g&egrave;rement en dessous
    de) la pr&eacute;diction. Les magnitudes limites sont g&eacute;n&eacute;ralement mieux
    que pr&eacute;vu, puisque la pr&eacute;vision repose sur l'hypoth&egrave;se (pas tout &agrave;
    fait exact) que le IQ n'affecte pas la profondeur.
</p>
