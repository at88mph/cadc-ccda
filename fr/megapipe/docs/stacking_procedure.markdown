---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/proc.html
title: Procédure de coadditionement
altLangPage: /en/megapipe/docs/proc.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
---

<p>
  Cette page d&eacute;crit les m&eacute;thodes utilis&eacute;es pour g&eacute;n&eacute;rer le
  images et catalogues empil&eacute;s pour l'image MegaCam empilement pipeline.
  En bref, la proc&eacute;dure est de calibrer chaque CCD de l'exposition de
  <a  rel="external" href="https://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime/"> MegaCam
    appareil photo mosa&iuml;que </a> &agrave; haute pr&eacute;cision et astrom&eacute;triquement
  photom&eacute;trie, puis coadditionner les images.
</p>
<ul>
  <li><a href="#groups">Regroupement d'images</a></li>
  <li><a href="#quality">Contr&ocirc;le de la qualit&eacute;</a></li>
  <li><a href="#astcal">Calibration astrom&eacute;trique</a></li>
  <li><a href="#photcal">Calibration photom&eacute;trique</a></li>
  <li><a href="#coadd">Coaddition</a></li>
  <li><a href="#photcat">Catalogues photom&eacute;trique</a></li>
</ul>
 <h2 id="groups">Regroupement d'images</h2>
 <p>
   Les images sont regroup&eacute;es selon les crit&egrave;res suivants :
 </p>
 <ul>
   <li>Les centres des images d'un groupe doivent &ecirc;tre s&eacute;par&eacute; par au maximum 0.1 degr&eacute;s.</li>
   <li>Il doit y avoir au moins 4 images prises dans un seul filtre.</li>
   <li>Les images prises dans d'autres filtres sont inclus dans le
     groupe s'il y a plus de 4 images prises dans chaque filtre . </li>
 </ul>
 <p>
   Chaque image dans un groupe doit:
 </p>
 <ul>
   <li>Avoir un temps d'exposition de 50 secondes ou plus. Ce
     crit&egrave;re assure qu'il ya suffisamment d'objets pour faire
     le calibrage
   </li>
   <li>&Ecirc;tre &eacute;talonnable photometriquement.
     Cela signifie que l'image doit r&eacute;pondre &agrave; l'un des crit&egrave;res suivants :
     <ul>
       <li> Il se trouve dans le <a rel="external" href="https://www.sdss.org">SDSS</a>, et peut donc &ecirc;tre directement calibr&eacute;.</li>
       <li> Elle a &eacute;t&eacute; prise sur une nuit photom&eacute;trique, de sorte que l'&eacute;talonnage photom&eacute;trique Elixir
	 est valide </li>
       <li> Il chevauche une image qui est &eacute;talonn&eacute;e par l'une des m&eacute;thodes pr&eacute;c&eacute;dentes</li>
     </ul>
   </li>
   <li>&Ecirc;tre public, tel que d&eacute;fini par la <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Queue/#prop">politique de p&eacute;riode propri&eacute;taire du TCFH</a>.
   </li>
   <li>
     Soyez sans probl&egrave;mes majeurs qui emp&ecirc;cheraient une bonne calibration
     tel que discut&eacute; dans la section suivante .
   </li>
 </ul>
<h2 id="quality">Contr&ocirc;le de la qualit&eacute;</h2>
<p>
  Les donn&eacute;es sont extraites de l'archive CADC.  Les images ont d&eacute;j&agrave;
  &eacute;t&eacute; trait&eacute;  avec la
    <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/">pipeline
  Elixir </a>.  Les images ont une solution astrom&eacute;trique assez
  pr&eacute;cis (0.5-1.0 seconde d'arc) et une calibration
  photom&eacute;trique. Un CCD de chaque exposition est inspect&eacute;
  visuellement. Les images avec un fonction d'&eacute;talement de point
  asym&eacute;trique PSF (due &agrave; la perte de suivi du
  t&eacute;l&eacute;scope) ou d'autres d&eacute;fauts majeurs comme seeing
  terrible, foyer fautif, ou le manque de transparence
  atmospherique sont rejet&eacute;. Dans certains images, une ou plusieurs
  CCDs dans la mosa&iuml;que sont morts. Ces images sont &eacute;galement
  rejet&eacute;es.
</p>
<h2 id="astcal">Calibration astrom&eacute;trique</h2>
<p>
    Le pipeline de calibration astrom&eacute;trique AstroGwyn est ex&eacute;cut&eacute; sur
    les images. La premi&egrave;re &eacute;tape consiste &agrave; ex&eacute;cuter <a rel="external" href="https://www.astromatic.net/software/sextractor">SExtractor</a> sur
    chaque image. Les param&egrave;tres sont r&eacute;gl&eacute;s de mani&egrave;re &agrave; extraire
    uniquement les objets les plus fiables (5 d&eacute;tections sigma dans au
    moins 5 pixels). Ce catalogue est &eacute;galement nettoy&eacute; des rayons
    cosmiques et des objets &eacute;tendus. Il ne reste que des objets r&eacute;els avec
    des centres bien d&eacute;finis: &eacute;toiles et (dans une certaine mesure) les
  galaxies compactes.
</p>
<p>
  La correspondance est faite du catalogue observ&eacute;e au catalogue de
  r&eacute;f&eacute;rence astrom&eacute;trique.   Les coordonn&eacute;es (x,y) du catalogue observ&eacute; sont convertis
  en (RA, Dec) en utilisant la WCS initiale d'Elixir .  Les catalogues
  sont d&eacute;cal&eacute;es dans RA et Dec par rapport &agrave; l' l'autre jusqu'&agrave; ce que
  la meilleure correspondance entre les deux catalogues est
  trouv&eacute;. S'il n'ya pas un correspondance acceptable pour un CCD
  particulier (par exemple si la WCS initialle est erron&eacute;e), sa WCS
  est remplac&eacute; par un WCS de d&eacute;faut et la proc&eacute;dure demise en
  correspondance est red&eacute;marr&eacute;. Une fois que l'alignement est termin&eacute;,
  le raccord astrom&eacute;trique peut commencer. G&eacute;n&eacute;ralement 20 &agrave; 50
  sources par CCD sont trouv&eacute;s avec cette premi&egrave;re correspondance.
</p>
<p>
    Elixir fournit une solution WCS de premi&egrave;re ordre pour avec des
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
    de <a rel="external" href="https://adsabs.harvard.edu/abs/2008PASP..120..212G">l'article
    de MegaPipe</a>. La partie d'ordre sup&eacute;rieur solution ordre
    sup&eacute;rieur est d'ordre 3 ainsi, mais les coefficients d&eacute;pendent
    directement et uniquement sur la distorsion radiale globale de
    param&egrave;tres 2. la erreur introduite par cette traduction est
    inf&eacute;rieure &agrave; 0,001 secondes d'arc.
</p>
<p>
    Pour le premier filtre &agrave; &ecirc;tre trait&eacute; (la bande <em>i</em>, si
    possible, sinon l'ordre de pr&eacute;f&eacute;rence est <em> r, g, z, u </em>),
    ces sources catalogues sont jumel&eacute;s avec l'un catalogue
    astrom&eacute;trique externe pour calculer la solution astrom&eacute;trique
    initiale.  Si possible, <a rel="external" href="https://www.sdss.org">le catalogue SDSS</a> est utilis&eacute;,
    sinon le <a rel="external" href="https://www.ipac.caltech.edu/2mass/">catalogue 2MASS</a> est
    utilis&eacute;.
</p>
<p> 
    Pour les autres filtres, le correspondnace est faite d'abord entre
    catalogues observ&eacute;es et le catalogue externne et ensuite
    avec un catalogue produit en utilisant la premi&egrave;re image de
    mani&egrave;re &agrave; enregistrer pr&eacute;cis&eacute;ment les images dans les bandes
    diff&eacute;rentes.  La calibration astrom&eacute;trique final pr&eacute;sente une
    incertitude interne d'environ 0.03 secondes d'arc et une
    incertitude externe d'environ 0.1 secondes d'arc, comme discut&eacute;s
    sur le page <a href="/fr/megapipe/docs/astro.html">V&eacute;rifications de l'astrometrie</a>.
</p>
<h2 id="photcal">Calibration photom&eacute;trique</h2>
<p>
  Le <a rel="external" href="https://www.sdss3.org/dr9/">Sloan Digital Sky Survey DR9</a> sert
  que la base de l'&eacute;talonnage photom&eacute;trique.
  Les filtres de ugriz Sloan ne sont pas identiques aux <a href="filt.html">filtres de MegaCam</a>.
  Les termes de couleur entre les deux jeux de filtres peut &ecirc;tre d&eacute;crit par les &eacute;quations suivantes:
</p>
<pre>
  u_Mega = u_SDSS - 0.241 (u_SDSS - g_SDSS)
  g_Mega = g_SDSS - 0.153 (g_SDSS - r_SDSS)
  r_Mega = r_SDSS - 0.024 (g_SDSS - r_SDSS)
  i_Mega = i_SDSS - 0.085 (r_SDSS - i_SDSS)
  z_Mega = z_SDSS + 0.074 (i_SDSS - z_SDSS)
</pre>
<p>
    Les rapports pour les bandes griz proviennent de l'analyse du
    <a rel="external" href="https://www.astro.uvic.ca/~pritchet/SN/Calib/ColourTerms-2006Jun19/index.html#Sec04">groupe SNLS </a>
    Le rapport de la bande de u vient du
    <a  rel="external" href="https://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/generalinformation.html">pages web TCFH</a>
</p>
<p>
Toutes les images se trouvant dans le SDSS peuvent &ecirc;tre directement
calibr&eacute;s sans se r&eacute;f&eacute;rant &agrave; d'autres &eacute;toiles standards tels
que <a href="https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2002AJ....123.2121S" rel="external">les standard de Smith</a>. Les incertitudes
syst&eacute;matiques dans la photom&eacute;trie SDSS sont environ 0.02 magnitudes
(<a href="https://xxx.lanl.gov/pdf/astro-ph/0410195"  rel="external">Ivezic, et al. , 2004</a>).  La pr&eacute;sence d'au moins 1
000 sources utilisables dans chaque degr&eacute; carr&eacute; r&eacute;duit l'erreur
al&eacute;atoire jusqu'&agrave; essentiallement z&eacute;ro. Il est possible d'&eacute;talonner
les capteurs CCD individuelles de la mosa&iuml;que individuellement avec
environ 30 &eacute;toiles standards dans chacune des CCDs. Pour chaque
image MegaCam, le correspondance est faite entre le catalogue observ&eacute;e
et le catalogue SDSS pour ce tranche de ciel.
</p>
<p>
La diff&eacute;rence entre les magnitudes de MegaCam instrumentales et les
magnitudes SDSS (transf&eacute;r&eacute;s au syst&egrave;me MegaCam instrumental en
utilisant les &eacute;quations ci-dessus) donne le point z&eacute;ro pour
l'exposition ou le CCD. Le point z&eacute;ro est d&eacute;termin&eacute; par la m&eacute;diane et
non par la moyenne. Il ya environ 10 000 sources SDSS par degr&eacute; carr&eacute;,
mais quand on coupe par stellarit&eacute; et par magnitude de ce nombre
tombe &agrave; autour de 1000.  Il est pr&eacute;f&eacute;rable d'utiliser seulement les
&eacute;toiles (les equations de couleur ci-dessus sont plus appropri&eacute;es aux
&eacute;toiles qu'aux galaxies) et d'utiliser uniquement les objets avec
17&lt;mag&lt;20 (les astres les plus brillants sont g&eacute;n&eacute;ralement
satur&eacute;s dans l'image MegaCam et les objets plus faibles ne font que
augmenter le bruit dans la m&eacute;diane).  Ce processus peut &ecirc;tre utilis&eacute;
pour les donn&eacute;es de toute les nuits. Il n'est pas n&eacute;cessaire que la
nuit soit photom&eacute;trique.
</p>
<p>
    Pour les objets en dehors du SDSS, les mots-cl&eacute;s photom&eacute;triques Elixir
    sont utilis&eacute;es, avec des modifications. Les points-z&eacute;ro Elixir ont &eacute;t&eacute;
    compar&eacute;s &agrave; ceux qui sont d&eacute;termin&eacute;s &agrave; partir du SDSS en utilisant la
    proc&eacute;dure ci-dessus pour un grand nombre d'images. Il ya des d&eacute;calages
    syst&eacute;matiques entre les deux ensembles de points z&eacute;ro, en particulier
    pour la bande <em>u</em>. Ces d&eacute;calages montrent des variations de
    &eacute;poque, qui sont caus&eacute;es par des modifications pipeline Elixir.  Il y
    a &eacute;galement des d&eacute;calages diff&eacute;rentielle entre les CCDs d'une seule
    image.  Pour MegaPipe, les d&eacute;calages sont appliqu&eacute;s &agrave; partir des
    points z&eacute;ro Elixir pour les mettre en conformit&eacute; avec les z&eacute;ro points
    SDSS. Une <a href="elixphot.html">analyse d&eacute;taill&eacute; de ces d&eacute;calages</a> a
    &eacute;t&eacute; fait.
</p>
<p>
    Les mots-cl&eacute;s photom&eacute;triques Elixir ne sont valables que sur les
    nuits photom&eacute;triques.  Donn&eacute;es d'archives du moniteur du
    transparence du ciel en temps r&eacute;el
    <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/skyprobe/home.html">SkyProbe</a>
    sont utilis&eacute;e pour d&eacute;terminer si une nuit &eacute;tait photom&eacute;trique
    ou pas. Les donn&eacute;es prises sur les nuits photom&eacute;triques sont
    trait&eacute;es d'abord par les pipelines astrom&eacute;triques et
    photom&eacute;triques pour g&eacute;n&eacute;rer un catalogue de standards
    photom&eacute;triques dans le champ en question.  Ces standards sont
    ensuite utilis&eacute;s pour &eacute;talonner les donn&eacute;es non-photom&eacute;triques
    dans un groupe. Si aucune des expositions dans un groupe a &eacute;t&eacute;
    prise sur une nuit photom&eacute;trique, le groupe ne peut pas
    &ecirc;tre trait&eacute;e.
</p>
<h2 id="coadd">Coaddition</h2>
<p>
  Les images calibr&eacute;s ont &eacute;t&eacute; coadditionn&eacute;s en utilisant le programme
  <a rel="external" href="https://www.astromatic.net/software/swarp">Swarp</a>.
  Voici le <a href="/static/files/megapipe/megapipe.swarp">fichier de configuration de Swarp</a>.
  Les images coadditionn&eacute;s qui en r&eacute;sultent sont de simples fichiers FITS
  (et non pas des fichiers FITS multi-extension) mesurant environ 20000 pixels par 20000 pixels
  ou d'environ 1 degr&eacute; par 1 degr&eacute;, selon le motif de tramage.
  et sont environ 1.7 Gb.
  Le niveau du ciel est 0 ADU. Ils sont &eacute;chelonn&eacute;es afin d'avoir une point z&eacute;ro photom&eacute;trique
  point z&eacute;ro de 30.000 en magnitudes AB - c'est-&agrave;-dire, pour chaque source:
</p>
<pre>
  AB_magnitude = -2.5 * log10 (ADU) + 30.000
</pre>
<p>
  Une image des pond&eacute;rances (inverse de la variance) de la
  m&ecirc;me taille est &eacute;galement produite.
</p>
<h2 id="photcat">Catalogues photom&eacute;trique</h2>
<p>
  SExtractor est ex&eacute;cut&eacute; sur chaque image coaddition&eacute; &agrave; l'aide de
  l'image des pond&eacute;rances.  Voici
  le <a href="/static/files/megapipe/megapipe.sex">fichier de configuration de SExtractor</a>.
  Les catalogues r&eacute;sultant ne se rapportent &agrave; un seul image dans une
  bande; les catalogues multi-bandes ont &eacute;t&eacute; g&eacute;n&eacute;r&eacute;s.  Bien que cette
  approche assez simple fonctionne bien dans de nombreux cas, il n'est
  probablement pas optimale dans certaines situations.  Selon
  l'application, certains utilisateurs peuvent souhaiter g&eacute;rer leur
  propre logiciel de g&eacute;n&eacute;ration de catalogue sur les image
  coaddition&eacute;s.
</p>
