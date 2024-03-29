---
layout: cadc
lang: fr
permalink: /fr/rioss/documentation.html
title: Documentation RIOSS
altLangPage: /en/ssois/documentation.html
dateModified: 2022-08-15
signing: layout.signing

nav: ssois

breadcrumbs:
    - link: /fr/rioss/
      title: RIOSS
---

{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<p>
Cette page fournit la documentation pour le page 
<a href="index.html">recherche d'images d'objets du syst&egrave;me solaire (RIOSS)</a>.
Contrairement aux pages
de recherche d'images astronomiques r&eacute;guli&egrave;res, qui vous permettent la
recherche d'image &agrave; un RA et Dec fixe, RIOSS vous permet de
rechercher dans les archives astronomiques des images d'un objet en
mouvement. Il existe actuellement quatre m&eacute;thodes de recherche:
</p>
<ul>
  <li><a href="#name">Rechercher par nom de l'object</a></li>
  <li><a href="#arc">Rechercher en extrapolant &agrave; partir d'un arc</a></li>
  <li><a href="#oe">Rechercher &agrave; partir d'un ensemble d'&eacute;l&eacute;ments orbitaux</a></li>
  <li><a href="#ephem">Rechercher &agrave; partir d'une &eacute;ph&eacute;m&eacute;ride que vous fournissez</a></li>
</ul>
<p>
Toutes ces m&eacute;thodes renverra une liste des images qui contiennent l'objet.
Documentation pour la page de retour de recherche peut &ecirc;tre trouv&eacute;e <a href="#return">ci-dessous</a>.
</p>
<p>
Actuellement, RIOSS cherchera des images des telescopes des instruments suivantes:
<a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/MegaPrime">MegaCam</a> et
<a rel="external" href="http://www.cfht.hawaii.edu/Instruments/Imaging/CFH12K">CFH12K</a> sur CFHT,
<a rel="external" href="http://www.naoj.org/Observing/Instruments/SCam">SuprimeCam</a> et
<a rel="external" href="https://www.naoj.org/Observing/Instruments/HSC/index.html">Hyper Suprime-Cam</a> sur Subaru,
<a rel="external" href="https://panstarrs.ifa.hawaii.edu/pswww/">Pan-STARRS</a>,
<a rel="external" href="https://www.asc-csa.gc.ca/fra/satellites/neossat/default.asp">NEOSSat</a>,
<a rel="external" href="http://www.gemini.edu/node/10625?q=node/10007">GMOS</a> sur Gemini,
<a rel="external" href="http://www.stsci.edu/hst/wfpc/">WFPC</a>,
<a rel="external" href="http://www.stsci.edu/hst/wfpc2/">WFPC2</a>,
<a rel="external" href="http://www.stsci.edu/hst/stis/">STIS</a>,
<a rel="external" href="http://www.stsci.edu/hst/nicmos/">NICMOS</a>,
<a rel="external" href="http://www.stsci.edu/hst/acs/">ACS</a>, et
<a rel="external" href="http://www.stsci.edu/hst/wfc3">WFC3</a> sur HST,
<a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/wfi/index.html">WFI</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/vimos/inst/imaging.html">VIMOS</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/vircam/inst/">VIRCAM</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/susi/docs/SUSInutshell.html">SUSI/SUSI2</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/fors/">FORS1/2</a>, 
<a rel="external" href="http://www.eso.org/lasilla/instruments/emmi/">EMMI</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/lasilla/instruments/efosc/overview.html">EFOSC</a>, 
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/omegacam.html">OmegaCAM</a>,
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/hawki/">HAWKI</a>, et 
<a rel="external" href="http://www.eso.org/sci/facilities/paranal/instruments/naco/">NAOS/CONICA</a>
sur les telescopes d'ESO, et plusieures  instruments du 
<a rel="external" href="http://portal-nvo.noao.edu/adql/query">NOAO</a> (soit: DEcam, Mosaic, SOAR/SOI, NEWFIRM, MiniMo),
en incluant <a rel="external" href="http://www.noao.edu/wiyn/ODI/">WIYN/ODI</a>,
<a rel="external" href="http://www.aao.gov.au/AAO/astro/wfi.html">WFI sur AAT</a>, 
<a rel="external" href="http://sbn.psi.edu/pds/resource/neat.html">NEAT</a>, 
<a rel="external" href="http://www.ing.iac.es/">INT, WHT et JKT</a>,
<a rel="external" href="http://neowise.ipac.caltech.edu/">WISE</a>,
<a rel="external" href="https://www.ztf.caltech.edu/">ZTF</a>
et les images du <a rel="external" href="http://www.sdss.org">SDSS</a>.
Il ya un total de 8 millions d'images dans la base de donn&eacute;es.
D'autres archives seront ajout&eacute;es dans le futur.
</p>

<a id="name"></a>
<h2>Rechercher par nom de l'object</h2>
<p>
Cela vous permet d'entrer le nom d'un objet et de rechercher pour les images.
Il ya trois g&eacute;n&eacute;rateurs d'&eacute;ph&eacute;m&eacute;rides:
</p>
<ul>
    <li><a rel="external" href="http://asteroid.lowell.edu/asteph">g&eacute;n&eacute;rateur d'&eacute;ph&eacute;m&eacute;rides Lowell Observatory</a></li>
    <li><a rel="external" href="https://minorplanetcenter.net/iau/MPEph/MPEph.html">g&eacute;n&eacute;rateur d'&eacute;ph&eacute;m&eacute;rides Minor Planet Center</a></li>
    <li><a rel="external" href="http://ssd.jpl.nasa.gov/horizons.cgi">g&eacute;n&eacute;rateur des &eacute;ph&eacute;m&eacute;rides de JPL Horizons</a></li>
    <li>CCDA</li>
</ul>
<p>
Dans les deux premiers cas,
le RIOSS prend le nom vous offre et interroge le service externe s&eacute;lectionn&eacute;;
le service renvoie ensuite une &eacute;ph&eacute;m&eacute;ride. En g&eacute;n&eacute;ral, ces services ont une limite
pour le nombre d'epoques qui peuvent &ecirc;tre interrog&eacute;s &agrave; la fois, donc ce processus peut prendre un certain temps.
Par contre si l'option CCDA  est s&eacute;lectionn&eacute;e,
les &eacute;l&eacute;ments orbitaux sont recherch&eacute;es dans une base de donn&eacute;es local
(une copie <a rel="external" href="https://www.minorplanetcenter.net/iau/MPCORB.html">du base de donn&eacute;es du MPC</a>
qui est r&eacute;guli&egrave;rement mis &agrave; jour).

Ces &eacute;l&eacute;ments orbitaux sont transmises au logiciel <a rel="external" href="http://adams.dm.unipi.it/~orbmaint/orbfit/">orbfit</a>
qui g&eacute;n&egrave;re un &eacute;ph&eacute;m&eacute;ride.
L'&eacute;ph&eacute;m&eacute;ride est alors compar&eacute; avec la base de donn&eacute;es qui r&eacute;pertorie les images.
Les noms d'objets doivent &ecirc;tre saisies de mani&egrave;re que ces services peuvent comprendre.
Le MPC, par exemple, peut &ecirc;tre sensible &agrave; la casse.
si vous avez des doutes sur l'exactitude ou l'autre de g&eacute;n&eacute;rateur d'&eacute;ph&eacute;m&eacute;rides
ou leurs capacit&eacute;s &agrave; analyser le nom de l'objet, vous devriez
g&eacute;n&eacute;rer vos propres &eacute;ph&eacute;m&eacute;rides et le soumettre &agrave; l'option <a href="#ephem">Rechercher par &eacute;l&eacute;ments orbitaux</a>
</p>

<a id="arc"></a>
<h2>Rechercher en extrapolant &agrave; partir d'un arc</h2>
<p>
Cette m&eacute;thode vous permet d'entrer une s&eacute;rie d'observations.
RIOSS d&eacute;termine une orbite &agrave; ces observations, produit une &eacute;ph&eacute;m&eacute;ride
bas&eacute;e sur cette orbite et poursuit sa recherche sur l'&eacute;ph&eacute;m&eacute;ride
pour les images. Il ya deux routines pour la d&eacute;termination orbitale:
</p>

<ul>
<li> Le <a rel="external"
href="https://minorplanetcenter.net/iau/MPEph/NewObjEphems.html">New
Object Ephemerides</a> du <a rel="external"
href="https://minorplanetcenter.net/iau/mpc.html">Minor Planet Center</a>. Celui-ci utilise une d&eacute;termination orbital
V&auml;i&auml;sl&auml;.  Il doit &ecirc;tre utilis&eacute; pour les ast&eacute;ro&iuml;des du
ceinture principale. Si cette option est s&eacute;lectionn&eacute;e, les
observations sont soumises au MPC qui fait la d&eacute;termination orbital et
retourne une &eacute;ph&eacute;m&eacute;ride.


</li>
<li>Le logicel "fit_radec" de 
<a rel="external" href="http://www.iop.org/EJ/article/1538-3881/120/6/3323/200298.text.html">Bernstein
&amp; Kushalani</a>, optimis&eacute; pour les objets du ceinture Kuiper, mais
non pour ast&eacute;ro&iuml;des de la ceinture principale. Dans ce cas, le montage
est fait sur les ordinateurs du CCDA


</li>
</ul>
<p>
Encore une fois, si vous eprouvez des doutes sur l'exactitude de l'un ou l'autre de ces 
logicels (lesquelles ne sont pas maintenu par le CCDA), vous devriez
g&eacute;n&eacute;rer vos &eacute;ph&eacute;m&eacute;rides vous-m&ecirc;me et le soumettre &agrave; l'option
<a href="#ephem">Rechercher par &eacute;ph&eacute;m&eacute;ride</a>.
</p>

<a id="oe"></a>
<h2>Rechercher &agrave; partir d'un ensemble d'&eacute;l&eacute;ments orbitaux</h2>
<p>
Cette methode vous permet de fixer les &eacute;l&eacute;ments orbitaux.
Ces &eacute;l&eacute;ments orbitaux sont soumis ou logicel
<a rel="external" href="http://adams.dm.unipi.it/~orbmaint/orbfit/">orbfit</a>
qui g&eacute;n&egrave;re un &eacute;ph&eacute;m&eacute;ride.
</p>


<a id="ephem"></a>
<h2>Rechercher &agrave; partir d'une &eacute;ph&eacute;m&eacute;ride que vous fournissez</h2>
<p>

Bien que cette m&eacute;thode est moins pratique que les autres m&eacute;thodes, il
a l'avantage qu'elle ne se fie pas sur des logiciels externes.  Vous
fournissez une s&eacute;rie de temps, RA et Dec et RIOSS recherche dans sa
base de donn&eacute;es pour des images .

Chaque ligne doit comprendre trois colonnes s&eacute;par&eacute;es par un ou plusieurs espaces.
Les colonnes doivent &ecirc;tre temps, RA, Dec
</p>
<p>
Le temps peut &ecirc;tre sp&eacute;cifi&eacute; dans l'un des formats suivants:
</p>
<pre>
YYYYMMDDHHMMSS
YYYY-MM-DD HH:MM:SS
YYYY/MM/DD HH:MM:SS
YYYY-MM-DDTHH:MM:SS
YYYY/MM/DDTHH:MM:SS
</pre>
<p>
Ainsi, les exemples suivants sont permis (et &eacute;quivalents):
</p>
<pre>
19680117053522
1968-01-17 05:35:22
1968/01/17 05:35:22
1968-01-17T05:35:22
1968/01/17T05:35:22
</pre>
<p>
Par contre, vous pouvez utiliser les Jours julien ou Jours juliens modifi&eacute; (MJD).
</p>
<pre>
2439872.7328935185
39872.2328935185
</pre>
<p>
Pour RA et Dec, 
utilisez n'importe lequel des formats suivants:
</p>
<pre>
HH:MM:SS.SS     DD:MM:SS.SS
HHhMMmSS.SSs    DDdMMm.SS.SSs
DDD.DDDDDDDDD   DD.DDDDDDDDD
</pre>
<p>
mais non:
</p>
<pre>
HH MM SS.SS DD MM SS.SS
</pre>
<p>
espaces ne sont pas autoris&eacute;s &agrave; l'int&eacute;rieur d'une coordonn&eacute;e
Les exemples suivants sont permis:
</p>
<pre>
12:34:56
12:34:56.7
12:34:56.78
12:34:56.789
12h34m56.789
188.7366209
</pre>
<p>
Notez que si un RA est donn&eacute; en format sexag&eacute;simal,
il est suppos&eacute; &ecirc;tre en heures, mais si
donn&eacute;e au format d&eacute;cimal, il est suppos&eacute; &ecirc;tre
en degr&eacute;s.
</p>
<p>
Aucune v&eacute;rification n'est faite sur les &eacute;ph&eacute;m&eacute;rides. Il appartient &agrave; l'utilisateur de
faire en sorte que les valeurs sont raisonnables, et que les observations
sont dans l'ordre chronologique.
</p>


<h2>D'autres param&egrave;tres</h2>
<p>
Il existe d'autres param&egrave;tres communs &agrave; toutes les fonctions de recherche.
</p>
<p>
<a id="daterange"></a>
<b>Intervalle de dates:</b><br/> Vous pouvez sp&eacute;cifier une intervalled
de dates &agrave; rechercher.  Les dates peuvent &ecirc;tre sp&eacute;cifi&eacute;es dans les
m&ecirc;mes formats que dans la <a href="#ephem">Recherche par
&eacute;ph&eacute;m&eacute;rides</a> ci-dessus.  La plage de dates sera arrondi au nombre
entier le plus proche le jour.  Si l'intervalle de dates est plus
petite, la recherche prendra moins de temps.

Si vous laissez les dates
vides, ils seront par d&eacute;faut le dates du premier et du derni&egrave;re images
disponiblesdans la basse de donn&eacute;es.

L'intervalle de dates pour la methode <a href="#ephem">Recherche par &eacute;ph&eacute;m&eacute;rides</a>
ont les premi&egrave;re et derni&egrave;re dates dans les &eacute;ph&eacute;m&eacute;rides
</p>

<p>
<a id="posun"></a>
<b>Incertitude de position</b><br/> 
Si cela est laiss&eacute; vide ou mis &agrave; z&eacute;ro, seules les images qui
contiennent r&eacute;ellement le RA et Dec de l'objet seront retourn&eacute;es.
Si cela est r&eacute;gl&eacute;e sur une valeur diff&eacute;rente de z&eacute;ro, les images qui
se trouvent &agrave; proximit&eacute; de la position pr&eacute;dite de l'objet (mais qui ne
chevauchent pas la position) sera &eacute;galement retourn&eacute;.  L'incertitude de
position est trait&eacute; comme une rectangle avec centr&eacute;e sur la v&eacute;ritable
position avec des c&ocirc;t&eacute;s deux fois la taille sp&eacute;cifi&eacute;e.
</p>
<p>
&Eacute;videmment, les incertitudes de position v&eacute;ritables sont mieux
repr&eacute;sent&eacute;es par ellipses, et les incertitudes de position varient
avec le temps. certains des g&eacute;n&eacute;rateurs &eacute;ph&eacute;m&eacute;rides derri&egrave;re les
fonctions de recherche d&eacute;crits ci-dessus produisent d'ellipses
d'erreur valables. D'autres ne le font pas.  Reduire les incertitudes
en forme de rectangle repr&eacute;sente un compromis.  A noter &eacute;galement,
tandis que l'etendu des images est connue dans certains cas &agrave; une tr&egrave;s
grande pr&eacute;cision (par exemple les images MegaCam qui ont &eacute;t&eacute; trait&eacute;es
avec <a href="/fr/megapipe/">MegaPipe</a>) d'autres sont connus &agrave;
pr&eacute;cision plus faibles (par exemple, la plupart des archives CFH12K)
</p>
<p>
<a id="resext"></a>
<b>R&eacute;soudre &agrave; l'extension d'image:</b><br/> Par d&eacute;faut, la recherche renvoie
uniquement un lien vers l'image compl&egrave;te.  T&eacute;l&eacute;chargement de tous une
image MegaCam (300Mb, comprim&eacute;) peut prendre un certain temps.
R&eacute;glage "d&eacute;termination &agrave; extension" sur "Oui" signifie que lorsque une
image est trouv&eacute;, une deuxi&egrave;me recherche est effectu&eacute;e afin de
d&eacute;terminer quelle CCD se trouve l'objet en question. Un lien vers
cette cette est ensuite retourn&eacute;. Si l'incertitude de position est
importante, il est possible que de nombreuses extensions vont se
situer dans la r&eacute;gion.  Dans ce cas, toutes les extensions
correspondantes sont retourn&eacute;es. Il est &eacute;galement possible, si
l'incertitude de position est faible que cet objet peut se situer dans
l'espace entre les capteurs CCD. Dans ce cas, seul le lien &agrave; l'image
enti&egrave;re est retourn&eacute;e. Faire cette deuxi&egrave;me recherche ralentit
la recherche. Seules les images MegaCam sont r&eacute;solus de cette mani&egrave;re.
</p>

<p>
<a id="resxy"></a>
<b>R&eacute;soudre &agrave; X,Y:</b><br/>
Si cette option est activ&eacute;e, l'emplacement pr&eacute;vu de l'objet
dans une image sont donn&eacute;es en valeurs de pixels.
Seules les images MegaCam sont r&eacute;solus de cette mani&egrave;re.
Cette recherche secondaire ralentit &eacute;galement la recherche.
Changer "R&eacute;soudre &agrave; X,Y" pour "oui" d&eacute;finit &eacute;galement "R&eacute;soudre &agrave; l'extension d'image".
</p>

<a id="return"></a>
<h2>Pages des resultats</h2>

<p>
La premi&egrave;re &eacute;tape consiste &agrave; g&eacute;n&eacute;rer une &eacute;ph&eacute;m&eacute;ride. Cela se fait par une vari&eacute;t&eacute; de m&eacute;thodes
comme indiqu&eacute; ci-dessus.
Sauf pour la methode "Recherche par &eacute;ph&eacute;m&eacute;rides",
l'&eacute;ph&eacute;m&eacute;ride est g&eacute;n&eacute;r&eacute; &agrave; 24 heures d'intervalle.
</p>
<p>
Une fois que la premi&egrave;re &eacute;tape, celle de la g&eacute;n&eacute;ration d'un
&eacute;ph&eacute;m&eacute;ride, a &eacute;t&eacute; accompli, la prochaine &eacute;tape est de faire
correspondre le &eacute;ph&eacute;m&eacute;rides &agrave; la base de donn&eacute;es des
images. L'&eacute;ph&eacute;m&eacute;ride est convertie en une table temporaire dans la base de donn&eacute;es
table. Chaque intervalle dans les &eacute;ph&eacute;m&eacute;rides devient une ligne dans
la table, avec d&eacute;but et de fin et les positions. Un cadre de
d&eacute;limitation est g&eacute;n&eacute;r&eacute; pour chaque rang&eacute;e, qui couvre la dur&eacute;e totale
en temps et en position. Pour acc&eacute;l&eacute;rer le processus, ce bo&icirc;te
englobante est exprim&eacute;e en jours entiers (pour l'&eacute;poque) et degr&eacute;s
enti&egrave;res (pour la position). Lorsque l'objet se d&eacute;place &agrave; travers le
premier point d'Aries, deux rang&eacute;es sont ajout&eacute;s, chacune description
de de la position de l'objet de l'un ou l'autre c&ocirc;t&eacute; du m&eacute;ridien
c&eacute;leste. Si l'intervalle de temps s'&eacute;tend sur plusieurs jours (par
exemple si l'utilisateur a g&eacute;n&eacute;r&eacute; &eacute;ph&eacute;m&eacute;rides &eacute;t&eacute; produites &agrave; des
intervalles hebdomadaires), des lignes suppl&eacute;mentaires, une par jour,
sont ajout&eacute; &agrave; cette table. Cette table temporaire est relativement
l&eacute;ger. Si l'&eacute;ph&eacute;m&eacute;ride est &eacute;chantillonn&eacute; par jour, un peu moins de
8000 lignes suffisent &agrave; couvrir le laps de temps &agrave; partir de la
premi&egrave;re image de la base de donn&eacute;es RIOSS jusqu'au
pr&eacute;sent. Construire la table temporaire prend 2-3 secondes pour un
dur&eacute;e de 20 ans.
</p>
<p>
Ensuite, RIOSS fait la correspondance entre la table d'&eacute;ph&eacute;m&eacute;rides et
la table d'images; Dans la terminologie des bases de donn&eacute;es
relationnelles, une "jointure" est faite. Le bo&icirc;tes englobantes de
positions entiers de la &eacute;ph&eacute;m&eacute;rides et les images sont tri&eacute;s
d'abord. Si l'un des bo&icirc;tes englobantes du &eacute;ph&eacute;m&eacute;ride correspond de
l'image, la position de l'objet est calcul&eacute;e avec plus de pr&eacute;cision au
temps precis du centre du temps de pose de l'image par interpolation
lin&eacute;aire de la &eacute;ph&eacute;m&eacute;ride.  L'interpolation lin&eacute;aire est la essentiel
pour que les requ&ecirc;tes soient rapide. Faire une pr&eacute;diction orbital
complet pour chacun des images n'est pas possible. L'interpolation est
suffisamment pr&eacute;cise pour la majorit&eacute; des requ&ecirc;tes, o&ugrave; l'objet se
d&eacute;place lentement ou dans un assez ligne droite. Pour les objets plus
rapides, celles plus proche de la terre il peut &ecirc;tre n&eacute;cessaire de
fournir les &eacute;ph&eacute;m&eacute;rides &eacute;chantillonn&eacute;es &agrave; des pas de temps plus
courtes. Si une m&eacute;thode spline est utilis&eacute;e, (plut&ocirc;t que interpolation
lin&eacute;aire), la localisation est plus pr&eacute;cis, mais seulement par
quelques pour cent et &agrave; un co&ucirc;t de calcul consid&eacute;rable. Une
correspondance typique prend 3 secondes pour une &eacute;ph&eacute;m&eacute;ride de 20 ans
&agrave; 8 million d'images.
</p>


<p>
La page de resultats renvoie d'abord quelques informations sur la
g&eacute;n&eacute;ration d'&eacute;ph&eacute;m&eacute;rides et base de donn&eacute;es d'interrogation. Cela peut
&ecirc;tre quasiment instantan&eacute;e ou prendre jusqu'&agrave; une minute.  En
g&eacute;n&eacute;rale, la correspondance prend 3 secondes &agrave; moins que les casses
"R&eacute;soudre &agrave;..." n'aient &eacute;t&eacute; coch&eacute;ees.  Chacun des
ces options g&eacute;n&eacute;ralement rajoute un seconde par image trouv&eacute;e.
</p>
<p>
Les liens dans le table des resultats sont des liens directs vers les
donn&eacute;es, si celles-ci se trouvent au <a href="/fr/">CCDA</a> ou des liens
vers un page de recherche externes.
</p>

<p>
  SSOIS fournit &eacute;galement un lien qui renvoie une liste de tous les
  images dans la base de donn&eacute;es de SSOIS &agrave; ce RA et Dec, permettant potentiellement
  que l'objet en mouvement dans les images est en fait en mouvment.
</p>

<p>
En plus des liens de donn&eacute;es, il ya deux autres boutons.
En cliquant sur le premier bouton renvoie un fichier "r&eacute;gions" qui
peut &ecirc;tre utilis&eacute; pour le programme d'affichage d'image
<a rel="external" href="http://hea-www.harvard.edu/RD/ds9/">ds9</a>.
Cela vous donnera une ligne indiquant l'orbite interpol&eacute;e et les
cercles indiquant les positions de l'objet sur les images
correspondantes.  Le deuxi&egrave;me bouton vous donne une courbe montrant
l'orbite de l'objet avec une ligne avec des cercles rouges indiquant
la localisation d'images correspondant.
</p>
<p>
Pour des infromations plus amples sur la d&eacute;marche du RIOSS,
veuillez consulter l'article suivante: : <a rel="external"
href="http://adsabs.harvard.edu/abs/2012PASP..124..579G">Gwyn, Hill
and Kavelaars (2012)</a>.  SVP, citez cette l'article dans 
vos publications
 </p>
<p>Si vous avez utilis&eacute; les installations du CCDA pour votre recherche, s'il vous pla&icirc;t inclure la mention suivante:</p>
<blockquote>
  Cette recherche a utilis&eacute; les installations du Centre canadien de donn&eacute;es astronomiques exploit&eacute;
  par le Conseil national de recherches du Canada, avec le soutien de l'Agence spatiale canadienne. 
</blockquote>
