{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.cadc[i18nText-lang]['labels'] -%}

<div class="mrgn-tp-lg container wb-frmvld">
    <form method="post" class="col-md-4" action="/access/request">
        <div class="form-group">
            <label for="first_name" class="control-label">{{ i18n-form.first_name }}</label>
            <input class="form-control full-width" required="required" name="first_name" id="first_name" />
        </div>
        <div class="form-group">
            <label for="last_name" class="control-label">{{ i18n-form.last_name }}</label>
            <input class="form-control full-width" required="required" name="last_name" id="last_name" />
        </div>
        <div class="form-group">
            <label for="username" class="control-label">{{ i18n-form.username }}</label>
            <input class="form-control full-width" required="required" name="username" id="username" />
        </div>
        <div class="form-group hide">
            <label for="blank" class="control-label">USER_DETAILS_BLANK</label>
            <input class="form-control" name="blank" id="blank" />
        </div>
        <div class="form-group">
            <label for="password" class="control-label">{{ i18n-form.password }}</label>
            <input class="form-control full-width" type="password" required="required" name="password" id="password" />
        </div>
        <div class="form-group">
            <label for="email" class="control-label">{{ i18n-form.email }}</label>
            <input class="form-control full-width" type="email" required="required" name="email" id="email" />
        </div>
        <div class="form-group">
            <label for="institute" class="control-label">{{ i18n-form.institute }}</label>
            <input class="form-control full-width" type="institute" required="required" name="institute" id="institute" />
        </div>
        <button type="submit" class="btn btn-primary" tabindex="12">{{ i18n-form.register_submit }}</button>
        <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
    </form>
</div>
