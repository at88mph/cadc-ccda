---
layout: cadc
lang: en
permalink: /en/groups/
title: Group Management
altLangPage: /fr/groupes/
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

<div id="list_content_headers" class="hidden" lang="en">
    <span class="label_required" lang="en">required</span>
    <span class="list_header_name" lang="en">Name</span>
    <span class="list_header_owner_name" lang="en">Owner Name</span>
    <span class="list_header_description" lang="en">Description</span>
    <span class="list_header_id" lang="en">ID</span>
    <span class="list_header_members" lang="en">Members</span>
    <span class="list_header_member_name" lang="en">Member Name</span>
    <span class="list_header_remove" lang="en">Remove</span>
    <span class="list_header_admin_name" lang="en">Name</span>
    <span class="list_header_admins" lang="en">Administrators</span>
    <span class="delete_group_confirmation_title" lang="en">Delete group?</span>
    <span class="view_txt" lang="en">View</span>
    <span class="edit_txt" lang="en">Edit</span>
</div>

{% include groups.markdown %}
