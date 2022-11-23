---
layout: cadc
lang: en
permalink: /en/dao/robotic.html
title: DAO Robotic Observing
altLangPage: /fr/ofa/robotic.html
dateModified: 2022-11-21
signing: layout.signing
nav: dao
script: /static/js/dao/proxy.js

breadcrumbs:
    - link: /en/dao/
      title: DAO
---
              
<p>Use this form to prepare an observing program for a single
   night of DAO 1.2-m telescope robotic operation.  First, simply create a 
   file with a list of object names, one per line and more or less in the
   order you hope to observe them.  Lines beginning with a '#' are treated
   as comments.  You also have the option to
   include an exposure time (in seconds) and the number of desired exposures
   for each target on each line (using TABS to separate names, exposure times
   and number of exposures).  Upload 
   this file and enter other required information.</p>

{%- include dao/robotic-observing.markdown -%}
