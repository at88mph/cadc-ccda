{%- include variable-core.liquid -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-form=i18n-cadc.labels -%}

<div class="wb-frmvld">
    <form method="post" id="userForm" name="edit_profile" class="col-md-4" action="/access/control/proxy">
        <div class="form-content">
            <div class="form-group">
                <label for="firstName" class="control-label">{{ i18n-form.first_name }}</label>
                <input class="form-control full-width" required="required" name="firstName" id="firstName" data-personal-detail="true" />
            </div>
            <div class="form-group">
                <label for="lastName" class="control-label">{{ i18n-form.last_name }}</label>
                <input class="form-control full-width" required="required" name="lastName" id="lastName" data-personal-detail="true" />
            </div>
            <div class="form-group hide">
                <label for="blank" class="control-label">USER_DETAILS_BLANK</label>
                <input class="form-control" name="blank" id="blank" />
            </div>
            <div class="form-group">
                <label for="email" class="control-label">{{ i18n-form.email }}</label>
                <input class="form-control full-width" type="email" required="required" name="email" id="email" data-personal-detail="true" />
            </div>
            <div class="form-group">
                <label for="institute" class="control-label">{{ i18n-form.institute }}</label>
                <input class="form-control full-width" required="required" name="institute" id="institute" data-personal-detail="true" />
            </div>
        </div>
        <button type="submit" class="btn btn-primary" tabindex="12">{{ i18n-form.update_submit }}</button>
    </form>
    <section class="alert alert-success success-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_success }}</p>
    </section>
    <section class="alert alert-danger failure-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_failure }}</p>
    </section>
    <section class="alert alert-danger bot-error-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_bot_error }}</p>
    </section>
    <section class="alert alert-danger load-error-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_load_error }}</p>
    </section>
    <section class="alert alert-danger user-exists-error-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_user_exists_error }}</p>
    </section>
    <section class="alert alert-danger email-exists-error-message hide">
        <p>{{ i18n-cadc.profile.update_profile_message_email_exists_error }}</p>
    </section>
    <section id="error_message" class="alert alert-danger hide"></section>
</div>
