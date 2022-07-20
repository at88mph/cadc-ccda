---
layout: cadc
lang: fr
permalink: /fr/doc/props
title: Donn&eacute;es Propri&eacute;taires
altLangPage: /en/doc/props
dateModified: 2022-07-08
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p>
Le syst&egrave;me de gestion de groupe du CCDA/CANFAR permet de controller l'acc&egrave;s aux donn&eacute;es et aux m&eacute;tadonn&eacute;es.
</p>

<p>
Il est d'usage pour chaque t&eacute;lescope de prot&eacute;ger l'acc&egrave;s aux donn&eacute;es et ce pour une p&eacute;riode qui varie d'un
t&eacute;lescope &agrave; l'autre. L'acc&egrave;s aux donn&eacute;es est prot&eacute;g&eacute; pour une p&eacute;riode qui doit &ecirc;tre sp&eacute;cifi&eacute;e pour chaque observation
dans l'enregistrement CAOM qui correspond &agrave; cette derni&egrave;re. Si il n'existe pas d'entr&eacute;e CAOM, les donn&eacute;es sont 
consid&eacute;r&eacute;es comme priv&eacute;es et ne seront pas disponible de fa&ccedil;on anonyme. Les donn&eacute;es priv&eacute;es peuvent &eacute;tre acc&eacute;d&eacute;es que
par les membres associ&eacute;s aux groupes d&eacute;finis via leur entr&eacute; CAOM.
</p>

<p>
Chaque observation poss&egrave;de au moins deux groupes par d&eacute;faut. Le groupe qui g&egrave;re l'archive du t&eacute;lescope d'où provient 
l'observation (groupe archive) et le groupe associ&eacute; &agrave; la demande de temps &agrave; qui appartient l'observation pour une p&eacute;riode pr&eacute;-d&eacute;finie (groupe PI).
</p>

<h2>Le groupe d'archive</h2>
<p>
Le groupe archive est d&eacute;fini par le CCDA lors de la cr&eacute;ation de l'archive. Les membres de ce groupe poss&egrave;dent les 
permissions n&eacute;cessaires pour l'acc&egrave;s &agrave; toutes les donn&eacute;es de l'archive et peuvent &eacute;galement ajouter de nouvelles observations
&agrave; l'archive.
</p>

<h2>Le groupe PI</h2>
<p>
Lorsqu'un nouvel enregistrement CAOM est cr&eacute;&eacute;, on associe <code>proposal_id</code> &agrave; la demande
de temps associ&eacute;e &agrave; l'observation correspondante. Le CCDA authorise alors chaque membres du groupe archive
et et aux membres du groupe PI l'acc&egrave;s aux donn&eacute;es. Les membres du groupe Archive ont la responsabilit&eacute; 
de d&eacute;finitir les diff&eacute;rents groupes PI ou sont ces derniers sont d&eacute;finis automatiquement selon le contenu des
enregistrements CAOM correspondants.
</p>

<p>
Initiallement, seuls les membres du groupe d'archive peuvent changer les permissions associ&eacute;es aux membres des
groupes PI. Toutefois, le membre du groupe archive peuvent changer la permission de default des membres des groupe PI et
peuvent permettent &agrave; certains membres de ces groupes les permissions n&eacute;cessaires pour ces derniers soient
libres d'administrer leur groupe PI comme ils le d&eacute;sirent. Ils peuvent alors donner la permission de r&eacute;cup&eacute;rer 
les donn&eacute;es priv&eacute;es &agrave; leur collaborateurs.
</p>

<p>
La liste des membres associ&eacute;s &agrave; un groupe donn&eacute; peut &eacute;tre modifi&eacute;e via une <a href="/fr/groupes">interface WEB</a> ou 
une <a href="../groups">suite d'outils python.</a>
</p>
