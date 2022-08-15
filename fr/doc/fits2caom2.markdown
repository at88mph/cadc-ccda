---
layout: cadc
lang: fr
permalink: /fr/doc/fits2caom
title: Application fits2caom2
altLangPage: /en/doc/fits2caom
dateModified: 2022-08-10
signing: layout.signing
nav: doc
archived: true

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p><code>fits2caom2</code> est un logiciel JAVA dont la principale fonction et d'essayer de traduire l'entête d'un fichier
FITS dans un fichier XML qui repr&eacute;sente un enregistrement CAOM. Un enregistrement CAOM  doit être cr&eacute;&eacute; et ing&eacute;r&eacute; dans l'archive du CAOM afin de permettre la recherche des observations via les engins de recherche du CCDA (TAP ou Recherche Avanc&eacute;e). </p>

<p>Ce document est surtout utile aux utilisateurs qui pr&eacute;voient maintenir ou ing&eacute;rer de nouvelles observations au CCDA 
et qui veulent utiliser <code>fits2caom2</code> pour cr&eacute;er les enregistrements CAOM.</p>

<p>Les instructions qui suivent ne s'appliquent qu'aux architectures LINUX ou OSX et requirent l'installation JAVA JDK version 8.</p>

<h2>T&eacute;l&eacute;chargement</h2> 
<a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/software/fits2caom2.tgz">Lien</a>

<h2>Installation</h2>
Le t&eacute;l&eacute;chargement et l'expansion du fichier TAR ci-haut cr&eacute;era un fichier JAVA .jar, les classes n&eacute;cessaires &agrave; son &eacute;x&eacute;cution 
en plus d'une scripte d'&eacute;x&eacute;cution principale nomm&eacute;e <code>fits2caom2</code>. Pour ce faire veuillez suivre ces instrunctions simples:
<ul>
<li>Cr&eacute;ation d'un r&eacute;pertoire d'installation: <code>mkdir fits2caom2</code></li>
<li>T&eacute;l&eacute;charger et d&eacute;coder le fichier tar dans ce r&eacute;pertoire: <code>cd fits2caom2 ; tar xzf ../fits2caom2.tgz</code></li>
<li>Cr&eacute;er une variable d'environnemt requise: <code>CADC_ROOT</code> qui doit pointer au r&eacute;pertoire où vous avez 
install&eacute; <code>fits2caom2</code>.
Si votre shell est bash:</p>
 <code>export CADC_ROOT=`pwd`</code>
<p>pour (t)csh:</p>
<code>setenv CADC_ROOT `pwd`</code>
</li>
</ul>


<p>Il est facile de v&eacute;rifier si l'installation s'est effectu&eacute;e correctement. Il suffit d'ex&eacute;cuter la commande suivante:
<br>
<code>./scripts/fits2caom2 --help</code></p>

Si vous avez des difficult&eacute;s &agrave; installer <code>fits2caom</code>, veuillez <a href="mailto:support@canfar.net">contacter le CCDA</a>.

<h2>Usage</h2>
<p>La premi&egrave;re action de <code>fits2caom2</code> est d'examiner l'entête FITS de votre fichier d'entr&eacute;e et de tenter de
cr&eacute;er un enregistrement CAOM. Il est presque sur que votre premi&egrave;re tentative &eacute;chouera car certains mots cl&eacute;s obligatoires ne seront pas trouv&eacute;s ou seront erron&eacute;s. Nous verron par la suite la façon de corriger cette situation.</p>

<p>Voici un exemple d'un utilisateur qui ex&eacute;cute <code>fits2caom2</code> sur un fichier FITS multi-extension (MEF) qui repr&eacute;sente une observation obtenue par la cam&eacute;ra megaprime au TCFH:</p>


<pre><code>
fits2caom2 --collection=CFHT \
           --observationID=1615920 \
           --productID=1615920o \
           --uri=ad:CFHT/1615920o \
           --local=1615920o.fits  \
           --out=1615920o.xml
</code></pre>

<p>Cette derni&egrave;re commande exige quelques explications.</p>

<ul>
  <li>  --collection Est le nom de la <b>Collection</b> dans le syst&egrave;me d'archive du CCDA.  La valeur de <b>Collection</b> vous sera fourni par le CCDA et sera disponible dans l'engin de recherche du CCDA</li>
<li> --observationID Est une d&eacute;nomination unique dans une Collection
donn&eacute;e et essentiellement repr&eacute;sente une observation. Par exemple,
cette valeur est fix&eacute;e par un odom&egrave;tre par le syst&egrave;me d'acquisition
du t&eacute;lescope TCFH et identifi uniquement
         chacune des observations.</li>

<li> --productID permet de d&eacute;finir uniquement chacun des <b>Plane</b>. Voici comment nous identifions un nouveau <b>Plane</b> pour les observations non calibr&eacute;es, ou brutes, du TCFH. Ils repr&eacute;sentent les observations pour lesquelles la lettre 'o' est rajout&eacute;e en suffixe &agrave; l'odom&egrave;tre qui identifie une observation. Cette valeur n'a pas &agrave; être unique pour une collection donn&eacute;e mais l'utilisation d'un nom unique aide une &eacute;ventuelle recherche si d&eacute;sir&eacute;e. </li>

<li> --uri C'est avec ce param&egrave;tre qu'il nous est permis d'identifier les diff&eacute;rents <b>Artifact</b> qui appartiennent &agrave; un productID. C'est une simple liste de fichiers s&eacute;par&eacute;s par une virgule. Les fichiers sont habituellement identifi&eacute;s avec leur location dans les archives du CCDA dans le format suivant: <code>ad:{COLLECTION}/{filename}</code>.
où COLEECTION est le nom de la collection et filename, le nom de fichier utilis&eacute; lors de l'ingestion dans l'archive avec cadc-copy.

<li> --local permet de sp&eacute;cifier l'endroit où se situe le fichier FITS sur votre ordinateur sur lequel vous roulez <code>fits2caom</code> pour contruire l'enregistrement CAOM pour cette observation. Si cette option est inexistante, <code>fits2caom</code> utilsera les informations sp&eacute;cifi&eacute;es par --uri pour localiser le fichier.

<li>--out est le nom du fichier qui contiendra l'enregistrement CAOM r&eacute;sultant en format XML. </li>

</ul>

<p>Apr&egrave;s la cr&eacute;ation de votre enregistrement CAOM, il est possible (et souvent requis) d'ajouter des plans 
additionnels en ex&eacute;cutant &agrave; nouveau code>fits2caom2</code> avec cette fois-ci un fichier d'entr&eacute;e XML et en sp&eacute;cifiant
les nouvelles variables productID, uri et local. Un nouveau fichier XML sera alors produit.</p>

<pre><code>
fits2caom2 --collection=CFHT \
--observationID=1615920 \
--productID=1615920p \
--uri=ad:CFHT/1615920p \
--local=1615920p.fits  \
--in=1615920o.xml \
--out=1615920.xml 
</code></pre>

<ul><li>--in permet de sp&eacute;ficier le nom d'un document XML (enregistrement CAOM) auquel on veut modifier ou rajouter, ou même 
enlever des informations en ex&eacute;cutant <code>fits2caom2</code></li></ul>

<p>Maintenant le fichier XML comprend les entr&eacute;es CAOM pour deux <b>Plane</b> (1615920o and 1615920p)</p>

<p>D'autres options sont disponibles pour permettre d'augmenter les informations qui pourraient (for probablement) ne pas se
retrouver dans vos entêtes FITS ou de remplacer le comportement de <code>fits2caom2</code> si ce n'est pas ad&eacute;quat.</p>

<h3>--config=camera.config</h3>

<p>Même si <code>fits2caom2</code> construit avec une vision astronomique, il est facile de d&eacute;montrer qu'il est impossible 
de pr&eacute;voir de façon g&eacute;n&eacute;ral les diff&eacute;rents mots cl&eacute;s utilis&eacute;s automatiquement. Pour aider <code>fits2caom2</code>
&agrave; produire des enregistrements corrects, il est possible de sp&eacute;cifier la correspondance entre les mots cl&eacute;s FITS 
et les variables CAOM via un fichier de configuration. Voici un exemple qui remplace la valeur CAOM camera.config
pour l'archive MegaPrime du TCFH: </p>

<pre><code>
Observation.telescope.geoLocationX = telescope.geoLocation
Observation.type = OBSTYPE
Chunk.naxis = ZNAXIS,NAXIS
Chunk.energyAxis = getEnergyAxis()
Chunk.energy.axis.axis.ctype = CTYPE{energyAxis}
.
.
.
</code></pre>


<p>Les exemples pr&eacute;c&eacute;dents pr&eacute;sentent la façon de sp&eacute;cifier les valeurs dans le fichier de configuration: </p>
<ol>
<li> Les valeurs sont sp&eacute;cifi&eacute;es dans un fichier appel&eacute; default.config (voir prochaine section) </li>
<li> La r&eacute;f&eacute;rence &agrave; une ou plusieurs cl&eacute;s FITS ( Si il y a un doublon, c'est la premi&egrave;re occurence qui est conserv&eacute;e)</li>
<li> Un appel &agrave; une fonction sp&eacute;ciale de <code>fits2caom2</code></li>
<li> Une r&eacute;f&eacute;rence &agrave; un mot cl&eacute; FITS via une variable qui est d&eacute;finie autre part dans le fichier default.config </li>
</ol>
<p>Quelque fois l'&eacute;valuation des variables est faites via une logique quelque peu cryptique et l'usager peut remplacer 
cette variable par une valeur fixe pour simplifier la lecture. Veuillez notez qu'il n'est pas possible de d&eacute;finir sa
propre fonction pour convertir des cl&eacute;s FITS en commande CAOM.
</p>

<p>On utilise l'option <code>--dumpconfig</code> pour obtenir la liste des variables utilis&eacute;es par CAOM. </p>


<h3>--default=camera.default</h3>
<p>L'ex&eacute;cution directe de <code>fits2caom2</code> va produire certainement un enregistrement CAOM non valide.
Il est presque impossible d'interpr&eacute;ter automatiquement les bonne valeurs en utilisant les entêtes FITS. Il est donc
essentiel de fournir &agrave; <code>fits2caom2</code> de plus amples informations. La premi&egrave;re façon est de composer 
un fichier qui contient des valeurs de d&eacute;faut pour quelques param&egrave;tres, comme un entête FITS suppl&eacute;mentaire.
Le fichier doit contenir les &eacute;quivalences entre les mots cl&eacute;s CAOM et la correspondance soir via une valeur FITS ou 
une valeur fixe. L'exemple suivant permet de comprendre le principe:</p>

<pre><code>
algorithm.name = exposure

telescope.geoLocationX = -5464228.6
telescope.geoLocationY = -2493778.2
telescope.geoLocationZ = 2150937.8
telescope.name =  CFHT 3.6m

provenance.name = ELIXIR
provenance.producer = CFHT
provenance.project = STANDARD PIPELINE
provenance.reference = http://www.cfht.hawaii.edu/Instruments/Elixir/

plane.dataProductType=image

CUNIT1 = deg
CUNIT2 = deg
CRDER1 = 0.0000278
CRDER2 = 0.0000278
CSYER1 = 0.0000278
CSYER2 = 0.0000278

CTYPE3 = TIME
CUNIT3 = d
CRDER3 = 0.0000001
CSYER3 = 0.0000001

CTYPE4 = WAVE
CUNIT4 = Angstrom
NAXIS4 = 1
CRPIX4 = 1
SPECSYS = TOPOCENT
SSYSOBS = TOPOCENT
SSYSSRC = TOPOCENT
CRDER4 = 1.0
CSYER4 = 1.0
</code></pre>

<p>Les valeurs des param&egrave;tres sp&eacute;cifi&eacute;s dans le fichier camera.default ne seront pas recherch&eacute;e dans les entêtes par
<code>fits2caom</code>.</p>

<p>Veuillez noter les valeurs des mots cl&eacute;s CTYPE?. C'est un peu &eacute;trange mais pour que le mod&egrave;le CAOM soit complet,
il nous faut ajouter deux axes suppl&eacute;mentaires: un axe temporel (TIME) et un axe d'&eacute;nergie (WAVE). La dimension de ces
axes est exactement un seul pixel et permet de sp&eacute;cifier les 4 dimensions de nos fichiers d'observation (les deux dimensions spatiales, un axe temporel et un axe d'&eacute;nergie). Dans le cas d'une image 2D simple, les axes suppl&eacute;mentaires seront 
les axes 3 et 4 et seront d&eacute;termin&eacute;s dans le mod&egrave;le en utilisant les fonctions getEnergyAxes() et getTimeAxes() respectivement.</p>


<h3>--override=camera.override</h3>

<p>Certaines valeurs que <code>fits2caom2</code> tentera d'utiliser seront non valides. Pour ces derni&egrave;res, il est possible
d'avoir un main un fichier sp&eacute;cial appel&eacute; "override" qui permettra de forcer l'usage de ces valeurs plutôt que celles
d&eacute;couvertes par l'uage de <code>fits2caom2</code>. Essentiellemtn via ce fichier vous configurer <code>fits2caom</code> de ne pas utiliser 
les valeurs des entêtes FITS pour ces valeurs.

<p>Une fois que vous avez en main ces fichiers de configuration suppl&eacute;mentaires, vous pouvez proc&eacute;dez en
utilisant la commande suivante.</p>


<pre><code>
fits2caom2 --collection=CFHT \
--observationID=1615920 \
--productID=1615920p \
--uri=ad:CFHT/1615920p \
--local=1615920p.fits  \
--config=camera.config \
--default=camera.default \ 
--override=camera.override \
--in=1615920o.xml \
--out=1615920.xml 
</code></pre>
