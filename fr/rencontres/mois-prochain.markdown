---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
title: Rencontres internationales en astronomie (le mois prochain)
lang: fr
permalink: /fr/rencontres/mois-prochain/
altLangPage: /en/meetings/next-month/
dateModified: 2021-09-28
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav:
  - links:
      - name: Nouvelles rencontres
        url: "/fr/rencontres/"
      - name: Rencontres du mois
        url: "/fr/rencontres/ce-mois/"
      - name: Rencontres du mois prochain
        url: "/fr/rencontres/mois-prochain/"
      - name: Rencontres de 2023
        url: "/fr/rencontres/annee-2023/"
      - name: Rencontres de 2022
        url: "/fr/rencontres/annee-2022/"
      - name: Rencontres de 2021
        url: "/fr/rencontres/annee-2021/"
  - links:
      - name: Inscrire une rencontre
        url: "/fr/rencontres/soumire-nouveau-rencontre/"

# Used for post label formatting (dates and links)
script: [/static/meetings.js]
---

<ul id="meetings_list" class="list-unstyled lst-spcd-2" data-wb-json='{ "url": "/meetings/meetings?month=next", "mapping": ["/title", "/web", "/start", "/end", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], "queryall": ["summary", ".web", ".start", ".end", ".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] }'>
	<template>
        <li>
        {%- include rencontre-fr.markdown -%}
        </li>
	</template>
</ul>
