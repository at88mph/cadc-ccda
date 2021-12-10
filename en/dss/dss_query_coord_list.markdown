---
layout: cadc
lang: en
permalink: /en/dss/dss_query_coord_list.html
title: Query By Coordinate List
altLangPage: /fr/dss/dss_interrogation_coord_liste.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /en/dss/index.html
      title: DSS
    - link: /en/dss/dss_query_coord_list.html
      title: Query By Coordinate List
---
<p>
Format must be </p>
<pre>
"LABEL&lt;TAB&gt;HH:MM:SS.ss&lt;TAB&gt;(S)DD:MM:SS.ss&lt;TAB&gt;RA BOX(arcmin)&lt;TAB&gt;DEC BOX (arcmin)"
</pre>
<p> on a single line (fields separated by tabs),  example:</p>
<pre>
my_object1\t07:42:29.0\t49:48:33.4\t4.\t4.
</pre>

<div class="form-content">
  <form action="/cadcbin/en/dss/dss_query_coord_list.pl" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_coord" class="control-label">File name containing list of coordinates?</label>
        <input type="file" name="uploaded_file_coord" id="uploaded_file_coord" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="Query the DSS" />
  </form>
</div>
<p class="text-info">Note: The query will return images from all the possible surveys.</p>
