---
layout: cadc
lang: en
permalink: /en/doc/groups
title: canfar-create-group Application
altLangPage: /fr/doc/groups
dateModified: 2022-08-11
signing: layout.signing
nav: doc
archived: true

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>Group membership is used to control access to proprietary observational data.  Groups can be managed via a <a href="/en/groups/">web UI</a> or via a set of 
<a rel="external" href="https://github.com/canfar/python-canfar-clients/tree/master/canfar-clients">python clients</a> that can be installed to your local machine using pip</p>

<h3>Install</h3>
<pre><code>$ pip install canfar</code></pre>

<h3>Usage</h3>
<p> The group module comes with some example clients, see the <a href="https://github.com/canfar/python-canfar-clients">python-canfar-clients GitHub repository</a> for details.  </p>

<p>To create a new group to control access to proprietary data use:</p>

<pre><code>$ canfar-create-group --pi_username {USERID} {GROUP}</code></pre>

<p>where <code>{USERID}</code> is the CADC userid of the individual that should be given access and <code>{GROUP}</code> is the group
to add that userid to, groups with names matching the pattern {ARCHIVE}-{proposalID} enables priviledged access to telescope {ARCHIVE} data
associated (via a <a href="../caom">CAOM</a> record) to a particular {proposalID}.
