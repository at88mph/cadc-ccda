{%- include variable-core.liquid -%}
{%- assign i18nForm=site.data.groups[i18nText-lang] -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<!-- Modal -->
<div class="modal fade" id="auth_modal" tabindex="-1" role="dialog" aria-labelledby="auth_modal_label">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="auth_modal_label">{{ i18n-cadc-labels.login_required }}</h4>
      </div>
      <form class="access-control no-referrer-redirect" id="login_form" role="form" method="post" action="/access/login">
        <div class="modal-body">
          <span id="modal_login_fail" class="text-danger help-block pull-left"></span>
          <div class="form-group">
            <label for="username" class="hidden" id="modalUsernameLabel">{{ i18n-cadc-labels.username }}</label>
            <input type="text" id="modalUsername" name="username" class="form-control full-width" tabindex="1" required="required" placeholder="{{ i18n-cadc-labels.username }}"
            />
          </div>
          <div class="form-group">
            <label for="password" class="hidden" id="modalPasswordLabel">{{ i18n-cadc-labels.password }}</label>
            <input type="password" id="modalPassword" name="password" class="form-control full-width" tabindex="2" required="required" placeholder="{{ i18n-cadc-labels.password }}"
            />
          </div>
          <a href="{{ i18nText-cadc.forgot_password.url }}" tabindex="5" class="account_access_info" title="{{ i18nText-cadc.forgot_password.label }}" id="forgot_username_2">
            {{ i18n-cadc.forgot_password.label }}</a>
          <br/>
          <a href="{{ i18n-cadc.register.url }}" tabindex="6" class="account_access_info" title="Register" id="register_cadc_2">
            {{ i18nText-signOnRegister }}</a>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">
            <span class="glyphicon glyphicon-log-in"></span> {{ i18n-cadc-labels.signin_submit }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>   

<div id="content_column_main">
    <div class="loader_container">
        <div class="text-center">
            <img src="/static/images/ajax-loader.gif" alt="Loading" />
        </div>
        <div class="clear"></div>
    </div>
    <div id="content_column_main_inner" class="sr-only fill-width">
        <div class="grid-container margin-top-medium fill-width">
            <div id="group-results-grid-header" class="grid-header full-width">
                <span class="grid-header-label"></span>
            </div>
            <div id="group_list_grid" class="fill-width"></div>
        </div>
    </div>
    <div id="lengthFinder"></div>
</div>
<div id="new_group_container" class="group_container" data-operate="create">
    <!-- Create Group modal -->
    <div class="modal" id="add_group_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="add_group_modal_label">{{ i18nForm.navigation_menu_new_group_label }}</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" method="post" action="/gmui/groups" name="groupForm">
                        <div id="new_group_submit_error" class="form-message text-danger"></div>
                        <!-- Group Name -->
                        <div class="form-group">
                            <label for="add_group_name" class="col-sm-2 control-label" id="add_group_name_label">{{ i18nForm.details_form_group_name_label }}</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="add_group_name" name="group-name" placeholder="Unique Group name" tabindex="1" />
                            </div>
                        </div>
                        <!-- Group Description -->
                        <div class="form-group">
                            <label for="add_group_description" class="col-sm-2 control-label" id="add_group_description_label">{{ i18nForm.details_form_group_description_label }}</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="add_group_description" name="group-description" tabindex="2"></textarea>
                            </div>
                        </div>
                        <!-- Buttons -->
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <div class="btn-group" role="group">
                                    <button type="submit" class="btn btn-primary" id="add_group_update_button" value="SUBMIT_EXECUTE">{{ i18nForm.details_form_submit_button_create }}</button>
                                    <input type="reset" class="btn btn-default" id="add_group_reset_button" value="{{ i18nForm.button_reset }}" />
                                    <button type="button" class="btn btn-default" id="add_group_close_button" data-dismiss="modal">{{ i18nForm.button_close }}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</div>

<div id="edit_group_container" class="group_container" data-operate="update">
    <!-- Update Group modal -->
    <div class="modal" id="edit_group_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="edit_group_modal_label"></h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" method="post" action="/gmui/groups" name="groupForm">
                        <div id="submit_error" class="form-message text-success text-center"></div>
                        <div class="loader_container">
                            <div class="text-center">
                                <img src="/static/images/ajax-loader.gif" alt="Loading" />
                            </div>
                        </div>
                        <!-- Group Name -->
                        <div class="form-group">
                            <label for="group_name" class="col-sm-2 control-label" id="edit_group_name_label">{{ i18nForm.details_form_group_name_label }}</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" disabled="disabled" id="group_name" name="group-name" tabindex="1" />
                            </div>
                        </div>
                        <!-- Group Description -->
                        <div class="form-group">
                            <label for="edit_group_description" class="col-sm-2 control-label" id="edit_group_description_label">{{ i18nForm.details_form_group_description_label }}</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="edit_group_description" name="group-description" tabindex="2"></textarea>
                            </div>
                        </div>
                        <!-- Buttons -->
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <div class="btn-group action-button-group" role="group">
                                    <button type="submit" class="btn btn-primary" id="edit_group_update_button" value="SUBMIT_EXECUTE">{{ i18nForm.details_form_submit_button_update}}</button>
                                    <input type="reset" class="btn btn-default" id="edit_group_reset_button" value="{{ i18nForm.button_reset }}" />
                                </div>
                                <div class="btn-group action-button-group" role="group">
                                    <button type="submit" class="btn btn-danger group-form-delete" id="edit_group_delete_button" value="DELETE">{{ i18nForm.details_form_submit_button_delete }}</button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default" id="edit_group_close_button" data-dismiss="modal">{{ i18nForm.button_close }}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</div>
<div id="edit_members_container" class="associates" data-association="members">
    <!-- Update Member modal -->
    <div class="modal" id="edit_members_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close_members_modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="group_members_modal_label">{{ i18nForm.details_form_group_members_label }}</h4>
                </div>
                <div class="modal-body">
                    <!-- error messages -->
                    <div class=""></div>
                    <!-- loading image -->
                    <div class="loader_container">
                        <div class="text-center">
                            <img src="/static/images/ajax-loader.gif" alt="Loading" />
                        </div>
                    </div>
                    <!-- Members grid -->
                    <div id="members_grid-container" class="grid-container full-width mrgn-bttm-sm">
                        <div id="members-results-grid-header" class="grid-header">
                            <span class="grid-header-label"></span>
                        </div>
                        <div id="members_grid" class="associate_grid full-width"></div>
                    </div>
                    <form class="form-inline" id="add-members-form" name="add-members-form" action="/gmui/group/" method="post">
                        <!-- members form -->
                        <div class="form-group members-form-group">
                            <input type="hidden" name="assoc-type" />
                            <span class="ui-autocomplete-message text-danger bg-danger"></span>
                            <label for="members-search" class="sr-only" id="members-search_label">{{ i18nForm.details_form_group_search_placeholder_members }}</label>
                            <input type="text" id="members-search" name="assoc-id" class="form-control assoc-search" placeholder="{{ i18nForm.details_form_group_search_placeholder_members }}" size="30" />
                            <button id="add_button_members" type="submit" class="btn btn-primary">{{ i18nForm.details_form_add_members_button }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="edit_admins_container" class="associates" data-association="admins">
    <!-- Update Admin modal -->
    <div class="modal" id="edit_admins_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close_admins_modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="group_admins_modal_label">{{ i18nForm.details_form_group_admins_label }}</h4>
                </div>
                <div class="modal-body">
                    <!-- error messages -->
                    <div class=""></div>
                    <!-- loading image -->
                    <div class="loader_container">
                        <div class="text-center">
                            <img src="/static/images/ajax-loader.gif" alt="Loading" />
                        </div>
                    </div>
                    <!-- admins grid -->
                    <div id="admins_grid-container" class="grid-container" style="margin-bottom: 10px; width: 100%;">
                        <div id="admins-results-grid-header" class="grid-header">
                            <span class="grid-header-label"></span>
                        </div>
                        <div id="admins_grid" class="associate_grid" style="width: 100%;"></div>
                    </div>
                    <form class="form-inline" id="add-admins-form" name="add-admins-form" action="/gmui/group/" method="post">
                        <!-- admins form -->
                        <div class="form-group admin-form-group">
                            <input type="hidden" name="assoc-type" />
                            <span class="ui-autocomplete-message text-danger bg-danger"></span>
                            <label for="admins-search" class="sr-only" id="admins-search_label"></label>
                            <input type="text" id="admins-search" name="assoc-id" class="form-control assoc-search" placeholder="{{ i18nForm.details_form_group_search_placeholder_admins }}" size="30" />
                            <button id="add_button_admins" type="submit" class="btn btn-primary">{{ i18nForm.details_form_add_admins_button }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
