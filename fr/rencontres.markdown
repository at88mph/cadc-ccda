---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
title: Rencontres internationales en astronomie
lang: fr
permalink: /fr/rencontres/
altLangPage: /en/meetings/
dateModified: 2021-09-22

nav:
  - links:
      - name: Nouvelles rencontres
        url: "/fr/rencontres"
      - name: Rencontres du mois
        url: "#"
      - name: Rencontres du mois prochain
        url: "#"
      - name: Rencontres de 2023
        url: "#"
      - name: Rencontres de 2022
        url: "#"
      - name: Rencontres de 2021
        url: "#"
      - name: ""
        url: ""
      - name: Inscrire une rencontre
        url: "#"

# Utilizer pour formatter les dates et les liens
script: [/meetings/meetings/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2" data-wb-json='{ "url": "/meetings/meetings/two-weeks.json", "mapping": ["/title", "/start", "/end", "/location", "/web"], "queryall": ["summary", ".start", ".end", ".location", ".web"] }'>
	<template>
        <li>
            <details>
                <summary>Titre non trouvé</summary>
                <div class="well well-sm">
                    <dl class="dl-horizontal brdr-0">
                        <dt class="date-label">Date</dt>
                        <dd><span class="start date">Date de commence non trouvé</span>&nbsp;-&nbsp;<span class="end date">Date de fin non trouvé</span></dd>
                        <dt class="location-label">Location</dt>
                        <dd class="location">Location non trouvé</dd>
                        <dt class="web-label"></dt>
                        <dd><a target="_blank" rel="external" class="web" href="#">#</a></dd>
                    </dl>
                </div>
            </details>
        </li>
	</template>
</ul>
