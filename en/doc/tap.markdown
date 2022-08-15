---
layout: cadc
lang: en
permalink: /en/doc/tap
title: Table Access Protocol (TAP)
altLangPage: /fr/doc/tap
dateModified: 2022-08-09
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>
  The CADC provides QUERY access to
  our <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/tables">databases</a>
  via <a href="http://www.ivoa.net/Documents/TAP/">TAP-1.0</a>.  This
  services enables users to POST database queries over HTTP and
  retrieve responses in CSV, TSV or VOTable formats. The
  <a href="http://www.star.bris.ac.uk/~mbt/topcat/">TOPCAT</a> client
  is an excellent tool for TAP service interaction.
</p>

<h3>Example</h3>
<p>
  To query for all observations that intersect a circle and are
  calibrated or advanced products a Query is submitted via the
  following URL:
</p>
<pre><code>$ curl -Lv -d "REQUEST=doQuery&LANG=ADQL&QUERY=SELECT * FROM caom2.Observation AS o JOIN caom2.Plane AS p ON o.obsID=p.obsID WHERE INTERSECTS(p.position_bounds, CIRCLE('ICRS', 180, 5, 2)) = 1 AND p.calibrationLevel >= 1" https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync</code></pre>
<p>
    Here is a clickable link that will <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync?REQUEST=doQuery&LANG=ADQL&QUERY=select+*+from+caom2.Observation+as+o+JOIN+caom2.Plane+as+p+on+o.obsID%3Dp.obsID+where+INTERSECTS%28p.position_bounds%2C+CIRCLE%28%27ICRS%27%2C+180%2C+5%2C+2%29%29+%3D+1+and+p.calibrationLevel+%3E%3D+1">execute the query</a> and download the resulting VOTable.
</p>
<p>
    The <code>ADQL</code> tab of the <a href="https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/search/">CADC Advanced Search</a> page provides the exact ADQL that was used for your search query.
    Examining in the 'ADQL' tab is a good way to become familar with the CADC CAOM2 database tables.
</p>

<h3>Downloading Data</h3>
<p>
    One of the columns in our caom2.Plane table is the <code>planeURI</code>.  This URI can be used to download the
    the files associated with the plane using a URL constrcuted following this pattern:
    <code>
        https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2ops/pkg?ID=${planeURI}
    </code>
    where <code>${planeURI}</code> is the value from the <code>planeURI</code> column returned by your query.

    Note that this URL will require authentication to access as some data is proprietary.
</p>

<h4>Example</h4>
<p>
    Below is a BASH script that will download all the observations associated with <code>proposal_id = '13BF10'</code>.
</p>
<pre>
    <code>
        #!/bin/bash
        export proposal_id=13BF10
        export tap_url=https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync
        export download_url=https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2ops/pkg
        export REQUEST=doQuery
        export LANG=ADQL
        export USERNAME=timmy
        export PASSWORD=astronomer
        export FORMAT=CSV
        export QUERY=select+planeURI+from+caom2.Observation+as+o+JOIN+caom2.Plane+as+p+on+o.obsID%3Dp.obsID+where+o.proposal_id=\'${proposal_id}\'

        # Obtain a certificate (Optional for proprietary metadata)
        curl -LvJO -u ${USERNAME}:${PASSWORD} "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/cred/auth/priv?daysValid=7"

        # Remove the "--cert cadcproxy.pem" portion to restrict to public metadata
        for planeURI in `curl --cert cadcproxy.pem "${tap_url}?REQUEST=${REQUEST}&LANG=${LANG}&FORMAT=${FORMAT}&QUERY=${QUERY}"`
        do
            curl --cert cadcproxy.pem -J -O -L "${download_url}?ID=${planeURI}"
        done
    </code>
</pre>


<h3>Unsupported ADQL Constructs</h3>
<p>
    The following ADQL Functions are not currently supported:
    <ul>
        <li><code>ALL</code> and <code>DISTINCT</code> within an aggragate function (<code>AVG</code>, <code>COUNT</code>, <code>MIN</code>, <code>MAX</code>)</li>
        <li><code>PI</code></li>
        <li><code>RAND</code></li>
        <li><code>TRUNCATE</code></li>
    </ul>
</p>

<h3>Details</h3>
<p>
    The main use of our TAP serivce is to explore our observational catalogue.
    Metadata for all the observations stored within the CADC are provided via the Common Archive Observation Model
    (CAOM-2.0) database. The tables in the CAOM2 database can be queried via the TAP service. The main tables are:
</p>
<ul>
    <li><code>caom2.Observation</code>: this table lists observations (individual exposures or stacks of exposures).</li>
    <li><code>caom2.Plane</code>: this table lists individual data products constructed from a particular observation, such as a RAW
        image, a PROCessed image or a catalog of sources.</li>
</ul>

<p>
    To use the TAP service one constructs an <a href="http://www.ivoa.net/documents/ADQL/2.0">ADQL</a> query and posts that
    query to a TAP URL.  This is most easily done using tools like TOPCAT but can also be done directly using tools
    like cURL.  The TAP URLs are:
</p>

<table class="content table">
    <thead>
        <tr>
            <th>resource</th><th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/async
            </td>
            <td>
                asychronous queries, the <a href="https://ws-cadc.canfar.net/vault/">VOSpace</a> destination where the result will be written is returned.
            </td>
        </tr>
        <tr>
            <td>
                https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync
            </td>
            <td>
                sychronous queries, result of query is returned.
            </td>
        </tr>
    </tbody>
</table>

<h2>Other views on our collection</h2>
<p>
    In addition to the CAOM-2 database, this service also provides views of our meta-data collection that follow various
    IVOA table standards:
</p>
<ul>
    <li>caom.SIAv1: a view on CAOM2 that provides access to calibrated images; VOTable output is compatible with the
        <a href="http://www.ivoa.net/Documents/SIA/">Simple Image Access (SIA) version 1.0</a> specification</li>
    <li>ivoa.ObsCore: a prototype implementation of the ObsCore physical model from the ObsTap project</li>
</ul>

<h2>More Examples</h2>
<p>
Here are some examples of queries (with the minimal requied parameters) that should work and return a modest
number of results. Note that the QUERY itself must be properly encoded since it has spaces and other special
characters. These queries can be executed via the <code>/caom/async</code> or the <code>/caom/sync</code> endpoints; details on how to do that
are given in the UWS and TAP specifications. We include some live URLs below that use the <code>/caom/sync</code> endpoint.
</p>

<p>Query SIA view for observations that contain a location:</p>
<pre>
REQUEST=doQuery
LANG=ADQL
QUERY=select * from caom2.SIAv1
      where CONTAINS(POINT('ICRS', 180, 5), position_bounds) = 1
</pre>

<p>
<a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync?REQUEST=doQuery&LANG=ADQL&QUERY=select+*+from+caom2.SIAv1+where+CONTAINS%28POINT%28%27ICRS%27%2C180%2C+5%29%2C+position_bounds%29+%3D+1">
Try It!
</a>
</p>

<p>Query ObsCore view for observations that intersect a circle:</p>
<pre>
REQUEST=doQuery
LANG=ADQL
QUERY=select * from ivoa.ObsCore
      where INTERSECTS(s_region, CIRCLE('ICRS', 180, 5, 2)) = 1
</pre>

<p>
<a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync?REQUEST=doQuery&LANG=ADQL&QUERY=select+*+from+ivoa.ObsCore+where+INTERSECTS%28s_region%2C+CIRCLE%28%27ICRS%27%2C+180%2C+5%2C+2%29%29+%3D+1">
Try It!
</a>
</p>

<p>Query that refers to a non-existent column and table and should fail:</p>
<pre>
REQUEST=doQuery
LANG=ADQL
QUERY=select noSuchColumn from noSuchTable
</pre>

<p>
<a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/argus/sync?REQUEST=doQuery&LANG=ADQL&QUERY=select+noSuchColumn+from+noSuchTable">
Try It!
</a>
<br/>
