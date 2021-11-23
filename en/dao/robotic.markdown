---
layout: cadc
lang: en
permalink: /en/dao/robotic
title: DAO Robotic Observing
altLangPage: /fr/ofa/robotic
headerimage: /static/images/archive-info/dao.jpg
dateModified: 2021-11-05
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao

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
