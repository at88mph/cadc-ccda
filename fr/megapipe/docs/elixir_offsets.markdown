---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/elixphot.html
title: Décalages photometriques dans Elixir
altLangPage: /en/megapipe/docs/elixphot.html
dateModified: 2021-12-08
signing: layout.signing

nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/docs/proc.html
      title: Procédure de coadditionement
---
<h2>Synopsis</h2>
<p>
    Cette page d&eacute;crit la comparaison des points z&eacute;ro photom&eacute;triques 
    g&eacute;n&eacute;r&eacute;s pour les donn&eacute;es MegaCam par Elixir avec celles calcul&eacute;es
    utilisant le SDSS comme une r&eacute;f&eacute;rence.
    Deux types de d&eacute;calages photom&eacute;triques sont &eacute;tudi&eacute;es.
    Les premiers (les d&eacute;calages de point z&eacute;ro diff&eacute;rentielles )
    sont les diff&eacute;rences dans photom&eacute;trique du point z&eacute;ro
    entre les diff&eacute;rents CCDs dans la m&ecirc;me image.
    Les deuxi&egrave;mes (les d&eacute;calages de point z&eacute;ro absolues)
    sont les diff&eacute;rences entre le points z&eacute;ro moyenne
    d'une image tel que d&eacute;termin&eacute; par le SDSS et celle 
    d&eacute;termin&eacute; par Elixir.
</p>
<p>
    On constate que, pour la plupart, les d&eacute;calages du point z&eacute;ro
    diff&eacute;rentiels sont de l'ordre de 0,03 magnitudes, mais il existe
    d'importantes valeurs aberrantes. Les d&eacute;calages du point z&eacute;ro
    absolues sont assez stables, pour la plupart des groupes, mais des
    d&eacute;calages allant jusqu'&agrave; 0.2 mags existent pour la
    bande <em>u</em>. Des tables de corrections sont pr&eacute;sent&eacute;es: un
    pour les <a href="/static/files/megapipe/ElixirDiffCor">corrections diff&eacute;rentielles</a>
    et un pour les <a href="/static/files/megapipe/ElixirAbsCor">corrections absolues</a>.
</p>
<h2>Contexte</h2>
<p>
    Avant que les donn&eacute;es MegaCam sont trait&eacute;es par MegaPipe, ils sont
    pr&eacute;trait&eacute;es &agrave; Hawaii en utilisant le logiciel Elixir. Elixir
    fournit l'&eacute;limination de la tendance et une calibration
    astrom&eacute;trique initiale. Il fournit &eacute;galement un calibration
    photom&eacute;trique, sur la base de etoiles prises chaque nuit, comme
    d&eacute;crit &agrave; la <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime/megaprimecalibration.html#P2">page
    de calibration page</a>. Ce calibration photom&eacute;trique est utilis&eacute;
    comme base de la calibration photom&eacute;trique MegaPipe, comme discut&eacute;
    dans la <a href="proc.html#photcal">section de calibration
    photom&eacute;trique </a> de la proc&eacute;dure de coaddition MegaPipe.
</p>
<p>
</p>
<h2>D&eacute;calages photometriques diff&eacute;rentielles</h2>
<p>
    Les d&eacute;calages diff&eacute;rentiels sont les d&eacute;calages entre les
    diff&eacute;rents CCDs de une seule image MegaCam, ind&eacute;pendamment du fait
    que l'image a &eacute;t&eacute; visit&eacute; prise en conditions photom&eacute;trique ou
    pas. Id&eacute;alement, le point z&eacute;ro photom&eacute;trique  doit &ecirc;tre la m&ecirc;me &agrave;
    travers le champ de MegaCam. dans la pratique, des diff&eacute;rences
    existent.
</p>
<p>
    Pour &eacute;tudier les D&eacute;calages photometriques diff&eacute;rentielles
    diff&eacute;rentiels, l'archive MegaCam a &eacute;t&eacute; recherch&eacute; pour trouver des images
    correspondant aux crit&egrave;res suivants:
</p>
<ul>
  <li>
    Chaque image doit avoir un temps d'exposition sup&eacute;rieur &agrave; 60 secondes
  </li>
  <li>
    Chaque image doit se situer dans le SDSS
  </li>
  <li>
    Aucun pair d'images avec la m&ecirc;me CRUNID doivent se situer &agrave;
    0.3 degr&eacute; par rapport &agrave; l'autre. (Il s'agit de s'assurer que les
    &icirc;lots de mauvais photom&eacute;trie SDSS n'affectent pas le r&eacute;sultat
    final).
  </li>
</ul>
<p>
    Chacune des images a &eacute;t&eacute; calibr&eacute; astrom&eacute;triquement en utilisant la
    pipeline de MegaPipe normale. Les points z&eacute;ro photom&eacute;triques ont
    &eacute;t&eacute; calcul&eacute;es s&eacute;par&eacute;ment pour chaque CCD. La diff&eacute;rence entre les
    diff&eacute;rents points z&eacute;ro et la moyenne de tous les points z&eacute;ro a &eacute;t&eacute;
    calcul&eacute;. Pusique les images n'ont pas &eacute;t&eacute; n&eacute;cessairement pris dans
    des conditions photom&eacute;triques, le point z&eacute;ro Elixir point z&eacute;ro
    peut ne pas &ecirc;tre valide, et a donc &eacute;t&eacute; ignor&eacute; pour cette &eacute;tape. Le
    vieux filtre i (I.MP9701) et la nouvelle filtre i (I.MP9702) ont &eacute;t&eacute;
    trait&eacute;s s&eacute;par&eacute;ment.
</p>
<p>
    Les point z&eacute;ro diff&eacute;rentiels r&eacute;sultant ont &eacute;t&eacute; regroup&eacute;es par
    filtre et CRUNID. Pour chacun des CCD, un moyen photom&eacute;trique
    d&eacute;calage du point z&eacute;ro a &eacute;t&eacute; calcul&eacute; pour chacun des filtre /
    CRUNID combinaisons. L'individu et m&eacute;dian des d&eacute;calages de point
    z&eacute;ro ont &eacute;t&eacute; trac&eacute;e. Dans ces graphique les lignes noires montrent
    les d&eacute;calages individus  d u point z&eacute;ro (SDSS-Elixir) en fonction du
    nombre de CCD. la ligne rouge superpos&eacute;e montre les m&eacute;dianes des
    d&eacute;calages de point z&eacute;ro. Il y a clairement une certaine dispersion
    de la m&eacute;diane, indiqu&eacute; par les lignes noires et par les barres
    d'erreur (1 sigma). Deux exemples sont pr&eacute;sent&eacute;s
    ci-dessous. (Autres peut &ecirc;tre trouv&eacute; dans
    cette <a href="/static/files/megapipe/dphotpics.tar.gz">archive</a>).
</p>
<p>
    Dans certains cas, les variations entres les CCDs sont de petite
    taille, comme indiqu&eacute; dans la figure ci-dessous, pour la bande r,
    CRUNID = 03AM05. Le d&eacute;calage typique est de 0.01 mags avec une gamme
    extr&ecirc;me d'environ 0.03 mags
</p>
<img class="img-responsive" src="/static/images/megapipe/D.R.MP9601.03AM05.gif" alt="D&eacute;calages diff&eacute;rentielles en r, CRUNID=03AM05"/>
<p>
    Dans d'autres cas, les variations entres les CCDs  sont assez
    grandes, comme indiqu&eacute; dans la figure &agrave; droite de la (nouvelle)
    bande i, CRUNID=08AM05. Voici le type de d&eacute;calage est d'environ
    0.03 mags avec une gamme extr&ecirc;me d'environ 0.09 mags.
</p>
<img class="img-responsive" src="/static/images/megapipe/D.I.MP9702.08AM05.gif" alt="D&eacute;calages diff&eacute;rentielles en i, CRUNID=08AM05"/>
<p>
</p>
<p>
    Une <a href="/static/files/megapipe/ElixirDiffCor">table des d&eacute;calages</a> pour tous
    CRUNID de 2003 &agrave; aujourd'hui a &eacute;t&eacute; produit. Les deux premi&egrave;res
    colonnes sont le filtre et le CRUNID. Les 36 prochaines colonnes
    contiennent le point z&eacute;ro corrections, qui devraient &ecirc;tre ajout&eacute;s &agrave;
    l'Elixir du point z&eacute;ro pour chaque CCD.
</p>
<p>
    Les corrections ont &eacute;t&eacute; g&eacute;n&eacute;r&eacute;es directement par CRUNIDs et par
    filtre o&ugrave; il y avait suffisamment de donn&eacute;es pour le faire de
    mani&egrave;re fiable (plus de 3 expositions par CRUNID/filtre). Pour les
    autres, les corrections sont interpol&eacute;es entre les CRUNIDs
    pr&eacute;c&eacute;dents et subs&eacute;quents. Regardant tous les images dans
    l'<a href="/static/files/megapipe/dphotpics.tar.gz">archive</a> dans l'ordre montre que
    les corrections changent assez lentement dans le temps, ce qui
    indique que l'interpolation est une chose sens&eacute;e &agrave; faire. Les
    graphiques de la archive correspondant &agrave; des corrections
    interpol&eacute;es sont &eacute;tiquet&eacute;s avec "Interpol&eacute;e" en bleu . De m&ecirc;me,
    lorsque l'on consid&egrave;re les graphiques en s&eacute;quence, les graphiques
    marqu&eacute;es interpol&eacute;e ne semble pas exag&eacute;r&eacute;. En outre, il quelques
    cas o&ugrave; il ya des donn&eacute;es pour un combinaison filtre/CRUNID, mais
    pas assez pour d&eacute;terminer de fa&ccedil;on fiable les d&eacute;calages. C'est-&agrave;-
    dire, il ya des combinaisons filtre / CRUNID de plus de 0, mais
    inf&eacute;rieure &agrave; 3 expositions . Dans ce cas, les d&eacute;calages
    interpol&eacute;es sont en bon accord avec les quelques d&eacute;calages
    mesur&eacute;s.
</p>
<h2>D&eacute;calages photometriques absolues</h2>
<p>
    L'&eacute;tape suivante consiste &agrave; mesurer les d&eacute;calages de la mosa&iuml;que
    de MegaCam dans son ensemble par rapport &agrave; la SDSS. Pour mesurer
    ceci pour une image donn&eacute;e, on compare le point z&eacute;ro d&eacute;termin&eacute; &agrave;
    partir des mots-cl&eacute;s Elixir dans l'ent&ecirc;te &agrave; celle d&eacute;termin&eacute;
    en comparant les magnitudes instrumentales aux magnitudes des
    &eacute;toiles dans le SDSS. Comme pr&eacute;c&eacute;demment, l'archive MegaCam a &eacute;t&eacute;
    recherch&eacute; pour toutes les images appropri&eacute;es. Dans ce cas, les
    crit&egrave;res sont l&eacute;g&egrave;rement diff&eacute;rentes. Pour que l'Elixir point z&eacute;ro
    pour &ecirc;tre valable, la nuit doit photom&eacute;triques. Que ce soit ou non
    une nuit photom&eacute;trique a &eacute;t&eacute; d&eacute;termin&eacute;e en utilisant les graphiques de
    <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/skyprobe/home.html">SkyProbe</a>.
    Les &icirc;lots  de photom&eacute;trie SDSS suspect sont petites
    (0,1 degr&eacute;s carr&eacute;s au plus) donc l'exigence que tout les pointages
    doivent &ecirc;tre diff&eacute;rent peuvent &ecirc;tre assouplies. Les nouveaux crit&egrave;res
    sont alors:
</p>
<ul>
  <li>
    Chaque image doit avoir un temps d'exposition sup&eacute;rieur &agrave; 60 secondes
  </li>
  <li> 
    Chaque image doit se situer dans le SDSS
  </li>
  <li> 
    La nuit doit &ecirc;tre photom&eacute;trique
  </li>
</ul>
<p>
    Pour chaque image, la diff&eacute;rence moyenne du point z&eacute;ro entre le
    SDSS et Elixir a &eacute;t&eacute; mesur&eacute;e. SExtractor est tourn&eacute;e
    sur l'image avec MAG_ZEROPOINT = 0. Le catalogue qui en r&eacute;sulte est
    calibr&eacute; astrom&eacute;triquementen utilisant la syst&egrave;me MegaPipe normal.
    La partie pertinente du catalogue SDSS est
    extraites du  <a rel="external" href="http://skyserver.sdss3.org/dr9/en/tools/search/">serveur de donn&eacute;es SDSS</a>.
    Les magnitudes SDSS sont convertis en grandeurs MegaCam &agrave; l'aide
    des transformations d&eacute;crites sur le page 
    d&eacute;crivant les <a href="filt.html">filtres ugriz de MegaCam </a>.
    Les transformations sont:
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
    Le catalogue d'images est adapt&eacute;e au catalogue SDSS. La diff&eacute;rence
    entre les magnitudes instrumentales et les magnitudes SDSS donne le
    photom&eacute;trique du point z&eacute;ro SDSS. Le point z&eacute;ro Elixir est calcul&eacute;e
    &agrave; partir des mots-cl&eacute;s ent&ecirc;te de la mani&egrave;re suivante:
</p>
<p>
  ZP<sub>Elixir</sub> = PHOT_C + PHOT_K * (AIRMASS-1) + 2.5 * log10(EXPTIME)
</p>
<p>
    Le d&eacute;calage diff&eacute;rentiel d&eacute;crit ci-dessus ont &eacute;galement &eacute;t&eacute;
    appliqu&eacute;e aux points z&eacute;ro Elixir . Notez que parce que les
    d&eacute;calages de diff&eacute;rentiel se moyennennt &agrave; 0 sur l'ensemble de la
    mosa&iuml;que (par conception), l'application de ces d&eacute;calages
    seulement r&eacute;duit la dispersion des CCD z&eacute;ro points individuels sur
    la moyenne du point z&eacute;ro, mais ne change pas la valeur de la
    moyenne du point z&eacute;ro .
</p>
<p>
    Les diff&eacute;rences de point z&eacute;ro ont ensuite &eacute;t&eacute; regroup&eacute;s par le filtre
    et CRUNID. La m&eacute;diane de diff&eacute;rence du point z&eacute;ro a &eacute;t&eacute; calcul&eacute;e ainsi
    que l'&eacute;cart-type de cette m&eacute;diane. Ceci est r&eacute;sum&eacute; dans le 
    <a href="/static/files/megapipe/ElixirAbsCor">table des d&eacute;calage absolus</a>. Pour
    certaines combinaisons filtre/CRUNID, aucune donn&eacute;es n'ont &eacute;t&eacute; prise
    sur les nuits photom&eacute;triques. Pour les autres combinaisons, les
    donn&eacute;es sont disponibles pour plusieurs nuits photom&eacute;triques au
    cours d'une seule op&eacute;ration. Dans un certain nombre de cas, il ya
    variation de la diff&eacute;rence de point z&eacute;ro entre deux nuits
    apparemment photom&eacute;triques de la m&ecirc;me s&eacute;rie. Les diff&eacute;rences de
    point z&eacute;ro peut &ecirc;tre stable dans une seule nuit, mais il ya
    diff&eacute;rence de la nuit &agrave; la nuit. En outre, il existe parfois des
    variations dans les diff&eacute;rences de point z&eacute;ro &agrave; l'int&eacute;rieur d'une
    seule nuit, ce qui indique que la nuit n'&eacute;tait pas photom&eacute;trique.
</p>
<p>
    Les diff&eacute;rences de point z&eacute;ro pour les combinaisons filtre / CRUNID
    ont &eacute;t&eacute; class&eacute;s en trois cat&eacute;gories, la mention "Aucune_information",
    "Excellent", et "marginale" dans le table.
</p>
<ul>
  <li>
    <strong>Aucune_information:</strong> Aucune donn&eacute;e n'a &eacute;t&eacute; prise sur les nuits photom&eacute;triques au cours de cette cam&eacute;ra terme avec ce filtre.
  </li>
  <li>
    <strong>Excellent:</strong> Les donn&eacute;es ont &eacute;t&eacute; prises sur un moins deux nuits photom&eacute;triques au cours de ceterme du cam&eacute;ra, et au moins six images ont &eacute;t&eacute; prises sur ces nuits, et la dispersion de la m&eacute;diane diff&eacute;rence de point z&eacute;ro est inf&eacute;rieur &agrave; 0,02 magnitudes.
  </li>
  <li>
    <strong>Marginale:</strong> Il ya des donn&eacute;es, mais il ne r&eacute;pond pas aux crit&egrave;res &eacute;nonc&eacute;s ci-dessus. Soit des donn&eacute;es n'a pas &eacute;t&eacute; pris &agrave; plus d'une nuit, ou de moins de 6 images ont &eacute;t&eacute; prises, ou la dispersion est grande.
  </li>
</ul>
<p>
    Les graphiques qui suivent montrent l'histoire du point z&eacute;ro de
    MegaCam pour les filtres de ugriz. Les mesures sont regroup&eacute;s par
    CRUNID, comme indiqu&eacute; par une colonne sur le c&ocirc;t&eacute; gauche de chaque
    parcelle. Les plus anciennes se trouve au sommet. Les cas
    "Excellent" sont indiqu&eacute;es en rouge. Les cas "Marginales" sont
    indiqu&eacute;es en noir. Le d&eacute;calage moyen est repr&eacute;sent&eacute; par une ligne
    verte.
</p>
<p>
    Histoire du point z&eacute;ro dans la bande u.  Il existe
    des variations consid&eacute;rables, avec des d&eacute;calages aussi grand que 0.25
    magnitudes.
</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.U.MP9301.gif" alt="Histoire du point z&eacute;ro dans la bande u"/>
<p>
    Histoire du point z&eacute;ro dans la bande g. Ici, le point z&eacute;ro est beaucoup plus stable.
</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.G.MP9401.gif" alt="Histoire du point z&eacute;ro dans la bande g"/>
<p>Histoire du point z&eacute;ro dans la bande r</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.R.MP9601.gif" alt="Histoire du point z&eacute;ro dans la bande r"/>
<p>Histoire du point z&eacute;ro dans l'ancienne  bande i</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.I.MP9701.gif" alt="Histoire du point z&eacute;ro dans l'ancienne  bande i"/>
<p>Histoire du point z&eacute;ro dans la nouvelle bande i</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.I.MP9702.gif" alt="Histoire du point z&eacute;ro dans la nouvelle bande i"/>
<p>Histoire du point z&eacute;ro dans la bande z</p>
<img class="img-responsive" src="/static/images/megapipe/ASUM.Z.MP9801.gif" alt="Histoire du point z&eacute;ro dans la bande z"/>
<p>
    Notez que dans tous les cas, il y a un faible mais mesurable
    diff&eacute;rence entre le point z&eacute;ro SDSS et le point z&eacute;ro d'Elixir. Pour
    tous filtres sauf <em>u</em>, en utiliserune correction du point z&eacute;ro
    moyen unique peut &ecirc;tre acceptable. Ces corrections moyens du point
    z&eacute;ro (qui devrait s'ajouter aux points z&eacute;ro d'Elixir) sont les suivants:
</p>
<pre>
U.MP9301    -0.031
G.MP9401     0.048
R.MP9601     0.036
I.MP9701     0.051
I.MP9702     0.028
Z.MP9801     0.094
</pre>
<p>
    La dispersion terme par terme de la d&eacute;calage centrale est de
    seulement 0.03 magnitudesenviron, &agrave; quelques exceptions pr&egrave;s. Pour
    la filtre <em>u</em>, sur d'autre part, si l'on veut &eacute;viter les
    erreurs de point z&eacute;ro jusqu'&agrave; 0.25 magnitudes une correction doit
    &ecirc;tre appliqu&eacute; au point z&eacute;ro d'Elixir. Les valeurs dans
    la <a href="/static/files/megapipe/ElixirAbsCor">table de corrections </a> dovient &ecirc;tre
    ajout&eacute; au point z&eacute;ro d'Elixir.
</p>
