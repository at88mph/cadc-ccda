{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<div class="alert alert-info">
    <p class="text-info">{{ i18n-cadc-labels.reset_password_instructions }}</p>
</div>

<div class="wb-frmvld">
    <div class="form-content col-md-12">
        <form name="resetForm" id="reset_form" method="post" action="#">
            <div class="form-group">
                <label for="emailAddress" id="emailAddressLabel" class="control-label">{{ i18n-cadc-labels.reset_password_email_label }}</label>
                <input class="form-control" type="email" id="emailAddress" name="emailAddress" required="required" tabindex="1" />
            </div>
            <!-- Hidden items that need to be carried to the server. -->
            <input class="form-control" type="hidden" id="loginURI" name="loginURI" tabindex="-1" value="{{ i18n-cadc.signin.url }}" />
            <input class="form-control" type="hidden" id="role" name="role" tabindex="-1" value="cadc" />
            <input class="form-control" type="hidden" id="pageLanguage" name="pageLanguage" tabindex="-1" value="{{ i18nText-lang }}" />
            <!-- End hidden items. -->
            <input type="submit" name="reset_pass" id="reset_pass_button" value="{{ i18n-cadc-labels.reset_password_submit_button_label }}" tabindex="2" class="btn btn-primary"/>
            <div class="span-4 text-danger">
                <div id="errorMessage"></div>
            </div>
        </form>
    </div>
</div>
<div class="clearfix"></div>
<div class="col-md-5 mrgn-tp-sm small">
    <a href="{{ i18n-cadc.register.url }}" class="mrgn-tp-md" tabindex="6" title="{{ i18nText-signOnRegister }}" id="register_cadc">{{ i18nText-signOnRegister }}</a>
</div>