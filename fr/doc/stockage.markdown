---
layout: cadc
lang: fr
permalink: /fr/doc/ad/
title: Stockage
altLangPage: /en/doc/ad/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p>
L'archive du CCDA contient plusieurs sous-archive comme celle du TCFH, du HST, du TJCM, etc.  Chacune de ces
sous-archives poss&eacute;de un syst&egrave;me d'authentification unique qui pr&eacute;vient l'usage non authoris&eacute; pour d&eacute;poser ou r&eacute;cup&eacute;rer des observation. Pour les cas les plus simples, les services WEB de gestion acceptent les connections des usager authentifi&eacute;s pour l'insertion et la r&eacute;cup&eacute;ration via un lien HTTPS.
</p>

<p>
Comme le syst&egrave;me de stockage du CCDA est g&eacute;ographiquement distribu&eacute; &agrave; plusieurs endroits, les services de r&eacute;cup&eacute;ration et de distribution des fichiers vont essayer d'utiliser les services les plus proches de l'usager en essayant de le g&eacute;olocaliser via votre adresse IP. Les d&eacute;tails de cette int&eacute;raction sont disponibles dans section <a href="./data">service web des donn&eacute;es</a> de notre documentation.
</p>

<p>
Pour simplifier les &eacute;changes avec les services WEB d'insertion et de r&eacute;cup&eacute;ration, le CCDA vous offre une 
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients">suite logicielle en language Python</a> incluant un outil de transfert appel&eacute; <a href="./cadc-copy">cadc-copy</a>.
</p>
