{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-cadc-labels=i18n-cadc.labels -%}

<div class="wb-frmvld">
    <div class="form-content">
        <form name="newPasswordForm" id="new_password_form" class="wb-postback col-md-5 col-sm-5" action="/access/control/resetPassword" method="POST" data-wb-postback="{&quot;success&quot;:&quot;.success-message&quot;,&quot;failure&quot;:&quot;.failure-message&quot;,&quot;content&quot;:&quot;.form-content&quot;}">
            <div class="form-group">
                <label for="new_password" class="control-label" id="new_password_label">{{ i18n-cadc-labels.new_password }}</label>
                <input type="password" id="new_password"
                        name="password" size="60"
                        data-rule-minlength="8" data-rule-maxlength="30"
                        tabindex="1" class="password_field form-control" required="required" />
            </div>
            <div class="form-group">
                <label for="confirm_new_password" id="confirmPasswordLabel">{{ i18n-cadc-labels.confirm_new_password }}</label>
                <input type="password" id="confirm_new_password"
                        name="confirmPassword" data-rule-minlength="8" data-rule-maxlength="30"
                        data-rule-equalTo="#new_password"
                        class="confirmPass matchingPass password_field form-control"
                        size="60" tabindex="2" required="required" />
            </div>
            <input type="submit" name="submit_new_pass" id="submit_new_pass_button" value="{{ i18n-cadc-labels.submit }}" tabindex="3" class="btn btn-primary" />
            <input type="reset" name="reset_new_pass" id="reset_new_pass_button" value="{{ i18n-cadc-labels.reset }}" tabindex="4" class="btn btn-default pull-right" />
        </form>
    </div>
    <section class="alert alert-success success-message hide">
        <p>{{ i18n-cadc-labels.new_password_success_message }}</p>
    </section>
    <section class="alert alert-danger failure-message hide"></section>
</div>
