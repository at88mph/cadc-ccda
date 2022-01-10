---
layout: cadc
lang: fr
permalink: /fr/megapipe/cfhtls/dfspt.html
title: Séries chronologiques stellaires des Champs Profonds
altLangPage: /en/megapipe/cfhtls/dfspt.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
    - link: /fr/megapipe/cfhtls/index.html
      title: CFHTLS
---
<p>
    Cette page pr&eacute;sente une s&eacute;rie photom&eacute;trique temporelle de 28108
    sources ponctuelles situ&eacute;es dans les Champ Profonds de la
    CFHTLS. Les quatre secteurs des Champ Profonds de la CFHTLS ont
    fait l'objet d'observations r&eacute;guli&egrave;res depuis le d&eacute;but de 2003,
    d'abord dans le cadre de la CFHTLS proprement dite, ensuite pour
    l'&eacute;talonnage des &eacute;toiles standard au CFHT. Toutes les donn&eacute;es de
    la CFHTLS sont aujourd'hui du domaine public et les images
    &eacute;talonn&eacute;es des &eacute;toiles standard le deviennent la nuit m&ecirc;me de
    l'&eacute;talonnage. Avec des donn&eacute;es s'&eacute;talant sur dix ans, les Champ
    Profonds est ensemble de donn&eacute;es de grande valeur pour l'&eacute;tude des
    &eacute;toiles variables.
</p>
<h2>M&eacute;thode</h2>
<p>
    En r&eacute;sum&eacute;, la s&eacute;rie temporelle a &eacute;t&eacute; produite comme suit:
</p>
<ul>
  <li>
    <a href="#select">S&eacute;lection</a>: Un catalogue des sources ponctuelles pr&eacute;sentes dans le champ profond a &eacute;t&eacute; cr&eacute;&eacute;.
  </li>
  <li>
     <a href="#apphot">Photom&eacute;trie d'ouverture</a>: Pour chaque source et pour chaque image, la photometrie &agrave; travers des d'ouverture
	r&eacute;gl&eacute;e au seeing a &eacute;t&eacute; effectu&eacute;e.
  </li>
  <li>
      <a href="#apzpcor">Correction des points z&eacute;ro</a>: Les magnitudes ont fait l'objet de petites corrections au point z&eacute;ro sur chaque image.
  </li>
  <li>
      <a href="#err">Erreurs photom&eacute;trique</a>: Les incertitudes photom&eacute;triques (limit&eacute;s par les erreurs de calibration) ont &eacute;t&eacute; calcul&eacute;s
  </li>
  <li>
      <a href="#comp">Compl&eacute;tude</a>: la compl&eacute;tude a &eacute;t&eacute; &eacute;valu&eacute;e dans chaque bande.
  </li>
  <li>
      <a href="#dist">Diffusion</a>: T&eacute;l&eacute;chargez les donn&eacute;es
  </li>
</ul>
<h2 id="select">S&eacute;lection des sources ponctuelles</h2>
<p>
    La liste d'&eacute;toiles est extraite des <a href="dfiq.html">piles de "meilleures seeing"</a> 
    venant des Champs Profonds, dont on trouvera une description
    d&eacute;taill&eacute;e ici. Bri&egrave;vement, il s'agit d'images obtenues par
    co-addition des images de la meilleure qualit&eacute; prises dans le
    champ profond. La visibilit&eacute; est de 0.65" pour toutes les piles
    des bandes GRIZ et de 0.8" pour celles de la bande U. L'image de
    la bande G sert d'image de r&eacute;f&eacute;rence. Le locus stellaire a &eacute;t&eacute;
    identifi&eacute; sur un graphique opposant la largeur &agrave; mi-hauteur (FWHM) et
    la magnitude, comme on peut le voir ci-dessous. Ici, la FWHM a &eacute;t&eacute;
    &eacute;tablie d'apr&egrave;s le rayon de demi-lumi&egrave;re en pixels, que l'on a
    multipli&eacute; par 0.32 pour obtenir la FWHM en secondes d'arc.
</p>
<p>
    La figure ci-dessous montre le locus stellaire d'un secteur des
    Champ Profonds. Du c&ocirc;t&eacute; le plus lumineux, le rel&egrave;vement de la FWHM
    indique qu'on approche de la saturation; du c&ocirc;t&eacute; le moins
    lumineux, le locus stellaire se confond avec les galaxies
    compactes. Le crit&egrave;re retenu pour peupler le catalogue &eacute;tait
    17.5&gt;G&gt;24 et FWHM=0.65 +/- 15%, comme l'indiquent les lignes
    rouges.
</p>
<img src="/static/images/megapipe/dvarselect.gif" alt="Crit&egrave;res de s&eacute;lection stellaires"/>
<h2 id="apphot">Photom&eacute;trie d'ouverture</h2>
<p>
    On a appliqu&eacute; la photom&eacute;trie d'ouverture &agrave; chaque source
    ponctuelle sur chacune des 11765 images disponibles dans le champ
    profond de la CFHTLS. On a recouru &agrave; l'&eacute;talonnage astrom&eacute;trique
    avec MegaPipe pour convertir la position des objets, exprim&eacute;e en
    RA et en Dec, en une position exprim&eacute;e par un nombre secondaire et
    en pixels (X,Y). La position des objets a &eacute;t&eacute; pr&eacute;cis&eacute;e davantage
    par application d'une fonction gaussienne &agrave; la FWHM de l'image. Ce
    recentrage d&eacute;cale habituellement la position de l'objet de
    0.1 pixel (ou 0.02 seconde d'arc).
</p>
<p>
    Le niveau du fond de ciel a &eacute;t&eacute; &eacute;tabli au moyen d'un anneau d'un
    rayon int&eacute;rieur de 70 pixels et d'un rayon ext&eacute;rieur de
    90 pixels. La figure ci-dessous repr&eacute;sente une &eacute;toile brillante. La
    fonction d'&eacute;talement (PSF) donne un centre lumineux entour&eacute; d'un
    disque clair plus t&eacute;nu, aux bords bien d&eacute;finis. Selon
    l'emplacement de l'&eacute;toile dans la mosa&iuml;que, il est rare que
    l'image de la pupille soit centr&eacute;e sur l'&eacute;toile. Le rayon
    int&eacute;rieur de 70 pixels fait en sorte que le disque des images de
    la pupille ne se situe pas &agrave; l'int&eacute;rieur de l'anneau.
</p>
<img src="/static/images/megapipe/skyanulex.gif" alt=""/>
<p>
    L'&eacute;tape suivante consiste &agrave; appliquer la photom&eacute;trie d'ouverture &agrave;
    chaque source en recourant &agrave; une s&eacute;rie d'ouvertures. Plusieurs
    types d'ouverture peuvent &ecirc;tre utilis&eacute;s. Le champ profond de la
    CFHTLS a &eacute;t&eacute; &eacute;talonn&eacute; avec la fonction MAG_AUTO de SExtractor, qui
    est une ouverture Kron &agrave; magnitude variable. Cette fonction donne
    les meilleurs r&eacute;sultats avec les galaxies et ne convient pas
    n&eacute;cessairement aux &eacute;toiles. Il est pr&eacute;f&eacute;rable d'utiliser une
    ouverture &agrave; diam&egrave;tre fixe, mais la seeing des images de la
    CFHTLS varie consid&eacute;rablement, si bien qu'il y aura fluctuation de
    la quantit&eacute; de lumi&egrave;re qui traverse l'ouverture. Si l'ouverture
    est assez grande pour que les effets r&eacute;sultant de la visibilit&eacute;
    soient n&eacute;gligeables, l'image inclura une trop grande partie du
    ciel et l'erreur attribuable au hasard sera plus importante. Pour
    &eacute;viter cela, il faut corriger l'ouverture en fonction de
    l'infini. Enfin, on peut recourir &agrave; une ouverture par
    visibilit&eacute;/concordance comme le sugg&egrave;rent 
    <a href="http://adsabs.harvard.edu/abs/2009A%26A...506..999R">Regnault
    et al. (2009)</a>
    Dans ce cas, l'ouverture est un multiple de la
    qualit&eacute; de l'image (IQ). La m&eacute;thode a pour avantage d'autoriser
    des ouvertures relativement petites qui capteront une fraction
    coh&eacute;rente de la lumi&egrave;re, ce qui &eacute;limine la n&eacute;cessit&eacute; d'une
    correction. C'est cette m&eacute;thode qui a &eacute;t&eacute; retenue. Une question
    demeure: quel multiple de l'IQ devrait-on utiliser? Les multiples
    de 1 &agrave; 9 ont &eacute;t&eacute; test&eacute;s, puis on a <a href="#apzpcor">corrig&eacute; le point z&eacute;ro et
    l'ouverture tel qu'indiqu&eacute; ci-dessous</a>. La dispersion photom&eacute;trique
    de chaque objet a &eacute;t&eacute; &eacute;tablie. Les objets ont &eacute;t&eacute; regroup&eacute;s par
    magnitude et on a calcul&eacute; la m&eacute;diane de la dispersion.
</p>
<p>
    La figure ci-dessous montre la dispersion photom&eacute;trique selon la
    magnitude, l'ouverture et le filtre. Pour les sources les plus
    lumineuses, on obtient g&eacute;n&eacute;ralement la dispersion la plus faible
    avec une ouverture &eacute;gale au quadruple de la seeing. Pour les
    objets plus faible, la dispersion augmente de fa&ccedil;on monotone avec
    l'ouverture. Une ouverture &eacute;gale au quadruple de la visibilit&eacute; a
    &eacute;t&eacute; retenue pour obtenir la meilleure photom&eacute;trie possible avec
    les objets brillants.
</p>
<img src="/static/images/megapipe/parvarf.gif" alt="dispersion photom&eacute;trique selon la magnitude, l'ouverture et le filtre"/>
<p>
    La photom&eacute;trie d'ouverture a &eacute;t&eacute; r&eacute;alis&eacute;e avec le syst&egrave;me de
    traitement <a rel="external"
    href="https://www.canfar.net/">CANFAR</a>. On a recouru
    pour cela &agrave; la trousse de photom&eacute;trie d'ouverture IRAF.  Le champ
    profond n'est pas surencombr&eacute;. Par cons&eacute;quent ajuster la
    photom&eacute;trie avec la FEP (par ex. DAOphot) ne pr&eacute;sente aucun
    avantage sensible.
</p>
<h2 id="apzpcor">Correction des ouvertures/points z&eacute;ro</h2>
<p>
    L'&eacute;talonnage photom&eacute;trique des Champs Profonds de la CFHTLS a &eacute;t&eacute;
    effectu&eacute; avec la fonction MAG_AUTO de SExtractor. MAG_AUTO est une
    magnitude Kron, principalement employ&eacute;e pour la photom&eacute;trie des
    galaxies. Elle cr&eacute;e une ouverture elliptique d'apr&egrave;s les moments
    de deuxi&egrave;me ordre de la source. Plus celle-ci est &eacute;tendue, plus
    grande sera l'ouverture. L'ouverture n&eacute;gligera toujours une petite
    (2%) fraction de la lumi&egrave;re &eacute;mise par la source, quelle qu'en
    soit l'&eacute;tendue. S'il s'agit de toute &eacute;vidence d'un avantage pour
    la photom&eacute;trie des galaxies, on estime g&eacute;n&eacute;ralement que cela pose
    un inconv&eacute;nient pour la photom&eacute;trie des &eacute;toiles, ce qui explique
    pourquoi on a pr&eacute;f&eacute;r&eacute; recourir &agrave; la photom&eacute;trie d'ouverture pour
    le projet.
</p>
<p>
    La conversion entre la photom&eacute;trie d'ouverture et MAG_AUTO
    n&eacute;cessite une correction. Il s'av&egrave;re que si l'ouverture est un
    multiple d'IQ (plut&ocirc;t qu'un nombre fixe de secondes d'arc), la
    correction prend une valeur assez uniforme. On mesure le d&eacute;calage
    du point z&eacute;ro pour chacune des 11765 images prises dans le champ
    profond, puis on compare la magnitude de l'ouverture &eacute;tablie avec
    les images aux valeurs MAG_AUTO venant des piles d'images. Seules
    les &eacute;toiles qui apparaissent sur toutes les images dans le secteur
    du champ profond pour un filtre particulier sont utilis&eacute;es pour la
    comparaison. On corrige le point z&eacute;ro et l'ouverture en appliquant
    le principe du scepticisme artificiel (Stetson, 1989) de mani&egrave;re &agrave;
    rejeter les aberrations attribuables aux rayons cosmiques ou aux
    colonnes d&eacute;fectueuses. Le diagramme ci-dessous pr&eacute;sente les
    r&eacute;sultats de cette correction:
</p>
<p>
    La figure ci-dessous montre l'&eacute;cart entre les points z&eacute;ro obtenus
    avec MAG_AUTO et avec la magnitude (ouverture) d'apr&egrave;s
    l'ouverture, pour l'ensemble des images regroup&eacute;es par
    filtre. Quand l'ouverture ne correspond qu'au double d'IQ, la
    correction est de l'ordre de +0.2 magnitude (MAG_AUTO capte plus
    de lumi&egrave;re que la magnitude de l'ouverture).Du c&ocirc;t&eacute; de l'ouverture
    la plus large, la correction est de -0.05 magnitude. Soulignons
    que la courbe n'a pas encore totalement atteint un plateau.
</p>
<img src="/static/images/megapipe/growf.gif" alt="Difference du point z&eacute;ro entre MAG_AUTO et mag(aper) en fonction de aper"/>
<p>
    Les courbes en gris repr&eacute;sentent des images individuelles. Les
    points de couleur et les barres d'erreur correspondent &agrave; la
    moyenne et &agrave; l'&eacute;cart-type de chaque ouverture. Les plupart des
    filtres r&eacute;v&egrave;lent deux locus distincts. Les images situ&eacute;es dans le
    locus inf&eacute;rieur ont &eacute;t&eacute; prises lors de deux rondes d'observation
    en 2007, &eacute;poque o&ugrave;, semble-t-il, la FEP avait un profil
    sensiblement diff&eacute;rent. On compte 10 &agrave; 20 images dans ce locus,
    comparativement aux quelque 2000 group&eacute;es dans le locus
    principal. Hormis ces exceptions peu nombreuses, MAG_AUTO s'av&egrave;re
    une excellente valeur de remplacement pour les ouvertures
    appari&eacute;es &agrave; l'IQ.
</p>
<p>
    Sur le panneau inf&eacute;rieur droit, on peut voir les corrections
    moyennes apport&eacute;es &agrave; tous les filtres sur le m&ecirc;me diagramme.
</p>
<p>
    La figure ci-dessous montre la variation de la correction du point
    z&eacute;ro en fonction de l'IQ. Elle trace l'&eacute;cart entre la valeur
    calcul&eacute;e par MAG_AUTO et la magnitude mesur&eacute;e avec une ouverture
    quatre fois plus grande que l'IQ, s&eacute;par&eacute;e par un filtre. Chaque
    filtre pr&eacute;sente une l&eacute;g&egrave;re pente, mais la diff&eacute;rence entre IQ=0.5"
    et IQ=1" varie de 0.001 &agrave; 0.0045 magnitude, soit un peu moins que
    la dispersion usuelle de 0.005 magnitude. Le nouveau et l'ancien
    filtre I apparaissent sur le m&ecirc;me trac&eacute;, ce qui explique la
    dispersion l&eacute;g&egrave;rement plus &eacute;lev&eacute;e. La distribution semble aussi
    l&eacute;g&egrave;rement bimodale: la tache inf&eacute;rieure correspond au nouveau
    filtre I. Encore une fois, il semble que MAG_AUTO soit une
    excellente valeur de remplacement pour l'ouverture appari&eacute;e &agrave; l'IQ
    dans diverses conditions de visibilit&eacute;.
</p>
<img src="/static/images/megapipe/poif.gif" alt="Difference du point z&eacute;ro entre MAG_AUTO et mag(4) en fonction du IQ"/>
<p>
    Ces corrections ont &eacute;t&eacute; apport&eacute;es &agrave; chaque image et sont
    disponibles sous forme de fichier ASCII (<a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/DeepVarZPAP.gz">DeepVarZPAP.gz</a>).
</p>
<h2 id="err">Erreurs photom&eacute;triques</h2>
<p>
    IRAF calcule les incertitudes photom&eacute;triques d'apr&egrave;s le bruit
    de lecture du d&eacute;tecteur ainsi que le bruit poissonien du ciel et
    de l'objet. Cependant, on a constat&eacute; que la dispersion
    photom&eacute;trique s'av&eacute;rait consid&eacute;rablement plus importante que celle
    illustr&eacute;e uniquement par le bruit de Poisson, surtout quand la
    luminosit&eacute; est plus grande.
</p>
<p>
    C'est ce qu'illustre la figure ci-dessous. Les points
    correspondent &agrave; la diff&eacute;rence absolue entre la magnitude d'une
    image et le flux mesur&eacute; dans la pile. La ligne rouge indique
    l'erreur m&eacute;diane en fonction de la magnitude; la verte, l'erreur
    m&eacute;diane d'apr&egrave;s la magnitude calcul&eacute;e par IRAF, c'est-&agrave;-dire en
    tenant compte des parasites de lecture et du bruit poissonien. Du
    c&ocirc;t&eacute; o&ugrave; la luminosit&eacute; est la plus vive, l'&eacute;cart se chiffre &agrave;
    environ 0.01 magnitude pour cette image, mais il fluctue d'une
    image &agrave; l'autre.
</p>
<img src="/static/images/megapipe/D1.G.1049177.3.gif" alt="Erreur en fonction de magnitude"/>
<p>
    La diff&eacute;rence a son importance. On aimerait mesurer la plus petite
    variation de luminosit&eacute; possible et il est malheureux qu'on ne
    puisse obtenir mieux que 1% avec la magnitude, m&ecirc;me quand elle
    est &eacute;lev&eacute;e.
</p>
<p>
    D'autres chercheurs n'ont pas r&eacute;ussi &agrave; obtenir mieux avec la
    photom&eacute;trie des images de MegaCam. Bien que l'&eacute;quipe de la SNLS
    ait enregistr&eacute; une photom&eacute;trie de qualit&eacute; sup&eacute;rieure &agrave; 1% apr&egrave;s
    avoir combin&eacute; plusieurs images, et que leur &eacute;talonnage du point
    z&eacute;ro ait une pr&eacute;cision sup&eacute;rieure &agrave; 1%, quand on compare les
    mesures prises individuellement sur les &eacute;toiles brillantes d'une
    image &agrave; l'autre, on remarque habituellement une dispersion de 2%
    (Fabbro, communication personnelle). Stetson (communication
    personnelle) estime qu'il faut ajouter une erreur de 1% &agrave; la
    quadrature des incertitudes de Poisson pour tenir compte de la
    dispersion.
</p>
<p>
    Apr&egrave;s avoir examin&eacute; soigneusement les erreurs possibles au niveau
    de la d&eacute;termination du point z&eacute;ro et les corrections &agrave; apporter &agrave;
    l'ouverture dont il est question plus haut, on en est parvenu &agrave; la
    conclusion que les erreurs pourraient survenir lorsqu'on proc&egrave;de &agrave;
    l'&eacute;limination des tendances avec Elixir. Les images pr&eacute;sentant un
    &eacute;cart sup&eacute;rieur &agrave; l'&eacute;cart usuel entre l'erreur de Poisson et
    l'erreur mesur&eacute;e ont &eacute;t&eacute; examin&eacute;es &agrave; l'oeil nu. Ces images
    pr&eacute;sentaient manifestement un probl&egrave;me soit au niveau de la
    bordure (dans la bande Z), soit au niveau du champ plat. Des
    exemples suivent.
</p>
<p>
    Le probl&egrave;me que soul&egrave;ve cette image de la bande Z r&eacute;sulte d'une
    mauvaise soustraction des franges d'interferances.
</p>
<img src="/static/images/megapipe/D1.Z.765061.png" alt="Example de frange d'interferances"/>
<p>
    Cette image pr&eacute;sente des variations &eacute;videntes du fond sous forme de bandes horizontales. 
</p>
<img src="/static/images/megapipe/D4.U.1022060.png" alt="erreur de champ plat flagrant"/>
<p>
    Ici la difficult&eacute; est plus subtile, mais un examen attentif r&eacute;v&egrave;le
    des motifs en arri&egrave;re-plan. Il s'agit d'une image de la bande G et
    il ne s'agit pas de franges d'interferances.
</p>
<img src="/static/images/megapipe/D1.G.962743.png" alt="<enSubtle flat-fielding problem></en>erreur de champ plat subtil"/>
<p>
    On en conclut ceci: bien que les erreurs du champ plat soient trop
    faibles pour que l'oeil les per&ccedil;oive dans la plupart des cas, elles
    existent n&eacute;anmoins et expliquent la limite de 0.01 pour l'erreur
    au niveau de la magnitude.
</p>
<p>
    L'erreur de magnitude indiqu&eacute;e dans les tableaux de distribution a
    &eacute;t&eacute; modifi&eacute;e en cons&eacute;quence. L'erreur reposant sur la m&eacute;diane est
    mesur&eacute;e &agrave; intervalles de 1 magnitude sur chaque image. Elle
    correspond &agrave; la ligne rouge sur la figure ci-dessus. Les erreurs
    indiqu&eacute;es dans les tableaux ont &eacute;t&eacute; interpol&eacute;es lin&eacute;airement &agrave;
    partir de ces valeurs. Les valeurs de IRAF ont &eacute;t&eacute; conserv&eacute;es
    quand la magnitude &eacute;tait inf&eacute;rieure &agrave; 22.
</p>
<h2 id="comp">Compl&eacute;tude</h2>
<p>
    Les &eacute;toiles ne sont pas toutes visibles sur chaque image. Les
    images ont &eacute;t&eacute; prises avec des d&eacute;calages. Celles &agrave; la bordure
    du capteur pourraient donc se trouver totalement hors de ce
    dernier, sur une autre image, c'est-&agrave;-dire dans l'espace s&eacute;parant
    les puces, ou &agrave; l'ext&eacute;rieur de la surface que repr&eacute;sente
    l'image. Les &eacute;toiles moins luisantes pourraient ne pas &ecirc;tre
    d&eacute;tect&eacute;es sur une image prise dans des conditions o&ugrave; la visibilit&eacute;
    &eacute;tait pi&egrave;tre, o&ugrave; la transparence laissait &agrave; d&eacute;sirer ou lorsque le
    ciel &eacute;tait trop clair.
</p>
<p>
    La figure ci-dessous montre la fraction r&eacute;cup&eacute;r&eacute;e en fonction de la
    magnitude et du filtre. Par r&eacute;cup&eacute;ration, on entend un objet qui a
    &eacute;t&eacute; d&eacute;tect&eacute; et dont l'incertitude photom&eacute;trique est inf&eacute;rieure &agrave;
    0.1 magnitude. Soulignons qu'il est impossible de parvenir &agrave; une
    absolue compl&eacute;tude (100%) en raison des d&eacute;calages.
</p>
<img src="/static/images/megapipe/varcomp.gif" alt=""/>
<h2 id="dist">Diffusion</h2>
<p>
    La s&eacute;rie temporelle est disponible sous la forme de deux archives
    tar (tarball) de 28108 fichiers, &agrave; raison d'un fichier par
    &eacute;toile. Les fichiers sont en langage ASCII ordinaire et comptent
    une rang&eacute;e par image. L'image est omise quand on n'y d&eacute;tecte pas
    d'objet, soit parce qu'il n'y en avait pas dans le capteur, soit
    parce qu'il luisait trop faiblement. Par cons&eacute;quent les fichiers
    n'ont pas tous la m&ecirc;me taille. Il existe deux jeux de fichiers.
</p>
<ul>
  <li>
    <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/DeepVarTerse.tar.gz">DeepVarTerse.tar.gz</a> (625Mb):
    Ces fichiers ne renferment que ce qui suit:
    <ul>
      <li>Point milieu de l'exposition (MJD)</li>
      <li>Magnitude</li>
      <li>Incertitude pour cette magnitude</li>
      <li>
	Chiffre correspondant au filtre:
	<ul>
	  <li>1: U</li>
	  <li>2: G</li>
	  <li>3: R</li>
	  <li>4: I</li>
	  <li>5: I2</li>
	  <li>6: Z</li>
	</ul>
      </li>
    </ul>
      Voir la <a href="/fr/megapipe/docs/filt.html">page des filtres MegaCam</a> pour en obtenir
      une description, en particulier ce qui distingue les deux
      filtres de la bande I.
  </li>
  <li>
    <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/DeepVarFull.tar.gz">DeepVarFull.tar.gz</a> (2.7Gb): 
      Ces fichiers fournissent un peu plus de pr&eacute;cisions. Chaque
      fichier comprend un en-t&ecirc;te donnant la magnitude UGRIZ de
      l'objet dans la pile ainsi que des liens menant aux parties
      d&eacute;coup&eacute;es autour de chaque objet, dans les piles. Chaque entr&eacute;e
      comprend des informations suppl&eacute;mentaires avec lesquelles on
      peut retracer la position d'un objet inhabituel sur une image
      donn&eacute;e, puis remonter jusqu'aux photons d'origine.
    <ul>
      <li>Num&eacute;ro de l'exposition MegaCam</li>
      <li>Nombre de l'extension de o&ugrave; l'objet a &eacute;t&eacute; d&eacute;tect&eacute;</li>
      <li>Coordonn&eacute;es X et Y en pixels dans cette image</li>
      <li>Qualit&eacute; de l'image en secondes d'arc de l'image</li>
      <li>Filtre sous forme de lettre (UGRIZ et I2)</li>
      <li>Lien vers une des zones d&eacute;coup&eacute;es autour de l'objet original</li>
      </ul>
  </li>
</ul>
