---
layout: cadc
lang: fr
permalink: /fr/doc/groups/
title: Application canfar-create-group
altLangPage: /en/doc/groups/
dateModified: 2022-10-03
signing: layout.signing
nav: doc
archived: true

breadcrumbs:
    - link: /fr/doc
      title: Documentation
---
<p>Le contr&ocirc;le de l'acc&egrave;s aux donn&acute;es non publiques du CCDA s'effectue via la cr&acute;ation de groupes. Les groupes
sont d&acute;finis via un <a href="/fr/groupes/">utilitaire WEB</a> ou via la <a rel="external" href="https://github.com/canfar/python-canfar-clients/tree/master/canfar-clients"> suite logicielle python du CCDA</a> qui peut être install&acute;e sur votre ordinateur via l'utilitaire de gestion PIP.</p>

<h3>Installation</h3>
<pre><code>$ pip install canfar</code></pre>

<h3>Usage</h3>
<p>Le module de gestion de groupe est accompagn&acute; de quelques exemples, veuillez consulter <a href="https://github.com/canfar/python-canfar-clients">python-canfar-clients GitHub repository</a> pour de plus amples informations.<p>

<p>Pour cr&acute;er un nouveau groupe pour acc&acute;der aux donn&acute;es priv&acute;es utilisez:</p>

<pre><code>$ canfar-create-group --pi_username {USERID} {GROUP}</code></pre>

<p> où <code>{USERID}</code> est le nom d'usager du CCDA &agrave; qui l'acc&egrave;s sera authoris&acute; et <code>{GROUP}</code> est le nom du groupe de gestion de cette archive. Les groupes de forme {ARCHIVE}-{proposalID} permettent d'authoriser l'acc&egrave;s &agrave; une archive pr&acute;cise, i.e. {ARCHIVE} pour les entr&acute;es CAOM qui appartiennent &agrave; un {proposalID} sp&acute;cifique.


