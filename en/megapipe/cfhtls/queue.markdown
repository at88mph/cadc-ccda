---
layout: cadc
lang: en
permalink: /en/megapipe/cfhtls/queue.html
title: Queue run images and catalogues
altLangPage: /fr/megapipe/cfhtls/queue.html
dateModified: 2021-12-09
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/cfhtls/index.html
      title: CFHTLS
---
<p>
    In addition to the full CFHTLS Deep stacks, stacks which only
    combine data from particular queue runs have been generated. You
    may find these stacks useful for various time-sensitive
    investigations.
</p>
<p>
    You can download the data
    with <a href="/en/search/?collection=CFHTMEGAPIPE&amp;Observation.observationID=QD*">Advanced
    Search</a>. The CFHT queue run is part of the Obs. ID.
</p>
<p>
    The data was processed with MegaPipe in a similar manner to the full
    CFHTLS Deep stacks.  The queue run stacks are
    astrometrically registered to the full stacks and are exactly the
    same size. The photometric calibration is also the same: all the
    images are scaled to a photometric zero-point of 30 in AB
    magnitudes. The catalogues were generated with SExtractor
    using <a href="/static/files/megapipe/cfhtlscat.sex">this parameter file</a>.
</p>
<p>
   Not all the queue run data was processed. Only images with
   seeing/image quality better than IQ=1.0'' where included in the
   stacks. The IQ values used for this determination are the Elixir
   values, which are occasionally in error. Stacks were only generated
   for queue runs where 5 or more suitable images were taken in a
   given filter. This is why, for example, there are no stacks for the
   U-band in the D2.
</p>
