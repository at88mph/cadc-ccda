---
layout: cadc
lang: en
permalink: /en/groups/
title: Group Management
altLangPage: /fr/groupes/
dateModified: 2021-12-15
signing: layout.signing


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
    <!-- <span class="label_required" lang="en">required</span>
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
    <span class="edit_txt" lang="en">Edit</span> -->
    <span class="label_required" lang="en">required</span>,
    <span class="delete_group_confirmation_title" lang="en">Delete group?</span>,
    <span class="edit_link" lang="en">/$1/groups/update.html</span>,
    <span class="edit_link_label" lang="en">Edit</span>,
    <span class="list_header_name" lang="en">Name</span>,
    <span class="list_header_owner_name" lang="en">Owner Name</span>,
    <span class="list_header_description" lang="en">Description</span>,
    <span class="list_header_id" lang="en">ID</span>,
    <span class="list_header_members" lang="en">Members</span>,
    <span class="list_header_member_name" lang="en">Member Name</span>,
    <span class="list_header_remove" lang="en">Remove</span>,
    <span class="list_header_admin_name" lang="en">Name</span>,
    <span class="list_header_admins" lang="en">Administrators</span>,
    <span class="admins_only_msg" lang="en">Administrators only</span>,
    <span class="button_close" lang="en">Close</span>,
    <span class="button_reset" lang="en">Reset</span>,
    <span class="button_done" lang="en">Done</span>,
    <span class="button_delete" lang="en">Delete</span>,
    <span class="details_form_group_name_label" lang="en">Name</span>,
    <span class="details_form_owner_name_label" lang="en">Owner Name</span>,
    <span class="details_form_group_description_label" lang="en">Description</span>,
    <span class="details_form_group_members_label" lang="en">Members of {1}</span>,
    <span class="details_form_group_admins_label" lang="en">Administrators of {1}</span>,
    <span class="details_form_group_search_placeholder_members" lang="en">Enter a name</span>,
    <span class="details_form_group_search_placeholder_admins" lang="en">Enter a name</span>,
    <span class="details_form_add_members_button" lang="en">Add member</span>,
    <span class="details_form_add_admins_button" lang="en">Add administrator</span>,
    <span class="details_form_submit_button_update" lang="en">Update</span>,
    <span class="details_form_submit_button_delete" lang="en">Delete</span>,
    <span class="details_form_submit_button_create" lang="en">Create</span>,
    <span class="edit_txt" lang="en">Edit</span>,
    <span class="navigation_menu_header_label" lang="en">Groups</span>,
    <span class="navigation_menu_new_group_label" lang="en">New Group</span>,
    <span class="view_txt" lang="en">View</span>
</div>

{% include groups.markdown %}
