---
layout: cadc
lang: fr
permalink: /fr/groupes/
title: Gestion de groupes
altLangPage: /en/groups/
dateModified: 2021-12-15
signing: layout.signing
nositesearch: layout.nositesearchs

# Trip off the mechanism to allow a list of js scripts
script:
    first:

script:
    - /cadc/bootstrap/js/bootstrap.min.js
    - /static/js/cadc/org.opencadc.js
    - /static/js/cadc/cadc.util.js
    - /static/js/slickgrid/lib/jquery-ui.min.js
    - /static/js/slickgrid/lib/jquery.event.drag-2.3.0.js
    - /static/js/slickgrid/slick.core.js
    - /static/js/slickgrid/slick.grid.js
    - /static/js/slickgrid/slick.dataview.js
    - /static/js/slickgrid/slick.pager.js
    - /static/js/slickgrid/slick.columnpicker.js
    - /static/js/slickgrid/extra/jquery.csv-0.71.min.js
    - /static/js/slickgrid/cadc.rowselectionmodel.js
    - /static/js/slickgrid/cadc.votable.js
    - /static/js/slickgrid/cadc.votable-reader.js
    - /static/js/slickgrid/cadc.plugin.filter_default.js
    - /static/js/slickgrid/cadc.votv.js
    - /static/js/slickgrid/cadc.votv.comparer.js
    - /static/js/cadc/registry-client.js
    - /static/js/groups/cadc.gms.js
    - /static/js/groups/cadc.gms.list.js
    - /static/js/cadc/login.js
    - /static/js/groups/init.js

css: 
    - /static/css/cadcVOTV/slick-default-theme.css
    - /static/css/cadcVOTV/cadc.votv.css
    - /static/css/cadcVOTV/slick.columnpicker.css
    - /static/css/cadcVOTV/slick.pager.css
    - /static/css/cadcVOTV/slick.grid.css
    - /static/css/cadcVOTV/jquery-ui-1.11.4.min.css
    - /static/css/groups/cadc.gms.css
    - /static/css/groups/cadc_gmui.css

fluid: true
---

<div id="list_content_headers" class="hidden" lang="fr">
    <span class="label_required" lang="en">obligatoire</span>
    <span class="list_header_name" lang="fr">Nom</span>
    <span class="list_header_owner_name" lang="fr">Nom du propriétaire</span>
    <span class="list_header_description" lang="fr">Description</span>
    <span class="list_header_id" lang="fr">Identifiant</span>
    <span class="list_header_no_of_members" lang="fr">Nombre de membres</span>
    <span class="list_header_members" lang="fr">Membres</span>
    <span class="list_header_member_name" lang="fr">Nom du membre</span>
    <span class="list_header_remove" lang="fr">Supprimer</span>
    <span class="list_header_admin_name" lang="fr">Nom</span>
    <span class="list_header_admins" lang="fr">Administrateurs</span>
    <span class="delete_group_confirmation_title" lang="fr">Effacer la groupe?</span>
    <span class="view_txt" lang="fr">Vue</span>
    <span class="edit_txt" lang="fr">Modifier</span>
</div>

{% include groups.markdown %}