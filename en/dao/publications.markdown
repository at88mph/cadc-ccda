---
layout: cadc
lang: en
permalink: /en/dao/publications
title: DAO Publications
altLangPage: /fr/ofa/publications
headerimage: /static/images/dao.jpg
dateModified: 2021-10-25
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: dao

breadcrumbs:
    - link: /en/dao/
      title: DAO
---
             
<p>To view publications based in whole or in part on data obtained
    with the DAO 1.2-m and/or 1.8-m telescopes simply select the publication
    year and click the "Retrieve ADS listing" button to view ADS entries for 
    DAO-based papers we have identified for that year.  To help check for
    completeness, you can also search for papers by last name.  Finally, since 
    many MSc and PhD theses do not have ADS bibcodes these can be viewed 
    separately by selecting the link provided at the bottom.</p>

<p><strong>Accurate tracking of DAO-based publications and citations is 
    of critical importance for helping maintain funding for these facilities.  
    If any of your publications (refereed papers, conference presentation, circulars, 
    theses, recent astro-ph preprints) are missing please send details or, 
    preferably, the ADS bibcode (e.g. 2009PASP..121..343H) to 
    <a href="mailto:david.bohlender@nrc-cnrc.gc.ca?subject=DAO publications">david.bohlender@nrc-cnrc.gc.ca</a>.  
    This can obviously include papers earlier than 1995,
    the current limit of our detailed bibliographic search.</strong></p>

{%- assign current_year='now' | date: "%Y" | to_integer -%}
{%- assign earliest_year='1995' | to_integer -%}
{%- assign year_count = current_year | minus: earliest_year -%}
{%- assign year_range = (earliest_year..current_year) | reverse -%}

<h2>Search publications</h2>
<div class="wb-tabs">
    <div class="tabpanels">
        <details id="by_year" open="open">
            <summary>By year</summary>
            <form method="post" action="/cadcbin/en/dao/publications.pl" enctype="application/x-www-form-urlencoded">
                <div class="form-group">
                    <label class="control-label" for="pubyear">Select year:</label>
                    <select id="pubyear" class="form-control" name="pubyear" data-role="none">
                    {% for i in year_range %}
                        <option value="{{ i }}">{{ i }}</option>
                    {% endfor %}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary" name="list" value="Search" data-role="none">
            </form>
        </details>
        <details id="by_name_year">
            <summary>By last name and year</summary>
            <form method="post" role="form" action="/cadcbin/en/dao/publications.pl" enctype="application/x-www-form-urlencoded">
                <div class="form-group">
                    <label class="control-label" for="author">Last Name:</label>
                    <input type="text" id="author" class="form-control" name="author" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="searchyear">Year:</label>
                    <select name="searchyear" id="searchyear" class="form-control">
                    {% for i in year_range %}
                        <option value="{{ i }}">{{ i }}</option>
                    {% endfor %}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary form-control" name="search" value="Search" data-role="none">
            </form>
        </details>
        <details id="by_theses">
            <summary>By Theses</summary>
            <a href="https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/files/vault/DAO/Statistics/Publications/daoTheses.html" class="h5">View DAO-based Theses</a>
        </details>
    </div>
</div>
