{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.meetings[i18nText-lang]['labels'] -%}

<div class="wb-frmvld">
    <form name="meeting-form" action="/meetings/meetings" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;success-message&quot;,&quot;failure&quot;:&quot;failure-message&quot;,&quot;method&quot;:&quot;PUT&quot;}">
        <div class="form-group">
            <label class="col-sm-4 control-label" for="title"><span class="field-name">{{ i18n-form.title }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <textarea class="form-control full-width" name="title" id="title" rows="3" required="required" tabindex="1"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="location"><span class="field-name">{{ i18n-form.location }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <textarea class="form-control full-width" name="location" id="location" rows="1" required="required" tabindex="2"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="start"><span class="field-name">{{ i18n-form.start }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <input type="date" class="form-control" name="start" id="start" required="required" tabindex="3" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="end"><span class="field-name">{{ i18n-form.end }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <input type="date" class="form-control" name="end" id="end" required="required" tabindex="4" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="web">{{ i18n-form.web }}</label>
            <div class="col-md-8">
                <input type="url" class="form-control full-width" placeholder="https://meetings-rencontres.example.com/" name="web" id="web" tabindex="5" />
            </div>
        </div>
        <fieldset>
            <legend>Contact</legend>
                <!-- Contact Name -->
                <div class="form-group">
                    <label class="col-sm-4 control-label" for="contact">{{ i18n-form.contact }} <strong class="required">({{ i18n-form.required }})</strong></label>
                    <div class="col-md-8">
                        <input type="contact" class="form-control full-width" name="contact" id="contact" required="required" tabindex="6" />
                    </div>
                </div>
                <!-- Contact Email -->
                <div class="form-group row">
                    <label class="col-sm-4 control-label" for="email">{{ i18n-form.email }} <strong class="required">({{ i18n-form.required }})</strong></label>
                    <div class="col-md-8">
                        <input type="email" class="form-control full-width" name="email" id="email" required="required" tabindex="7" />
                    </div>
                </div>
                <!-- Confirm Contact Email -->
                <div class="form-group row">
                    <label class="col-sm-4 control-label" for="confirmEmail">{{ i18n-form.confirmEmail }} <strong class="required">({{ i18n-form.required }})</strong></label>
                    <div class="col-md-8">
                        <input type="email" class="form-control full-width" name="confirmEmail" id="confirmEmail" required="required" tabindex="8" />
                    </div>
                </div>
                <!-- Contact Address -->
                <div class="form-group">
                    <label class="col-sm-4 control-label" for="address">{{ i18n-form.address }}</label>
                    <div class="col-md-8">
                        <textarea class="form-control full-width" name="address" id="address" rows="3" tabindex="9"></textarea>
                    </div>
                </div>
                <!-- Contact Phone -->
                <div class="form-group row">
                    <label class="col-sm-4 control-label" for="phone">{{ i18n-form.phone }}</label>
                    <div class="col-md-8">
                        <input type="tel" class="form-control full-width" name="phone" id="phone" tabindex="10" />
                    </div>
                </div>
                <!-- Keywords -->
                <div class="form-group">
                    <label class="col-sm-4 control-label" for="keywords">{{ i18n-form.keywords }}</label>
                    <div class="col-md-8">
                        <textarea class="form-control full-width" name="keywords" id="keywords" rows="3" tabindex="11"></textarea>
                    </div>
                </div>
        </fieldset>
        <button type="submit" class="btn btn-primary">{{ i18n-form.submit }}</button>        
        <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
        <p class="success-message hide">{{ i18n-form.create_message_success }}</p>
        <p class="failure-message hide">{{ i18n-form.create_message_failure }}</p>
    </form>
</div>
