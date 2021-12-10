---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/astro.html
title: Vérifications de l'astrometrie
altLangPage: /en/wirwolf/docs/astro.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
    - link: /fr/wirwolf/docs/astro.html
      title: Vérifications de l'astrometrie
---
<p>
    Cette page d&eacute;crit la s&eacute;rie de v&eacute;rifications qui sont faites sur la
    calibration astrom&eacute;trique dans WIRwolf. Pour chaque images
    empil&eacute;, le catalogue est jumell&eacute;e avec les catalogues de
    chacune des tranches d'image d'entr&eacute;e pour trouver des erreurs
    catastrophiques La diff&eacute;rence dans les positions sont examin&eacute;es de
    multiples fa&ccedil;ons. Les images valid&eacute;es ont des erreurs
    astronom&eacute;triques typiques de 0.04 "(internes) et 0.17" (externe).
</p>
<p>
    Voici la comparasion entre le catalogue de l'exposition 945102
    (tranche 2) et le catalogue finale (groupe WIRwolf: GW001.083.632
    09,749, H filtre) sont compar&eacute;es. Le graphique ci-dessous montre
    un &agrave; moustaches des r&eacute;sidus astrom&eacute;triques dans le panneau en haut
    &agrave; gauche. La diff&eacute;rence de position dans les deux catalogues &eacute;tant
    compar&eacute;es est repr&eacute;sent&eacute; par une ligne (fortement exag&eacute;r&eacute;e en
    longueur). Le panneau en bas &agrave; gauche montre un nuage de points
    des r&eacute;sidus dans la RA et Dec. Les deux panneaux de droite
    montrent les r&eacute;sidus dans RA et Dec en fonction Dec et RA
    respectivement. Bien que la dispersion varie dans certaines
    sections du champ, il n'existe aucune preuve &eacute;vidente pour des
    d&eacute;calages syst&eacute;matiques.
</p>
<img src="/static/images/wirwolf/GW001.083.632+09.749.H.945102pf02.whi.ast.gif" alt="R&eacute;sidus astrometriques graphique moustaches"/>
<p>
    Le graphique ci-dessous montre un graphique moustaches des r&eacute;sidus
    astrom&eacute;triques. Dans ce cas cependant, les changements sont en moyenne
    plus petites r&eacute;gions, de 0,05 degr&eacute;s rencontrerez. Il est maintenant
    possible de mesurer de petites variations syst&eacute;matiques. Le plus grand
    changement ici est de 0.01 secondes d'arc, soit 3% de 0,3 seconde
    d'arc. Alors que tous les changements syst&eacute;matiques ind&eacute;sirable, 0.01
    est acceptable. Groupes montrant des d&eacute;calages de plus de 0.06'' (soit
    un cinqui&egrave;me de un pixel WIRCAM) sont rejet&eacute;es dans n'importe quel
    patch 0.05 degr&eacute;s sont rejet&eacute;es.
</p>
<img src="/static/images/wirwolf/GW001.083.632+09.749.H.945102pf02.bad.ast.gif" alt="R&eacute;siduelles astrometriques: mauvais d&eacute;calages"/>
<p>
    Le graphique ci-dessous montre un graphique moustaches des r&eacute;sidus
    astrom&eacute;triques, semblables au panneau en haut &agrave; gauche de la parcelle
    ci-dessus. Les r&eacute;sidus ont &eacute;t&eacute; exag&eacute;r&eacute;e &agrave; un degr&eacute; encore plus
    grand. L'orientation des vecteurs est essentiellement al&eacute;atoire dans
    ce cas. Pour tester cela, les vecteurs sont regroup&eacute;s. Pour chaque
    vecteur, l'angle des vecteurs de tous les voisins avec une minute
    d'arc sur le ciel de position sont compar&eacute;es. Si les vecteurs voisins
    sont pour la plupart parall&egrave;les au vecteur (par exemple, si 90% de
    leurs angles de position sont &agrave; 30 degr&eacute;s au vecteur en question), ce
    qui sugg&egrave;re que d&eacute;calage syst&eacute;matique ph&eacute;nom&egrave;ne se produit, le vecteur
    est marqu&eacute; comme mauvais. Cela peut, bien entendu, se produire de
    fa&ccedil;on al&eacute;atoire. Si 20 ou plusieurs vecteurs d'un champ sont trouv&eacute;s
    d'avoir des voisins plus ou moins parall&egrave;les, le groupe est
    rejet&eacute;e. Si 5 ou plusieurs vecteurs sont mauvais, le groupe est soumis
    &agrave; un autre examen visuelle. Toutefois, si une image a moins de 20
    mauvaises vecteurs, l'inspection visuelle indique g&eacute;n&eacute;ralement pas de
    probl&egrave;mes.
</p>
<img src="/static/images/wirwolf/GW001.083.632+09.749.H.945102pf02.ter.ast.gif" alt="R&eacute;sidus astrometriques: d&eacute;calages terribles, bonne example"/>
<p>
    Le graphique ci-dessous montre un exemple o&ugrave; l'astrom&eacute;trie a
    &eacute;chou&eacute;. Plusieurs zones sont visibles o&ugrave; les vecteurs sont
    parall&egrave;les. Ils sont mis en &eacute;vidence avec des points rouges.
</p>
<img src="/static/images/wirwolf/GW001.035.164+50.688.J.1101035pf01.ter.ast.gif" alt="R&eacute;sidus astrometriques: d&eacute;calages terribles, mauvaise example"/>
<p>
    Les parcelles ci-dessus sont utilis&eacute;s pour diagnostiquer les
    erreurs catastrophiques en astrom&eacute;trie. Plus g&eacute;n&eacute;ralement, les
    erreurs astrom&eacute;triques g&eacute;n&eacute;ralement internes se trouvent &agrave; environ
    0.04''. Ceci est illustr&eacute; dans l'histogramme ci-dessous.
</p>
<img src="/static/images/wirwolf/wirastintpf.gif" alt="Histogramme des erreurs internes astrom&eacute;triques"/>
<p>
    De m&ecirc;me, les r&eacute;sidus de astrom&eacute;triques &agrave; l'&eacute;gard de 2MASS sont
    pr&eacute;sent&eacute;s dans la figure de droite. Ils sont g&eacute;n&eacute;ralement
    d'environ 0.17 secondes d'arc. Bien s&ucirc;r, la plupart des &eacute;toiles
    dans ces comparaisons sont &agrave; la limite de 2MASS, donc ces chiffres
    sont domin&eacute;es par les erreurs al&eacute;atoires. Il n'existe aucune
    preuve de d&eacute;calages syst&eacute;matiques entre 2MASS et les images WIRwolf.
</p>
<img src="/static/images/wirwolf/wirast2mass.gif" alt="Histogramme des erreurs astrom&eacute;triques externes"/>
