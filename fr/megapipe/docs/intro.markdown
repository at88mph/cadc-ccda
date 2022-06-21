---
layout: cadc
lang: fr
permalink: /fr/megapipe/docs/intro.html
title: Introduction à MegaPipe
altLangPage: /en/megapipe/docs/intro.html
dateModified: 2021-12-08

signing: layout.signing


nav: megapipe

breadcrumbs:
    - link: /fr/megapipe/
      title: MegaPipe
---

<h2>Motivation</h2>
<p>
  MegaPipe est un syst&egrave;me de traitement d'images de MegaCam. 
  Il prend plusieurs images d'un morceau de ciel, les &eacute;tallone pour
  les combiner en une seule image et en extrait un catalogue de
  sources. Si les images d'entr&eacute;e sont pris avec filtres diff&eacute;rents sur
  le m&ecirc;me pointage, les images combinn&eacute;es r&eacute;sultantes les images sont
  align&eacute;es les unes aux autres.
</p>
<p>
  Le plus grand obstacle &agrave; l'utilisation des images d'archives de
  <a rel="external" href="http://cfht.hawaii.edu/Instruments/Imaging/MegaPrime/">MegaCam</a>
  est l'effort n&eacute;cessaire pour les traiter. Alors que les images
  individuelles sont parfois utiles par eux-m&ecirc;mes, le plus souvent le
  programme scientifique initial pr&eacute;voyait plusieurs expositions sur le
  m&ecirc;me champ pour faire cro&icirc;tre la profondeur et de se d&eacute;barrasser de
  d&eacute;fauts d'image. Par cons&eacute;quent, les images doivent &ecirc;tre combin&eacute;es.
</p>
<p>
  Un programme typique prend 5 poses ou plus sur un seul champ. Chaque
  image MegaCam comprend environ 0.7Gb (dans un format entier de 16
  bits), ce qui rend lourd la t&eacute;l&eacute;chargment d'images sur le Web. En
  raison de la distorsion du plan focal MegaPrime, les images doivent
  &ecirc;tre r&eacute;-&eacute;chantillonn&eacute;s. Il s'agit de demandes de calcul
  importantes. Au cours de ce traitement, qui se fait souvent dans un
  format 32 bits, des copies des images doivent &ecirc;tre faites, ce qui
  augmente l'utilisation du disque. En r&eacute;sum&eacute;, les exigences en termes
  de CPU et de stockage sont non-trivial. Bien que, dans dix ans, 
  <a rel="external" href="http://fr.wikipedia.org/wiki/Loi_de_Moore">la loi de Moore</a>
  rendra probablement ces pr&eacute;occupations n&eacute;gligeables,
  sinon risibles, en ce moment ils pr&eacute;sentent un obstacle technologique
  &agrave; l'utilisation facile des donn&eacute;es MegaCam.
</p>
<p>
  Le syst&egrave;me de traitement d'images Elixir au TCFH traite chaque image
  MegaCam. Il fait un excellent travail de &eacute;limination de la tendance
  (soustraction du bias, la calibration du sensibilit&eacute;) les images.
  Cependant, la solution astrom&eacute;trique Elixir offre n'est valable que
  pour environ 1 seconde d'arc. Pour combiner les images, elles doivent
  &ecirc;tre align&eacute;es &agrave; mieux qu'un pixel. Une pr&eacute;cision de seconde d'arc
  est insuffisante. Par cons&eacute;quent, il est n&eacute;cessaire pour un
  utilisateur de mettre au point un moyen d'alignement des images pour
  une plus grande pr&eacute;cision. Ce n'est pas une t&acirc;che facile, et elle est
  rendue plus difficile par la d&eacute;formation du plan focal MegaPrime. Le
  probl&egrave;me n'est pas insoluble et il faire exister un certain nombre de
  solutions logicielles au probl&egrave;me, mais il reste un obstacle &agrave;
  l'utilisation facile des donn&eacute;es MegaCam.
</p>
<p>
  En bref, alors que les obstacles &agrave; l'utilisation des donn&eacute;es de
  MegaCam archives ne sont pas insurmontables, ils rendent l'utilisation
  de ces donn&eacute;es beaucoup moins attrayant. MegaPipe vise &agrave; accro&icirc;tre
  l'utilisation des donn&eacute;es MegaCam par la suppression de ces obstacles.
</p>
<h2>But et la Port&eacute;e
</h2>
<p>
  L'objectif du projet MegaPipe est de coaddtionner toutes les images
  MegaCam accessibles au public, &agrave; la fois des programmes de PI et le
  CFHTLS, dans les piles et les catalogues d'extraction. Les donn&eacute;es
  d'entr&eacute;e est accessible au public, les resultat sont aussi publics.
</p>
<p>
  Les donn&eacute;es seront regroup&eacute;es dans des tranches d'un degr&eacute; carr&eacute;, la
  taille d'une image MegaCam. La fa&ccedil;on la plus habituelle de prise de
  donn&eacute;es de MegaCam est de prendre de multiples poses &agrave; chaque
  pointage, avec un motif de tramage qui est une petite fraction de
  degr&eacute;. Certains projets impliquent images d&eacute;cal&eacute;es qui ne se
  chevauchent que l&eacute;g&egrave;rement, ce qui exigerait r&eacute;aliser des mosa&iuml;ques
  plus grand qu'un degr&eacute;. Les fichiers d'images en r&eacute;sulteraient
  seraient dessus de la limite de 2 Go intrins&egrave;que aux ordinateurs 32
  bits, ce qui les rend trop grande pour de nombreux
  utilisateurs. L'autre option est de travailler puce par puce. Cela
  pr&eacute;sente des avantages techniques: les fichiers image sont plus
  petits et, dans le cas de d&eacute;fauts dans la proc&eacute;dure d'empilage, les
  t&acirc;ches peuvent &ecirc;tre renouvel&eacute;es avec une petite perte de temps. Elle
  pr&eacute;sente &eacute;galement des avantages scientifiques: dans certaines
  &eacute;tudes de lentillage gravitationalle il est n&eacute;cessaire suivre la
  fonction d'&eacute;talement de point &agrave; partir de chaque puce de l'image
  d'entr&eacute;e &agrave; l'image coaddition&eacute;e, une t&acirc;che rendue beaucoup plus
  facile si l'image ne contient que des donn&eacute;es coaddition&eacute;es &agrave;
  partir d'une seule puce. Toutefois, le motif de tramage grand
  utilis&eacute; dans de nombreux projets emp&ecirc;che cette approche. Trop de
  donn&eacute;es seraient perdues dans les "goutti&egrave;res" entre les images. En
  outre, le proc&eacute;d&eacute; monolithique signifie qu'il existe un facteur de
  36 moins de fichiers &agrave; traiter, ce qui simplifie certains aspects du
  processus d'empilage.
</p>
<p>
   Alors que MegaPipe est primarially construit pour le traitement des
   donn&eacute;es publiques, les donn&eacute;es PI sont trait&eacute;es sur demande. S'il
   vous pla&icirc;t <a href="/fr/contactez.html#courriel">contacter la CADC</a>.
</p>
<p>
  Il y aura des mises &agrave; jour tous les six mois. Aussit&ocirc;t que les
  donn&eacute;es deviennent accessibles au public, ils seront trait&eacute;es par
  MegaPipe. En principe, cela peut se faire sur une base quotidienne,
  comme le syst&eacute;me ne n&eacute;cessite qu'un minimum de
  supervision. Cependant, une fraction substantielle de donn&eacute;es CFHT
  sont obtenues lors de la file d'attente d'observation. Ces donn&eacute;es
  sont rendues publiques un an apr&egrave;s la fin du semestre de six mois
  dans lequel ils sont pris. Cela signifie que, dans la pratique, il
  est plus utile de produire des mises &agrave; jour semestriellement.
</p>
<h2>Definitions</h2>
<ul>
  <li>
    Une CCD ou une puce ou se r&eacute;f&egrave;re &agrave; un seul 2k 4k par extension d'un fichier FITS multi-poste MegaCam.
  </li>
  <li>
    Une image ou une pose se r&eacute;f&egrave;re &agrave; l'ensemble des 36 capteurs CCD de MegaCam repr&eacute;sent&eacute;s comme un multi-extension FITS.
  </li>
  <li>
    Une pile est la somme de plusieurs expositions combin&eacute;es
    (ajout&eacute;es / moyenn&eacute;es / m&eacute;dian&eacute;es) ensemble. Les piles sont
    FITS simples fichier avec des dimensions autour de 20k par 20k
  </li>
  <li>
    Un groupe est un ensemble de plusieurs piles, chacune dans une
    filtre differente, couvrant le exactement le m&ecirc;me champ.
  </li>
</ul>
<p>
  Actuellement, les r&eacute;sultats de MegaPipe comprennent plus de 3000
  groupes. La couverture est montr&eacute; dans la figure suivante. Les
  expositions individuels de MegaCam sont repr&eacute;sent&eacute;s en noir. Les
  images coadditionn&eacute;es sont indiqu&eacute;s en rouge.<br/>
  <img src="/static/images/megapipe/centresweb_fr.gif" class="full-width" alt="Images MegaCam indviduelles et images MegaPipe empil&eacute;es"/>
</p>