---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/photo.html
title: Vérifications de le photometrie
altLangPage: /en/megapipe/docs/photo.html
dateModified: 2021-12-08
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
---

<ul>
  <li><a href="#system">Erreurs syst&eacute;matiques</a></li>
  <li><a href="#extern">Comparaisons externes</a></li>
  <li><a href="#intern">La coh&eacute;rence interne</a></li>
  <li><a href="#cols">Couleurs d'&eacute;toile</a></li>
  <li><a href="#lim">Magnitudes limites</a></li>
</ul>
<h2 id="system">Erreurs syst&eacute;matiques</h2>
<p>
    Dans la mesure du possible, la photom&eacute;trie des images MegaPipe est
    directement li&eacute;e &agrave; la photom&eacute;trie SDSS. Il ya un millier de dans tous
    les champs. Ainsi, les erreurs syst&eacute;matiques de ces images sont
    effectivement nul par rapport &agrave; la SDSS. Les erreurs syst&eacute;matiques
    dans le SDSS sont cit&eacute;s comme 2-3% <a rel="external" href="https://xxx.lanl.gov/pdf/astro-ph/0410195">(Ivezic, et al., 2004)</a>.
</p>
<p>
    Les erreurs syst&eacute;matiques pour MegaPipe images non dans le SDSS sont
    limit&eacute;es par la qualit&eacute; de la calibration photom&eacute;trique Elixir. En
    comparant la calibration photom&eacute;trique Elixir au SDSS sur un grand
    nombre de nuits, les erreurs syst&eacute;matiques sont peuvent estim&eacute;s. La
    dispersion nuit &agrave; nuit est g&eacute;n&eacute;ralement de 0.02 &agrave; 0.03
    magnitudes. Ajout en quadrature l'erreur syst&eacute;matique SDSS (0.025 mags)
    &agrave; l'erreur syst&eacute;matique dans le transfert des standards de primaires
    secondaires (0.025 magnitudes) nous obtenons 0.035 magnitudes
    d'erreur syst&eacute;matique totale.
</p>
<h2 id="extern">Comparaisons externes</h2>
<p>
    Certains groupes de MegaPipe se trouvent dans le SDSS. Cela permet
    de comparer directement les magnitudes dans ces domaines &agrave; une
    r&eacute;f&eacute;rence externe. La graphique ci-dessous montre la diff&eacute;rence entre
    l'image de MegaPipe pour les 5 bandes SDSS (transform&eacute; au syst&egrave;me
    MegaCam comme d&eacute;crit sur le page d&eacute;crivant
    les <a href="filt.html">filtres ugriz MegaCam</a>) et l'accord
    est tr&egrave;s bon. Il n'existe aucune indication pour des d&eacute;calages
    syst&eacute;matiques sup&eacute;rieures &agrave; 0.01 magnitudes. La dispersion est
    aussi relativement faible (au moins au magnitudes mod&eacute;r&eacute;es). Ce
    fait valoir que les termes de couleur dans la transformation
    SDSS-MegaCam sont assez pr&eacute;cis.
</p>
<img src="/static/images/megapipe/magcom.gif" alt="Comparaison avec le SDSS"/>
<p>
    La comparaison ci-dessus s'applique aux images qui ont &eacute;t&eacute;
    calibr&eacute;s en utilisant la photom&eacute;trie SDSS, il n'est donc pas
    surprenant qu'il y ait aucun r&eacute;sidu. Comme un test de l'&eacute;talonnage
    Elixir, un certain nombre de groupes se trouvant dans le SDSS ont
    &eacute;t&eacute; empil&eacute;s en utilisant seulement les points z&eacute;ro d'Elixir . Les
    r&eacute;sidus photom&eacute;triques entre les piles qui en r&eacute;sultent et le SDSS
    &eacute;taient g&eacute;n&eacute;ralement 0.03 magnitudes, compatibles avec les r&eacute;sidus
    photom&eacute;triques entre les particuliers (non empil&eacute;s) images et le
    SDSS.
</p>
<h2 id="intern">La coh&eacute;rence interne</h2>
<p>
    La coh&eacute;rence interne est v&eacute;rifi&eacute;e en comparant les catalogues de
    diff&eacute;rents groupes. Groupes se recoupent parfois l'autre, m&ecirc;me si
    elles ne se chevauchent que par une minute d'arc ou deux, il ya
    g&eacute;n&eacute;ralement plusieurs centaines de sources en commun dans les
    deux catalogues. Etant donn&eacute; que les groupes sont r&eacute;duits
    ind&eacute;pendamment les uns des autres, et &eacute;tant donn&eacute; que souvent, les
    donn&eacute;es ont &eacute;t&eacute; pr&eacute;lev&eacute;s sur des nuits diff&eacute;rents, on compare les
    amplitudes des objets communs &agrave; deux groupes rend possible de
    v&eacute;rifier la coh&eacute;rence interne.
</p>
<p>
    Les erreurs syst&eacute;matiques appara&icirc;tront comme un d&eacute;calage dans la
    m&eacute;diane de la diff&eacute;rence de magnitudes entre les deux groupes,
    comme indiqu&eacute; sur la graphique ci-dessous. Le d&eacute;calage dans ce cas
    est -0.014 magnitudes. Ce m&ecirc;me test est appliqu&eacute; &agrave; toutes les
    paires possibles de groupes o&ugrave; il y avait plus de 100 objets en
    commun entre les catalogues. Le d&eacute;calage typique &eacute;tait de 0.015
    magnitudes. C'est plus petit que les variations nuit-&agrave;-nuit des
    points z&eacute;ro d'Elixir (qui est de 0.03 magnitudes) pour deux
    raisons: de nombreux groupes se trouvent dans le SDSS sorte que
    leur calibration photom&eacute;trique ne d&eacute;pend pas des points z&eacute;ro
    d'Elixir, et en outre, certains groupes voisins ont &eacute;t&eacute; observ&eacute;s
    sur la m&ecirc;me nuit de sorte que toute erreur syst&eacute;matique dans les
    points z&eacute;ro Elixir seront communs aux deux groupes.
</p>
<img src="/static/images/megapipe/edgemag.gif" alt="Exemple de comparaison interne photom&eacute;trique"/>
<h2 id="cols">Couleurs d'&eacute;toile</h2>
<p>
    Un diagnostic utile de la photom&eacute;trie est d'examiner les couleurs des
    &eacute;toiles. Les &eacute;toiles ont un locus relativement limit&eacute; dans l'espace
    couleur. Les d&eacute;calages entre les couleurs observ&eacute;es et synth&eacute;tiques
    indique une erreur dans le point z&eacute;ro. Ce test peut &ecirc;tre appliqu&eacute; sur
    les champs qui ne se trouvent pas dans le SDSS et ne peuvent pas &ecirc;tre
    contr&ocirc;l&eacute;s directement.
</p>
<p>
    Le panneau sup&eacute;rieur gauche du graphique ci-dessous illustre la
    s&eacute;lection des &eacute;toiles pour une image typique. Le graphique montre
    rayon de demi-lumi&egrave;re trac&eacute;e en fonction de la magnitude. Sur
    cette graphique, les galaxies occupent une gamme de magnitudes et
    les rayons tandis que les &eacute;toiles apparaissent comme un lieu
    horizontal bien d&eacute;fini, tournant &agrave; la fin lumineux o&ugrave; les &eacute;toiles
    sont satur&eacute;es. Les points rouges indiquent les coupes tr&egrave;s
    conservateurs ampleur et le rayon de s&eacute;lection des &eacute;toiles pour
    une analyse plus approfondie.
</p>
<p>
    Les 3 autres graphiques montrent les couleurs des &eacute;toiles
    s&eacute;lectionn&eacute;es de cette mani&egrave;re superpos&eacute;e noir sur le dessus des
    couleurs d'&eacute;toile SDSS transform&eacute;es en vert. Aucune d&eacute;calage
    syst&eacute;matique est visible.
</p>
<img src="/static/images/megapipe/starcol.gif" alt="Couleurs d'&eacute;toile"/>
<h2 id="lim">Magnitudes limites</h2>
<p>
    Les magnitudes limites des images sont mesur&eacute;es en trois fa&ccedil;ons:
</p>
<ul>
  <li>Histograme des d&eacute;tections</li>
  <li>D&eacute;tection de source ponctuelle 5 sigma</li>
  <li>En ajoutants des objets faux</li>
</ul>
<p>
    La premi&egrave;re m&eacute;thode est tr&egrave;s simple, en m&ecirc;me brut. Les
    magnitudes des objets sont tri&eacute;s en un histogramme. La valeur de
    cr&ecirc;te de l'histogramme, o&ugrave; le nombre de d&eacute;tections commencent &agrave; se
    retourner, est une mesure approximative de la magnitude limite de
    l'image.
</p>
<p>
    La deuxi&egrave;me m&eacute;thode est simple aussi. L'erreur d'amplitude estim&eacute;e
    de chaque source est trac&eacute;e en fonction de son amplitude . Dans ce
    cas, les magnitudes SExtractor MAG_AUTO ou style Kron est
    trac&eacute;e. Aux magnitudes faibles typiques d'images MegaCam, le bruit
    du ciel domine l'erreur de magnitude. Cela signifie que les objets
    &eacute;tendus (qui ont plus de ciel dans leurs ouvertures Kron) seront
    plus bruyants pour une magnitude donn&eacute;e que les sources
    compactes. Inversement, cela signifie que, pour une erreur de
    magnitude fixe donn&eacute;e, un point source sera plus faible que une
    source &eacute;tendue . Une d&eacute;tection de 5 -sigma correspond &agrave; un rapport
    signal-sur-bruit de 5 ou, de fa&ccedil;on &eacute;quivalente, une erreur de
    de 0.198 magnitudes . Ainsi, pour trouver la limite de
    d&eacute;tection de source ponctuelle 5 sigma, il suffit de trouver la
    source la plus faible dont l'erreur de magnitude est 0.198
    mags ou moins. Il doit &ecirc;tre une source ponctuelle et, par
    cons&eacute;quent, son magnitude est la limite de d&eacute;tection source
    ponctuelle 5 sigma . Une approche plus fine serait d'isoler les
    sources ponctuelles &agrave; l'aide du rayon de la demi-lumi&egrave;re par
    exemple . Dans la pratique, ce m&eacute;thode rapide et grossier donne
    des mesures qui sont correctes &agrave; moins de environ 0.3 mags, ce qui
    est assez pr&eacute;cis pour de fins nombreuses. C'est la valeur qui est
    donn&eacute;e dans les en-t&ecirc;tes d'image pour le mot-cl&eacute; MAGLIM.
</p>
<p>
    La figure ci-dessous illustre ces m&eacute;thodes. Le panneau sup&eacute;rieur
    montre l'histogramme des d&eacute;tections. Il compte pic &agrave; 26 magnitudes
    comme indiqu&eacute; par la ligne verticale rouge.
</p>
<p>
    Le panneau du bas montre l'erreur d'amplitude trac&eacute; par rapport
    magnitude. La ligne rouge horizontale se trouve &agrave; 0.198
    magnitudes. La ligne rouge verticale croise la ligne horizontale
    au niveau du locus de l'objet le plus faivle dont l'erreur de magnitude est
    inf&eacute;rieur &agrave; 0.198. La magnitude limite calcul&eacute; avec cette m&eacute;thode est
    26.6 magnitudes.
</p>
<img src="/static/images/megapipe/magncex.gif" alt="Magnitude limite par histogram et par sigma"/>
<p>
  La derni&egrave;re mani&egrave;re de calculer les magnitudes limites des
    images est d'ajouter de faux galaxies aux images et &agrave; essayer de
    les r&eacute;cup&eacute;rer en utilisant les m&ecirc;mes param&egrave;tres utilis&eacute;s pour
    g&eacute;n&eacute;rer les v&eacute;ritables catalogues d'images.  Les galaxies faux
    utilis&eacute;s ont &eacute;t&eacute; pr&eacute;lev&eacute;s sur les images elles-m&ecirc;mes, plut&ocirc;t que
    d'ajouter galaxies compl&egrave;tement artificiels. Un ensemble de 40
    galaxies lumineuses et isol&eacute;es sont s&eacute;lectionn&eacute;s du champ et
    assembl&eacute; dans une liste ma&icirc;tresse. Les timbres-poste de ces
    galaxies sont coup&eacute;s de l'images. Les galaxies sont fan&eacute;es &agrave; la
    fois en luminosit&eacute; de surface et en magnitude gr&acirc;ce &agrave; une
    combinaison de changement de l'&eacute;chelle des valeurs de pixels et
    r&eacute;&eacute;chantillonnage des images.
</p>
<p>
  Pour tester le taux de r&eacute;cup&eacute;ration &agrave; une magnitude de
  surface et de luminosit&eacute; donn&eacute;e, les timbres-poste galaxie sont
  choisis parmi la liste principale, fan&eacute;, comme d&eacute;crit ci-dessus au
  magnitude et la luminosit&eacute; de surface en question, et ensuite ajout&eacute;
  &agrave; l'image &agrave; des emplacements al&eacute;atoires. SExtractor est alors
  ex&eacute;cut&eacute; sur la nouvelle image. La fraction de faux galaxies trouv&eacute;es
  donne le taux de r&eacute;cup&eacute;ration au magnitude et la luminosit&eacute; de
  surface. Une illustration d'ajouter les galaxies est repr&eacute;sent&eacute;
  ci-dessout. Le m&ecirc;me galaxie a &eacute;t&eacute; ajout&eacute;e &agrave; plusieurs reprises &agrave;
  l'image. La galaxie a &eacute;t&eacute; fan&eacute;e de diff&eacute;rentes magnitude et des
  brillances de surface. Les cases rouges contiennent de la
  galaxie. Les bo&icirc;tes sont marqu&eacute;es par la luminosit&eacute; mag /
  surface. Notez la galaxie &agrave; i = 23, &mu;<sub>i</sub> = 25 se
  retrouve accidentellement pr&egrave;s d'une galaxie brillante et n'est que
  partiellement visible. Normalement, bien s&ucirc;r, les galaxies ne sont
  pas plac&eacute;s dans une telle grille r&eacute;guli&egrave;re.
</p>
<img src="/static/images/megapipe/sampleim.gif" alt="Exemple de galaxies ajout&eacute;s"/>
<p>
    Pour tester le taux de faux positifs, l'image originale est multipli&eacute;e
    par -1; les pics de bruit sont devenus des creux de bruit et
    vice-versa. SExtractor est ex&eacute;cut&eacute;e, en utilisant les m&ecirc;mes crit&egrave;res
    de d&eacute;tection. Comme il n'y a pas de galaxies r&eacute;els n&eacute;gatifs, tous les
    objets ainsi d&eacute;tect&eacute;s sont fallacieuses.
</p>
<p>
    Le graphique de magnitude/luminosit&eacute; de surface ci-dessous montre
    une example des r&eacute;sultats de ces simulations. Les points noirs
    sont des objets r&eacute;els. Le bord inf&eacute;rieur des points noirs est le
    lieu des source ponctuelles. Les points verts repr&eacute;sentent les
    d&eacute;tections faux positifs. Les chiffres en rouge indiquent la
    pourcentage des galaxies artificiels qui ont &eacute;t&eacute; r&eacute;cup&eacute;r&eacute;s &agrave; ce
    magnitude/luminosit&eacute; desurface. Les lignes de contour bleues
    indiquent les niveaux de compl&eacute;tude 70% et 50%.
</p>
<img src="/static/images/megapipe/limex.gif" alt="Limites ne magnitude et en brillance de surface"/>
<p>
    Trouver une seule magnitude limite d'une telle graphique est un
    peu difficile. La coupure la plus nette dans les faux positifs
    semble &ecirc;tre dans la brillance de surface. Objets &eacute;tendus
    deviennent plus difficiles &agrave; d&eacute;tecter au magnitudes plus brillantes
    tandis que les objets stellaires sont d&eacute;tectables &agrave; une limite
    plus faible d'au moins un mag.
</p>
<p>
    Notez que cette graphique est d'une utilit&eacute; limit&eacute;e dans les
    champs encombr&eacute;s. Dans ce cas, un objet peut &ecirc;tre manqu&eacute;, m&ecirc;me si
    elle est relativement lumineux car il se trouve au-dessus d'un
    autre objet. Cependant, les objets dans les champs encombr&eacute;s sont
    presque toujours stellaire. Ceci sugg&egrave;re l'utilisation de le
    logiciel
    <a rel="external" href="https://adsabs.harvard.edu/abs/1987PASP...99..191S">DAOphot</a>
     plut&ocirc;t que d'utiliser les catalogues de SExtractor fournis dans
     le cadre de MegaPipe.
</p>
