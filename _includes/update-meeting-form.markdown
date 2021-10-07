<div class="wb-frmvld">
    <form name="meeting-form" id="edit-meeting-form" method="post" action="/meetings/meetings/update" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;success-message&quot;,&quot;failure&quot;:&quot;failure-message&quot;}">
        <div class="form-group mrgn-bttm-0">
            <label class="col-sm-4 control-label hide" for="meetingNumber"><span class="field-name">{{ i18n-form.number }}</span></label>
            <div class="col-md-8">
                <input type="hidden" class="form-control" name="meetingNumber" id="meetingNumber" tabindex="-1" />
            </div>
        </div>
    {%- include meeting-form.markdown -%}
    </form>
</div>