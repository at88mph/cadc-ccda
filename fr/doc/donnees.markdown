---
layout: cadc
lang: fr
permalink: /fr/doc/data/
title: Acc&egrave;s directement aux donn&eacute;es
altLangPage: /en/doc/data/
dateModified: 2022-11-18
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---

<p>
    Le service de donn&eacute;es directes vous permet de t&eacute;l&eacute;charger des fichiers directement des archives du CCDA &agrave; l'aide d'une adresse URL. Vous pouvez t&eacute;l&eacute;charger directement un fichier &agrave; partir de votre navigateur, automatiser le t&eacute;l&eacute;chargement de plusieurs fichiers depuis un terminal, ou encore avec un programme en python. Si le fichier est sous format FITS, le service peut &eacute;galement r&eacute;cup&eacute;rer uniquement des parties des fichiers, telles que les en-t&ecirc;tes, des d&eacute;coupes, ou encore des HDU uniques d'un fichier &agrave; HDU multiples.
</p>
<p>Vous trouverez dans ce document comment acc&eacute;der au service de donn&eacute;es directes de plusieurs mani&egrave;res:</p>
<ul>
    <li>directement depuis une adresse <a href="#url">URL</a></li>
    <li>avec l'aide des <a href="#command-lines">ex&eacute;cutables</a> depuis la ligne de commandes</li>
    <li>en programmant avec une <a href="#library">biblioth&egrave;que Python</a></li>
    <li>en programmant avec l'aide de l'interface <a href="#api">API</a> du service</li>
</ul>
<p>Pour utiliser le service, vous aurez besoin au minimum du <strong>nom de l'archive</strong> et du <strong>nom de fichier</strong>.</p>
<p>Exemple: <code>CFHT/1722795p.fits.fz</code></p>
<p>La forme la plus simplifi&eacute;e de l'adresse URL du service de donn&eacute;es directes suit le format suivant:</p>
<pre><code>https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/{ARCHIVE}/{FICHIER}[OPTIONS]</code></pre>
<p>Exemple: <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz&amp;meta=true">https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz&amp;meta=true</a></p>
<table class="table">
<thead><tr>
<th style="text-align:left">&eacute;l&eacute;ment</th>
<th style="text-align:left">Valeur</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>{ARCHIVE}</code></td>
<td style="text-align:left"><strong>CFHT</strong></td>
<td style="text-align:left">Nom de l'archive requise</td>
</tr>
<tr>
<td style="text-align:left"><code>{FICHIER}</code></td>
<td style="text-align:left"><strong>1722795p.fits.fz</strong></td>
<td style="text-align:left">Nom du fichier dans l'archive</td>
</tr>
<tr>
<td style="text-align:left"><code>[OPTIONS]</code></td>
<td style="text-align:left"><strong>meta=true</strong></td>
<td style="text-align:left">Options sur le fichier, dans ce cas l'en-t&ecirc;te du fichier FITS</td>
</tr>
</tbody>
</table>

<h4 id="D&#233;terminer-le-nom-de-l'archive-et-l'identifiant-du-fichier">D&#233;terminer le nom de l'archive et l'identifiant du fichier<a class="anchor-link" href="#D&#233;terminer-le-nom-de-l'archive-et-l'identifiant-du-fichier"> </a></h4><p>En r&egrave;gle g&eacute;n&eacute;rale, le service de donn&eacute;es directes est destin&eacute; &agrave; &ecirc;tre utilis&eacute; &agrave; la suite d'un autre service du CCDA, comme par exemple avec le r&eacute;sultat d'une requ&ecirc;te du service de <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/fr/recherche/">recherche avanc&eacute;e</a>. Le r&eacute;sultat de la recherche contiendra l'adresse URL compl&egrave;te et pourra &ecirc;tre sauvegard&eacute;. Si vous n'utilisez pas le service de recherche avanc&eacute;e, vous pouvez toujours formuler l'adresse URL en connaissant l'archive et le nom du fichier.</p>

<h2 id="url">Utilisation avec Navigateur<a class="anchor-link" href="#Utilisation-avec-Navigateur"> </a></h2><p>Si vous avez juste besoin de t&eacute;l&eacute;charger un seul fichier &agrave; partir d'une archive du CCDA, le moyen le plus simple est d'ouvrir votre navigateur et de copier l'adresse URL dans la barre d'adresse du navigateur.</p>
<p>Exemple:</p>
<ul>
<li><p>En cliquant sur l'URL ci-dessous, vous lancerez le t&eacute;l&eacute;chargement du fichier FITS compress&eacute; de 310 Mo <code>1722795p.fits.fz</code> de l'archive <code>CFHT</code>:</p>
<p><a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz">https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/1722795p.fits.fz</a></p>
</li>
</ul>

<h2 id="command-lines">Interface en ligne de commande</h2>
<p>
    Une requ&ecirc;te au service de donn&eacute;es directes peut &ecirc;tre utilis&eacute; &agrave; partir d'un ex&eacute;cutable en ligne de commande. Un client ex&eacute;cutable de ligne de commande tel que <code>wget</code>, <code>curl</code> ou <code>httpie</code> peut &ecirc;tre utilis&eacute;, et le CCDA fournit un client de ligne de commande l&eacute;g&egrave;rement plus &eacute;volu&eacute;: <code>cadcget</code>, <code>cadcput</code>, <code>cadcinfo</code>. Nous d&eacute;taillons son utilisation ci-dessous.
</p>
<h3>Avec <code>wget</code> ou <code>curl</code></h3>
<p>
    <a href="https://www.gnu.org/software/wget/"><code>wget</code></a> et <a href="https://curl.se/"><code>curl</code></a> sont des interfaces en ligne de commande pour acc&eacute;der des services sur la toile, et sont souvent pr&eacute;-install&eacute;s (Mac et Linux).
</p>
<ul>
    <li>Exemple: t&eacute;l&eacute;charger des donn&eacute;es depuis l'archive IRIS:
    <pre><code>
$ wget https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
$ curl -O -J -L https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
    </code></pre>
    </li>
</ul>
<p>Afin que <code>curl</code> se comporte comme <code>wget</code>, on doit sp&eacute;cifier:</p>
<ul>
    <li>les options <code>-O -J</code> forcent l'enregistrement du fichier localement (en utilisant le <code>Content-Disposition filename</code> sp&eacute;cifi&eacute; par le serveur si disponible, et sinon avec un nom de fichier extrait depuis l'adresse URL) au lieu de la sortie standard (STDOUT)</li>
    <li>l'option <code>-L</code> assurera la redirection de l'adresse URL vers une adresse temporaire du service de transfert si n&eacute;cessaire.</li>
</ul>
<p>
    Si vous d&eacute;sirez t&eacute;l&eacute;charger des donn&eacute;es non publiques, vous aurez besoin de votre certificat CCDA X509 (l'authentification par utilisateur/mot de passe pourrait &ecirc;tre activ&eacute;e dans une future version du service).
</p>
<p>Exemple:</p>
<pre><code>
$ wget --certificate mycert.pem --ca-certificate mycert.pem https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
$ curl -E mycert.pem -O -J -L https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/IRIS/I429B4H0.fits
</code></pre>
<p>
    Pour t&eacute;l&eacute;charger un certificat d'utilisateur du CCDA, &agrave; partir d'un navigateur, connectez-vous au CCDA: <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/fr/connexion.html">https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/fr/connexion.html</a>. Ensuite, cliquez sur votre nom dans le coin sup&eacute;rieur droit et suivez le lien "Obtenir un certificat", qui va automatiquement t&eacute;l&eacute;charger un nouveau certificat, valide pour 30 jours.
</p>
<h4>Programmation de scripts:</h4>
<p>
    <code>wget</code> ou <code>curl</code> peuvent &eacute;galement &ecirc;tre utilis&eacute; dans des scripts. Lors de l'ex&eacute;cution du script, si une erreur se produit, l'&eacute;tat de sortie sera diff&eacute;rent de z&eacute;ro.
</p>
<p>Exemple:</p>
<ul>
    <li>
        Recherchez les images de M101 avec le service de <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/fr/recherche/">Recherche Avanc&eacute;e</a> du CCDA, prises avec Megaprime sur le TCFH. Marquez toutes les images et cliquez sur T&eacute;l&eacute;charger, en s&eacute;lectionnant la liste d'adresses URLs que vous sauvegardez dans un fichier <code>cadcUrlList.txt</code>. Ensuite, ex&eacute;cutez la commande ci-dessous pour t&eacute;l&eacute;charger automatiquement tous les fichiers r&eacute;pertori&eacute;s dans la requ&ecirc;te, acc&eacute;l&eacute;r&eacute; avec 3 t&eacute;l&eacute;chargements en parall&egrave;le:
        <pre><code>$ cat cadcUrlList.txt | xargs -P3 wget --content-disposition</code></pre>
    </li>
</ul>
<p>Remarque: vous pouvez &eacute;galement automatiser la recherche avec le module python <code>cadctap</code>.</p>

<p>Les deux lignes de commande ont de nombreuses options. Utilisez <code>wget --help</code>, <code>curl --help</code> pour les afficher. Nous &eacute;num&eacute;rons ci-dessous quelques-unes des plus courantes.</p>
<h4>Options courantes avec <code>wget</code>:</h4>
<ul>
    <li><code>-nv</code> : ex&eacute;cute la commande en mode texte non affich&eacute;. La commande wget envoie beaucoup de donn&eacute;es &agrave; STDOUT. Si vous utilisez wget dans un script, cette option est pr&eacute;f&eacute;rable.</li>
    <li><code>-q</code> : ex&eacute;cute la commande en arri&egrave;re-plan.</li>
    <li><code>-t, --tries NUMBER</code> : fixe le nombre de tentatives jusqu'&agrave; la valeur pr&eacute;cis&eacute;e par NUMBER (nous recommandons 5 tentatives).</li>
    <li><code>--waitretry SECONDS</code> : nombre de secondes d'attente entre deux r&eacute;cup&eacute;rations. Par d&eacute;faut, wget utilise une valeur de 10 secondes.</li>
    <li><code>-N, --timestamping</code> : active l'horodatage et t&eacute;l&eacute;charge seulement les fichiers manquants ou mis &agrave; jour.</li>
    <li><code>--content-disposition</code> : force wget &agrave; attribuer le nom appropri&eacute; au fichier t&eacute;l&eacute;charg&eacute;.</li>
    <li><code>--certificate FILE</code> : utilise le certificat d'authentification dans le fichier.</li>
    <li><code>--ca-certificate FILE</code> : utilise un ensemble de certificats</li>
</ul>

<h4 id="Options-courantes-avec-curl:">Options courantes avec <code>curl</code>:<a class="anchor-link" href="#Options-courantes-avec-curl:"> </a></h4><ul>
<li><code>-O</code> : enregistre localement le fichier sous le m&ecirc;me nom que la version distante.</li>
<li><code>-J</code> : utilise le nom de fichier sp&eacute;cifi&eacute; dans le serveur comme Content-Disposition.</li>
<li><code>-L</code> : suit les r&eacute;acheminements.</li>
<li><code>-s</code> : ex&eacute;cute curl en arri&egrave;re-plan. Si vous ajoutez curl &agrave; un script, utilisez cette option de pr&eacute;f&eacute;rence.</li>
<li><code>--retry N</code> : fixe le nombre de tentatives jusqu'&agrave; la valeur pr&eacute;cis&eacute;e par N (nous recommandons 5 tentatives).</li>
<li><code>--data-urlencode</code> : encode des chaines de caract&egrave;res non-compatibles dans l'URL, utiles pour les d&eacute;coupes.</li>
</ul>

<h3>Utilisation des Clients CCDA: <code>cadc[get|put|info|remove]</code><a class="anchor-link" href="#Utilisation-des-Clients-CCDA:-cadc[get|put|info|remove]"> </a></h3><p><code>cadcdata</code> est un logiciel pour acc&eacute;der au service de donn&eacute;es directes du CCDA. Il installe 4 applications en ligne de commande utilis&eacute;es pour manipuler les donn&eacute;es au CCDA:</p>
<ul>
    <li><code>cadcget</code>  : r&eacute;cup&egrave;re les fichiers du service de donn&eacute;es CCDA</li>
    <li><code>cadcinfo</code> : obtient des informations sur les fichiers</li>
    <li><code>cadcput</code>  : t&eacute;l&eacute;verse des fichiers nouveaux ou mis &agrave; jour dans le service de donn&eacute;es CCDA</li>
    <li><code>cadcremove</code> : supprime des fichiers du service de donn&eacute;es CCDA</li>
</ul>
<p>Il est &eacute;crit en Python et peut &ecirc;tre install&eacute; avec :</p>

<pre><code>$ pip install [--upgrade] cadcdata</code></pre>
<p>Il est recommand&eacute; de r&eacute;installer r&eacute;guli&egrave;rement la derni&egrave;re version du logiciel en utilisant l'option <code>pip install --upgrade</code>.</p>

<h4 id="Commande-cadcget-:">Commande <code>cadcget</code> :<a class="anchor-link" href="#Commande-cadcget-:"> </a></h4><p>La commande <code>cadcget</code> est con&ccedil;ue pour &ecirc;tre robuste et performante en tirant parti de l'architecture du syst&egrave;me de stockage du CCDA.</p>
<p>Utilisation:</p>

<pre><code>$ cadcget {fileID}</code></pre>
<p>O&ugrave; <code>{fileID}</code> est l'identifiant d'un fichier. La forme compl&egrave;te de l'identifiant est <code>{scheme}:{archive}/{chemin}/{fichier}</code> o&ugrave; :</p>
<ul>
    <li><code>scheme</code> : (facultatif) repr&eacute;sente un sch&eacute;ma attribu&eacute; par le fournisseur de donn&eacute;es <code>cadc</code>, <code>mast</code>, <code>gemini</code> etc.</li>
    <li><code>archive</code> : nom de l'archive</li>
    <li><code>chemin</code> : les observatoires peuvent choisir d'utiliser un chemin de fichier dans l'identifiant. C'est tr&egrave;s peu fr&eacute;quent.</li>
    <li><code>fichier</code> : nom complet du fichier</li>
</ul>
<p>En pratique, <code>{archive}/{filename}</code> est suffisant pour acc&eacute;der &agrave; un fichier dans la majorit&eacute; des cas.</p>
<p>Exemple:</p>
<ul>
    <li>T&eacute;l&eacute;chargez le fichier <code>I429B4H0.fits</code> depuis l'archive publique <code>IRIS</code> dans le r&eacute;pertoire courant:</li>
</ul>
<pre><code>$ cadcget IRIS/I429B4H0.fits</code></pre>
<p>Cependant, la forme plus compl&egrave;te fonctionnera &eacute;galement :</p>
<pre><code>$ cadcget cadc:IRIS/I429B4H0.fits</code></pre>
<h4 id="Scripts-avec-cadcget-:">Scripts avec <code>cadcget</code> :<a class="anchor-link" href="#Scripts-avec-cadcget-:"> </a></h4><p><code>cadcget</code> peut &eacute;galement &ecirc;tre utilis&eacute; dans les scripts. Il renvoie un &eacute;tat de sortie diff&eacute;rent de z&eacute;ro lorsqu'une erreur se produit lors de l'ex&eacute;cution.</p>
<p>Exemples:</p>
<ul>
<li>T&eacute;l&eacute;chargez les fichiers <code>I001B3H0.fits</code>, <code>I016B4H0.fits</code> de l'archive IRIS
<pre><code>
#!/bin/bash
archive=IRIS
for file in I001B3H0.fits I016B4H0.fits; do
  echo "t&eacute;l&eacute;chargement de $archive/$file"
  cadcget $archive/$file &amp;&amp; echo "succ&egrave;s" || echo "&eacute;chec"
done
</code></pre>
</li>
</ul>

<h2>D&#233;coupes de fichiers FITS</h2>
<p>
    Si vous utilisez des fichiers FITS et vous &ecirc;tes seulement int&eacute;ress&eacute; par une ou plusieurs sous-parties de ces fichiers, vous pouvez limiter les t&eacute;l&eacute;chargements &agrave; des d&eacute;coupes. Un certain nombre de param&egrave;tres de d&eacute;coupe peuvent &ecirc;tre inclus dans une requ&ecirc;te au service, en utilisant un sous-ensemble de la <a href="http://heasarc.gsfc.nasa.gov/docs/software/fitsio/c/c_user/node97.html">sp&eacute;cification de section d'image CFITSIO</a>. Les d&eacute;coupes doivent &ecirc;tre param&eacute;tr&eacute;es et encod&eacute;es avec l'option <code>cutout=VALEUR</code>, comme sp&eacute;cifi&eacute; dans l'API du service.
</p>
<ul>
    <li>Exemples de syntaxes de d&eacute;coupage pour la <code>VALEUR</code>:</li>
</ul>
<table class="table">
    <thead>
        <tr>
            <th style="text-align:left">Valeur</th>
            <th style="text-align:left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left">[1:512:2,2:512:2]</td>
            <td style="text-align:left">Ouvre une image de 256x256 pixels compos&eacute;e d'un nombre impair de colonnes (1er axe) et d'un nombre pair de lignes (2e axe) de l'image stock&eacute;e dans le tableau principal du fichier.</td>
        </tr>
        <tr>
            <td style="text-align:left">[*,512:256]</td>
            <td style="text-align:left">Ouvre une image compos&eacute;e de toutes les colonnes de l'image source, mais seulement des lignes 256 &agrave; 512. L'image subit une rotation le long du 2e axe, &eacute;tant donn&eacute; que le pixel de d&eacute;part est sup&eacute;rieur au pixel de fin.</td>
        </tr>
        <tr>
            <td style="text-align:left">[*:2,512:256:2]</td>
            <td style="text-align:left">Idem, mais conserve seulement une ligne et une colonne sur deux de l'image source.</td>
        </tr>
        <tr>
            <td style="text-align:left">[-*,*]</td>
            <td style="text-align:left">Copie toute l'image, et lui fait subir une rotation sur le premier axe.</td>
        </tr>
        <tr>
            <td style="text-align:left">[3][1:256,1:256]</td>
            <td style="text-align:left">Ouvre une sous-section de l'image qui se trouve dans la 3e extension du fichier.</td>
        </tr>
    </tbody>
</table>

<h2 id="Exemples-de-d&#233;coupages">Exemples de d&#233;coupages<a class="anchor-link" href="#Exemples-de-d&#233;coupages"> </a></h2><ol>
<li>D&eacute;coupage d'une seule extension
<pre><code> $ cadcget "CFHT/806045o.fits.fz?cutout=[1]" --output 806045o-cutout1.fits
 $ curl -L -G -o 806045o-cutout1.fits --data-urlencode "cutout=[1]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz</code></pre>
</li>
<li>D&eacute;coupage sur les coordonn&eacute;es des pixels
<pre><code> $ cadcget "CFHTSG/D3.IQ.R.fits?cutout=[9979:10490,10573:11084]" --output D3.IQ.R.9979_10490_10573_11084.fits
 $ curl -L -G -o D3.IQ.R.9979_10490_10573_11084.fits --data-urlencode "cutout=[9979:10490,10573:11084]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHTSG/D3.IQ.R.fits</code></pre>
</li>
<li>Extension et d&eacute;coupage sur les coordonn&eacute;es des pixels
<pre><code> $ cadcget "CFHT/806045o.fits.fz?cutout=[1][1:100,1:200]" --output 806045o-cutout2.fits
 $ curl -L -G -o 806045o-cutout2.fits --data-urlencode "cutout=[1][1:100,1:200]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz</code></pre>
</li>
<li>D&eacute;coupage sur plusieurs extensions
<pre><code> $ cadcget "CFHT/806045o.fits.fz?cutout=[1]&amp;cutout=[2]" --output 806045o-cutout3.fits
 $ curl -L -G -o 806045o-cutout3.fits --data-urlencode "cutout=[1]" --data-urlencode "cutout=[2]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz</code></pre>
</li>
<li>D&eacute;coupage sur plusieurs extensions sur les coordonn&eacute;es des pixels
<pre><code> $ cadcget "CFHT/806045o.fits.fz?cutout=[1][10:120,20:30]&amp;cutout=[2][10:120,20:30]" --output 806045o-cutout4.fits
 $ curl -L -G -o 806045o-cutout4.fits --data-urlencode "cutout=[1][10:120,20:30]" --data-urlencode "cutout=[2][10:120,20:30]" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz</code></pre>
</li>
<li>Il est possible de sp&eacute;cifier un d&eacute;coupage avec RA et DEC, en utilisant un service l&eacute;g&egrave;rement diff&eacute;rent:
<pre><code> $ curl -L -O -J "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2ops/sync?id=cadc:CFHTSG/D2.I.fits&amp;CIRCLE=150.570478+2.172356+0.01"</code></pre>
o&ugrave; les nombres sont la d&eacute;clinaison RA, l'ascension droite DEC, et la taille, tous en degr&eacute;s. Le signe "+" dans une adresse URL signifie " ", un espace.</li>
</ol>

<h4>Options <code>cadcget</code> couramment utilis&#233;es&#160;:<a class="anchor-link" href="#Options-cadcget-couramment-utilis&#233;es&#160;:"> </a></h4><p>Vous pouvez adapter <code>cadcget</code> &agrave; votre cas d'utilisation avec des options. Vous trouverez ci-dessous une liste de quelques options utiles lors du t&eacute;l&eacute;chargement de donn&eacute;es.</p>
<ul>
<li><p><code>-u, --user=UTILISATEUR</code> : Si les donn&eacute;es ne sont pas publiques, cette option permet de sp&eacute;cifier l'UTILISATEUR du CCDA pour acc&eacute;der aux donn&eacute;es prot&eacute;g&eacute;es. La commande vous demandera votre mot de passe CCDA.
Exemple:
L'utilisatrice Nathalie Tremblay avec le nom d'utilisateur CCDA <code>ntremblay</code> t&eacute;l&eacute;charge le fichier propri&eacute;taire
« I429B4H0.fits » :</p>

<pre><code>  $ cadcget --user=ntremblay IRIS/I429B4H0.fits
  johnsmith@ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca
  Mot de passe: ********</code></pre>
<p>Pour &eacute;viter d'&ecirc;tre invit&eacute; &agrave; entrer un mot de passe, utilisez plutôt les options <code>-c</code> ou <code>-n</code>.</p>
</li>
<li><p><code>-c, --cert=/chemin/du/certificat</code> : sp&eacute;cifiez le chemin d'un certificat temporaire X509 &agrave; utiliser pour l'authentification. Obtenez un certificat proxy une fois, et r&eacute;utilisez-le plusieurs fois ou envoyez-le &agrave; vos collaborateurs de confiance. Exemple:</p>

<pre><code>  $ cadc-get-cert -u ntremblay
  ntremblay@ws-cadc.canfar.net
  Mot de passe: ********

  $ cadcget --cert ~/.ssl/cadcproxy.pem IRIS/I429B4H0.fits</code></pre>
</li>
<li><p><code>-n, --netrc-file=/chemin/du/netrc</code> : autorise le format de fichier <a href="https://ec.haxx.se/usingcurl-netrc.html">.netrc</a> pour l'authentification d'un service Web. Le fichier contient le nom d'utilisateur et le mot de passe du CCDA en clair, donc &agrave; utiliser avec prudence. Son emplacement par d&eacute;faut est <code>${HOME}/.netrc</code>. Exemple:</p>

<pre><code>  $ cadcget -n CFHT/700000o.fits.fz</code></pre>
</li>
<li><p><code>--fhead</code> : t&eacute;l&eacute;chargera uniquement les informations d'en-t&ecirc;te FITS. Exemple:</p>

<pre><code>  $ cadcget -v -n --fhead GEMINI/mrgN20091214S0271_add.fits</code></pre>
</li>
<li><p><code>-o, --output FICHIER</code> : &eacute;crire dans un nom de fichier diff&eacute;rent ou t&eacute;l&eacute;charger dans un autre r&eacute;pertoire</p>
</li>
<li><p><code>-q, --quiet</code> : effectuera l'op&eacute;ration silencieusement</p>
</li>
<li><p><code>-v, --verbose</code> : affichera plus de dialogues et de barre de progression pour les t&eacute;l&eacute;chargements.</p>
</li>
</ul>
<p>Vous pouvez trouver la liste compl&egrave;te des options en ex&eacute;cutant <code>cadcget --help</code> depuis un terminal.</p>

<h2 id="R&#233;cup&#233;ration-de-l'en-t&#234;te-des-fichiers-FITS">R&#233;cup&#233;ration de l'en-t&#234;te des fichiers FITS<a class="anchor-link" href="#R&#233;cup&#233;ration-de-l'en-t&#234;te-des-fichiers-FITS"> </a></h2><h3 id="Utiliser-cadcget-pour-t&#233;l&#233;charger-un-en-t&#234;te-FITS">Utiliser <code>cadcget</code> pour t&#233;l&#233;charger un en-t&#234;te FITS<a class="anchor-link" href="#Utiliser-cadcget-pour-t&#233;l&#233;charger-un-en-t&#234;te-FITS"> </a></h3><p>L'option <code>--fhead</code> de l'ex&eacute;cutable <code>cadc-data</code> permet de t&eacute;l&eacute;charger l'en-t&ecirc;te d'un fichier FITS.</p>
<p>Exemple:</p>

<pre><code>cadcget --fhead IRIS/I001B3H0.fits</code></pre>

<h3 id="Utiliser-l'adresse-du-service-de-donn&#233;es-directes-pour-t&#233;l&#233;charger-un-en-t&#234;te-FITS">Utiliser l'adresse du service de donn&#233;es directes pour t&#233;l&#233;charger un en-t&#234;te FITS<a class="anchor-link" href="#Utiliser-l'adresse-du-service-de-donn&#233;es-directes-pour-t&#233;l&#233;charger-un-en-t&#234;te-FITS"> </a></h3><p>Une requ&ecirc;te avec le param&egrave;tre <code>meta=true</code> permet de t&eacute;l&eacute;charger uniquement les en-t&ecirc;tes des fichiers FITS.</p>
<p>Example: r&eacute;cup&eacute;rer l'en-t&ecirc;te FITS de la premi&egrave;re extension d'un fichier du TCFH:</p>

<pre><code>curl -L -G "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/CFHT/806045o.fits.fz&amp;meta=true"</code></pre>
<p>Remarque: l'option <code>meta=true</code> ne peut pas &ecirc;tre combin&eacute;e avec les options de d&eacute;coupages <code>cutout=...</code>. Une solution alternative est d'effectuer une requ&ecirc;te de d&eacute;coupe d'un seul pixel, par example <code>cutout=[1][1:1,1:1]</code>.</p>

<h2 id="Utilisation-avanc&#233;e-du-service-de-donn&#233;es-directes">Utilisation avanc&#233;e du service de donn&#233;es directes<a class="anchor-link" href="#Utilisation-avanc&#233;e-du-service-de-donn&#233;es-directes"> </a></h2><h3 id="PUT:-T&#233;l&#233;verser-des-fichiers">PUT: T&#233;l&#233;verser des fichiers<a class="anchor-link" href="#PUT:-T&#233;l&#233;verser-des-fichiers"> </a></h3><p>Jusqu'&agrave; pr&eacute;sent, uniquement la fonctionalit&eacute; de lecture a &eacute;t&eacute; d&eacute;crite. Pour t&eacute;l&eacute;verser un fichier, utilisez la commande <code>cadcput</code>, par exemple:</p>

<pre><code>$ cadcput {fileID} src</code></pre>
<p>
    Notez que <code>cadcput</code> n&eacute;cessite l'adresse URI complet, y compris la source, par exemple: <code>cadc:CFHT/2583975o.fits.fz</code>.
    Un t&eacute;l&eacute;chargement est effectu&eacute; en effectuant un <code>HTTP PUT</code> vers l'adresse URL identifiant le fichier et en fournissant les donn&eacute;es du fichier dans le flux d'entr&eacute;e accompagnant la demande.
</p>

<h3>INFO: Obtenir des informations sur les fichiers</h3>
<p>Vous pouvez utiliser <code>cadcinfo</code> pour r&eacute;cup&eacute;rer les m&eacute;tadonn&eacute;es d'un fichier. Les informations des m&eacute;tadonn&eacute;es sont les suivantes:</p>
<table class="table">
    <thead>
        <tr>
            <th style="text-align:right">Metadonn&eacute;e</th>
            <th style="text-align:left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:right">id:</td>
            <td style="text-align:left">L'identification compl&egrave;te dans le syst&egrave;me de stockage du CCDA</td>
        </tr>
        <tr>
            <td style="text-align:right">encoding:</td>
            <td style="text-align:left">Le type de codage (compression) utilis&eacute; (facultatif)</td>
        </tr>
        <tr>
            <td style="text-align:right">last modified:</td>
            <td style="text-align:left">Date de la derni&egrave;re modification du fichier (facultatif: non-pr&eacute;sent lors de la livraison en modification)</td>
        </tr>
        <tr>
            <td style="text-align:right">md5sum:</td>
            <td style="text-align:left">Le r&eacute;sum&eacute; de somme MD5 du contenu du fichier.</td>
        </tr>
        <tr>
            <td style="text-align:right">name:</td>
            <td style="text-align:left">Contient un nom de fichier sugg&eacute;r&eacute; pour les clients qui &eacute;criront le fichier</td>
        </tr>
        <tr>
            <td style="text-align:right">size:</td>
            <td style="text-align:left">Taille du fichier</td>
        </tr>
        <tr>
            <td style="text-align:right">type:</td>
            <td style="text-align:left">Le type MIME du fichier (facultatif: pr&eacute;sent uniquement si le type est connu)</td>
        </tr>
    </tbody>
</table>
<p>Exemple:</p>

<pre><code>$ cadcinfo IRIS/I001B3H0.fits</code></pre>

<pre><code>CADC Storage Inventory artifact IRIS/I001B3H0.fits:
                  id: cadc:IRIS/I001B3H0.fits
                name: I001B3H0.fits
                size: 1008000
                type: application/fits
            encoding: None
       last modified: 2006-07-25T16:15:19.000
              md5sum: 2ada853a8ae135e16504aeba4e47489e</code></pre>

<h2 id="library">Programmation avec la biblioth&#232;que Python</h2>
<p>
    Le logiciel <code>cadcdata</code> installe une biblioth&egrave;que Python qui peut &ecirc;tre utilis&eacute;e directement dans un script. La documentation sur la fa&ccedil;on d'acc&eacute;der &agrave; la biblioth&egrave;que est disponible avec la commande <code>pydoc cadcdata</code> et peut &ecirc;tre r&eacute;sum&eacute;e par les 2 m&eacute;thodes suivantes:
</p>
<ol>
    <li><p>Instanciez la classe <strong>StorageInventoryClient</strong> et utilisez-la pour acc&eacute;der aux donn&eacute;es.</p>
    <p>Exemple:</p>
    <pre><code>
from cadcdata import StorageInventoryClient
client = StorageInventoryClient()
print(client.cadcinfo('GEMINI/N20220622S0260.fits'))
    </code></pre>
    <pre><code>
id=gemini:GEMINI/N20220622S0260.fits, name=N20220622S0260.fits, size=7254720, type=application/fits, encoding=binary, last modified=2022-06-23T17:24:09.000, md5sum=6831f29dfc324e0cfc30f1bc5
    </code></pre>
    </li>
    <li>
        <p>
            Appelez les fonctions de point d'entr&eacute;e <strong>cadc*</strong>. Ce sont les fonctions correspondant aux applications en ligne de commande (<strong>cadcget_cli</strong>, <strong>cadcinfo_cli</strong>, etc.).
        </p>
        <p>Exemple:</p>
    </li>
</ol>

<pre>
    <code class="python">
from cadcdata import cadcinfo_cli
import sys
sys.argv = ['cadcinfo', 'GEMINI/00AUG02_002.fits']
cadcinfo_cli()
    </code>
</pre>

<pre><code>CADC Storage Inventory identifier GEMINI/N20220622S0260.fits:
                  id: gemini:GEMINI/N20220622S0260.fits
                name: N20220622S0260.fits
                size: 7254720
                type: application/fits
            encoding: binary
       last modified: 2022-06-23T17:24:09.000
              md5sum: 6831f29dfc324e0cfc30f1bc5b86e7e4</code></pre>
<p>Toutes les op&eacute;rations en lignes de commandes pr&eacute;sent&eacute;es dans ce document peuvent &ecirc;tre effectu&eacute;es &agrave; l'aide de l'une des m&eacute;thodes r&eacute;pertori&eacute;es ci-dessus. Les avantages et les inconv&eacute;nients de ces m&eacute;thodes sont mentionn&eacute;s dans l'aide en ligne de la biblioth&egrave;que.</p>

<h2 id="api">Programmation avec l'API du service de donn&#233;es directes</h2>
<p>
    Si vous souhaitez programmer avec l'API du service de donn&eacute;es directes, nous h&eacute;bergeons une <a href="http://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/raven/  ">documentation</a>.
</p>

<h3>Techniques de transfert des donn&#233;es</h3>
<ul>
    <li>
        <strong>T&eacute;l&eacute;chargement direct</strong>: Ex&eacute;cutez une commande "HTTP GET" &agrave; <code>/data/pub/&lt;archive&gt;/&lt;fichier&gt;</code> et obtenez un r&eacute;-acheminement vers le site s&eacute;lectionn&eacute; pour le t&eacute;l&eacute;chargement.
    </li>
    <li>
        <strong>T&eacute;l&eacute;chargement ou t&eacute;l&eacute;versement n&eacute;goci&eacute;</strong>: Ex&eacute;cutez une commande "HTTP POST" document de transfert &agrave; <code>https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/raven/locate</code> et obtenez un document de transfert contenant plusieurs sites de t&eacute;l&eacute;chargement.
    </li>
</ul>

<h3>Authentication et Authorization</h3>
<p>
    Si vous tentez d'acc&eacute;der &agrave; un fichier non public, vous devrez vous authentifier au moyen de votre nom d'utilisateur et de votre mot de passe du CCDA ou d'un certificat client par l'entremise de SSL. Les outils de ligne de commande <code>cadcdata</code> acceptent le nom d'utilisateur et le mot de passe CCDA ou les certificats client tandis que l'acc&egrave;s direct au service fonctionne avec les certificats client, les cookies ou les certificats porteurs. Ces m&eacute;thodes d'autorization pourraient &ecirc;tre mises &agrave; jour &agrave; l'avenir.
</p>
<p>
    Si l'authentification (connexion) &eacute;choue, vous obtenez un message HTTP 401 (Non autoris&eacute;). Si l'authentification r&eacute;ussit mais si vous n'avez toujours pas acc&egrave;s au fichier, vous obtenez un message HTTP 403 (Interdit). Si le fichier n'existe pas, vous obtenez un message HTTP 404 (Introuvable).
</p>

<h3>V&#233;rification de la disponibilit&#233; du fichier et de son acc&#232;s</h3>
<p>
    Pour v&eacute;rifier la pr&eacute;sence d'un fichier et les autorisations d'acc&egrave;s, vous pouvez ex&eacute;cuter une commande <code>HTTP HEAD</code> avec <code>wget</code> ou <code>curl</code> sur la m&ecirc;me adresse URL que vous utiliseriez pour t&eacute;l&eacute;charger le fichier. Cette commande vous permet de confirmer la pr&eacute;sence du fichier et votre autorisation ainsi que de recueillir des m&eacute;tadonn&eacute;es sur le fichier.
</p>
<p>
    Pour afficher les en-t&ecirc;tes HTTP avec <code>curl</code>, utilisez la commande <code>curl --location --head</code> or <code>curl -L -I</code>
    Avec wget, utilisez <code>wget --server-response --spider</code>. Les en-t&ecirc;tes portant un pr&eacute;fixe en X sont des en-t&ecirc;tes personnalis&eacute;s du CCDA; tous les autres en-t&ecirc;tes sont des en-t&ecirc;tes <a href="http://www.w3.org/Protocols/rfc2616/rfc2616.html">HTTP 1.1</a> standard.
</p>
<table>
    <thead>
        <tr>
            <th>En-t&ecirc;te HTTP</th>
            <th>Explication</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Content-Type</td>
            <td>Type MIME du fichier (optionnel; seulement si le type est connu)</td>
        </tr>
        <tr>
            <td>Content-Encoding</td>
            <td>Type de codage (en g&eacute;n&eacute;ral, une compression) utilis&eacute; (optionnel)</td>
        </tr>
        <tr>
            <td>Content-Disposition</td>
            <td>Nom de fichier sugg&eacute;r&eacute; pour les clients qui enregistrent le fichier</td>
        </tr>
        <tr>
            <td>Content-Length</td>
            <td>Taille du fichier t&eacute;l&eacute;charg&eacute;</td>
        </tr>
        <tr>
            <td>Content-MD5</td>
            <td>Condens&eacute; MD5 du contenu du fichier</td>
        </tr>
        <tr>
            <td>Last-Modified</td>
            <td>Date de la derni&egrave;re modification du fichier (optionnel; absent lors d'une modification durant la livraison)</td>
        </tr>
        <tr>
            <td>X-Uncompressed-Length</td>
            <td>Taille du fichier non compress&eacute; en octets (optionnel; absent lors d'une modification durant la livraison)</td>
        </tr>
        <tr>
            <td>X-Uncompressed-MD5</td>
            <td>Condens&eacute; MD5 du contenu du fichier non compress&eacute; (optionnel; absent lors d'une modification durant la livraison)</td>
        </tr>
        <tr>
            <td>X-CADC-Stream</td>
            <td>Nom du flux utilis&eacute; lors de l'ex&eacute;cution d'une commande PUT (optionnel; le flux par d&eacute;faut est utilis&eacute; en l'absence de pr&eacute;cision)</td>
        </tr>
    </tbody>
</table>

<h3>Service de donn&#233;es directes et noms de fichier</h3>
<p>
    Vous pouvez utiliser la disposition du contenu obtenue dans l'en-t&ecirc;te <code>data</code> HTTP pour facilement enregistrer le fichier t&eacute;l&eacute;charg&eacute; sous le nom de fichier enregistr&eacute; dans l'archive au moyen de <code>wget</code> et de son option <code>--content-disposition</code>. L'option <code>--no-clobber</code> peut s'av&eacute;rer aussi utile pour &eacute;viter d'&eacute;craser les fichiers d&eacute;j&agrave; t&eacute;l&eacute;charg&eacute;s. Le programme <code>curl</code> n'offre aucune option &eacute;quivalente &agrave; l'option <code>--content-disposition</code> de <code>wget</code>, mais vous pourriez r&eacute;cup&eacute;rer l'en-t&ecirc;te HTTP du fichier, en faire l'analyse syntaxique pour obtenir la disposition du contenu et le nom du fichier, puis r&eacute;cup&eacute;rer le fichier et l'enregistrer sous ce nom.
</p>
<p>
    Pour les adresses URLs sp&eacute;cifiant une d&eacute;coupe, le nom de fichier sugg&eacute;r&eacute; dans l'en-t&ecirc;te <code>Content-Disposition</code> inclut une partie suppl&eacute;mentaire afin que diff&eacute;rentes d&eacute;coupes du m&ecirc;me fichier aient des noms de fichiers diff&eacute;rents. Cette partie suppl&eacute;mentaire est destin&eacute;e &agrave; &ecirc;tre lisible, bien que de nombreux caract&egrave;res soient remplac&eacute;s par un trait de soulignement (_) pour &ecirc;tre g&eacute;n&eacute;ralement plus compatible avec le standard Internet et le syst&egrave;me de fichiers. Cette partie suppl&eacute;mentaire sera coh&eacute;rente entre les requ&ecirc;tes avec les m&ecirc;mes param&egrave;tres de d&eacute;coupe.
</p>
<h2 id="assistance">Aide du CCDA</h2>
<p>Pour obtenir de l'aide ou du soutien &agrave; propos du service de Donn&eacute;es Directes, envoyez un courriel &agrave; <a href="mailto:support@canfar.net">support@canfar.net</a></p>
