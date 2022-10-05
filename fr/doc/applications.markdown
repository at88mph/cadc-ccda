---
layout: cadc
lang: fr
permalink: /fr/doc/cadc-copy/
title: Application cadc-copy
altLangPage: /en/doc/cadc-copy/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<h2>Installation</h2>
<pre><code>$ pip install cadc-copy</code></pre>

<h2>Usage</h2>
<p>
Les outils Python du CCDA sont d&eacute;crits dans un fichier qui accompagne le code source lors de la distribution:
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients/README.md">README.md</a>.
</p>

<p>
Pour les fournisseurs de donn&eacute;es pour les archives du CCDA qui veulent par exemple transf&eacute;rer un fichier 
d'un espace de travail local comme '/local/archive_data/obs_111.fits' au CCDA, la commande suivante permet 
facilement d'effectuer cette op&eacute;ration:
</p>

<pre><code>$ cadc-copy put ARCHIVE /local/archive_data/obs_111.fits</code></pre>

<p>Le fichier obs_111.fits est alors transf&eacute;r&eacute; dans les archives et devrait imm&eacute;diatement &ecirc;tre disponible
via la commande suivante: 'https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/ARCHIVE/obs_111.fits', 
où le mot 'ARCHIVE' doit &ecirc;tre remplac&eacute; par le nom de votre archive.  L'ex&eacute;cution de la m&ecirc;me commande avec 
le m&ecirc;me nom de fichier permet de rafra&icirc;chir le fichier et ne va pas cr&eacute;er une nouvelle version au CCDA.
</p>

<section class="alert alert-info">
    <h3>Rappellez-vous</h3>
    <p>Il est important de noter que les noms de fichiers doivent &ecirc;tre unique pour une archive donn&eacute;e.</p>
</section>

<p>
Il est &eacute;galement requis d'avoir les authentifications requises que pour une op&eacute;ration d'&eacute;criture dans les archives du CCDA. 
Il est imp&eacute;ratif pour l'usager alors de sp&eacute;cifier leur certificat CADC X509 ou d'avoir les information requises dans le fichier 
<code>.netrc</code> pour effectuer cette op&eacute;ration. Veuillez consulter le fichier 
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients/README.md">README.md</a> pour les d&eacute;tails.
</p>
