---
layout: cadc
lang: en
permalink: /en/doc/caom/
title: CAOM-2
altLangPage: /fr/doc/caom/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>
To enable future growth and enhance the ability of users to find data of interest to their science case, the CADC
has developed the Common Archive Observation Model (CAOM). CAOM (now at version 2.3) enables the storage of
observational metadata from the complete set of telescopic data and searching through that metadata using a
single interface. The generalized capability of CAOM comes at the expense of some model complexity and the
requirement of adopting a language that is unfamiliar to users.

To decrease the learning curve for users, the CADC exposes CAOM via a simplified search 
<a href="/en/search/">web page interface</a>, this same interface provides access to all observations stored in 
the archive.

For users requiring access to more details of the observations and greater flexibility in query construction CAOM
is also exposed via a Table Access Protocol (TAP) web service that can be accessed via tools like 
<a href="http://www.star.bris.ac.uk/~mbt/topcat/#install">TOPCAT</a> or directly via any HTTP aware client.

CAOM greatly decreases the workload involved in maintaining an archive but still requires expert knowledge to ensure
that the metadata is correctly translated from the observational record into the CAOM database system.
</p>

<p>
CAOM metadata records that describe a complete observation can be constructed using two pieces of software.
Each can be used independently and users are not required to use both. Before beginning with creating a record,
however, one should understand the structure of the metadata model.
</p>
<p>
CAOM consists of a database structure that describe the circumstances (Timing, Location and Wavelength/Frequency) of
an observation, the nature observation (image, spectrograph, polarizing, receiver, etc.) and the processing level
of different files associated with the observation (ie. the raw and calibrated data are stored
in the same CAOM entry).
</p>

<h2>Model (<a href="https://github.com/opencadc/caom2tools/blob/master/doc">Usage</a>)</h2>

<p>
The top level of the model is the Observation.  The Observation is the overall container for all
associated datasets.  Each associated data set is stored in a Plane, so an Observation is made up of multiple
Planes data.  Within each Plane are the actual data files that contain the observational data, the Artifacts
of the Plane, a FITS file is a good example of an Artifact.  Any complex data structures within an Artifact, such
a Multi Extension FITS file, is further described by having each structure within the Artifact described as a Part.
A single Artifact can contain multiple Parts.  A Part within an Artifact is normally describable and findable
via metadata stored within the Artifact (such as the headers of an MEF file).   Sometimes, very very rarely, a
Part might itself contain complex data structures that are not clearly separated by metadata within the file,
each of the data structures (normally there is only one) within a Part is called a Chunk.  Thus we have:
</p>

<pre>Observation
  -&gt; Plane 
    -&gt; Artifact
        -&gt; Part 
            -&gt; Chunk 
        -&gt; Part 
            -&gt; Chunk 
        -&gt; Part 
            ...

  -&gt; Plane
    -&gt; Artifact 
        ... 
  -&gt; Plane 
     ...
</pre>

<p>A technical description of CAOM, including a UML, is available from <a href="https://www.opencadc.org/caom2">CAOM Reference Documentation</a>.</p>

<p>
To create a CAOM record for transfer into the CADC database search system can be achieved using 
<a href="https://github.com/opencadc/caom2/tree/master/fits2caom2">fits2caom2</a> or by developing your own software 
in Python base on the <a href="https://github.com/opencadc/caom2tools">caom2tools</a> modules.  The best place to
start is likely to examine an existing set of CAOM2 records as examples, likely ones that are for observations
that are similar to those you are attempting to store within the CADC.
</p>
