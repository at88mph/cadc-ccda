---
layout: cadc
lang: en
permalink: /en/doc/cadc-copy
title: cadc-copy Application
altLangPage: /fr/doc/cadc-copy
dateModified: 2022-07-08
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<h2>Installation</h2>
<pre><code>$ pip install cadc-copy</code></pre>

<h2>Usage</h2>
<p>
The CADC python tools are described with the source code in a
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients/README.md">README.md</a> file in the project github repository.
</p>

<p>
For the archive data provider whose observational files are stored in the local directory '/local/archive_data/obs_111.fits' the command to load the 
data into the archive can be as simple as:
</p>

<pre><code>$ cadc-copy put ARCHIVE /local/archive_data/obs_111.fits</code></pre>

<p>
The file obs_111.fits will then be copied up to the CADC archive system and should then accessible at 
https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/data/pub/ARCHIVE/obs_111.fits, where the word ARCHIVE is replaced with the name of your archive.
</p>

<section class="alert alert-info">
    <h3>Recall that</h3>
    <p>All observations stored in an archive must have a unique file name.</p>
</section>

<p>
Successful interaction / upload will require authorization for the users account to write to the archive
and for the user to have a CADC X509 proxy certificate or a <code>.netrc</code> file, see the 
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients/README.md">README.md</a> file for details.
</p>
