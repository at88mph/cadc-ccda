<div class="wb-frmvld">
    <form name="meeting-form" id="edit-meeting-form" method="post" action="/meetings/meetings" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;.success-message&quot;,&quot;failure&quot;:&quot;.failure-message&quot;,&quot;content&quot;:&quot;.form-content&quot;}">
        <div class="form-content">
            <div class="form-group mrgn-bttm-0">
                <label class="col-sm-4 control-label hide" for="meetingNumber"><span class="field-name">{{ i18n-form.number }}</span></label>
                <div class="col-md-8">
                    <input type="hidden" class="form-control" name="meetingNumber" id="meetingNumber" tabindex="-1" data-wb-json='{"url": "#[meeting]/meetingNumber", "type": "val"}' />
                </div>
            </div>
            {%- include meetings/form.markdown -%}
        </div>
    </form>
    <section class="alert alert-success success-message hide">
        <p>{{ i18n-form.update_message_success }}</p>
    </section>
    <section class="alert alert-danger failure-message hide">
        <p>{{ i18n-form.update_message_failure }}</p>
    </section>
</div>