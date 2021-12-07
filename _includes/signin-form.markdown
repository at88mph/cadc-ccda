{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.cadc[i18nText-lang]['labels'] -%}

<div class="wb-frmvld">
    <div class="form-content">
        <form id="login_form" method="post" class="col-md-4" action="/access/login">
            <input type="hidden" id="redirect_uri" name="redirect_uri" data-role="none">
            <div class="form-group">
                <label for="username" class="control-label">{{ i18n-form.username }}</label>
                <input class="form-control full-width" name="username" id="username" required="required" />
            </div>
            <div class="form-group">
                <label for="password" class="control-label">{{ i18n-form.password }}</label>
                <input class="form-control full-width" type="password" name="password" id="password" required="required" />
            </div>
            {% comment %}
            Hidden inputs used for OIDC login.
            If parameters aren't here, they won't be used for the OIDC login submit.
            {% endcomment %}
            <input type="hidden" id="clientid" name="clientid" data-role="none">
            <input type="hidden" id="state" name="state" data-role="none">
            <input type="hidden" id="claims" name="claims" data-role="none">
            <input type="hidden" id="client" name="client" data-role="none">
            <button type="submit" class="btn btn-primary" tabindex="12">{{ i18n-form.signin_submit }}</button>
            <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
        </form>
    </div>
</div>
