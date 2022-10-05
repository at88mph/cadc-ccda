---
layout: cadc
lang: en
permalink: /en/doc/ad/
title: Storage
altLangPage: /fr/doc/ad/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>
The CADC Archive is divided into a number of sub-archives, eg. CFHT, JCMT, HST, etc.  
Each of these archives has strict access control mechanism in place, to prevent un-authorized
retrieval and/or putting of files.   In its most simple form the data web service accepts
connections for specifically authorized users who 'PUT' or 'GET' files from the archive 
over an HTTP(S) link.
</p>

<p>
The CADC storage system is housed behind a web service portal that distributes requests
to GET and PUT files across our cloud storage infrastructure.  That storage infrastructure
is located in a number of geographically distinct locations.
</p>

<p>
Data transfer service redirects requests for files to the geographic location that is 
expected to provide the best data rate base on the geographic location assocaited with
the IP address of an incoming request.

The details of the interaction are describe in the <a href="./data">data web service</a> documentation area.
</p>

<p>
To simplify interactions with the data web service the CADC provides a set of Python based 
<a href="https://github.com/canfar/python-canfar-clients/tree/master/cadc-clients">client tools</a>, including 
the <a href="./cadc-copy">cadc-copy</a> application.
</p>
