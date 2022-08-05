---
layout: cadc
lang: fr
permalink: /fr/rioss/index.html
title: Recherche d'Images d'Objets du Système Solaire
altLangPage: /en/ssois/index.html
dateModified: 2022-01-12
signing: layout.signing

nav: ssois
script: /static/js/ssois/index.js
---

<p>
Cette page vous permet de rechercher des images de
objets du syst&egrave;me solaire. Il existe plusieurs m&eacute;thodes de recherche:
</p>
<ul>
	<li><a href="#name">Rechercher par nom de l'object</a></li>
	<li><a href="#arc">Rechercher en extrapolant &agrave; partir d'un arc</a></li>
	<li><a href="#oe">Rechercher &agrave; partir d'un ensemble d'&eacute;l&eacute;ments orbitaux</a></li>
	<li><a href="#ephem">Rechercher &agrave; partir d'une &eacute;ph&eacute;m&eacute;ride que vous fournissez</a></li>
</ul>
<p>
S'il vous pla&icirc;t, lisez la <a href="/fr/rioss/documentation.html">documentation</a>. Pour plus de d&eacute;tails, consultez l'article suivante:
<a rel="external" href="https://adsabs.harvard.edu/abs/2012PASP..124..579G">Gwyn, Hill and Kavelaars (2012)</a>. 
Veuillez citer cette article dans vos publications.
</p>  
<hr/>
{%- include ssois/query_by_name.markdown -%}
<hr/>
{%- include ssois/query_by_arc.markdown -%}
<hr/>
{%- include ssois/query_by_orbital_elements.markdown -%}
<hr/>
{%- include ssois/query_by_ephemeris.markdown -%}
