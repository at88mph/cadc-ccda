---
layout: cadc
lang: en
permalink: /en/search/
title: Archive Search
altLangPage: /fr/recherche/
dateModified: 2021-11-16
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearchs

# Used for post label formatting (dates and links)
# script: [/static/js/search.js]

breadcrumbs:
    - link: /en/search/
      title: Archive Search
---

<div class="wb-frmvld nojs-hide wb-init wb-frmvld-inited container">
    <form action="#" method="get" class="container small form-horizontal" id="search-form">
        <input type="hidden" name="language" value="en">
        <div class="form-group">
            <label for="collectionQuery" class="control-label"><span class="field-name">Collection</span></label>
            <input id="collectionQuery" name="collectionQuery" placeholder="DAO" class="form-control" size="30" list="collectionsuggest" />
            <datalist id="collectionsuggest" data-wb-json='{ "url": "/tap-ui/preset?column=collection", "mapping": [ { "selector": "option", "attr": "value", "value": "" } ] }'>
                <template>
                    <option label="" value=""></option>
                </template>
            </datalist>
        </div>
        <div class="form-group">
            <label for="instrumentQuery" class="control-label"><span class="field-name">Instrument</span></label>
            <input id="instrumentQuery" name="instrumentQuery" placeholder="McKellan Spectrograph" class="form-control" size="30" list="instrumentsuggest" />
            <datalist id="instrumentsuggest" data-wb-json='{ "url": "/tap-ui/preset?column=instrument_name", "mapping": [ { "selector": "option", "attr": "value", "value": "" } ] }'>
                <template>
                    <option label="" value=""></option>
                </template>
            </datalist>
        </div>
    </form>
</div>
