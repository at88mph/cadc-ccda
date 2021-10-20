{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.meetings[i18nText-lang]['labels'] -%}
    <div class="form-content">
        <div class="form-group">
            <label class="col-sm-4 control-label" for="title"><span class="field-name">{{ i18n-form.title }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <textarea class="form-control full-width" name="title" id="title" rows="3" required="required" tabindex="1" data-json-replace="#[meeting]/title"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="location"><span class="field-name">{{ i18n-form.location }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <textarea class="form-control full-width" name="location" id="location" rows="1" required="required" tabindex="2" data-json-replace="#[meeting]/location"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="start"><span class="field-name">{{ i18n-form.start }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <input type="date" class="form-control" name="start" id="start" required="required" tabindex="3" data-wb-json='{"url": "#[meeting]/start", "type": "val"}' />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="end"><span class="field-name">{{ i18n-form.end }}</span> <strong class="required">({{ i18n-form.required }})</strong></label>
            <div class="col-md-8">
                <input type="date" class="form-control" name="end" id="end" required="required" tabindex="4" data-wb-json='{"url": "#[meeting]/end", "type": "val"}' />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="web1">{{ i18n-form.web }}</label>
            <div class="col-md-8">
                <input type="url" class="form-control full-width" placeholder="https://meeting-rencontre.example.com/" name="web1" id="web1" tabindex="5" data-wb-json='{"url": "#[meeting]/web1", "type": "val"}' />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label" for="web2">{{ i18n-form.web }}</label>
            <div class="col-md-8">
                <input type="url" class="form-control full-width" placeholder="https://other-autre.meeting-rencontre.example.com/" name="web2" id="web2" tabindex="5" data-wb-json='{"url": "#[meeting]/web2", "type": "val"}' />
            </div>
        </div>
        <fieldset>
            <legend>{{ i18n-form.contact_label }}</legend>
            <!-- Contact Name -->
            <div class="form-group">
                <label class="col-sm-4 control-label" for="contact">{{ i18n-form.contact }} <strong class="required">({{ i18n-form.required }})</strong></label>
                <div class="col-md-8">
                    <input type="contact" class="form-control full-width" name="contact" id="contact" required="required" tabindex="6" data-wb-json='{"url": "#[meeting]/contact", "type": "val"}' />
                </div>
            </div>
            <!-- Contact Email -->
            <div class="form-group row">
                <label class="col-sm-4 control-label" for="email">{{ i18n-form.email }} <strong class="required">({{ i18n-form.required }})</strong></label>
                <div class="col-md-8">
                    <input type="email" class="form-control full-width" name="email" id="email" required="required" tabindex="7" data-wb-json='{"url": "#[meeting]/email", "type": "val"}' />
                </div>
            </div>
            <!-- Confirm Contact Email -->
            <div class="form-group row">
                <label class="col-sm-4 control-label" for="confirmEmail">{{ i18n-form.confirmEmail }} <strong class="required">({{ i18n-form.required }})</strong></label>
                <div class="col-md-8">
                    <input type="email" class="form-control full-width" name="confirmEmail" id="confirmEmail" required="required" tabindex="8" data-rule-equalTo="#email" data-wb-json='{"url": "#[meeting]/email", "type": "val"}' />
                </div>
            </div>
            <!-- Contact Address -->
            <div class="form-group">
                <label class="col-sm-4 control-label" for="address">{{ i18n-form.address }}</label>
                <div class="col-md-8">
                    <textarea class="form-control full-width" name="address" id="address" rows="3" tabindex="9" data-json-replace="#[meeting]/address"></textarea>
                </div>
            </div>
            <!-- Contact Phone -->
            <div class="form-group row">
                <label class="col-sm-4 control-label" for="phone">{{ i18n-form.phone }}</label>
                <div class="col-md-8">
                    <input type="tel" class="form-control full-width" name="phone" id="phone" tabindex="10" data-wb-json='{"url": "#[meeting]/phone", "type": "val"}' />
                </div>
            </div>
            <!-- Keywords -->
            <div class="form-group">
                <label class="col-sm-4 control-label" for="keywords">{{ i18n-form.keywords }}</label>
                <div class="col-md-8">
                    <textarea class="form-control full-width" name="keywords" id="keywords" rows="3" tabindex="11" data-json-replace="#[meeting]/keywords"></textarea>
                </div>
            </div>
        </fieldset>
        <button type="submit" class="btn btn-primary" tabindex="12">{{ i18n-form.submit }}</button>
    </div>
