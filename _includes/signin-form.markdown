{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.cadc[i18nText-lang]['labels'] -%}

<form method="post" class="col-md-4" action="/access/login">
    <div class="form-group">
        <label for="username" class="control-label">{{ i18n-form.username }}</label>
        <input class="form-control full-width" name="username" id="username" />
    </div>
    <div class="form-group">
        <label for="password" class="control-label">{{ i18n-form.password }}</label>
        <input class="form-control full-width" type="password" name="password" id="password" />
    </div>
    <button type="submit" class="btn btn-primary" tabindex="12">{{ i18n-form.signin_submit }}</button>
    <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
</form>
