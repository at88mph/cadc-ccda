---
layout: cadc
lang: fr
permalink: /fr/doc/caom/
title: CAOM-2
altLangPage: /en/doc/caom/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p>
Afin de faciliter la population et l'usage de l'archive du CCDA, nous avons d&eacute;velopp&eacute; 
un mod&egrave;le unique appel&eacute; CAOM (Common Archive Observation Model). Gr&acirc;ce &agrave; CAOM (dans sa version 2.3), il est possible de
sauvegarder une vaste quantit&eacute; de m&eacute;tadonn&eacute;es et de descripteurs d'observations astronomiques vari&eacute;es et ce 
dans un seul et unique model. Ceci nous permeet d'utiliser un seul engin de recherche et de r&eacute;cup&eacute;ration ind&eacute;pendamment
de l'archive. Via <a href="/fr/recherche/">l'interface unique</a>, l'usager peut rechercher autant des observations radio que des observations infra-rouge en utilisant
un language de recherche unique. 

Pour ce faire, il nous a fallu par contre uniformiser le vocabulaire qui &eacute;tait
auparavant propre a chaque discipline. De plus, nous avons alors &eacute;t&eacute; oblig&eacute; d'&eacute;liminer les m&eacute;tadonn&eacute;es dont l'usage 
&eacute;tait trop restrictif (example: la temp&eacute;rature CCD).
</p>

<p>
De plus, comme l'interface de recherche WEB n'utilise qu'une partie des m&eacute;ta-donn&eacute;es du mod&egrave;le, il est possible
d'interroger directement les tables SQL de ce dernier via le langage d'interrogation tabulaire TAP qui est
un standard d&eacute;velopp&eacute; via le consortium de l'observatoire virtuel (VO) soit directement ou via les outils clients
disponible comme <a href="http://www.star.bris.ac.uk/~mbt/topcat/#install">TOPCAT</a>.
</p>

<p>
L'utilisation de CAOM &agrave; grandement contribu&eacute; &agrave; la simplification de la maintenance des archives au CCDA mais 
requiert par contre une profonde connaissance des m&eacute;tadonn&eacute;es propre &agrave; chaque archive afin d'effectuer proprement 
l'&eacute;quivalence entre les entr&eacute;s du CAOM et de celles des donn&eacute;es d'observations.
</p>

<p>
Chaque entr&eacute;e CAOM rassemble les m&eacute;tadonn&eacute;es propre &agrave; chaque observation et est contruite avec l'aide de
deux logiciels. Par contre, avant de d&eacute;marrer leur usage, il serait prudent de bien comprendre la structure des m&eacute;tadonn&eacute;es
propre au CAOM.
</p>

<p>
Le syst&egrave;me CAOM est essentiellement une base de donn&eacute;es qui accumule les informations fondamentales d&eacute;crivant 
compl&egrave;tement une observation astronomique, i.e. sa couverture temporelle, spatiale, l'&eacute;nergie(longueur d'onde ou fr&eacute;quence),
sa nature (image, spectre), sa polarisation, le niveau de calibration. De plus, CAOM permet de d&eacute;crire la liste des 
fichiers qui sont associ&eacute;s &agrave; chaque observation. Par exemple, les fichiers bruts et calibr&eacute;s sont habituellement 
d&eacute;crit par une entr&eacute;e CAOM unique.
</p>

<h2>Mod&egrave;le (<a href="https://github.com/opencadc/caom2tools/blob/master/doc">usage</a>)</h2>

<p>
Le point d'entr&eacute;e du mod&egrave;le CAOM est appel&eacute; Observation. L'Observation agit comme descripteur 
pour toutes les informations et fichiers associ&eacute;s &agrave; cette Observation. 
A chacun des &eacute;l&eacute;ments d'une Observation correspond un Plane (plan en fran&ccedil;ais), 
donc on voit tout de suite qu'une Observation peut contenir un ou plusieurs Plane. Par exemple un plan pour 
les fichiers brut et un plan pour les fichiers calibr&eacute;s. Par la suite, &agrave; chacun de ces plans (Plane) 
correspond un ou plusieurs art&eacute;facts (Artifact) ou fichiers. Par la suite, la composition interne
de ces fichiers est d&eacute;crite par une suite de Part (ou partie). Dans le cas d'un fichier FITS, il est simple 
de voir qu'&agrave; chacune des Part correspond une extension FITS. Il peut m&ecirc;me arriver quelque fois qu'&agrave; chaque Part
correspond une autre structure. Lorsque c'est le cas il est possible de charact&eacute;riser cette possibilit&eacute; via l'utilisation
d'un Chunk qui est une sous structure du Part. De fa&ccedil;on plus sch&eacute;matique, on se retrouve donc avec:
</p>

<pre>Observation
  -&gt; Plane (ex calibr&eacute;s)
    -&gt; Artifact (lire ici fichier)
        -&gt; Part 
            -&gt; Chunk 
        -&gt; Part 
            -&gt; Chunk 
        -&gt; Part 
            ...

  -&gt; Plane
    -&gt; Artifact 
        ... 
  -&gt; Plane 
     ...
</pre>

<p>Une description techique du syst&egrave;me <a href="https://www.opencadc.org/caom2">CAOM incluant un diagramme UML</a> montrant les diff&eacute;rentes d&eacute;pendances entre les objets est disponible.</p>

<p>
Pour la cr&eacute;ation d'une entr&eacute;e CAOM qui permettera la recherche via l'interface archive du CCDA, il faut utiliser
soit le logiciel <a href="https://github.com/opencadc/caom2/tree/master/fits2caom2">fits2caom2</a> ou utiliser 
directement la librairie Python <a href="https://github.com/opencadc/caom2tools">caom2tools</a>.  Il serait judicieux d'examiner
quelques entr&eacute;es CAOM comme exemple pour d&eacute;buter. Il se peut fort bien qu'il existe d&eacute;j&agrave; des observations similaires aux
votres dans les collections existantes du CCDA.
</p>
