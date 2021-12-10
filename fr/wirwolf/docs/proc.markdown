---
layout: cadc
lang: fr
permalink: /fr/wirwolf/docs/proc.html
title: Procédure de coadditionement
altLangPage: /en/wirwolf/docs/proc.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: wirwolf
breadcrumbs:
    - link: /fr/wirwolf/
      title: WIRwolf
    - link: /fr/wirwolf/docs/proc.html
      title: Procédure de coadditionement
---
  <p>
    Cette page d&eacute;crit le pipeline de donn&eacute;es WIRwolf. Le pipeline peut &ecirc;tre d&eacute;compos&eacute; en les &eacute;l&eacute;ments suivants:
  </p>
<ul>
  <li><a href="#grp">Regroupement des images</a></li>
  <li><a href="#astcal">Calibration astrom&eacute;trique</a></li>
  <li><a href="#photcal">Calibration photom&eacute;trique</a></li>
  <li><a href="#sub">Soustraction du fond du ciel</a></li>
  <li><a href="#swarp">R&eacute;&eacute;chantillonnage et coaddition</a></li>
  <li><a href="#sex">G&eacute;n&eacute;ration des catalogues</a></li>
</ul>
<a id="grp"></a>
<h2>Regroupement des images</h2>
<p>
  Les images sont regroup&eacute;es selon les crit&egrave;res suivants:
</p>
<ul>
  <li>
    Les centres des images d'un groupe doivent &ecirc;tre s&eacute;par&eacute; par au maximum 0.1 degr&eacute;s.
  </li>
  <li>
      Il doit y avoir au moins 3 tranches d'images prises dans un seul
      filtre. Les donn&eacute;es WIRCam sont souvent prises en forme de cube
      de donn&eacute;es, o&ugrave; multiples expositions courtes sont prises dans un
      sequence. Pour WIRwolf, les donn&eacute;es sont trait&eacute;es au niveau de
      la tranche. Une tranche est compos&eacute; de quatre extensions, une par
      d&eacute;tecteur WIRCam, d&eacute;tenues dans un fichier FITS Multi-Extension (MEF).
  </li>
  <li>
      Les images prises dans d'autres filtres sont inclus dans le
      groupe s'il y a 3 images ou plus prises dans chaque filtre.
  </li>
</ul>
<p>
    Beaucoup d'images WIRCAM sont des cubes de donn&eacute;es. Tous sont des
    fichiers MEF avec 4 extensions, correspondant aux 4
    d&eacute;tecteurs. Avant de poursuivre le traitement, chaque image WIRCAM
    est divis&eacute; en ses extensions de composants et fendu le long de la
    troisi&egrave;me axe (temps). Les quatre tranches correspondant sont
    ensuite rassembl&eacute;s pour faire une MEF. Cette fois cependant,
    chaque fichier correspond &agrave; une seule tranche dans le temps.
</p>
<a id="astcal"></a>
<h2>Calibration astrom&eacute;trique</h2>
<p>
    La calibration astrom&eacute;trique WIRwolf est tr&egrave;s similaire &agrave; celle de <a href="/fr/megapipe/docs/proc.html#astcal">MegaPipe</a>.
    Le pipeline de calibration astrom&eacute;trique AstroGwyn est ex&eacute;cut&eacute; sur
    les images. La premi&egrave;re &eacute;tape consiste &agrave; ex&eacute;cuter <a rel="external" href="http://www.astromatic.net/software/sextractor">SExtractor</a> sur
    chaque image. Les param&egrave;tres sont r&eacute;gl&eacute;s de mani&egrave;re &agrave; extraire
    uniquement les objets les plus fiables (5 d&eacute;tections sigma dans au
    moins 5 pixels). Ce catalogue est &eacute;galement nettoy&eacute; des rayons
    cosmiques et des objets &eacute;tendus. Il ne reste que des objets r&eacute;els avec
    des centres bien d&eacute;finis: &eacute;toiles et (dans une certaine mesure) les
    galaxies compactes.
</p>
<p>
 La correspondance est faite du catalogue observ&eacute;e au <a rel="external" href="http://www.ipac.caltech.edu/2mass/releases/allsky/">catalogue de
  2MASS</a>.   Les coordonn&eacute;es (x,y) du catalogue observ&eacute; sont convertis
  en (RA, Dec) en utilisant la WCS initiale d''I'iwi .  Les catalogues
  sont d&eacute;cal&eacute;es dans RA et Dec par rapport &agrave; l'autre jusqu'&agrave; ce que
  la meilleure correspondance entre les deux catalogues est
  trouv&eacute;. S'il n'ya pas un correspondance acceptable pour un CCD
  particulier (par exemple si la WCS initialle est erron&eacute;e), sa WCS
  est remplac&eacute; par un WCS de d&eacute;faut et la proc&eacute;dure demise en
  correspondance est red&eacute;marr&eacute;. Une fois que l'alignement est termin&eacute;,
  le raccord astrom&eacute;trique peut commencer. G&eacute;n&eacute;ralement 20 &agrave; 50
  sources par CCD sont trouv&eacute;s avec cette premi&egrave;re correspondance.
</p>
<p>
    'I'iwi fournit une solution WCS de premi&egrave;re ordre pour avec des
    erreurs typiques de l'ordre de 1 seconde d'arc.  AstrGwyn am&eacute;liore
    ceci pour fournir une solution d'ordre sup&eacute;rieur avec une
    pr&eacute;cision de 0.1 seconde d'arc.  Au fur et &agrave; mesure que la
    pr&eacute;cision de la WCS s'am&eacute;liore, le catalogues observ&eacute;e et le
    catalogue de r&eacute;f&eacute;rence sont compar&eacute;es &agrave; nouveau pour accro&icirc;tre le
    nombre de sources correspondants. Un plus grand nombre de sources
    qui correspondent fait que le solution astrom&eacute;trique soit plus
    robuste contre les erreurs possibles (mouvements propres, les
    d&eacute;tections fallacieuses, etc) soit
</p>
<p>
    Les termes d'ordre superieures sont d&eacute;termin&eacute;s &agrave; l'&eacute;chelle de
    toute la mosa&iuml;que. C'est a dire, la d&eacute;formation de l'ensemble du
    plan focal est mesur&eacute;e.  Cette d&eacute;formation est bien d&eacute;crite par un
    polyn&ocirc;me de deuxi&egrave;me et quatri&egrave;me termes d'ordre en termes de
    rayon mesur&eacute;e &agrave; partir du centre de la mosa&iuml;que.  La distorsion
    semble &ecirc;tre stable au cours temps, m&ecirc;me si certains &eacute;l&eacute;ments
    de l'optique de MegaPrime sont retourn&eacute;es.  La d&eacute;termination de la
    d&eacute;formation de cette mani&egrave;re signifie que seul 2 param&egrave;tres
    doivent &ecirc;tre d&eacute;termin&eacute;s (les coefficients de r <sup>2 </sup> et
    r<sup>4</sup>) avec g&eacute;n&eacute;ralement (20-50 &eacute;toiles par puce) * (36
    puces) = ~ 1000 observations. Si l'analyse est faite puce par
    puce, une solution de troisi&egrave;me ordre exige (20 param&egrave;tres par
    puce) * (36 jetons) = 720 param&egrave;tres. C'est moins satisfaisant.
</p>
<p>
    De la distorsion globale, la distorsion locale de chaque CCD est
    d&eacute;termin&eacute;. La d&eacute;formation locale est traduite en une partie
    lin&eacute;aire (d&eacute;crite par la matrice de CD), et une partie d'ordre
    sup&eacute;rieur (d&eacute;crite par la mots-cl&eacute;s de
    PV). La <a href="/static/files/megapipe/CD_PV_keywords.pdf">transformation CD/PV</a> a
    &eacute;t&eacute; d&eacute;crite en d&eacute;tail dans un annexe de la premi&egrave;re &eacute;bauche
    de <a rel="external" href="http://adsabs.harvard.edu/abs/2008PASP..120..212G">l'article
    de MegaPipe</a>. La partie d'ordre sup&eacute;rieur solution ordre
    sup&eacute;rieur est d'ordre 3 ainsi, mais les coefficients d&eacute;pendent
    directement et uniquement sur la distorsion radiale globale de
    param&egrave;tres 2. la erreur introduite par cette traduction est
    inf&eacute;rieure &agrave; 0,001 secondes d'arc.
</p>
<p>
    Les donn&eacute;es issues des diff&eacute;rents filtres sont trait&eacute;s dans l'ordre de
    la longueur d'onde, en commen&ccedil;ant par la bande J. Les donn&eacute;es de
    premier filtre de traitement est adapt&eacute;e &agrave; 2MASS,  calibr&eacute; photom&eacute;triquement
    et empil&eacute;s (tel que d&eacute;crit ci-dessous). Les donn&eacute;es provenant des
    bandes suivantes sont adapt&eacute;es &agrave; un catalogue extraite des images
    superpos&eacute;es dans la premi&egrave;re bande.
</p>
<p>
    Les r&eacute;sultats sont les incertitudes internes de 0.04 secondes
    d'arc et une incertitude externe d'environ 0.17 secondes d'arc,
    comme indiqu&eacute; sur la page des
     <a href="/fr/wirwolf/docs/astro.html">v&eacute;rifications de
     l'astrometrie</a>.
</p>
<a id="photcal"></a>
<h2>Calibration photom&eacute;trique</h2>
<p>
    La premi&egrave;re &eacute;tape dans le d&eacute;veloppement de la calibration photom&eacute;trique est de d&eacute;cider quel type de magnitudes &agrave; mesurer. Le "standard de l'industrie" pour la photom&eacute;trie galactique est MAG_AUTO, une magnitude de type Kron. WIRwolf utilise le sondage 2MASS, en particulier le catalogue des sources ponctuelles, comme une r&eacute;f&eacute;rence photom&eacute;trique. Ceci dit, pour le photom&eacute;trie stellaire, les ouvertures fixes et  circulaires, id&eacute;alement mesur&eacute; &agrave; travers une petite ouverture mais corrig&eacute; &agrave; une ouverture plus grande sont 
sup&eacute;rieurs..
</p>
<p>
La solution est de choisir une ouverture fixe qui produit en moyenne
la m&ecirc;me magnitude que MAG_AUTO pour des sources ponctuelles. 130000
images WIRCAM ont &eacute;t&eacute; examin&eacute;s. La FWHM de la qualit&eacute; de l'image a &eacute;t&eacute;
d&eacute;termin&eacute;e. MAG_AUTO a &eacute;t&eacute; mesur&eacute;e ainsi que des grandeurs mesur&eacute;es
par le biais d'une s&eacute;rie d'ouvertures, tous les multiples de la valeur
FWHM.
</p>
<p>
    La diff&eacute;rence entre les magnitudes d'ouverture et MAG_AUTO est indiqu&eacute;
    &agrave; droite. Les barres d'erreur repr&eacute;sentent les limites de 90%-tile. Le
    graphique montre que l'ouverture d'un peu plus de 6 fois la FWHM
    donnera une ampleur qui est en moyenne le m&ecirc;me que MAG_AUTO. Le
    coefficient exact est de 6.28, &eacute;trangement proche de 2&pi;.
</p>
<img src="/static/images/wirwolf/wirdap.gif" alt="MAG_AUTO-MAG_APER en fonction de la taille de l'ouverture"/>
<p>
    Cette ouverture a &eacute;t&eacute; adopt&eacute; comme l'ouverture de
    r&eacute;f&eacute;rence. Toutefois, cette ouverture est assez grande pour que le
    ciel va induire un bruit important. Par cons&eacute;quent, la photom&eacute;trie a
    &eacute;t&eacute; mesur&eacute;e dans un l'ouverture la moiti&eacute; de cette taille et corrig&eacute; &agrave;
    l'ouverture plein de 6.28 FWHM.
</p>
<p>
    Apr&egrave;s avoir mesur&eacute; les magnitudes instrumentales, l'&eacute;tape suivante est
    de comparer avec 2MASS. Le sondage 2MASS est un peu moins profond que
    la plupart des images WIRCAM. Il ya tr&egrave;s peu de chevauchement entre
    les sources les plus faibles visibles de 2MASS et les plus brillants
    des sources non-satur&eacute;s dans les images WIRCAM.
</p>
<p>
    Les sources ponctuelles dans les images WIRCAM sont identifi&eacute;s en
    d&eacute;terminant le rayon de la demi-lumi&egrave;re- pour chaque
    source. Les sources ponctuelle dans les tranches d'images WIRcam
    sont jumel&eacute;s au catalogue 2MASS. Les magnitudes 2MASS sont
    convertis sur le syst&egrave;me photom&eacute;trique WIRCAM en utilisant les
    termes de couleur d&eacute;crites sur la page
    des <a href="/fr/wirwolf/docs/filt.html">filtres WIRcam</a>.
</p>
<p>
    La figure ci-dessous montre un match typique avec 2MASS. La
    dispersion est consid&eacute;rable; noter l'&eacute;chelle de l'axe
    vertical. Les quatre d&eacute;tecteurs WIRcam  n'ont pas le m&ecirc;me point
    z&eacute;ro. Notez les diff&eacute;rences point z&eacute;ro en parenth&egrave;ses.
</p>
<img src="/static/images/wirwolf/1403622pf01.mat1.off.gif" alt="Exemple de mesure du point z&eacute;ro par rapport &agrave; 2MASS"/>
<p>
Bien que il est tr&egrave;s souhaitable d'avoir une bonne calibration
absolue, il est absolument essentiel d'avoir une calibration interne
optimale pour combiner correctement les images. Par cons&eacute;quent, apr&egrave;s que
les images individuelles ont &eacute;t&eacute; calibr&eacute;s avec 2MASS, les catalogues
individuels qui en r&eacute;sultent pour chaque groupe d'images sont
fusionn&eacute;es. L'&eacute;talonnage absolu du catalogue principal de la fusion
sera mieux que tous les catalogues individuels par un facteur de
&radic;<span style="text-decoration:overline">N&nbsp;images</span>.
</p>
<p>
    Chaque tranche d'image est ensuite jumell&eacute;e avec la catalogue
    fusionn&eacute;. Le r&eacute;sultat est un correspondance nettement plus
    rigoureux, comme indiqu&eacute; ci-dessous. Les erreurs typiques du point
    z&eacute;ro entre les tranches dans un groupe est meilleur que 0.003
</p>
<img src="/static/images/wirwolf/1403622pf01.mat2.off.gif" alt="Exemple de point z&eacute;ro measuremnet par rapport &agrave; un catalogue fusionn&eacute;"/>
<a id="sub"></a>
<h2>Soustraction du fond du ciel</h2>
<p>
    Une grande partie du travail l'oeuvre de soustraction de fond est fait
    par 'I'iwii comme d&eacute;crit dans la <a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/WIRCam/IiwiVersion1Doc.html#Part3">documentation
      de la soustraction du fond 'I'iwii</a>. La proc&eacute;dure 'I'iwi utilise
    des images prises avant et un apr&egrave;s dans l'image en question sur la
    m&ecirc;me nuit pour construire un fond, puis le soustrait de l'image. En
    effet, en particulier dans le cas des champs de sources &eacute;tendues (les
    grandes galaxies, n&eacute;buleuses), il serait difficile de faire
    mieux. Cependant, dans des domaines sans sources &eacute;tendues (la plupart
    des images WIRCAM), il est possible de faire un peu mieux par
    effectuer une soustraction de fond local.
</p>
<p>
    SExtractor est ex&eacute;cut&eacute; sur chaque tranche d'image. Les ellipses
    Kron pour chaque source d&eacute;tect&eacute;e sont utilis&eacute;s pour masquer
    l'image originale. SExtractor est ex&eacute;cut&eacute; &agrave; nouveau sur la tranche
    d'image masqu&eacute; cette fois g&eacute;n&eacute;rer une carte de fond comme une
    image de contr&ocirc;le (en utilisant l'option -CHECKIMAGE_TYPE
    BACKGROUND). Ce fond est soustraite de l'image
</p>
<a id="swarp"></a>
<h2>R&eacute;&eacute;chantillonnage et coaddition</h2>
<p>
    Les images sont r&eacute;-&eacute;chantillonn&eacute;es avec <a rel="external" href="http://www.astromatic.net/software/swarp">Swarp</a>. Une grille de
    pixels qui contient toutes les images est configur&eacute; en ex&eacute;cutant
    Swarp une fois pour g&eacute;n&eacute;rer un en-t&ecirc;te. La taille du pixel est
    r&eacute;gl&eacute;e &agrave; 0.3 secondes d'arc par pixel. Chaque tranche d'image de
    avec le fond soustrait est ensuite SWarp&eacute; sur cette grille. 
    Voici le <a href="wircam.swarp">fichier de configuration de Swarp</a>. Le
    r&eacute;-&eacute;chantillonnage est fait avec le noyau de LANCZOS2.
</p>
<p>
    Les images r&eacute;&eacute;chantillonn&eacute;es sont coadditionn&eacute;es en utilisant un
    algorithme de scepticisme artificielle. Le scepticisme
    artificielle (Stetson 1989) est une m&eacute;thode robuste de calcul
    d'une image moyenne utilisant un syst&egrave;me de pond&eacute;ration continue
    qui est d&eacute;riv&eacute; &agrave; partir des donn&eacute;es elles-m&ecirc;mes. Les coefficients
    de pond&eacute;ration sont donn&eacute;s par:
</p>
<img src="/static/images/wirwolf/ASEquation.gif" alt="scepticisme artificiel"/>
<p>
    o&ugrave; w<sub>i</sub> est le poids du pixel d'entr&eacute;e de la i-i&egrave;me ,
    &sigma;<sub>i</sub>; est la d&eacute;viation standard (d&eacute;termin&eacute; par le
    bruit de lecture et de gain) , r<sub>i</sub> est le r&eacute;sidu de la
    i-i&egrave;me pixel d'entr&eacute;e par rapport &agrave; la valeur moyenne courant. Le
    proc&eacute;d&eacute; utilise une valeur m&eacute;diane en tant que point de
    d&eacute;part. Les moyennes pond&eacute;r&eacute;es sont ensuite calcul&eacute;es en utilisant
    l'&eacute;quation ci-dessus de mani&egrave;re it&eacute;rative . Les valeurs de pixels
    qui sont loin de la moyenne auront moins de poids (r<sub>i</sub>
    est plus grande si w<sub>i</sub> devient plus petit ) &agrave; chaque
    it&eacute;ration successive . L'&eacute;quation peut &ecirc;tre r&eacute;gl&eacute; &agrave; l'aide des
    param&egrave;tres libres &alpha; et &beta; . Ici, ils sont fix&eacute;s &agrave;
    &alpha;=1 et &beta; =2, tel qu'il est utilis&eacute; le <a rel="external" href="http://archive.stsci.edu/hst/wfpc2/pipeline.html">pipeline
    de WFPC2</a> . Apr&egrave;s quelques it&eacute;rations (WIRwolf et WFPC2
    arr&ecirc;ttent apres 5 it&eacute;rations) la proc&eacute;dure converge. S'il existe
    un pixel d&eacute;fectueux (par exemple affect&eacute; par un rayon cosmique)
    dans la liste, le ponderance pour le pixel sera telle qu'il
    contribue de mani&egrave;re n&eacute;gligeable &agrave; la sortie. S'il n'y a pas de
    pixels d&eacute;fectueux, tous les pixels seront pond&eacute;r&eacute;s &agrave; peu pr&egrave;s
    &eacute;galement. Ceci est diff&eacute;rent alors une m&eacute;thode sigma clipping en
    ce qu'il n'est pas de coupure sec et discr&egrave;te quit d&eacute;fini quand un
    pixel est "bon" ou "mauvais". Les pixels sont rejet&eacute;s
    progressivement, quand ils s'&eacute;cartent de la valeur
    centrale. Scepticisme artificiel offre de meilleures
    caract&eacute;ristiques de bruit que m&eacute;diane et rejet les valeurs
    aberrantes mieux qu'une moyenne ou une m&eacute;diane .
</p>
<p>
    Les images emipl&eacute;s r&eacute;sultants mesurent environ 5000 par 5000
    pixels, d&eacute;pendant du mod&egrave;le d'entr&eacute;e de tramage. Ils ont un
    niveau du ciel de 0 ADU. Ils sont &eacute;chelonn&eacute;es afin d'avoir
    une  point z&eacute;ro photom&eacute;trique de 30.000 en magnitudes AB -
    c'est-&agrave;-dire, pour chaque source:
</p>
<pre>
AB_magnitude = -2.5 * log10(counts) + 30.000
</pre>
<p>
    Une carte des ponderances (inverse de la variance) de la m&ecirc;me
    taille est &eacute;galement produit &agrave; partir des ponderances de
    scepticisme artificiels.
</p>
<a id="sex"></a>
<h2>G&eacute;n&eacute;ration des catalogues</h2>
<p>
    SExtractor est ex&eacute;cut&eacute; sur chaque image coaddition&eacute; &agrave; l'aide de
    l'image des pond&eacute;rances.  Voici
    le <a href="/static/files/wirwolf/wircam.sex">fichier de configuration de SExtractor</a>.
    Les catalogues r&eacute;sultant ne se rapportent &agrave; un seul image dans une
    bande; les catalogues multi-bandes ont &eacute;t&eacute; g&eacute;n&eacute;r&eacute;s.  Bien que cette
    approche assez simple fonctionne bien dans de nombreux cas, il n'est
    probablement pas optimale dans certaines situations.  Selon
    l'application, certains utilisateurs peuvent souhaiter g&eacute;rer leur
    propre logiciel de g&eacute;n&eacute;ration de catalogue sur les image
    coaddition&eacute;s.
</p>
