{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<div class="alert alert-info">
    <p class="text-info">{{ i18n-cadc-labels.reset_password_instructions }}</p>
</div>

<div class="wb-frmvld">
    <div class="form-content col-md-12">
        <form name="resetForm" id="reset_form" method="post" class="wb-postback" action="/access/passwordResetRequest" data-wb-postback="{&quot;success&quot;:&quot;.success-message&quot;,&quot;failure&quot;:&quot;.failure-message&quot;,&quot;content&quot;:&quot;.form-content&quot;}">
            <div class="form-group">
                <label for="emailAddress" id="emailAddressLabel" class="control-label">{{ i18n-cadc-labels.reset_password_email_label }}</label>
                <input class="form-control" type="email" id="emailAddress" name="emailAddress" required="required" size="35" tabindex="1" />
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
    <section class="alert alert-success success-message hide">
        <h3>{{ i18n-cadc-labels.reset_password_success_header }}</h3>
        <p>{{ i18n-cadc-labels.reset_password_success_message }}</p>
    </section>
    <section class="alert alert-danger failure-message hide"></section>
</div>
<div class="clearfix"></div>
<div class="col-md-5 mrgn-tp-sm small">
    <a href="{{ i18n-cadc.register.url }}" class="mrgn-tp-md" tabindex="6" title="{{ i18nText-signOnRegister }}" id="register_cadc">{{ i18nText-signOnRegister }}</a>
</div>
