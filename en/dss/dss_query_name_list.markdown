---
layout: cadc
lang: en
permalink: /en/dss/dss_query_name_list.html
title: Query By Object List
altLangPage: /fr/dss/dss_interrogation_nom_liste.html
dateModified: 2021-12-10
signing: layout.signing
nositesearch: layout.nositesearch
nav: dss
breadcrumbs:
    - link: /en/dss/index.html
      title: DSS
    - link: /en/dss/dss_query_name_list.html
      title: Query By Object List
---
<p>
Format must be "LABEL&lt;TAB&gt;TARGET&lt;TAB&gt;RA SIZE(arcmin)&lt;TAB&gt;DEC SIZE(arcmin)" on a single line (fields separated by tabs)
</p>
<p>
Example:
</p>
<pre>
My_object1&lt;TAB&gt;M31&lt;TAB&gt;10.0&lt;TAB&gt;12.0
My_object2&lt;TAB&gt;M101&lt;TAB&gt;12.0&lt;TAB&gt;5.0
</pre>
<div class="form-content">
  <form action="/cadcbin/en/dss/dss_query_name_list.pl" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label for="uploaded_file_object" class="control-label">File name containing list of objects?</label>
        <input type="file" name="uploaded_file_object" id="uploaded_file_object" class="form-control" />
      </div>
      <input type="submit" class="btn btn-primary" value="Query the DSS" />
  </form>
</div>
<p class="text-info">Note: The query will return images from all the possible surveys.</p>
