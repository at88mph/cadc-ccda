---
layout: cadc
lang: fr
permalink: /fr/recherche/
title: Recherche
altLangPage: /en/search/
dateModified: 2021-07-03
---

<div class="wb-frmvld nojs-hide wb-init wb-frmvld-inited row">
    <form action="#" method="get" id="search-form" novalidate="novalidate">
        <input type="hidden" name="language" value="en">
        <div id="input" class="col-sm-12">
            <div class="form-group">
                <label for="search" class="hidden"><span class="field-name">Recherche</span></label>
                <input id="search" name="search" placeholder="M31" class="form-control" size="55" list="suggestions" />
                <datalist id="suggestions">
                    <option label="M13" value="M13"></option>
                </datalist>
            </div>
        </div>
    </form>
    <div class="arialive wb-inv" aria-live="polite" aria-relevant="all"></div>
</div>
