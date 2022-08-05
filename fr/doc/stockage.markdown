---
layout: cadc
lang: fr
permalink: /fr/doc/ad
title: Stockage
altLangPage: /en/doc/ad
dateModified: 2022-07-08
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p>
L'archive du CCDA contient plusieurs sous-archive comme celle du TCFH, du HST, du TJCM, etc... Chacune de ces
sous-archives poss&egrave;de un syst&egrave;me d'authentification unique qui pr&egrave;vient l'usage non authoris&egrave; pour d&egrave;poser ou r&egrave;cup&egrave;rer des observation. Pour les cas les plus simples, les services WEB de gestion acceptent les connections des usager authentifi&egrave;s pour l'insertion et la r&egrave;cup&egrave;ration via un lien HTTPS.
</p>

<p>
Comme le syst&egrave;me de stockage du CCDA est g&egrave;ographiquement distribu&egrave; &agrave; plusieurs endroits, les services de r&eacute;cup&egrave;ration et de distribution des fichiers vont essayer d'utiliser les services les plus proches de l'usager en essayant de le g&egrave;olocaliser via votre adresse IP. Les d&egrave;tails de cette int&egrave;raction sont disponibles dans section <a href="../data">service web des donn&egrave;es</a> de notre documentation.
</p>

<p>
Pour simplifier les &egrave;changes avec les services WEB d'insertion et de r&egrave;cup&egrave;ration, le CCDA vous offre une 
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients">suite logicielle en language Python</a> incluant un outil de transfert appel&egrave; <code>cadc-copy</code>.
</p>
